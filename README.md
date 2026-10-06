# MUH – Homepage-Präsentationsentwurf

Arbeitsstand: 06.10.2026. Einziger aktiver Codeordner: `website/`. Aktuelle Prüfung und offene Punkte: [Übergabe](website/docs/HANDOFF.md).

Ausschließlich die Homepage, ohne Deployment. Erstellt aus Gregs technischem Astro-Starter, Revision 8773fe5. Konzeptfreigabe und Erlaubnis für Beispielinhalte: 16.09.2026. Die Abnahme des umgesetzten Designs steht aus.

## Lokal ansehen

Zuerst `cd website`; native pnpm-Befehle laufen dort. Die unten genannten Anwendungspfade sind relativ zu `website/`. Gemeinsame Prüfungen laufen im Root der Website-Presse.

Node 24.19.x. Die bereits vorhandenen, kompatiblen Abhängigkeiten wurden aus der lokalen Gruppe2000-Arbeitsumgebung kopiert, ohne Paketinstallation oder Versionswechsel.

- `pnpm run dev --host 127.0.0.1 --port 4236` – Entwicklung
- `pnpm run build` – statische Homepage bauen
- `pnpm run preview --port 4235` – gebaute Präsentation ansehen
Aus dem Root der Website-Presse:

```sh
node scripts/press.mjs verify muh technical
node scripts/press.mjs verify muh handoff
```

Die ursprünglichen Paketdefinitionen und das Lockfile des Starters bleiben erhalten. Auf einem anderen Rechner vor einer Installation die dort geltenden Freigaberegeln beachten.

## Inhalte ersetzen

`src/content/site.ts` enthält Einsatzbereiche, Planungsleistungen, Projektbeschreibungen, Musterstimmen und Dummy-Kontakte. Texte der section introductions liegen in den jeweils kleinen `src/components/sections/*.astro`.

- Zwei Stimmen sind ausdrücklich frei formulierte Muster ohne echte Absender.
- Drei Projektbeschreibungen sind Beispiele; Projektfotos sind laut Greg echte freigegebene Arbeiten.
- `hallo@muh.example.com` ist eine reservierte Beispieldomain. Die Beispielnummer ist nicht wählbar.
- Erst nach Lieferung und Prüfung der echten Inhalte die jeweiligen Musterhinweise entfernen und den Telefonlink aktivieren.
- Vor Veröffentlichung fehlen außerdem vollständige Unternehmens-/Rechtsangaben, bestätigte Domain und separate Veröffentlichungsfreigabe.

Die Seite bleibt noindex. Keine Formulare, Tracker, extern geladenen Fonts oder Laufzeitdienste. Native Navigation funktioniert ohne JavaScript; ein kleiner Zusatz schließt das Mobilmenü nach Linkwahl und mit Escape.

## Quellen und Gestaltung

Echtes Logo und Fotos aus `/Volumes/Greg Worxx/Martin/muh/media-images.zip`. Rohtext aus `Site_Martina/home/home.txt`. Auswahl und Rolle der Bilder: `docs/ASSETS.json`. Einige Projektfotos sind nur 800px breit; auf hochauflösenden Displays bleibt ihre Detailauflösung begrenzt.

