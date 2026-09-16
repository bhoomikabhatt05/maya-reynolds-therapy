import puppeteer from "puppeteer";

const sizes = [
  { name: "desktop", width: 1440, height: 900 },
  { name: "tablet", width: 834, height: 1200 },
  { name: "mobile", width: 390, height: 844 },
];

const browser = await puppeteer.launch({
  headless: true,
  executablePath: process.env.PUPPETEER_EXEC_PATH,
  args: ["--no-sandbox"],
});
const page = await browser.newPage();
for (const s of sizes) {
  await page.setViewport({ width: s.width, height: s.height });
  await page.goto("http://localhost:3411/", { waitUntil: "networkidle0" });

  // Scroll all the way down (and back up) so every lazy-loaded <Image>
  // enters the viewport at least once before the full-page screenshot.
  await page.evaluate(async () => {
    await new Promise((resolve) => {
      let total = 0;
      const step = 400;
      const timer = setInterval(() => {
        window.scrollBy(0, step);
        total += step;
        if (total >= document.body.scrollHeight) {
          clearInterval(timer);
          window.scrollTo(0, 0);
          resolve();
        }
      }, 100);
    });
  });
  await new Promise((r) => setTimeout(r, 500));

  await page.screenshot({ path: `/tmp/${s.name}.png`, fullPage: true });
  console.log("captured", s.name);
}
await browser.close();
