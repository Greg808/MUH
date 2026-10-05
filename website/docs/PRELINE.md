# Integration and provenance

Astro/TypeScript/Tailwind with Preline 4.2.0 CSS variants; no Preline JavaScript loader.
Local ButtonLink and SurfaceCard reuse the inspected free HTML/Tailwind adaptations.
Source: https://preline.co/docs/buttons.html. Layout primitives are local Astro compositions.
Preserve PRELINE-LICENSE.txt. No paid blocks or demo image assets are included.

The locked Astro 7.3.0 image module needs the narrow logger alias in astro.config.mjs.
Preline 4.2.0 does not export variants.css as a package subpath, so CSS imports it relatively.
Reassess these compatibility measures on a separately authorized upgrade; do not patch node_modules.

Inventory: SectionFrame (spacing/tone/header), SectionHeader, ContentBlock,
SectionLayout (optional arrangements), ItemGrid (list/grid), ButtonLink, SurfaceCard.
Variants are available choices, not mandatory section layouts. No business content belongs in these primitives.
