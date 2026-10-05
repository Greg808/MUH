Use pnpm 11.19.0, pinned by packageManager and pnpm-lock.yaml. Use pnpm for development and checks; do not introduce an active npm lockfile or npm/npx commands. Ask before dependency installation or upgrades.

Read the sole project guide at ../README.md. Git and .gitignore belong in the parent project root. Do not create a README or .gitignore inside website/. Ask Greg before acting when scope or structure is unclear.

# Project instructions

This is an Astro-first static project. Read docs/PRD.md, DESIGN.md and docs/TODO.md;
read docs/CODEX_START.md for a new build. The user's approved brief governs scope.

## Workflow

- Read GregWorxx Frontend (zentral in website-press) before frontend work.
  Reusable skill sources are maintained once in website-press; do not copy them into this website.
- Reuse local components first; inspect docs/PRELINE.md and actual callers.
- Keep content in typed modules, styling in shared tokens and reusable components.
- Prefer semantic HTML, CSS and Astro; add client JavaScript only for a concrete need.
- Preserve accessibility, keyboard/focus, reduced motion, responsive behavior and no-JS usability.
- Preserve approved design during maintenance. For an authorized new design, distinguish fixed inputs from variables.
- Check related sections together, allowing content-justified differences. Passing composition needs no forced revision.
- Do not invent identities, claims, locations, reviews or business facts.
- Do not add libraries, pages, backend, motion or Premium features from the tier name alone.

## Skills and live sources

GregWorxx is the default frontend workflow. UI/UX Pro Max is an optional targeted reference.
Use incremental-implementation for multi-file work and code-review-and-quality for review.
Use web-design-guidelines on affected UI alongside rendered checks; its advice is not visual approval.
Do not automatically invoke frontend-design, impeccable or unrelated stack tooling.
Use installed source and official Preline documentation for integration gaps; Astro Docs MCP
is the first external Astro source when available. Other MCPs/connectors only when they add evidence.
Never claim an unavailable source was checked or send private data to public documentation queries.

## Validation and records

Follow DESIGN.md for scope-appropriate checks. Fix demonstrated defects without weakening regressions.
Store current requirements and accepted decisions in docs; local research, screenshots and
iteration evidence go under ignored .local-work/. These artifacts are not build dependencies; final handoff evidence is required by docs/WORKFLOW.md.
Separate technical results, visual self-review and explicit user acceptance. Stop when scope is met.

For new builds follow docs/WORKFLOW.md, complete the whole-site DESIGN contract and
record actionable feedback in docs/FEEDBACK.json before closing the task.

Before a new whole-site candidate, use `node scripts/press.mjs verify muh plan` from website-press.
Before declaring a reviewed milestone, use its technical and handoff modes as documented in docs/WORKFLOW.md. Report failure
or limitations honestly; never present a pass as Greg's acceptance. Intermediate work
uses affected checks and does not require the entire final suite. No automatic skill/MCP cascade.

## Default design responsibility

The technical starter is a shared foundation. Basic design quality applies equally to
Starter and Premium scopes; neither label determines the customer's composition.
For authorized design work, own the overall UX/UI judgment before showing the draft.
Use the existing PRD/DESIGN to identify the visitor question, main action, verified
evidence and visual direction. Derive composition from those inputs, not a fixed demo.
Review the whole affected reading flow on desktop and mobile: hierarchy, grouping,
text measure, shared edges, image purpose and section boundaries. Diagnose grouping
and usable width before changing padding; equal token values do not guarantee equal
perceived spacing. Give different content roles appropriate emphasis.
Fix clear basics within scope before asking Greg to judge the remaining choices.
Repeated correction of the same issue requires a cause review, not another arbitrary
spacing adjustment. Technical passes and screenshot generation are not design approval.
Apply this through the existing WORKFLOW and feedback records; do not add a parallel gate.
During scoped maintenance preserve approved composition outside the requested change.

## Gemeinsame Werkzeuge · 05.10.2026

Die allgemeinen Prüfscripte und Skills liegen einmal im separaten Repository `website-press`. Dieses Projekt enthält Quellen, Konfiguration und projektspezifische Tests. Native Befehle (`pnpm run check`, `pnpm run build`, `pnpm run preview`) funktionieren im Website-Ordner; die Vorschau nutzt Astro.

Aus dem Root der Website-Presse: `node scripts/press.mjs verify muh technical`. Für strukturierte Design-/Übergabeprüfungen die Modi `plan`, `feedback` und `handoff` verwenden. Projekt-ID und tatsächlicher Ordner werden im Register und in dessen ignorierter lokaler Pfadzuordnung geführt; keine persönlichen Werkzeugpfade in diesem Projekt. Allgemeine Werkzeugtests laufen einmal in website-press.

Die früheren Script-/Skill-Kopien sind unter ignorierter `.local-work/tooling-before-centralization-2026-10-05/` gesichert. Historische Prüfberichte beschreiben den damaligen Ablauf. Neue technische Nachweise binden die zentrale Werkzeugversion; alte Belege werden nicht als neuer Prüferfolg übernommen. Kundendesign, Inhalte, Browser-/Inhaltstests und menschliche Freigaben bleiben erhalten.
