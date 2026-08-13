/** Theme toggle verification: system-follow default, persistence, both themes. */
import puppeteer from "puppeteer-core";

const BASE = "http://localhost:3000";
const CHROME = "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe";
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
const results = [];
const report = (t, ok, d = "") => {
  results.push(ok);
  console.log(`${ok ? "PASS" : "FAIL"}  ${t}${d ? " — " + d : ""}`);
};

const browser = await puppeteer.launch({
  executablePath: CHROME,
  headless: "new",
  args: ["--no-sandbox", "--disable-dev-shm-usage", "--force-color-profile=srgb"],
});

// 1. System dark (no saved pref) → .dark applied pre-paint
let page = await browser.newPage();
await page.setViewport({ width: 1280, height: 900 });
await page.emulateMediaFeatures([{ name: "prefers-color-scheme", value: "dark" }]);
await page.goto(BASE + "/", { waitUntil: "domcontentloaded" });
await sleep(400);
let isDark = await page.evaluate(() => document.documentElement.classList.contains("dark"));
report("system dark → dark theme applied", isDark);
let bg = await page.evaluate(() => getComputedStyle(document.body).backgroundColor);
report("dark theme background", bg === "rgb(6, 7, 12)", bg);

// 2. Toggle to light
await page.click('button[title="Switch to light mode"]');
await sleep(400);
isDark = await page.evaluate(() => document.documentElement.classList.contains("dark"));
bg = await page.evaluate(() => getComputedStyle(document.body).backgroundColor);
report("toggle → light theme", !isDark && bg === "rgb(246, 247, 249)", bg);

// 3. Persistence: reload with system dark, saved light wins
await page.reload({ waitUntil: "domcontentloaded" });
await sleep(400);
isDark = await page.evaluate(() => document.documentElement.classList.contains("dark"));
bg = await page.evaluate(() => getComputedStyle(document.body).backgroundColor);
report("saved light persists across reload", !isDark && bg === "rgb(246, 247, 249)", bg);

// 4. System light (no saved pref) → light
page = await browser.newPage();
await page.setViewport({ width: 1280, height: 900 });
await page.emulateMediaFeatures([{ name: "prefers-color-scheme", value: "light" }]);
await page.goto(BASE + "/", { waitUntil: "domcontentloaded" });
await sleep(400);
isDark = await page.evaluate(() => document.documentElement.classList.contains("dark"));
report("system light → light theme applied", !isDark);

// 5. Light theme: no overflow + gradient text readable on key pages
for (const path of ["/", "/services", "/portfolio", "/contact", "/blog"]) {
  await page.goto(BASE + path, { waitUntil: "networkidle0" });
  await sleep(500);
  const overflow = await page.evaluate(() => {
    const d = document.documentElement;
    return d.scrollWidth > d.clientWidth + 1;
  });
  report(`light ${path || "/"}: no horizontal overflow`, !overflow);
}

// 6. Gradient text contrast in light mode (should be dark violet → cyan stops)
await page.goto(BASE + "/", { waitUntil: "networkidle0" });
await sleep(500);
const grad = await page.evaluate(() => {
  const el = document.querySelector(".text-gradient");
  if (!el) return null;
  return getComputedStyle(el).backgroundImage;
});
report("light theme: gradient text uses dark stops", /5b3fe0|0e7490/i.test(grad || ""), (grad || "").slice(0, 80));

// 7. Toggle button exists in navbar
const toggleCount = await page.evaluate(
  () => document.querySelectorAll('button[title*="mode"]').length
);
report(`theme toggle present in UI (${toggleCount})`, toggleCount >= 1);

await browser.close();
const failed = results.filter((r) => !r).length;
console.log(`\n==== ${results.length - failed}/${results.length} theme checks passed ====`);
process.exit(failed ? 1 : 0);
