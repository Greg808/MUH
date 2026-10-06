# MUH · aktueller Wartungsstand · 06.10.2026

Maßgeblich ist dieser Einstieg. Der folgende Stand vom 16.09. dokumentiert die historische Entwurfsarbeit und damalige Prüfungen, keinen aktuellen vollständigen Designreview.

## Umgesetzt

- Drei alte Root-Git-Metadatenordner nach ausdrücklicher Freigabe gelöscht: `.git 13.16.33`, `.git 13.18.34`, `.git 13.21.37`. Zwei enthielten keinen Commit; der weitere Erstcommit hatte denselben versionierten Dateibaum wie das aktive Repository. Aktives `.git`, Branch `main`, Commit `2448d9c` erhalten.
- Testserver verwendet Astros vorhandenes `--ignore-lock`, wie Gruppe2000. Tests laufen auf separatem Port auch bei geöffneter Projektvorschau.
- Responsive Größenangaben der zwei gleich breiten Projektbilder korrigiert; native automatische Größenwahl für lazy Bilder mit breitenabhängigem Fallback. Gestaltung und Inhalte erhalten.
- Regression prüft linke und rechte Inhaltskanten von Header, allen Abschnitten und Footer bei 320/390/639/640/768/899/900/1264/1440/1920px. Gruppe2000-Erkenntnis konkret im bestehenden MUH-Test angewendet; keine neuen Werkzeuge.
- Feedback und Aufgabenliste aktualisiert. Privat und Gewerbe bleiben gleichwertig; frühere Gewerbepriorität ist historisch überholt.

## Projektordner-Bereinigung · 06.10.2026

Grundstruktur vom 05.10. gegen Gruppe2000 bestätigt. 20 ungenutzte alte Hero-/Projektbilder unverändert aus public/images nach archiv/unused-media-2026-10-06/ verschoben; Herkunft in ASSETS.json aktualisiert. Root-README erklärt aktive Quellen, Archiv und ignorierte generierte/lokale Dateien. Keine Originalquellen oder Prüfnachweise gelöscht.

## Tatsächliche Prüfung

- `pnpm run check`: 26 Dateien, 0 Fehler, Warnungen oder Hinweise.
- `pnpm run build`: eine statische Route erfolgreich gebaut.
- `pnpm run test:e2e`: 26/26 Chromium-Fälle bestanden, während die eigene MUH-Vorschau auf Port 4235 lief. Kein Preview-Konflikt mehr.
- `git diff --check` bestanden; kleiner Diff geprüft. Kein neues JavaScript, keine Installation, kein Versionswechsel.
- Desktop-Projektabschnitt in frischer Vorschau gesichtet. Keine vollständige neue Whole-site-, Safari-/Firefox- oder mobile Sichtabnahme. Kantenmessung und bestehende mobile Verhaltenstests sind technische Nachweise, keine Designabnahme.

## Offen und nächster Schritt

Original-Leistungsumfang systematisch mit der aktuellen Gliederung abgleichen. Preline-Altbestand separat mit Manifest/Lockfile bereinigen. Echte Kundenstimmen, bestätigte Projekttexte und Kontaktdaten fehlen weiterhin; Musterkennzeichnung und noindex bleiben aktiv. Veröffentlichung und Rechtsangaben bleiben im bisherigen späteren Umfang. Keine neue Designabnahme behauptet.

## Versionskontrolle

Die Wartungs- und Bereinigungsänderungen werden auf Gregs Auftrag vom 06.10. in zwei lokalen Commits festgehalten: technische Wartung sowie Medienbereinigung/Dokumentation. Kein Push, Deployment oder neues externes Backup. Die entfernten Git-Ordner waren unversionierte Altbestände; die bestehende Git-Historie bleibt erhalten. Archivierte Bilder sind zusätzlich über den vorherigen Commit 2448d9c wiederherstellbar; das lokale Archiv selbst bleibt ignoriert.

---

## Historie · durch den aktuellen Einstieg ersetzt

# MUH · Erstentwurf V1 · 16.09.2026

Vollständige Homepage für die Designpräsentation. Lokale Vorschau: http://127.0.0.1:4235/ . Keine Unterseiten oder Veröffentlichung.

## Umgesetzt

Eigene grüne MUH-Gestaltung mit Original-Logo, echten Projektbildern und gekennzeichnetem KI-Hauptbild; Privat- und Gewerbekunden gleichwertig. Einstieg, zwei gleich große Zielgruppenbereiche, Planung/Koordination, Altbau-Vergleich und zwei Projektbeispiele, zwei Musterstimmen, Leistungsüberblick, Kontakt und Footer. Mobile Sprungnavigation. Lokale Schrift und responsive WebP-Bilder. Astro-Starter und vorhandene Komponenten wiederverwendet.

