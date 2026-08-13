/** Detect text clipping: elements whose scrollWidth exceeds clientWidth. */
import puppeteer from "puppeteer-core";

const BASE = "http://localhost:3000";
const CHROME = "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe";
const routes = ["/", "/services", "/services/web-development", "/portfolio", "/portfolio/lumiere", "/about", "/contact"];
const viewports = [
  { name: "desktop", width: 1440, height: 900 },
  { name: "mobile", width: 390, height: 844 },
];

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
const browser = await puppeteer.launch({
  executablePath: CHROME,
  headless: "new",
  args: ["--no-sandbox", "--disable-dev-shm-usage"],
});

let problems = 0;
for (const vp of viewports) {
  const page = await browser.newPage();
  await page.setViewport(vp);
  for (const path of routes) {
    await page.goto(BASE + path, { waitUntil: "networkidle0", timeout: 45000 });
    await sleep(500);
    const hits = await page.evaluate(() => {
      const out = [];
      const doc = document.documentElement;
      if (doc.scrollWidth > doc.clientWidth + 1) {
        out.push(`<html> scrollWidth ${doc.scrollWidth} > clientWidth ${doc.clientWidth}`);
      }
      for (const el of document.querySelectorAll("p, h1, h2, h3, a, span, li, dt, dd, button, input, select, textarea")) {
        if (!el.offsetParent) continue; // hidden
        const cs = getComputedStyle(el);
        if (cs.position === "absolute" || cs.position === "fixed") continue;
        const s = el.scrollWidth;
        const c = el.clientWidth;
        if (s > c + 2) {
          const text = (el.textContent || "").trim().slice(0, 60);
          const cls = (el.className || "").toString().slice(0, 80);
          out.push(`<${el.tagName.toLowerCase()}> "${text}" ${s}px > ${c}px [class: ${cls}]`);
        }
      }
      return out.slice(0, 8);
    });
    if (hits.length) {
      problems += hits.length;
      console.log(`[${vp.name}] ${path || "/"}`);
      for (const h of hits) console.log(`   ${h}`);
    }
  }
  await page.close();
}

await browser.close();
console.log(problems === 0 ? "\n==== no text overflow found ====" : `\n==== ${problems} overflow issues ====`);
process.exit(problems ? 1 : 0);
