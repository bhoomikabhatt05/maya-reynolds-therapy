import puppeteer from "puppeteer";
const browser = await puppeteer.launch({
  headless: true,
  executablePath: process.env.PUPPETEER_EXEC_PATH,
  args: ["--no-sandbox"],
});
const page = await browser.newPage();
await page.setViewport({ width: 390, height: 844 });
await page.goto("http://localhost:3411/", { waitUntil: "networkidle0" });
await page.click('button[aria-label="Toggle menu"]');
await new Promise((r) => setTimeout(r, 300));
await page.screenshot({ path: "/tmp/mobile-menu-open.png" });
// also open the "About" details dropdown
await page.click('summary');
await new Promise((r) => setTimeout(r, 300));
await page.screenshot({ path: "/tmp/mobile-menu-open-dropdown.png" });
await browser.close();
