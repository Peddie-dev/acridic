import puppeteer from "puppeteer-core";
import path from "path";
import fs from "fs";

const out = "C:\\Users\\HomePC\\Desktop\\acridic\\.tmp-screens";
const browser = await puppeteer.launch({
  executablePath: "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe",
  headless: "new",
  args: ["--hide-scrollbars", "--disable-gpu"],
});
const page = await browser.newPage();
page.setDefaultTimeout(60000);

async function shot(width) {
  await page.setViewport({ width, height: 900, deviceScaleFactor: 1 });
  await page.goto("http://127.0.0.1:3000/about#research-areas", { waitUntil: "networkidle0" });
  await page.waitForSelector("#research-areas img");
  await new Promise((r) => setTimeout(r, 800));
  const band = await page.$("#research-areas > div > div:last-child");
  if (band) await band.screenshot({ path: path.join(out, `cta-band-${width}.png`) });
  const box = await page.evaluate(() => {
    const band = document.querySelector("#research-areas > div > div:last-child");
    const visStay = [...band.querySelectorAll("p")].filter(
      (p) => p.textContent?.includes("Stay Updated") && p.getClientRects().length && p.getClientRects()[0].width > 0
    )[0];
    const img = band.querySelector("img");
    const ir = img?.getBoundingClientRect();
    const sr = visStay?.getBoundingClientRect();
    const br = band.getBoundingClientRect();
    return {
      imgW: ir ? Math.round(ir.width) : 0,
      imgH: ir ? Math.round(ir.height) : 0,
      stayW: sr ? Math.round(sr.width) : 0,
      stayRight: sr ? Math.round(sr.right) : 0,
      bandRight: Math.round(br.right),
      clipped: sr ? sr.right > br.right + 1 : true,
    };
  });
  console.log(width, box);
}

await shot(1440);
await shot(1280);
await browser.close();
