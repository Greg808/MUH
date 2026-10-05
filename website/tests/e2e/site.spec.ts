import { expect, test } from "@playwright/test";
import { site } from "../../src/content/site";

test("renders semantic content and safe metadata", async ({ page }) => {
  await page.goto("/");
  await expect(page).toHaveTitle(/\S/);
  await expect(page.locator("html")).toHaveAttribute("lang", site.locale);
  await expect(page.getByRole("heading", { level: 1 })).toHaveCount(1);
  await expect(page.getByRole("heading", { level: 1 })).toBeVisible();
  await expect(page.getByRole("heading", { level: 1 })).toHaveText(/\S/);
  await expect(page.locator('meta[name="description"]')).toHaveAttribute("content", site.description);
  await expect(page.locator('meta[name="robots"]')).toHaveAttribute("content", site.indexable && site.url ? "index,follow" : "noindex,follow");
  const canonical = page.locator('link[rel="canonical"]');
  const ogUrl = page.locator('meta[property="og:url"]');
  if (site.url) {
    await expect(canonical).toHaveAttribute("href", new URL("/", site.url).href);
    await expect(ogUrl).toHaveAttribute("content", new URL("/", site.url).href);
  } else {
    await expect(canonical).toHaveCount(0);
    await expect(ogUrl).toHaveCount(0);
  }
  await expect(page.locator('meta[name="viewport"]')).toHaveAttribute("content", "width=device-width");
  await expect(page.locator('meta[charset]')).toHaveCount(1);
  for (const id of await page.locator("[aria-labelledby]").evaluateAll(nodes => nodes.flatMap(n => (n.getAttribute("aria-labelledby") ?? "").split(/\s+/)))) {
    expect(await page.evaluate(id => Boolean(document.getElementById(id)), id)).toBe(true);
  }
});

test("supports skip navigation and visible keyboard focus", async ({ page }) => {
  await page.goto("/");
  await page.keyboard.press("Tab");
  const skip = page.locator('a[href="#main"]');
  await expect(skip).toBeFocused();
  await expect(skip).toBeVisible();
  await page.keyboard.press("Enter");
  await expect(page.locator("main")).toBeFocused();
  await page.keyboard.press("Tab");
  const link = page.locator("main a").first();
  await expect(link).toBeFocused();
  expect(await link.evaluate(el => getComputedStyle(el).outlineStyle)).not.toBe("none");
});

test("remains usable without JavaScript", async ({ browser, baseURL }) => {
  const context = await browser.newContext({ javaScriptEnabled: false, baseURL });
  const page = await context.newPage();
  await page.goto("/");
  await expect(page.getByRole("heading", { level: 1 })).toBeVisible();
  const link = page.locator("main a[href]").first();
  await expect(link).toBeVisible();
  const href = await link.getAttribute("href");
  expect(href?.trim()).toBeTruthy();
  const target = new URL(href!, page.url());
  expect(["http:", "https:", "mailto:", "tel:"]).toContain(target.protocol);
  if (target.origin === new URL(page.url()).origin && target.pathname === new URL(page.url()).pathname && href!.includes("#")) {
    expect(target.hash.length).toBeGreaterThan(1);
    expect(await page.evaluate(hash => Boolean(document.getElementById(decodeURIComponent(hash.slice(1)))), target.hash)).toBe(true);
    await link.click();
    await expect(page).toHaveURL(target.href);
  }
  await page.goto("/");
  await page.keyboard.press("Tab");
  await page.keyboard.press("Enter");
  await expect(page.locator("main")).toBeFocused();
  await context.close();
});

