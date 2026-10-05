import { mkdir } from "node:fs/promises";
import path from "node:path";
import { test } from "@playwright/test";

const screenshotDate = new Date().toISOString().slice(0, 10);
const screenshotDir = path.join(".local-work", "reports", "screenshots", `${screenshotDate}-${Date.now()}`);

test.describe("iteration screenshots", () => {
  test("captures the full page for desktop and mobile review", async ({ browser }) => {
    await mkdir(screenshotDir, { recursive: true });

    const viewports = [
      { name: "desktop", width: 1440, height: 1100, textScale: 1 },
      { name: "mobile", width: 390, height: 844, textScale: 1 },
      { name: "tablet", width: 768, height: 1024, textScale: 1 },
      { name: "wide", width: 1920, height: 1080, textScale: 1 },
      { name: "narrow-text-200", width: 320, height: 800, textScale: 2 },
    ];

    for (const viewport of viewports) {
      const context = await browser.newContext({
        viewport: { width: viewport.width, height: viewport.height },
      });
      const page = await context.newPage();

      await page.goto("/");
      await page.evaluate(async textScale => {
        if (textScale !== 1) document.documentElement.style.fontSize = `${textScale * 100}%`;
        await document.fonts.ready;
        await Promise.all(Array.from(document.images).map(image => { image.loading = "eager"; return image.decode(); }));
      }, viewport.textScale);
      await page.screenshot({
        path: path.join(screenshotDir, `home-${viewport.name}.png`),
        fullPage: true,
      });

      await context.close();
    }
  });
});
