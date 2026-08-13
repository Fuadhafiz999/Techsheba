/**
 * Headless browser check for the Techsheba site.
 * Visits every route, captures console errors, checks horizontal overflow
 * at desktop + mobile sizes, and exercises key interactions.
 * Run: node scripts/check.mjs
 */
import puppeteer from "puppeteer-core";

const BASE = "http://localhost:3000";
const CHROME = "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe";

const routes = [
  "/",
  "/services",
  "/services/website-design-development",
  "/services/search-engine-optimization",
  "/portfolio",
  "/portfolio/lumiere",
  "/portfolio/finsolve",
  "/about",
  "/contact",
  "/blog",
  "/blog/core-web-vitals-guide",
  "/blog/website-cost-bangladesh",
  "/does-not-exist",
];

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

const results = [];
const consoleErrors = [];

function report(title, ok, detail = "") {
  results.push({ ok, title, detail });
  console.log(`${ok ? "PASS" : "FAIL"}  ${title}${detail ? " — " + detail : ""}`);
}

async function checkPage(page, path, label, viewport) {
  await page.setViewport(viewport);
  const errors = [];
  const onConsole = (msg) => {
    if (msg.type() === "error") errors.push(`console: ${msg.text()}`);
  };
  const onPageError = (err) => errors.push(`pageerror: ${err.message}`);
  page.on("console", onConsole);
  page.on("pageerror", onPageError);

  await page.goto(BASE + path, { waitUntil: "networkidle0", timeout: 45000 });
  await sleep(600); // let entrance animations settle

  // 1. HTTP-ish sanity: page rendered?
  const rendered = await page.evaluate(
    () => document.querySelector("main") !== null
  );
  report(`${label}: renders main`, rendered);

  // 2. Horizontal overflow (layout bug check)
  const overflow = await page.evaluate(() => {
    const doc = document.documentElement;
    return { sw: doc.scrollWidth, cw: doc.clientWidth };
  });
  report(
    `${label}: no horizontal overflow (${overflow.sw}px vs ${overflow.cw}px)`,
    overflow.sw <= overflow.cw + 1,
    overflow.sw > overflow.cw + 1 ? `${overflow.sw}px > ${overflow.cw}px` : ""
  );

  // 3. Lenis active
  if (path === "/") {
    const lenisOk = await page.evaluate(() =>
      document.documentElement.classList.contains("lenis")
    );
    report("home: Lenis smooth scroll active", lenisOk);
  }

  page.off("console", onConsole);
  page.off("pageerror", onPageError);
  return errors;
}

