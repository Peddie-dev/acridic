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

async function measure(width) {
  await page.setViewport({ width, height: 1000, deviceScaleFactor: 1 });
  await page.goto("http://127.0.0.1:3000/about", { waitUntil: "networkidle0" });
  await new Promise((r) => setTimeout(r, 600));

  const research = await page.$("#research-areas");
  if (research) await research.screenshot({ path: path.join(out, `cta-${width}-section.png`) });

  const data = await page.evaluate(() => {
    const section = document.querySelector("#research-areas");
    const band = section?.querySelector(":scope > div > div:last-child");
    if (!band) return { error: "no band" };
    const texts = [...band.querySelectorAll("h3, p, a")].map((el) => el.textContent?.trim()).filter(Boolean);
    const stay = [...band.querySelectorAll("p")].find((p) => p.textContent?.includes("Stay Updated"));
    const search = band.querySelector("svg.lucide-search, svg.lucide-Search");
    const fileOnBadge = band.querySelector("img")?.parentElement?.querySelector("svg.lucide-file-text");
    const br = band.getBoundingClientRect();
    const sr = stay?.getBoundingClientRect();
    return {
      texts,
      hasStay: Boolean(stay),
      stayRight: sr ? Math.round(sr.right) : null,
      bandRight: Math.round(br.right),
      stayClipped: sr ? sr.right > br.right - 1 || sr.width < 40 : true,
      bandOverflow: getComputedStyle(band).overflow,
      hasSearch: Boolean(search),
    };
  });
  console.log(width, JSON.stringify(data, null, 0));

  const impact = await page.$("#impact");
  if (impact) await impact.screenshot({ path: path.join(out, `impact-${width}.png`) });
}

await measure(1440);
await measure(1280);
await measure(440);
await browser.close();
console.log("done");
