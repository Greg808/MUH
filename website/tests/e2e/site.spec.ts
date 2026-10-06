import { expect, test } from "@playwright/test";
import { site } from "../../src/content/site";
import { servicePages } from '../../src/content/service-pages';

for (const service of servicePages) {
  test(`${service.slug} is reachable, identifies its current menu entry and reflows`, async ({ page, request }) => {
    const route = `/${service.slug}/`;
    await page.goto(route);
    await expect(page.getByRole('heading', { level: 1 })).toHaveText(service.heading.join(' '));
    await expect(page.locator('meta[name="description"]')).toHaveAttribute('content', service.description);
    await expect(page.locator('meta[name="robots"]')).toHaveAttribute('content', 'noindex,follow');
    await expect(page.locator('main figcaption')).toHaveCount(0);
    const nav = page.getByRole('navigation', { name: page.viewportSize()!.width < 900 ? 'Mobile Navigation' : 'Hauptnavigation' });
    if (page.viewportSize()!.width < 900) await page.locator('.mobile-menu > summary').click();
    const group = nav.locator('.nav-group').filter({ hasText: service.category === 'privat' ? 'Privat' : 'Gewerbe' });
    await group.locator('summary').click();
    await expect(group.getByRole('link', { name: service.label, exact: true })).toHaveAttribute('aria-current', 'page');
    for (const link of await group.locator('a[href^="/"]').all()) {
      expect((await request.get((await link.getAttribute('href'))!)).ok()).toBe(true);
    }
    await page.keyboard.press('Escape');
    if (page.viewportSize()!.width < 900) await page.keyboard.press('Escape');
    for (const photo of await page.locator('main img').all()) {
      await expect(photo).toHaveAttribute('alt', /\S+/);
      await photo.scrollIntoViewIfNeeded();
      await expect.poll(() => photo.evaluate(node => (node as HTMLImageElement).naturalWidth)).toBeGreaterThan(0);
    }
    for (const width of [320, 390, 639, 640, 767, 768, 899, 900, 1023, 1024, 1199, 1200, 1440, 1920]) {
      await page.setViewportSize({ width, height: 900 });
      expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth), `page reflow at ${width}px`).toBe(true);
      const gallery = await page.locator('.project-gallery').evaluate(node => getComputedStyle(node).columnCount);
      expect(Number(gallery)).toBe(width >= 1200 ? 3 : width >= 640 ? 2 : 1);
      for (const photo of await page.locator('main img').all()) {
        const ratio = await photo.evaluate(node => {
          const image = node as HTMLImageElement, box = image.getBoundingClientRect();
          // With srcset, naturalWidth/Height are density-corrected and rounded by the browser.
          const originalRatio = Number(image.getAttribute('width')) / Number(image.getAttribute('height'));
          return Math.abs(box.width / box.height - originalRatio);
        });
        expect(ratio, `uncropped photo at ${width}px`).toBeLessThan(.01);
      }
    }
    await page.setViewportSize({ width: 320, height: 800 });
    await page.evaluate(() => document.documentElement.style.fontSize = '200%');
    expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBe(true);
    await page.getByRole('link', { name: service.action, exact: true }).click();
    await expect(page.locator('#kontakt')).toBeInViewport();
    await expect(page.locator('#kontakt')).toContainText('Kontaktdaten sind Platzhalter');
  });
}

