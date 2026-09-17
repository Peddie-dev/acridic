import puppeteer from "puppeteer-core";
import path from "path";
import fs from "fs";

const out = "C:\\Users\\HomePC\\Desktop\\acridic\\.tmp-screens";
fs.mkdirSync(out, { recursive: true });

const browser = await puppeteer.launch({
  executablePath: "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe",
  headless: "new",
  args: ["--hide-scrollbars", "--disable-gpu"],
});
const page = await browser.newPage();
page.setDefaultTimeout(60000);

const ids = [
  "who-we-are",
  "journey",
  "foundation",
  "leadership",
  "research-areas",
  "impact",
  "partners",
];

async function shot(width, prefix) {
  await page.setViewport({ width, height: 900, deviceScaleFactor: 1 });
  await page.goto("http://127.0.0.1:3000/about", { waitUntil: "networkidle0" });
  await new Promise((r) => setTimeout(r, 700));
  await page.evaluate(() => window.scrollTo(0, 0));
  await new Promise((r) => setTimeout(r, 200));
  await page.screenshot({ path: path.join(out, `${prefix}-hero.png`) });
  for (const id of ids) {
    const el = await page.$(`#${id}`);
    if (el) {
      await el.screenshot({ path: path.join(out, `${prefix}-${id}.png`) });
      console.log("ok", prefix, id);
    } else {
      console.log("missing", prefix, id);
    }
  }
  if (width < 768) {
    await page.evaluate(() => {
      document.querySelectorAll("#leadership .no-scrollbar").forEach((row) => {
        row.scrollLeft = 80;
      });
    });
    await new Promise((r) => setTimeout(r, 200));
    const lead = await page.$("#leadership");
    if (lead) await lead.screenshot({ path: path.join(out, `${prefix}-leadership-peek.png`) });
  }
}

await shot(1440, "rest-1440");
await shot(1280, "rest-1280");
await shot(440, "rest-440");
await browser.close();
console.log("done");