test("reflows at narrow widths with long labels and enlarged text", async ({ page }) => {
  await page.setViewportSize({ width: 320, height: 800 });
  await page.goto("/");
  await page.evaluate(() => {
    document.documentElement.style.fontSize = "200%";
    document.querySelector("h1")!.textContent = "Ein sehr langer Projektname mit nachvollziehbarer Beschreibung";
    document.querySelector("main a")!.textContent = "Ausführliche Dokumentation für dieses Projekt öffnen";
  });
  expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBe(true);
  const link = page.locator("main a").first();
  await link.focus();
  const bounds = await link.boundingBox();
  expect(bounds!.x).toBeGreaterThanOrEqual(0);
  expect(bounds!.x + bounds!.width).toBeLessThanOrEqual(320);
  await expect(link).toBeVisible();
});

test("serves assets and returns a real 404", async ({ page, request }) => {
  const errors: string[] = [];
  page.on("pageerror", error => errors.push(error.message));
  await page.goto("/");
  expect(errors).toEqual([]);
  expect((await request.get("/favicon.svg")).status()).toBe(200);
  expect((await request.get("/missing-page/" )).status()).toBe(404);
});

test('all in-page actions resolve and project photos load', async ({ page }) => {
  await page.goto('/');
  for (const href of await page.locator('a[href^="#"]').evaluateAll(nodes => nodes.map(n => n.getAttribute('href')!))) {
    expect(await page.evaluate(id => Boolean(document.getElementById(id)), href.slice(1))).toBe(true);
  }
  const images = page.locator('main img');
  for (const img of await images.all()) {
    await img.scrollIntoViewIfNeeded();
    await expect.poll(() => img.evaluate(el => (el as HTMLImageElement).naturalWidth)).toBeGreaterThan(0);
  }
  const sources = await images.evaluateAll(nodes => nodes.map(n => n.getAttribute('src')));
  expect(new Set(sources).size).toBe(sources.length);
});