test('business premises page preserves navigation, original media and shared edges', async ({ page, request }, testInfo) => {
  await page.goto('/geschaeftslokale/');
  await expect(page.getByRole('heading', { level: 1 })).toHaveText('Geschäftslokale renovieren.');
  await expect(page.locator('meta[name="robots"]')).toHaveAttribute('content', 'noindex,follow');
  await expect(page.locator('#umfang')).toContainText('Gewerbe- und arbeitnehmerschutzrechtliche Anforderungen');
  await expect(page.locator('#einblicke')).toContainText('ausgeführte Arbeiten werden noch ergänzt');
  await expect(page.locator('a[href^="tel:"]')).toHaveCount(0);
  await expect(page.getByRole('link', { name: 'MUH – zur Startseite' })).toHaveAttribute('href', '/#start');
  for (const link of await page.locator('a[href]').all()) {
    const href = await link.getAttribute('href');
    if (href!.startsWith('#')) {
      expect(await page.evaluate(id => Boolean(document.getElementById(id)), href!.slice(1))).toBe(true);
    } else if (href!.startsWith('/')) {
      expect((await request.get(href!)).ok()).toBe(true);
    }
  }
  for (const image of await page.locator('main img').all()) {
    await image.scrollIntoViewIfNeeded();
    await expect.poll(() => image.evaluate(node => (node as HTMLImageElement).naturalWidth)).toBeGreaterThan(0);
  }
  for (const width of [320, 390, 639, 640, 767, 768, 899, 900, 1199, 1200, 1440, 1920]) {
    await page.setViewportSize({ width, height: 900 });
    const edges = await page.locator('.site-container').evaluateAll(nodes => nodes.map(node => {
      const rect = node.getBoundingClientRect();
      return { left: rect.left, right: rect.right };
    }));
    for (const edge of edges) {
      expect(Math.abs(edge.left - edges[0].left), `left edge at ${width}px`).toBeLessThanOrEqual(1);
      expect(Math.abs(edge.right - edges[0].right), `right edge at ${width}px`).toBeLessThanOrEqual(1);
    }
    expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBe(true);
    const columns = await page.locator('#einblicke figure').evaluateAll(nodes => new Set(nodes.map(node => Math.round(node.getBoundingClientRect().left))).size);
    expect(columns, `gallery columns at ${width}px`).toBe(width >= 1200 ? 3 : width >= 640 ? 2 : 1);
    for (const figure of await page.locator('#einblicke figure').all()) {
      const geometry = await figure.evaluate(node => {
        const img = node.querySelector('img')!;
        const photo = img.getBoundingClientRect();
        const frame = node.getBoundingClientRect();
        return { ratio: photo.width / photo.height, originalRatio: img.naturalWidth / img.naturalHeight,
          photoBottom: photo.bottom, frameBottom: frame.bottom, frameWidth: frame.width, photoWidth: photo.width };
      });
      expect(Math.abs(geometry.ratio - geometry.originalRatio), `uncropped photo at ${width}px`).toBeLessThan(.01);
      expect(Math.abs(geometry.photoBottom - geometry.frameBottom), `complete photo frame at ${width}px`).toBeLessThanOrEqual(1);
      expect(Math.abs(geometry.frameWidth - geometry.photoWidth), `unfragmented figure at ${width}px`).toBeLessThanOrEqual(1);
    }
  }
  await expect(page.locator('#einblicke figure')).toHaveCount(6);
  await page.setViewportSize({ width: 320, height: 800 });
  await page.evaluate(() => document.documentElement.style.fontSize = '200%');
  expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBe(true);
  await page.screenshot({ path: testInfo.outputPath('narrow-text-200.png') });
  await page.locator('.mobile-menu > summary').click();
  const mobileNav = page.getByRole('navigation', { name: 'Mobile Navigation' });
  await mobileNav.locator('.nav-group > summary').filter({ hasText: 'Privat' }).click();
  const homeLink = mobileNav.getByRole('link', { name: 'Für Ihr Zuhause' });
  await expect(homeLink).toHaveAttribute('href', '/#privat');
  await page.keyboard.press('Escape');
  await page.keyboard.press('Escape');
  await expect(page.locator('.mobile-menu > summary')).toBeFocused();
});

