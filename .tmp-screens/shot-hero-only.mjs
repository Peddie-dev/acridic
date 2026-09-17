import puppeteer from "puppeteer-core";

const browser = await puppeteer.launch({
  executablePath: "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe",
  headless: "new",
  args: ["--hide-scrollbars"],
});
const page = await browser.newPage();
page.setDefaultTimeout(60000);
await page.setCacheEnabled(false);
const out = "C:\\Users\\HomePC\\Desktop\\acridic\\.tmp-screens";

await page.setViewport({ width: 1440, height: 900, deviceScaleFactor: 1 });
await page.goto("http://127.0.0.1:3000/research/areas?hero=1", { waitUntil: "networkidle0" });
await page.screenshot({ path: `${out}\\ra-d-hero.png` });

const metrics1440 = await page.evaluate(() => {
  const hero = document.querySelector(".research-areas-hero");
  const btns = [...document.querySelectorAll("a")].filter((a) =>
    /Explore Publications|Contact Our Team/.test(a.textContent || ""),
  );
  const r = hero?.getBoundingClientRect();
  return {
    hero: r ? { top: r.top, height: r.height, bottom: r.bottom } : null,
    buttons: btns.map((b) => {
      const br = b.getBoundingClientRect();
      return { text: b.textContent.trim(), top: br.top, bottom: br.bottom, height: br.height, width: br.width };
    }),
    innerHeight: window.innerHeight,
  };
});
console.log("1440", JSON.stringify(metrics1440, null, 2));

await page.setViewport({ width: 1280, height: 800, deviceScaleFactor: 1 });
await page.goto("http://127.0.0.1:3000/research/areas?hero=2", { waitUntil: "networkidle0" });
await page.screenshot({ path: `${out}\\ra-1280-hero.png` });

const metrics1280 = await page.evaluate(() => {
  const hero = document.querySelector(".research-areas-hero");
  const btns = [...document.querySelectorAll("a")].filter((a) =>
    /Explore Publications|Contact Our Team/.test(a.textContent || ""),
  );
  const r = hero?.getBoundingClientRect();
  return {
    hero: r ? { top: r.top, height: r.height, bottom: r.bottom } : null,
    buttons: btns.map((b) => {
      const br = b.getBoundingClientRect();
      return { text: b.textContent.trim(), top: br.top, bottom: br.bottom, height: br.height, width: br.width };
    }),
    innerHeight: window.innerHeight,
  };
});
console.log("1280", JSON.stringify(metrics1280, null, 2));

await page.setViewport({ width: 440, height: 900, deviceScaleFactor: 1 });
await page.goto("http://127.0.0.1:3000/research/areas?hero=m", { waitUntil: "networkidle0" });
await page.screenshot({ path: `${out}\\ra-m-hero.png` });
const contactVisible = await page.evaluate(() => {
  const btn = [...document.querySelectorAll("a")].find((a) =>
    /Contact Our Team/.test(a.textContent || ""),
  );
  if (!btn) return { found: false };
  const cs = getComputedStyle(btn);
  const r = btn.getBoundingClientRect();
  return { found: true, display: cs.display, visibility: cs.visibility, width: r.width, height: r.height };
});
console.log("mobile contact", JSON.stringify(contactVisible));

await browser.close();
console.log("ok");
