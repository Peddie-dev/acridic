import puppeteer from "puppeteer-core";
import path from "path";

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
  await page.goto("http://127.0.0.1:3000/about", { waitUntil: "networkidle0" });
  await new Promise((r) => setTimeout(r, 800));
  const impact = await page.$("#impact");
  if (impact) await impact.screenshot({ path: path.join(out, `map-${width}-impact.png`) });
  const partners = await page.$("#partners");
  if (partners) await partners.screenshot({ path: path.join(out, `map-${width}-partners.png`) });
  const info = await page.evaluate(() => {
    const imgs = [...document.querySelectorAll("#impact img, #partners img")]
      .map((img) => ({ src: img.getAttribute("src"), w: Math.round(img.getBoundingClientRect().width), section: img.closest("section")?.id }));
    const logos = document.querySelectorAll("#partners").length;
    const placeholderText = [...document.querySelectorAll("#impact, #partners")].map((s) => ({
      id: s.id,
      imageLabel: [...s.querySelectorAll("span")].some((el) => el.textContent === "IMAGE"),
      logoLabel: [...s.querySelectorAll("span")].filter((el) => el.textContent === "LOGO").length,
    }));
    return { imgs, placeholderText };
  });
  console.log(width, JSON.stringify(info));
}

await shot(1440);
await shot(1280);
await shot(440);
await browser.close();
