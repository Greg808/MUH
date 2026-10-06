# Social previews and website icons

Every website includes SVG and multi-size ICO favicons, 16/32/48px PNG favicons,
a 180px Apple touch icon, 192/512px web-app icons and a separate 512px maskable icon.
The native Astro manifest uses `display: browser`; this does not add offline support,
a service worker or an installability promise.

`BaseLayout` supplies Open Graph and large-image social-card metadata by default.
All nine PNGs are 1200×630. `ServicePage` selects the card matching the service slug. Override `ogImage`, `ogImageAlt`, `ogImageWidth` and
`ogImageHeight` per page when appropriate. Relative paths resolve against the confirmed
`site.url`; with no domain configured, URLs are local preview fallbacks only. Preserve
noindex until publication is separately approved. Public social-platform testing requires
a publicly reachable page and confirmed domain.

## Brand sources and export

MUH uses its existing approved logo and original project photos. The icon source in
`brand-assets/icon.svg` isolates the existing logo mark; no new brand symbol is invented.
For later updates change this source, adjust the local `brand-assets/social.html`
composition and `brand-assets/config.json` title/description, and update
`src/content/brand.ts` including the image description and real theme colors.
Do not invent customer claims, logos or photography. Icons must remain identifiable
at 16/32px; inspect maskable cropping as well as the full 512px image.

From the separate website-press repository run:

```sh
node scripts/export-brand-assets.mjs /path/to/project/website
```

The explicit exporter reuses the website's installed Playwright Chromium and an existing
ImageMagick `magick` executable. Missing tools fail; it never installs dependencies.
Only export trusted, locally authored SVG/HTML sources. Its browser blocks network
requests, source paths stay inside the project, configured output names are PNG basenames,
and text/image-load failures stop the export. The small shared wrapper fills text safely
and delegates rendering and image/ICO encoding to these maintained tools. Astro's image
API is suitable for image resizing, but does not provide the HTML text composition or
ICO encoding required here. No new image engine, CDN, runtime API or copied Stardrive
module is introduced.

Exports overwrite only the documented asset outputs. Review all resulting cards and icons,
then commit sources and public exports together. Ordinary builds use committed outputs
and do not need ImageMagick, the exporter or browser export to run. After changing a logo,
card text or image, repeat the explicit export before check/build and asset tests.

The maskable icon places the source inside the central 80%-diameter safe circle.
The `background` hex color in config must match the actual icon background.
`brand-assets/` stays outside published routes; all public raster files are committed.

Sources: [Open Graph](https://ogp.me/),
[manifest icons](https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps/Manifest/Reference/icons),
[Astro getImage](https://docs.astro.build/en/reference/modules/astro-assets/#getimage).
