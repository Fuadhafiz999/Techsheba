/** Visual checks: broken images, fonts, theme colors. */
import puppeteer from "puppeteer-core";

const BASE = "http://localhost:3000";
const CHROME = "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe";
const routes = ["/", "/services", "/services/website-design-development", "/portfolio", "/portfolio/lumiere", "/about", "/contact", "/blog", "/blog/core-web-vitals-guide", "/blog/website-cost-bangladesh"];

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
const results = [];

function report(title, ok, detail = "") {
  results.push({ ok, title });
  console.log(`${ok ? "PASS" : "FAIL"}  ${title}${detail ? " — " + detail : ""}`);
}

const browser = await puppeteer.launch({
  executablePath: CHROME,
  headless: "new",
  args: ["--no-sandbox", "--disable-dev-shm-usage"],
});
const page = await browser.newPage();
await page.setViewport({ width: 1440, height: 900 });

for (const path of routes) {
  await page.goto(BASE + path, { waitUntil: "networkidle0", timeout: 45000 });
  await sleep(800);
  // Scroll to bottom so lazy-loaded images get fetched, then re-check.
  await page.evaluate(async () => {
    for (let y = 0; y <= document.body.scrollHeight; y += 800) {
      window.scrollTo(0, y);
      await new Promise((r) => setTimeout(r, 60));
    }
    window.scrollTo(0, document.body.scrollHeight);
  });
  await sleep(2500);
  const broken = await page.evaluate(() =>
    [...document.images]
      .filter((img) => !img.complete || img.naturalWidth === 0)
      .map((img) => img.getAttribute("src") || img.alt)
  );
  if (broken.length) {
    report(`${path}: all images load`, false, broken.slice(0, 3).join(", "));
  } else {
    report(`${path}: all images load (${await page.evaluate(() => document.images.length)})`, true);
  }
}

// Fonts on home
await page.goto(BASE + "/", { waitUntil: "networkidle0" });
await sleep(600);
const fontsReady = await page.evaluate(async () => {
  await document.fonts.ready;
  return {
    inter: document.fonts.check('16px "Inter"'),
    grotesk: document.fonts.check('16px "Space Grotesk"'),
  };
});
report("fonts: Inter loaded", fontsReady.inter);
report("fonts: Space Grotesk loaded", fontsReady.grotesk);

const h1Info = await page.evaluate(() => {
  const h1 = document.querySelector("h1");
  const cs = getComputedStyle(h1);
  return { family: cs.fontFamily.split(",")[0], size: cs.fontSize };
});
report("home: h1 uses display font", /Space Grotesk/i.test(h1Info.family), `${h1Info.family} @ ${h1Info.size}`);

const theme = await page.evaluate(() => {
  const body = getComputedStyle(document.body);
  const html = document.documentElement;
  return { bg: body.backgroundColor, fg: body.color, darkClass: html.classList.contains("dark") };
});
report(`theme: dark class on <html>`, theme.darkClass);
report(`theme: dark background (#06070C)`, theme.bg === "rgb(6, 7, 12)", theme.bg);
report(`theme: light foreground`, theme.fg === "rgb(242, 243, 247)", theme.fg);

// Hero CTA visibility
const cta = await page.evaluate(() => {
  const el = [...document.querySelectorAll("a")].find((a) => a.textContent.includes("Get a free proposal"));
  if (!el) return null;
  const r = el.getBoundingClientRect();
  const cs = getComputedStyle(el);
  return { visible: r.width > 0 && r.height > 0, height: r.height, bg: cs.backgroundColor };
});
report("home: hero CTA visible and sized", !!cta && cta.visible && cta.height >= 44, cta ? `${Math.round(cta.height)}px, ${cta.bg}` : "not found");

// Portfolio card hover video: check video element present on a card
await page.goto(BASE + "/portfolio", { waitUntil: "networkidle0" });
await sleep(600);
const videoCards = await page.evaluate(
  () => document.querySelectorAll("video[preload='none']").length
);
report(`portfolio: hover-preview videos present (${videoCards})`, videoCards >= 3);

await browser.close();
const failed = results.filter((r) => !r.ok).length;
console.log(`\n==== ${results.length - failed}/${results.length} visual checks passed ====`);
process.exit(failed > 0 ? 1 : 0);
