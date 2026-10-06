import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";
import { test } from "@playwright/test";
import { servicePages } from '../../src/content/service-pages';

const screenshotDate = new Date().toISOString().slice(0, 10);
const screenshotDir = path.join(".local-work", "reports", "screenshots", `${screenshotDate}-${Date.now()}`);

test.describe("iteration screenshots", () => {
  test("captures the full page for desktop and mobile review", async ({ browser }) => {
    test.setTimeout(180_000);
    await mkdir(screenshotDir, { recursive: true });
    const evidence = [];
    const routes = [{ name: 'home', route: '/' }, ...servicePages.map(page => ({ name: page.slug, route: `/${page.slug}/` }))];

    const viewports = [
      { name: "desktop", width: 1440, height: 1100, textScale: 1 },
      { name: "mobile", width: 390, height: 844, textScale: 1 },
      { name: "tablet", width: 768, height: 1024, textScale: 1 },
      { name: "wide", width: 1920, height: 1080, textScale: 1 },
      { name: "narrow-text-200", width: 320, height: 800, textScale: 2 },
    ];

    for (const { name, route } of routes) {
      for (const viewport of viewports) {
        const context = await browser.newContext({
          viewport: { width: viewport.width, height: viewport.height },
        });
        const page = await context.newPage();

        await page.goto(route);
        await page.evaluate(async textScale => {
          if (textScale !== 1) document.documentElement.style.fontSize = `${textScale * 100}%`;
          await document.fonts.ready;
          await Promise.all(Array.from(document.images).map(image => { image.loading = "eager"; return image.decode(); }));
        }, viewport.textScale);
        // Make the full layout visible: Chromium can omit offscreen images in CSS
        // columns from a fullPage capture even after they have been decoded.
        const height = await page.evaluate(() => document.documentElement.scrollHeight);
        await page.setViewportSize({ width: viewport.width, height });
        await page.waitForLoadState('networkidle');
        await page.evaluate(async () => {
          await Promise.all(Array.from(document.images).map(image => image.decode()));
          await new Promise<void>(resolve => requestAnimationFrame(() => requestAnimationFrame(() => resolve())));
        });
        const file = path.join(screenshotDir, `${name}-${viewport.name}.png`);
        await page.screenshot({
          path: file,
          fullPage: false,
        });
        evidence.push({ route, width: viewport.width, textScale: viewport.textScale, path: file });

        await context.close();
      }
    }
    await writeFile(path.join(screenshotDir, 'views.json'), JSON.stringify(evidence, null, 2));
    console.log(`Visual evidence: ${screenshotDir}`);
  });
});
