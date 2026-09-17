import puppeteer from "puppeteer-core";
import path from "path";
import { fileURLToPath } from "url";

const out = path.dirname(fileURLToPath(import.meta.url));
const browser = await puppeteer.launch({
  executablePath: "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe",
  headless: "new",
  args: ["--hide-scrollbars", "--disable-gpu"],
});
const page = await browser.newPage();
page.setDefaultTimeout(60000);

async function goto(width, height) {
  await page.setViewport({ width, height, deviceScaleFactor: 1 });
  await page.goto("http://127.0.0.1:3000/research", { waitUntil: "networkidle0" });
  await new Promise((r) => setTimeout(r, 350));
}

await goto(1440, 900);
await page.screenshot({ path: path.join(out, "vh-hero-1440.png") });

for (const id of ["approach", "methodology", "impact", "principles"]) {
  const el = await page.$(`#${id}`);
  if (el) await el.screenshot({ path: path.join(out, `vh-d-${id}.png`) });
}

await goto(1280, 800);
await page.screenshot({ path: path.join(out, "vh-hero-1280.png") });

await goto(440, 920);
await page.screenshot({ path: path.join(out, "vh-hero-440.png") });
for (const id of ["approach", "methodology", "impact", "principles"]) {
  const el = await page.$(`#${id}`);
  if (el) await el.screenshot({ path: path.join(out, `vh-m-${id}.png`) });
}

await browser.close();
console.log("done");
