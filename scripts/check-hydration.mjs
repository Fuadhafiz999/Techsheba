/** Hydration check: capture console errors on every route under BOTH system themes. */
import puppeteer from "puppeteer-core";

const BASE = "http://localhost:3000";
const CHROME = "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe";
const routes = ["/", "/services", "/portfolio", "/about", "/blog", "/contact", "/portfolio/lumiere", "/blog/core-web-vitals-guide"];
const themes = ["light", "dark"];

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
const browser = await puppeteer.launch({
  executablePath: CHROME,
  headless: "new",
  args: ["--no-sandbox", "--disable-dev-shm-usage"],
});

let failures = 0;
for (const pref of themes) {
  const page = await browser.newPage();
  await page.setViewport({ width: 1280, height: 900 });
  await page.emulateMediaFeatures([{ name: "prefers-color-scheme", value: pref }]);

  for (const path of routes) {
    const errors = [];
    const onErr = (msg) => {
      if (msg.type() === "error") errors.push(msg.text().slice(0, 200));
    };
    page.on("console", onErr);
    page.on("pageerror", (e) => errors.push(e.message.slice(0, 200)));
    await page.goto(BASE + path, { waitUntil: "networkidle0", timeout: 45000 });
    await sleep(600);
    page.off("console", onErr);

    // Ignore network/resource errors; we care about React/hydration/runtime errors.
    const real = errors.filter(
      (e) => !/Failed to load resource/i.test(e) && !/net::/i.test(e)
    );
    if (real.length) {
      failures += real.length;
      console.log(`FAIL [${pref}] ${path}:`);
      for (const e of real) console.log("   ", e);
    } else {
      console.log(`PASS [${pref}] ${path}`);
    }
  }
  await page.close();
}

await browser.close();
console.log(failures ? `\n==== ${failures} console errors found ====` : "\n==== no hydration/console errors under either theme ====");
process.exit(failures ? 1 : 0);
