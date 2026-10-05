# Shared HTML baseline

Applies to Starter and Premium. This is a conservative project selection, not a claim
that a particular percentage of websites has been studied.

Keep the existing doctype, document language, early charset/viewport, unique title and
description, canonical and Open Graph URLs from the confirmed domain, and safe noindex default.
The supported color scheme must match the actual CSS; dark metadata does not implement dark mode.

## Assets at launch

- Replace the default SVG favicon with the actual brand icon. Optional BaseLayout props
  faviconIco (32×32 ICO) and appleTouchIcon (180×180 PNG) render links only when provided.
  Confirm file existence and real device needs. No generated placeholder icon package.
- Use the existing ogImage and ogImageAlt props for an actual share image with absolute public
  URL and concise description. Verify the image loads and inspect the resulting link preview.
- Retain optional theme colors only if they reflect the implemented design.

## Print and progressive enhancement

The shared print CSS uses a white page, readable baseline text, reduced section spacing,
underlined links and basic pagination hints. It deliberately does not hide sections, automatically
open disclosures or remove navigation. Check the completed page in print preview, including
contact information, dark sections, fixed elements and collapsed content; adapt only as needed.
Astro owns CSS/script output. No added render-blocking scripts or no-js class without a real use case.

## Deferred by default

Do not add text-scale, interactive-widget, viewport-fit=cover, speculative preloads, a web manifest,
Markdown alternates, feeds or social identity tags without an explicit use case and appropriate tests.
OS-level mobile text scaling requires separate device verification; 200% CSS text tests are not equivalent.
Premium does not automatically activate these features. Its additional scope remains undefined.

## Sources and limits — reviewed 2026-09-08

- [Manuel Matuzović: My HTML boilerplate in 2026](https://www.matuzo.at/blog/2026/html-boilerplate):
  author's explained starting point, selectively assessed against this static Astro foundation.
- [Open Graph protocol](https://ogp.me/): metadata and image property reference.

The decisions above are our project recommendations. Browser/platform-specific behavior and
future features must be rechecked when implementing a concrete customer requirement.