Geänderte Bereiche: src/pages/index.astro, src/content/site.ts, src/components/sections/, SiteHeader/SiteFooter, src/styles/, BaseLayout, ButtonLink, public/images/fonts/favicon und projektspezifische Browserprüfungen. Keine Änderungen an Master-Starter, Gruppe2000 oder Originalmaterial.

## Prüfung

- Astro check: 0 Fehler, Warnungen oder Hinweise.
- Statischer Build: genau eine Seite.
- 24/24 Browserfälle bestanden; keine übersprungenen oder instabilen Fälle.
- Finale Screenshotprüfung bestanden; Desktop 1440/1920, Tablet 768, Mobil 390 und 320 mit vergrößerter Schrift tatsächlich angesehen.
- Jede Sektion auf Desktop/Mobil, gesamter Lesefluss, Tastatur, no-JS, reduzierte Bewegung, Bildausschnitte/2x sowie Druck-CSS geprüft.
- check:handoff: ready-for-greg-review.

Beobachtungen und Korrekturen: .local-work/review/observations.md. Maschinenlesbarer Nachweis: docs/REVIEW.json und .local-work/handoff/technical.json. Technische Prüfung und Eigenprüfung sind keine Designabnahme durch Greg.

## Nachzuliefern

1. Zwei echte Kundenstimmen mit freigegebenem Wortlaut und gewünschtem Absender.
2. Drei bestätigte Projektbeschreibungen: Objekt, Aufgabe und konkret von MUH erbrachte Arbeiten. Erst danach Musterhinweise entfernen.
3. Echte Telefonnummer und E-Mail-Adresse. Die aktuelle Telefonnummer ist absichtlich nicht wählbar.
4. Höher aufgelöste Projektfotos, soweit verfügbar; mehrere Originale haben nur 800px Breite.
5. Unternehmens-/Rechtsangaben und Domain vor einer separat freizugebenden Veröffentlichung.

Kundenstimmen, Projektbeschreibungen und Kontakte sind direkt als Muster/Dummy markiert. Noindex bleibt aktiv.

## Prozessmessung

Gregs aktive Nacharbeit ab Übergabe: noch nicht erfasst. Produktion, Bereinigung und Prüfung nicht lückenlos getrennt gemessen; unbekannt. Interne Sichtkorrekturen vor Übergabe: Container/Bildproportionen, Detailausrichtung und Schmalansicht bei vergrößertem Text. Noch keine nach Übergabe erfolgte Korrekturrunde. Maximal sechs aktive Stunden Gregs Nacharbeit bleibt Ziel, nicht bestätigtes Ergebnis. Kein neues Starter-Feature oder automatische Übertragung von MUH-Designentscheidungen.

## Bilddemo – aktueller Stand

Freigegebenes generiertes Empfangsmotiv im Hero; im Projektbereich KI/Original-Umschaltung mit Regler, Tastatur und Ladefehlerbehandlung. Originalmodus nutzt klassische Ausschnitt-/Perspektiv-/Belichtungskorrektur, keine generierten Pixel. Abgelehntes Büro-Projektbild ersetzt; Abendfassade und originales Wohnungsmotiv eingebunden, Geschäftsraum bereits vorhanden. KI-Bilder können Details verändern und bleiben als solche markiert. Keine Veröffentlichung. Aktuelle Eigenprüfung in .local-work/review/comparison/.

Hero aktualisiert: vollständig generiertes Empfangsmotiv statt KI-bearbeitetem Altbau-Projektfoto. Sichtbare Beschriftung „KI-generierte Illustration“. Der Projektvergleich bleibt unverändert. Hero bei 390/768/1440/1920 und 320 mit 200% Text gesichtet; 22 Browserprüfungen bestanden.

## Gleichwertige Ansprache von Privat und Gewerbe

Hero, Navigation, Zielgruppen, Planung, Leistungen und Kontakt sprechen beide Gruppen an. Zwei gleich große Einstiegskarten und je ein privates/gewerbliches Projektbeispiel sowie eine Musterstimme. Zwei vorhandene originale Wohnungsfotos ergänzt. Farben, Schrift, Hero-Motiv, Sektionsfolge und Vergleich bleiben erhalten. Aktuelle Prüfung: 24 Browserfälle bestanden; Gesamtseite auf Desktop, Tablet und Mobil gesichtet, 320px mit 200% Schrift zusätzlich geprüft. Nachweise: .local-work/review/balanced/.
