/** Capture screenshots of key routes for visual review. */
import { mkdirSync } from "node:fs";
import puppeteer from "puppeteer-core";

const BASE = "http://localhost:3000";
const CHROME = "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe";
const OUT = "screenshots";
mkdirSync(OUT, { recursive: true });

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
const browser = await puppeteer.launch({
  executablePath: CHROME,
  headless: "new",
  args: ["--no-sandbox", "--disable-dev-shm-usage"],
});

const shots = [
  { path: "/", name: "home-desktop", w: 1440, h: 900, full: true },
  { path: "/services", name: "services-desktop", w: 1440, h: 900, full: true },
  { path: "/portfolio", name: "portfolio-desktop", w: 1440, h: 900, full: true },
  { path: "/about", name: "about-desktop", w: 1440, h: 900, full: true },
  { path: "/contact", name: "contact-desktop", w: 1440, h: 900, full: true },
  { path: "/", name: "home-mobile", w: 390, h: 844, full: false },
  { path: "/portfolio/lumiere", name: "case-desktop", w: 1440, h: 900, full: true },
  { path: "/blog", name: "blog-desktop", w: 1440, h: 900, full: true },
  { path: "/blog/core-web-vitals-guide", name: "article-desktop", w: 1440, h: 900, full: true },
  { path: "/", name: "home-light", w: 1440, h: 900, full: true, light: true },
  { path: "/services", name: "services-light", w: 1440, h: 900, full: true, light: true },
];

for (const shot of shots) {
  const page = await browser.newPage();
  await page.setViewport({ width: shot.w, height: shot.h });
  if (shot.light) {
    await page.emulateMediaFeatures([{ name: "prefers-color-scheme", value: "light" }]);
  }
  await page.goto(BASE + shot.path, { waitUntil: "networkidle0", timeout: 45000 });
  await sleep(1200);
  await page.screenshot({
    path: `${OUT}/${shot.name}.png`,
    fullPage: shot.full,
  });
  console.log(`saved ${OUT}/${shot.name}.png`);
  await page.close();
}

await browser.close();
