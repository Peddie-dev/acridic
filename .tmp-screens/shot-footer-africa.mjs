import puppeteer from "puppeteer-core";

const browser = await puppeteer.launch({
  executablePath: "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe",
  headless: "new",
  args: ["--hide-scrollbars", "--disable-gpu"],
});
const page = await browser.newPage();
page.setDefaultTimeout(60000);
await page.setViewport({ width: 1440, height: 900, deviceScaleFactor: 1 });
await page.goto("http://127.0.0.1:3000/", { waitUntil: "networkidle0" });
await page.evaluate(() => document.querySelector("footer")?.scrollIntoView({ block: "start" }));
await new Promise((r) => setTimeout(r, 400));
await page.screenshot({ path: ".tmp-screens/footer-africa-1440.png" });
await browser.close();
console.log("wrote .tmp-screens/footer-africa-1440.png");
