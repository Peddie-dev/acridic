import puppeteer from "puppeteer-core";

const browser = await puppeteer.launch({
  executablePath: "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe",
  headless: "new",
  args: ["--hide-scrollbars"],
});
const page = await browser.newPage();
page.setDefaultTimeout(60000);
const out = "C:\\Users\\HomePC\\Desktop\\acridic\\.tmp-screens";

await page.setViewport({ width: 1440, height: 900, deviceScaleFactor: 1 });
await page.goto("http://127.0.0.1:3000/research/areas", { waitUntil: "networkidle0" });
await page.evaluate(() => document.fonts.ready);
await page.screenshot({ path: `${out}\\ra-d-hero.png` });

await page.setViewport({ width: 1280, height: 800, deviceScaleFactor: 1 });
await page.reload({ waitUntil: "networkidle0" });
await page.evaluate(() => document.fonts.ready);
await page.screenshot({ path: `${out}\\ra-1280-hero.png` });

await page.setViewport({ width: 440, height: 900, deviceScaleFactor: 1 });
await page.reload({ waitUntil: "networkidle0" });
await page.evaluate(() => document.fonts.ready);
await page.screenshot({ path: `${out}\\ra-m-hero.png` });

await browser.close();
console.log("ok");