[Source Sans 3 von Adobe](https://github.com/adobe-fonts/source-sans) wird lokal eingebunden; Lizenz unter `public/fonts/SourceSans3-LICENSE.md`.
Brikly-Bibliotheksausschnitte dienten als Kompositionsreferenz; Gruppe2000 V3 nur als Qualitätsmaßstab. Master-Starter und bestehende Kundenprojekte wurden nicht geändert.

Prüfstatus und Grenzen: `docs/HANDOFF.md`, maschinenlesbar in `docs/REVIEW.json`. Tatsächliche Greg-Nacharbeit ist noch nicht gemessen; das Ziel von maximal sechs aktiven Stunden ist nicht als erreicht ausgewiesen.

## Gemeinsame Werkzeuge · 05.10.2026

Die allgemeinen Prüfscripte und Skills liegen einmal im separaten Repository `website-press`. Dieses Projekt enthält Quellen, Konfiguration und projektspezifische Tests. Native Befehle (`pnpm run check`, `pnpm run build`, `pnpm run preview`) funktionieren im Website-Ordner; die Vorschau nutzt Astro.

Aus dem Root der Website-Presse: `node scripts/press.mjs verify muh technical`. Für strukturierte Design-/Übergabeprüfungen die Modi `plan`, `feedback` und `handoff` verwenden. Projekt-ID und tatsächlicher Ordner werden im Register und in dessen ignorierter lokaler Pfadzuordnung geführt; keine persönlichen Werkzeugpfade in diesem Projekt. Allgemeine Werkzeugtests laufen einmal in website-press.

Die früheren Script-/Skill-Kopien sind unter ignorierter `.local-work/tooling-before-centralization-2026-10-05/` gesichert. Historische Prüfberichte beschreiben den damaligen Ablauf. Neue technische Nachweise binden die zentrale Werkzeugversion; alte Belege werden nicht als neuer Prüferfolg übernommen. Kundendesign, Inhalte, Browser-/Inhaltstests und menschliche Freigaben bleiben erhalten.

## Originalmaterial

Lokale Bildauswahl und Studien bleiben unter `quellen/`; die frühere Root-Anleitung ist in der lokalen Arbeitsablage gesichert. Externe Originalablage: `/Volumes/Greg Worxx/Martin/muh/`.

## Projektstruktur · 05.10.2026

Genau eine ausführliche README und eine .gitignore liegen in der Git-Projektwurzel. `website/` ist der einzige aktive Codeordner. Quellen, Archive, Vergleichsstände, Abhängigkeiten, Builds und lokale Prüfnachweise bleiben ignoriert. Allgemeine Werkzeuge und Skills liegen zentral in Website-Presse. Bei unklarem Umfang vor Änderungen Greg fragen.

## Paketmanager · 05.10.2026

Standard ist pnpm 11.19.0, festgelegt in `website/package.json`. `website/pnpm-lock.yaml` wird versioniert; nach freigegebener Installation `pnpm install --frozen-lockfile` verwenden. Falls der lokale pnpm-Befehl eine andere Version startet, kann vorhandenes Corepack mit `corepack pnpm` die festgelegte Version wählen. Alte npm-Lockfiles und Installationen bleiben ausschließlich in der ignorierten `website/.local-work/pnpm-migration-2026-10-05/`. Datierten Prüfberichten bleiben ihre damaligen Befehle erhalten. Allgemeine Prüfungen starten zentral und wählen pnpm aus dem Manifest. Die Einstellungen in `website/pnpm-workspace.yaml` erlauben nur die benötigten esbuild-/sharp-Buildscripts und verhindern eine implizite Installation durch Prüfbefehle.

## Ordnerübersicht · geprüft 06.10.2026

| Ort | Zweck | Git |
| --- | --- | --- |
| `website/` | Aktuelle Homepage, Konfiguration, Tests und Projektdokumentation | Quellen versioniert |
| `quellen/` | Originalmaterial, Bildauswahl und lokale Studien | Ignoriert |
| `archiv/` | Nicht mehr aktive Dateien | Ignoriert |
| `website/.local-work/` | Prüfnachweise und gesicherte frühere Werkzeuge/npm-Installation | Ignoriert |
| `website/node_modules/` | Aktive pnpm-Abhängigkeiten | Ignoriert |
| `website/dist/`, `website/.astro/` | Generierte Ausgaben | Ignoriert |

Wie bei Gruppe2000 dürfen ignorierte lokale Dateien erhalten bleiben. Genau eine aktive Root-README, Root-.gitignore und Root-.git; keine aktiven Kopien zentraler Werkzeuge. 20 ungenutzte Bilder aus public/images liegen jetzt unter `archiv/unused-media-2026-10-06/`. Herkunftsnachweise bleiben in ASSETS.json erhalten. Archive und Quellen sind kein externes Backup.