test('mobile menu works with keyboard at narrow enlarged text', async ({ page }) => {
  await page.setViewportSize({ width: 320, height: 800 });
  await page.goto('/');
  await page.evaluate(() => document.documentElement.style.fontSize = '200%');
  for (const number of await page.locator('.step, .hero-trust strong').all()) {
    expect(await number.evaluate(el => getComputedStyle(el).whiteSpace)).toBe('nowrap');
  }
  const summary = page.locator('.mobile-menu summary');
  await summary.focus();
  await page.keyboard.press('Enter');
  await expect(page.locator('.mobile-menu')).toHaveAttribute('open', '');
  await page.keyboard.press('Tab');
  const firstLink = page.getByRole('navigation', { name: 'Mobile Navigation' }).getByRole('link').first();
  await expect(firstLink).toBeFocused();
  await expect(firstLink).toBeInViewport();
  expect(await page.evaluate(() => document.documentElement.scrollWidth)).toBeLessThanOrEqual(320);
  await page.keyboard.press('Escape');
  await expect(summary).toBeFocused();
  await expect(page.locator('.mobile-menu')).not.toHaveAttribute('open');
  await summary.click();
  await firstLink.click();
  await expect(page).toHaveURL(/#einsatzbereiche$/);
  await expect(page.locator('.mobile-menu')).not.toHaveAttribute('open');
});

test('presentation content and contacts remain clearly identified', async ({ page }) => {
  await page.goto('/');
  await expect(page.locator('#kundenstimmen')).toContainText('Beispieltexte');
  for (const voice of await page.locator('.voice').all()) await expect(voice).toContainText('Musterstimme');
  for (const project of await page.locator('.project-card').all()) await expect(project).toContainText('Beispielbeschreibung');
  await expect(page.locator('#kontakt')).toContainText('Kontaktdaten sind Platzhalter');
  await expect(page.locator('a[href^="tel:"]')).toHaveCount(0);
  await expect(page.locator('a[href^="mailto:"]')).toHaveAttribute('href', 'mailto:hallo@muh.example.com');
});

test('reduced motion and no-JS mobile navigation keep content available', async ({ browser, baseURL }) => {
  const context = await browser.newContext({ baseURL, javaScriptEnabled: false, reducedMotion: 'reduce', viewport: { width: 390, height: 844 } });
  const page = await context.newPage();
  await page.goto('/');
  await page.locator('.mobile-menu summary').click();
  const contact = page.getByRole('navigation', { name: 'Mobile Navigation' }).getByRole('link', { name: /Kontakt aufnehmen/ });
  await expect(contact).toBeVisible();
  await contact.click();
  await expect(page).toHaveURL(/#kontakt$/);
  await expect(page.getByRole('heading', { name: /Was möchten/ })).toBeInViewport();
  expect(await page.locator('html').evaluate(el => getComputedStyle(el).scrollBehavior)).toBe('auto');
  await context.close();
});

test('project comparison switches complete pairs and preserves the slider position', async ({ page }) => {
  await page.goto('/');
  const comparison = page.locator('.project-comparison');
  const slider = comparison.getByRole('slider');
  await slider.focus();
  await page.keyboard.press('Home');
  await page.keyboard.press('ArrowRight');
  await expect(slider).toHaveValue('1');
  await comparison.getByRole('radio', { name: 'Originalfotos', exact: true }).check();
  await expect(comparison.locator('.comparison-before')).toHaveAttribute('src', /compare-original-before.webp$/);
  await expect(comparison.locator('.comparison-after')).toHaveAttribute('src', /compare-original-after.webp$/);
  await expect(comparison.locator('.comparison-note')).toContainText('Keine generierten Bildinhalte');
  await expect(slider).toHaveValue('1');
  await comparison.getByRole('button', { name: 'Vorher', exact: true }).click();
  await expect(slider).toHaveValue('100');
  await comparison.getByRole('radio', { name: 'KI-bearbeitet', exact: true }).check();
  await expect(comparison.locator('.comparison-before')).toHaveAttribute('src', /compare-ai-before.webp$/);
  await expect(comparison.locator('.comparison-note')).toContainText('KI-bearbeitete Visualisierung');
  await expect(slider).toHaveValue('100');
  await comparison.getByRole('button', { name: 'Nachher', exact: true }).click();
  await expect(slider).toHaveValue('0');
});

test('comparison restores the mode if an image cannot load', async ({ page }) => {
  await page.route('**/compare-original-*.webp', route => route.abort());
  await page.goto('/');
  const comparison = page.locator('.project-comparison');
  await comparison.getByRole('radio', { name: 'Originalfotos', exact: true }).click();
  await expect(comparison.locator('.comparison-note')).toContainText('Bitte erneut versuchen');
  await expect(comparison.getByRole('radio', { name: 'KI-bearbeitet', exact: true })).toBeChecked();
  await expect(comparison.locator('.comparison-before')).toHaveAttribute('src', /compare-ai-before.webp$/);
  await expect(comparison.locator('.comparison-stage')).not.toHaveAttribute('aria-busy');
});

test('private and commercial visitors get equal entry points', async ({ page }) => {
  await page.goto('/');
  await expect(page.locator('#hero-title')).toContainText('Für Ihr Zuhause.');
  await expect(page.locator('#hero-title')).toContainText('Für Ihren Betrieb.');
  const cards = page.locator('.audience-card');
  await expect(cards).toHaveCount(2);
  for (const card of await cards.all()) {
    await expect(card.getByRole('link')).toHaveAttribute('href', '#kontakt');
    await expect(card.locator('img')).toBeVisible();
  }
  const widths = await cards.evaluateAll(nodes => nodes.map(node => node.getBoundingClientRect().width));
  expect(Math.abs(widths[0] - widths[1])).toBeLessThan(1);
  await expect(page.locator('#kontakt')).toContainText('Zuhause oder Ihren Betrieb');
  await expect(page.locator('#kundenstimmen')).toContainText('Wohnungsrenovierung');
  await expect(page.locator('#kundenstimmen')).toContainText('Büroprojekt');
});