async function run() {
  const browser = await puppeteer.launch({
    executablePath: CHROME,
    headless: "new",
    args: ["--no-sandbox", "--disable-dev-shm-usage", "--window-size=1440,900"],
  });

  const desktop = { width: 1440, height: 900, isMobile: false, hasTouch: false };
  const mobile = { width: 390, height: 844, isMobile: true, hasTouch: true };

  const page = await browser.newPage();

  // --- Page-level checks (desktop) ---
  for (const path of routes) {
    const label = path === "/" ? "home" : path.replace("/", "");
    const errs = await checkPage(page, path, label, desktop);
    for (const e of errs) consoleErrors.push(`${label}: ${e}`);
  }

  // --- Mobile overflow on every route ---
  for (const path of ["/", "/services", "/portfolio", "/contact", "/blog"]) {
    const label = `mobile ${path === "/" ? "home" : path}`;
    const errs = await checkPage(page, path, label, mobile);
    for (const e of errs) consoleErrors.push(`${label}: ${e}`);
  }

  // --- Interaction: showreel modal on home ---
  await page.setViewport(desktop);
  await page.goto(BASE + "/", { waitUntil: "networkidle0" });
  await sleep(500);
  await page.click('button[aria-label="Play showreel"]');
  await sleep(900);
  const dialogVisible = await page.evaluate(() => {
    const dlg = document.querySelector('[data-slot="dialog-content"]');
    return dlg ? getComputedStyle(dlg).display !== "none" : false;
  });
  report("home: showreel modal opens with video", dialogVisible);
  await page.keyboard.press("Escape");
  await sleep(400);
  const dialogClosed = await page.evaluate(
    () => !document.querySelector('[data-slot="dialog-content"]')
  );
  report("home: showreel modal closes on Escape", dialogClosed);

  // --- Interaction: mobile menu ---
  await page.setViewport(mobile);
  await page.goto(BASE + "/", { waitUntil: "networkidle0" });
  await sleep(400);
  await page.click('button[aria-label="Open menu"]');
  await sleep(500);
  const menuOpen = await page.evaluate(() => {
    const links = document.querySelectorAll('nav[aria-label="Mobile"] a');
    return links.length >= 4;
  });
  report("home: mobile menu opens with nav links", menuOpen);
  await page.click('nav[aria-label="Mobile"] a[href="/about"]');
  await sleep(900);
  const navigated = page.url().includes("/about");
  report("home: mobile menu link navigates", navigated);

  // --- Interaction: portfolio filters ---
  await page.setViewport(desktop);
  await page.goto(BASE + "/portfolio", { waitUntil: "networkidle0" });
  await sleep(500);
  const cardsBefore = await page.evaluate(
    () => document.querySelectorAll("a[href^='/portfolio/']").length
  );
  await page.click('button[role="tab"]:nth-of-type(2)'); // "Web"
  await sleep(700);
  const cardsAfter = await page.evaluate(
    () => document.querySelectorAll("a[href^='/portfolio/']").length
  );
  report(
    `portfolio: filter reduces cards (${cardsBefore} → ${cardsAfter})`,
    cardsAfter < cardsBefore && cardsAfter > 0
  );

  // --- Interaction: blog filter ---
  await page.setViewport(desktop);
  await page.goto(BASE + "/blog", { waitUntil: "networkidle0" });
  await sleep(500);
  const postsBefore = await page.evaluate(
    () => document.querySelectorAll("a[href^='/blog/']").length
  );
  await page.click('button[role="tab"]:nth-of-type(4)'); // "Mobile"
  await sleep(700);
  const postsAfter = await page.evaluate(
    () => document.querySelectorAll("a[href^='/blog/']").length
  );
  report(
    `blog: filter reduces posts (${postsBefore} → ${postsAfter})`,
    postsAfter < postsBefore && postsAfter > 0
  );

  // --- Interaction: article body renders structured content ---
  await page.goto(BASE + "/blog/core-web-vitals-guide", { waitUntil: "networkidle0" });
  await sleep(500);
  const article = await page.evaluate(() => {
    const h2s = document.querySelectorAll("article h2").length;
    const lis = document.querySelectorAll("article li").length;
    const jsonLd = document.querySelector('script[type="application/ld+json"]');
    return { h2s, lis, hasJsonLd: !!jsonLd };
  });
  report(
    `article: structured content (${article.h2s} h2, ${article.lis} list items, JSON-LD: ${article.hasJsonLd})`,
    article.h2s >= 3 && article.lis >= 3 && article.hasJsonLd
  );

  // --- Interaction: contact form validation ---
  await page.goto(BASE + "/contact", { waitUntil: "networkidle0" });
  await sleep(500);
  await page.click('button[type="submit"]');
  await sleep(500);
  const errCount = await page.evaluate(
    () => document.querySelectorAll("p.text-destructive").length
  );
  report(`contact: form shows validation errors (${errCount})`, errCount >= 3);

  // Fill form and submit → should open WhatsApp + success panel
  await page.type("#name", "Test User");
  await page.type("#email", "test@example.com");
  await page.select("#service", "Web Development");
  await page.select("#budget", "$1,000 – $5,000");
  await page.type("#message", "I need a new marketing website for my business.");
  await page.click('button[type="submit"]');
  await sleep(1200);
  const success = await page.evaluate(() =>
    document.body.innerText.includes("Message ready")
  );
  report("contact: valid submit shows success state", success);

  // --- Console errors summary ---
  const uniq = [...new Set(consoleErrors)];
  if (uniq.length === 0) {
    report("console: no errors across all checks", true);
  } else {
    for (const e of uniq) report(`console error: ${e}`, false);
  }

  await browser.close();

  const failed = results.filter((r) => !r.ok).length;
  console.log(`\n==== ${results.length - failed}/${results.length} checks passed ====`);
  process.exit(failed > 0 ? 1 : 0);
}

run().catch((err) => {
  console.error("Check crashed:", err);
  process.exit(2);
});