test('header, sections and footer share content edges', async ({ page }) => {
  for (const width of [320, 390, 639, 640, 768, 899, 900, 1264, 1440, 1920]) {
    await page.setViewportSize({ width, height: 900 });
    await page.goto('/');
    const containers = await page.locator('.site-container').evaluateAll(nodes => nodes.map(node => {
      const bounds = node.getBoundingClientRect();
      return { left: bounds.left, right: bounds.right };
    }));
    expect(containers.length).toBeGreaterThanOrEqual(9);
    for (const bounds of containers) {
      expect(Math.abs(bounds.left - containers[0].left), `left edge at ${width}px`).toBeLessThanOrEqual(1);
      expect(Math.abs(bounds.right - containers[0].right), `right edge at ${width}px`).toBeLessThanOrEqual(1);
    }
  }
});

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
  const summary = page.locator('.mobile-menu > summary');
  await summary.focus();
  await page.keyboard.press('Enter');
  await expect(page.locator('.mobile-menu')).toHaveAttribute('open', '');
  await page.keyboard.press('Tab');
  const privateSummary = page.getByRole('navigation', { name: 'Mobile Navigation' }).locator('.nav-group > summary').filter({ hasText: 'Privat' });
  await expect(privateSummary).toBeFocused();
  await page.keyboard.press('Enter');
  await page.keyboard.press('Tab');
  const firstLink = page.getByRole('navigation', { name: 'Mobile Navigation' }).getByRole('link', { name: 'Für Ihr Zuhause' });
  await expect(firstLink).toBeFocused();
  await expect(firstLink).toBeInViewport();
  expect(await page.evaluate(() => document.documentElement.scrollWidth)).toBeLessThanOrEqual(320);
  await page.keyboard.press('Escape');
  await expect(privateSummary).toBeFocused();
  await page.keyboard.press('Escape');
  await expect(summary).toBeFocused();
  await expect(page.locator('.mobile-menu')).not.toHaveAttribute('open');
  await summary.click();
  await privateSummary.click();
  await firstLink.click();
  await expect(page).toHaveURL(/#privat$/);
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
  await page.locator('.mobile-menu > summary').click();
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


test('audience menus stay grouped, fit breakpoints and navigate to real pages', async ({ page }, testInfo) => {
  for (const width of [320, 390, 768, 899, 900, 1199, 1200, 1440, 1920]) {
    await page.setViewportSize({ width, height: 900 });
    await page.goto('/geschaeftslokale/');
    const mobile = width < 900;
    if (mobile) await page.locator('.mobile-menu > summary').click();
    const nav = page.getByRole('navigation', { name: mobile ? 'Mobile Navigation' : 'Hauptnavigation', exact: true });
    const privateGroup = nav.locator('.nav-group').filter({ hasText: 'Privat' });
    const commercialGroup = nav.locator('.nav-group').filter({ hasText: 'Gewerbe' });
    await privateGroup.locator('summary').click();
    await expect(nav.getByRole('link', { name: 'Für Ihr Zuhause' })).toHaveAttribute('href', '/#privat');
    await commercialGroup.locator('summary').click();
    await expect(privateGroup).not.toHaveAttribute('open');
    const business = nav.getByRole('link', { name: 'Geschäftslokale', exact: true });
    await expect(business).toHaveAttribute('aria-current', 'page');
    const panel = await commercialGroup.locator('.nav-submenu').boundingBox();
    expect(panel!.x).toBeGreaterThanOrEqual(0);
    expect(panel!.x + panel!.width).toBeLessThanOrEqual(width);
    expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBe(true);
    await business.focus();
    await page.keyboard.press('Escape');
    await expect(commercialGroup.locator('summary')).toBeFocused();
    await expect(commercialGroup).not.toHaveAttribute('open');
    await commercialGroup.locator('summary').click();
    await page.getByRole('heading', { level: 1 }).click();
    await expect(page.locator('.site-header details[open]')).toHaveCount(0);
  }
  await page.setViewportSize({ width: 320, height: 800 });
  await page.goto('/');
  await page.evaluate(() => document.documentElement.style.fontSize = '200%');
  await page.locator('.mobile-menu > summary').click();
  const nav = page.getByRole('navigation', { name: 'Mobile Navigation' });
  await nav.locator('.nav-group > summary').filter({ hasText: 'Gewerbe' }).click();
  const business = nav.getByRole('link', { name: 'Geschäftslokale', exact: true });
  await business.focus();
  await expect(business).toBeInViewport();
  expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBe(true);
  await page.screenshot({ path: testInfo.outputPath('grouped-menu-200.png') });
  await business.click();
  await expect(page).toHaveURL(/\/geschaeftslokale\/$/);
  await expect(page.getByRole('heading', { level: 1 })).toHaveText('Geschäftslokale renovieren.');
});

test('audience submenus work without JavaScript on desktop and mobile', async ({ browser, baseURL }) => {
  for (const width of [390, 1440]) {
    const context = await browser.newContext({ baseURL, javaScriptEnabled: false, viewport: { width, height: 900 } });
    const page = await context.newPage();
    await page.goto('/');
    if (width < 900) await page.locator('.mobile-menu > summary').click();
    const nav = page.getByRole('navigation', { name: width < 900 ? 'Mobile Navigation' : 'Hauptnavigation', exact: true });
    await nav.locator('.nav-group > summary').filter({ hasText: 'Gewerbe' }).click();
    await nav.getByRole('link', { name: 'Geschäftslokale', exact: true }).click();
    await expect(page.getByRole('heading', { level: 1 })).toHaveText('Geschäftslokale renovieren.');
    await page.getByRole('link', { name: 'MUH – zur Startseite' }).click();
    await expect(page).toHaveURL(/\/#start$/);
    await context.close();
  }
});

test("serves social previews and the complete website icon package", async ({ page, request }) => {
  for (const route of ['/', ...servicePages.map(service => `/${service.slug}/`)]) {
    await page.goto(route);
    const imageUrl = await page.locator('meta[property="og:image"]').getAttribute('content');
    expect(imageUrl).toBeTruthy();
    const url = new URL(imageUrl!);
    expect(['http:', 'https:']).toContain(url.protocol);
    if (site.url) expect(url.origin).toBe(new URL(site.url).origin);
    await expect(page.locator('meta[name="twitter:card"]')).toHaveAttribute('content', 'summary_large_image');
    await expect(page.locator('meta[name="twitter:image"]')).toHaveAttribute('content', imageUrl!);
    await expect(page.locator('meta[property="og:image:alt"]')).toHaveAttribute('content', /\S+/);
    expect(url.pathname).toBe(route === '/' ? '/social/default.png' : `/social/${route.split('/')[1]}.png`);
    const image = await request.get(url.pathname);
    expect(image.ok()).toBe(true);
    expect(image.headers()['content-type']).toContain('image/png');
    const size = await page.evaluate(async path => {
      const image = new Image(); image.src = path; await image.decode();
      return [image.naturalWidth, image.naturalHeight];
    }, url.pathname);
    expect(size).toEqual([1200, 630]);
  }
  for (const [selector, href] of [['link[rel="icon"][type="image/svg+xml"]', '/favicon.svg'], ['link[rel="icon"][type="image/x-icon"]', '/favicon.ico'], ['link[rel="apple-touch-icon"]', '/apple-touch-icon.png'], ['link[rel="manifest"]', '/site.webmanifest']]) {
    await expect(page.locator(selector)).toHaveAttribute('href', href);
    expect((await request.get(href)).ok()).toBe(true);
  }
  const ico = await (await request.get('/favicon.ico')).body();
  expect([...ico.subarray(0, 6)]).toEqual([0, 0, 1, 0, 3, 0]);
  const response = await request.get('/site.webmanifest');
  expect(response.headers()['content-type']).toContain('application/manifest+json');
  const manifest = await response.json();
  expect(manifest.name).toBe(site.name);
  expect(manifest.display).toBe('browser');
  expect(manifest.icons.map((icon: { purpose: string }) => icon.purpose)).toEqual(['any', 'any', 'maskable']);
  for (const icon of [...manifest.icons, { src: '/apple-touch-icon.png', sizes: '180x180' }, { src: '/favicon-32.png', sizes: '32x32' }]) {
    const size = await page.evaluate(async path => {
      const image = new Image(); image.src = path; await image.decode();
      return `${image.naturalWidth}x${image.naturalHeight}`;
    }, icon.src);
    expect(size).toBe(icon.sizes);
  }
});
