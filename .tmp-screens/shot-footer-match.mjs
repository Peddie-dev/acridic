import puppeteer from "puppeteer-core";

const browser = await puppeteer.launch({
  executablePath: "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe",
  headless: "new",
  args: ["--hide-scrollbars", "--disable-gpu"],
});

async function shot(width, name) {
  const page = await browser.newPage();
  page.setDefaultTimeout(60000);
  await page.setViewport({ width, height: 900, deviceScaleFactor: 1 });
  await page.goto("http://127.0.0.1:3000/", { waitUntil: "networkidle0" });
  await page.evaluate(async () => {
    document.querySelector("footer")?.scrollIntoView({ block: "start" });
    await new Promise((r) => setTimeout(r, 400));
  });
  const footer = await page.$("footer");
  await footer.screenshot({ path: `.tmp-screens/${name}.png` });
  const box = await footer.boundingBox();
  console.log(name, "footer", Math.round(box.width), "x", Math.round(box.height));
  await page.close();
}

await shot(1440, "footer-live-1440");
await shot(1280, "footer-live-1280");
await browser.close();
console.log("done");
