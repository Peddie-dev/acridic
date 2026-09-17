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

async function shot(width, prefix) {
  await page.setViewport({ width, height: 900, deviceScaleFactor: 1 });
  await page.goto("http://127.0.0.1:3000/about#research-areas", { waitUntil: "networkidle0" });
  await new Promise((r) => setTimeout(r, 800));

  const research = await page.$("#research-areas");
  if (research) {
    await research.screenshot({ path: path.join(out, `${prefix}-research-areas.png`) });
    const band = await research.$(":scope > div > div:last-child");
    if (band) await band.screenshot({ path: path.join(out, `${prefix}-cta-band.png`) });
  }

  const impact = await page.$("#impact");
  if (impact) await impact.screenshot({ path: path.join(out, `${prefix}-impact.png`) });

  const clip = await page.evaluate(() => {
    const band = document.querySelector("#research-areas > div > div:last-child");
    if (!band) return null;
    const stay = [...band.querySelectorAll("p")].find((p) => p.textContent?.includes("Stay Updated"));
    if (!stay) return { foundStay: false };
    const br = band.getBoundingClientRect();
    const sr = stay.getBoundingClientRect();
    return {
      foundStay: true,
      stayText: stay.textContent,
      stayRight: Math.round(sr.right),
      bandRight: Math.round(br.right),
      clipped: sr.right > br.right - 2,
      overflow: getComputedStyle(band).overflow,
    };
  });
  console.log(prefix, "cta", JSON.stringify(clip));

  const stats = await page.evaluate(() => {
    const section = document.querySelector("#impact");
    if (!section) return null;
    const labels = [...section.querySelectorAll("p")].map((p) => p.textContent?.trim()).filter(Boolean);
    return labels.slice(0, 20);
  });
  console.log(prefix, "impact-labels-sample", stats);
}

await shot(1440, "fix-1440");
await shot(1280, "fix-1280");
await shot(440, "fix-440");
await browser.close();
console.log("done");
