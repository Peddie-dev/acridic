import puppeteer from "puppeteer-core";

const browser = await puppeteer.launch({
  executablePath: "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe",
  headless: "new",
  args: ["--hide-scrollbars"],
});
const page = await browser.newPage();
page.setDefaultTimeout(60000);
await page.setViewport({ width: 440, height: 920, deviceScaleFactor: 2 });
await page.goto("http://127.0.0.1:3000/research", { waitUntil: "networkidle0" });
await page.waitForSelector(".research-hero");

const handle = await page.evaluateHandle(() => {
  const nodes = document.querySelectorAll(".research-hero div");
  for (const node of nodes) {
    if (node.className.includes("lg:hidden") && node.querySelector("img")) {
      return node;
    }
  }
  return null;
});

const el = handle.asElement();
if (el) {
  await el.screenshot({
    path: "C:\\Users\\HomePC\\Desktop\\acridic\\.tmp-screens\\m-research-quote.png",
  });
}
await page.screenshot({
  path: "C:\\Users\\HomePC\\Desktop\\acridic\\.tmp-screens\\m-research-hero-full.png",
  fullPage: false,
});
await browser.close();
console.log("ok");
