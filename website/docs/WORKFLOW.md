# Whole-site workflow · version 2

This version travels with the Copier revision in .copier-answers.yml. Existing projects
are never updated automatically. The canonical source is the Astro starter; installed
global skills and customer projects are not synchronized. Project instructions and the
latest explicit user decision take precedence.

## From a brief to a complete draft

1. Read PRD, DESIGN, LEARNINGS.json, FEEDBACK.json and the local skill. Extract audience, offer, location,
   desired action, confirmed evidence and constraints. Mark optional missing facts as
   absent; ask only when the answer changes correctness or consequential behavior.
2. Complete the design contract in DESIGN for the WHOLE site. Map each page's user
   questions to content and a small set of compositions. Write final candidate copy
   before splitting it into components. A missing customer photo is not permission
   to invent customers, claims or extra sections.
3. Build the complete static draft with shared primitives and typed content. Review
   the whole reading flow at 390 and 1440 before effects. Inspect related headings,
   copy, rules, images and CTAs together. Fix their common source when a pattern fails.
4. During construction run check and relevant behavior checks after affected changes.
   Reserve the full browser/viewport/print/performance acceptance for the selected
   complete candidate. Build once; tests and screenshots consume that same dist.
5. Evaluate code, content and visual coherence separately. Screenshots must be seen,
   not merely produced. An independent review is useful when authorized. Green tests
   cannot prove design approval, persuasive copy or a percentage of completion.

## Feedback becomes a change, not another reminder

Record actionable user feedback in docs/FEEDBACK.json during the current task, before
closing it. Keep the original observation, cause, scope, source, target and evidence.
Use one of these scopes:

- baseline: correctness, keyboard behavior, truthful claims, maintainable content.
- pattern: reusable relationship, e.g. shared alignment and spacing for equivalent jobs.
- project: a brand or layout preference, e.g. Raumwerk's full-width standalone copy.

A project preference stays in its project. A reusable candidate is reviewed against
another brief before explicit promotion to the starter on a feature branch. Record
which component, token, regression or workflow changed. Never promote an EOD paragraph
alone, copy all project CSS, or change a global skill/customer project silently.

Statuses: recorded -> implemented -> validated. Implemented needs a concrete target
and change evidence. Validated reusable records additionally need a different-project trial, its actual
result and residual limitations. Project-scoped feedback instead needs verification in
its own project; it cannot be generalized by changing its status. A failed trial stays implemented and records the failure.
Greg's acceptance is tracked separately; neither status asserts his approval.

The central EOD remains a dated journal and links these records. At each subsequent
project start, use the shipped version, check applicable records and test whether earlier
failures recur. At close, record recurrence and user corrections. Do not claim automatic
model training or reliable 90% completion from a single pilot.

## Reusable compositions (not a mandatory section list)

| Job | Existing primitive | Invariant | Legitimate variation |
| --- | --- | --- | --- |
| Introduce a subject | SectionHeader | eyebrow, heading and copy share an edge and copy gap | alignment or width follows the contract |
| Section with content below | SectionFrame stacked | one container, content gap, shared heading pattern | tone follows the planned page rhythm |
| Explain alongside useful media | SectionLayout equal/wide-left | shared top edge and column gap; logical mobile order | ratio follows actual image/content needs |
| Related heading, copy and action | ContentBlock | one group using copy gap | action can wrap; no forced fixed height |

Desktop: compare the left/right edges of heading, content, image and separator within
one container. Mobile: preserve the same grouping in one column, with readable labels.
Keep paired desktop/mobile examples from the current rendered project with its review;
these illustrate the contract, not fixed geometry to copy into every future site.

Run `node scripts/press.mjs verify muh feedback` before closing a task. It checks record structure, existing
implementation targets and scope/status mistakes; it cannot verify the truth of evidence.
Entry fields: id, observation, cause, source, project, scope, status, destination.
Implemented records also need target (repository-relative) and changeEvidence. Validated
records need trial: project, result (pass), evidence, limitations. Empty records are valid
only when no actionable feedback has been received; the reviewer checks completeness.

## Where learning lives

`docs/LEARNINGS.json` is the frozen, inherited history shipped by the starter. Review
applicable baseline/pattern entries at project start and record recurrence (or absence
within the reviewed scope) in the project review. Project-scoped historical entries explain
what NOT to generalize. `docs/FEEDBACK.json` contains only new feedback in this project.

At close, classify new feedback, fix it locally and include a promotion candidate in the
EOD with its project path, record ID, source and evidence. When authorized to improve the
starter, review that record, update the affected primitive/workflow plus the starter's
LEARNINGS.json on one feature branch, and trial a different brief. Future Copier copies
inherit that commit; existing projects keep their version. This is an explicit task step,
not an unattended synchronization or a model that trains itself.

Check both ledgers with `node scripts/press.mjs verify muh feedback`. Validate the relevance and evidence in
review as well: a structural checker cannot prove that feedback was recorded completely.

## Enforced handoff checks · version 2

Prototype commands remain unchanged: dev, check, build and relevant tests. No Git hook,
background agent or global configuration is installed. The explicit final handoff path is:

