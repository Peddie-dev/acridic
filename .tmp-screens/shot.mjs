import puppeteer from "puppeteer-core";
import path from "path";

const out = process.env.SHOT_OUT;
const browser = await puppeteer.launch({
  executablePath: "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe",
  headless: "new",
  args: ["--hide-scrollbars", "--disable-gpu"],
});
const page = await browser.newPage();
page.setDefaultTimeout(60000);

await page.setViewport({ width: 440, height: 900, deviceScaleFactor: 1 });
await page.goto("http://127.0.0.1:3000/about", { waitUntil: "networkidle0" });
await page.screenshot({ path: path.join(out, "m-hero.png") });

for (const id of [
  "who-we-are",
  "journey",
  "foundation",
  "leadership",
  "research-areas",
  "impact",
  "partners",
]) {
  const el = await page.$(`#${id}`);
  if (el) {
    await el.screenshot({ path: path.join(out, `m-${id}.png`) });
    console.log("ok", id);
  } else {
    console.log("missing", id);
  }
}

await page.setViewport({ width: 1440, height: 900, deviceScaleFactor: 1 });
await page.reload({ waitUntil: "networkidle0" });
await page.screenshot({ path: path.join(out, "d-hero.png") });
const lead = await page.$("#leadership");
if (lead) await lead.screenshot({ path: path.join(out, "d-leadership.png") });
await browser.close();
console.log("done");