1. Complete the single `json design-contract` block in DESIGN.md; run `node scripts/press.mjs verify muh plan`
   before the first whole-site draft. Record all pages, user questions and shared patterns.
   Decide which skills/MCPs answer an actual gap; do not activate the whole catalog.
2. For the complete candidate run `node scripts/press.mjs verify muh technical`. It checks the plan and runs
   check:feedback -> check -> build -> test:e2e -> screenshots, sequentially. It records
   exit codes and log hashes, source and dist fingerprints. Browser suites use the Playwright
   JSON reporter and forbid-only; zero executed, skipped, failed or flaky runs block final
   verification. Prototype test commands still permit focused work. A failed run invalidates the
   old receipt. An exclusive lock prevents two such runs. Do not start other builds/tests
   while it runs; the lock cannot control unrelated shell commands.
3. Inspect the result and complete docs/REVIEW.json. Use
   `node scripts/press.mjs verify muh fingerprint` for current digests and
   `node scripts/press.mjs verify muh evidence <relative-file>` for file references.
   Neither command marks a review as passed. Keep evidence in .local-work.
4. Run `node scripts/press.mjs verify muh handoff` before claiming a reviewed milestone. It fails for stale
   runtime inputs/build/evidence, missing review areas/views, open blocking findings,
   unassessed inherited lessons or unaccounted project feedback. It returns
   ready-for-greg-review, never customer approval, publication readiness or a quality score.

Review code, content and visual composition separately. Each area records reviewer,
result (pass only after review), observations and actual evidence file references.
Content review must assess offer clarity, concrete CTA, truthful claims, repetition and
page-specific information value. Visual review must compare related sections across pages:
shared edges, type roles, copy measure, spacing roles, rules, image treatment and exceptions.
Check keyboard/focus, disclosures, no-JS and narrow enlarged text in the relevant code/UI
review. A named skill or subagent is not itself review evidence; record observed results.

Each visual view records route, width, textScale, observation and evidence (path/sha256).
The existing final acceptance widths are 390/768/1440/1920 at scale 1 and 320 at scale 2,
for every planned page. All built HTML routes must appear in the contract, including custom error pages and
redirect pages (file-style HTML names are normalized to trailing-slash route identifiers).
The records attest to actual inspection; a script cannot see
whether the agent actually inspected them. Full/viewport and combined-focus evidence
remain required by DESIGN where applicable. Record extra evidence in the visual area.

Each inherited learning has id, result (applied/not-applicable) and reason. Recurrence
requires a finding and correction, not an unexplained not-applicable label. Each own
feedback record has id, result (resolved/follow-up) and reason; resolved needs implementation
plus evidence. Follow-up references an open findingId. Findings record id, observation,
severity (blocking/nonblocking), status (open/resolved). Resolved needs evidence; open
nonblocking needs a limitation reported to Greg. Never downgrade a required fix to pass.

Runtime/test changes invalidate technical verification. Documentation/brief/design/feedback
changes invalidate the review decision fingerprint; refresh the affected manual review and
run check:handoff, without rebuilding unchanged application code. Runtime content belongs
in src/public, not docs: the fingerprint excludes documentation, skills, dependency/output
folders and local evidence. A changed runtime input requires a new final verification;
during construction continue to use the smaller affected checks.

The handoff check is a reproducible command gate, not a security boundary: local records
are editable, observations still need judgment, and it cannot prevent an agent from sending
a premature chat reply. Project instructions require the command and an honest result.
A skipped/unavailable browser is not made available by the gate; review actual logs and
state missing coverage. Publish only with separate authorization.

## Shared design responsibility · 2026-09-14

Apply AGENTS.md's default design responsibility in every generated project, regardless
of tier. Review grouping, usable text width and neighboring section boundaries before
adjusting spacing. Customer composition follows the brief; demo layouts are examples.
For an explicitly agreed pilot, review the representative pages before propagating the
direction. Record user corrections, recurring causes and production/system/review time
in the existing EOD. Use unknown for unmeasured time. No additional scoring system.

## Gemeinsame Werkzeuge · 05.10.2026

Die allgemeinen Prüfscripte und Skills liegen einmal im separaten Repository `website-press`. Dieses Projekt enthält Quellen, Konfiguration und projektspezifische Tests. Native Befehle (`pnpm run check`, `pnpm run build`, `pnpm run preview`) funktionieren im Website-Ordner; die Vorschau nutzt Astro.

Aus dem Root der Website-Presse: `node scripts/press.mjs verify muh technical`. Für strukturierte Design-/Übergabeprüfungen die Modi `plan`, `feedback` und `handoff` verwenden. Projekt-ID und tatsächlicher Ordner werden im Register und in dessen ignorierter lokaler Pfadzuordnung geführt; keine persönlichen Werkzeugpfade in diesem Projekt. Allgemeine Werkzeugtests laufen einmal in website-press.

Die früheren Script-/Skill-Kopien sind unter ignorierter `.local-work/tooling-before-centralization-2026-10-05/` gesichert. Historische Prüfberichte beschreiben den damaligen Ablauf. Neue technische Nachweise binden die zentrale Werkzeugversion; alte Belege werden nicht als neuer Prüferfolg übernommen. Kundendesign, Inhalte, Browser-/Inhaltstests und menschliche Freigaben bleiben erhalten.
