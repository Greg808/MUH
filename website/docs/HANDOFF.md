# MUH · aktueller Stand · 06.10.2026

## Tagesabschluss · 06.10.2026 · maßgebliche Zusammenfassung

**Umgesetzt:** Homepage-Texte aus Martina-Unterlagen überarbeitet; acht Leistungsseiten mit Privat-/Gewerbenavigation, Leistungsicons und Originalfotos umgesetzt. Native Masonry-Galerien mit gleichen Bildabständen und ohne sichtbare Bildunterschriften; Alt-Texte erhalten. Geschäftslokale ist laut dokumentierter Rückmeldung von Greg akzeptiert. Die sieben übrigen Seiten und die abschließende Galeriegestaltung stehen zur Beurteilung offen.

**Späterer lokaler Arbeitsstand:** Marken-/Favicon-Grundlagen sind in `1a4f324` enthalten. Danach wurden Icon-Dateien und Markenvorlagen erneut geändert; BaseLayout ergänzt Social-Metadaten und Icon-/Manifestverweise, ServicePage verwendet seitenspezifische Social-Bilder. Neun PNGs unter `public/social/` und `src/pages/site.webmanifest.ts` sind neu und unversioniert. Diese Ergänzungen sind vorhanden, aber in diesem Abschluss weder technisch neu geprüft noch visuell abgenommen.

**Prüfnachweise:** Der bestehende technische Beleg dokumentiert erfolgreiche Feedback-Prüfung, Astro check, Build, 48/48 Chromium-Fälle und Screenshot-Aufnahme für den früheren Seiten-/Galeriestand. Die damalige Eigenprüfung ist unten mit Ansichten und Grenzen beschrieben. Laufzeitänderungen danach erfordern gemäß WORKFLOW eine neue technische Verifikation und passende Eigenprüfung; der alte Beleg ist keine aktuelle Freigabe des gesamten Arbeitsstands. Im Tagesabschluss wurden Dokumentation, Quelldiff, vorhandene Prüfnachweise und Git-Status gelesen; keine Builds, Browserprüfungen oder Handoff-Freigabe neu ausgeführt.

**Versionskontrolle und Sicherung:** Branch `main`, HEAD `1a4f324` (`seo optimization`). Homepage `f8abca5`, Leistungsseiten `09e4668`, Dokumentation `df31b46`. HEAD und der lokal gespeicherte Remote-Tracking-Stand `origin/main` sind identisch (0 voraus / 0 zurück); GitHub wurde nicht frisch abgefragt. Die früheren Aussagen „kein Push“ beschreiben ihre damaligen Schritte und sind kein aktueller Remote-Nachweis. Elf bereits versionierte Dateien sind geändert, dazu kommen die neun Social-PNGs, das Manifest und diese Abschlussnotiz. Kein Commit oder Push während dieses Abschlusses. Ignorierte Quellen, Archive und Prüfbelege bleiben lokal; ein aktuelles externes Backup wurde nicht nachgewiesen.

**Offen:** Gregs Beurteilung der sieben Seiten/Galerien; aktuelles Angebot und abgeleitete Haus-/Bürotexte bestätigen; echte Kontakte, Kundenstimmen und konkrete Projektleistungen ergänzen. Domain und Unternehmens-/Rechtsangaben bleiben vor einer separat beauftragten Veröffentlichung zu klären. Kleine Originalbilder begrenzen die Detailauflösung. Vollständige neue Safari-/Firefox-Abdeckung fehlt. Noindex bleibt aktiv; Veröffentlichung ist weiterhin nicht beauftragt. Arbeits-/Nacharbeitszeiten wurden nicht gemessen.

**Nächster Einstieg:** Zuerst den uncommitteten Social-/Icon-/Manifeststand prüfen und dessen Nachweise aktualisieren; anschließend Gregs Seitenbeurteilung und konkrete Korrekturen aufnehmen. Vor einem weiteren Commit Änderungen und Prüfung zusammenfassen. Fehlende Kundenfakten und Veröffentlichung bleiben im bestehenden TODO, ohne neue Infrastruktur- oder Bereinigungsarbeiten.

Die folgenden Abschnitte sind detaillierte Nachweise früherer Arbeitsschritte. Für aktuellen Prüf-, Git- und Abnahmestatus gilt die Zusammenfassung oben.

## Masonry ohne Bildunterschriften · aktueller Auftrag

Alle acht Leistungsseiten zeigen ihre Originalfotos in der vorhandenen nativen Masonry-Galerie: eine Spalte auf Mobil, zwei ab 640px und drei ab 1200px. Horizontaler und vertikaler Abstand verwenden denselben Gutter. Sichtbare Bildunterschriften auch unter den Hauptbildern entfernt; beschreibende Alt-Texte erhalten. Nicht mehr benötigte Caption-Felder und CSS entfernt. Farben, Schrift und Originalproportionen bleiben erhalten. Diese Entscheidung ersetzt die früheren Caption-Vorgaben für die Leistungsseiten.

Aktueller technischer Lauf: Check, Build, 48/48 Chromium-Fälle und Screenshot-Aufnahme bestanden. Tatsächlich gesichtet: alle acht Galerien bei 390/768/1440/1920px und 320px mit 200% Schrift; zusätzlich Wohnung-Hauptbild und Live-Galerie bei 1261/390px. Vollständige Bilder, gleiche Abstände und keine Untertitel. Die fünf Homepage-Aufnahmen sind bytegleich zum zuvor gesichteten Stand. Unveränderte übrige Abschnitte bleiben durch die vorangegangene Seitenprüfung belegt; keine neue vollständige Sichtung dieser Abschnitte behauptet. Temporären Browser-Viewport zurückgesetzt. Aktuelle Beobachtungen und Vorschau: `.local-work/review/masonry-without-captions-2026-10-06/observations.md` und `desktop.png`; REVIEW.json bindet den aktuellen Prüfstand.

Änderungen lokal committed: Homepage-Texte in `f8abca5`, Leistungsseiten einschließlich Navigation, Galerie, Bildern und Tests in `09e4668`; der zugehörige Dokumentationscommit enthält diesen aktualisierten Stand. Keine Veröffentlichung, kein Push oder externes Backup. Vorschau auf Port 4236. Nächster Schritt: Gregs Beurteilung der Galerie und der sieben zuletzt umgesetzten Seiten. Die unten dokumentierten offenen Kundenfakten und Browsergrenzen bestehen weiter.

## Acht Leistungsseiten · aktueller Stand

Greg hat Geschäftslokale mit „passt“ akzeptiert und alle übrigen Seiten zusammen beauftragt; die frühere Einzelabnahme ist für diesen Schritt überholt. Wohnung, Haus, Badezimmer, Terrasse, Büro, Hotelzimmer und Gastronomieküchen sind umgesetzt und über Privat/Gewerbe auf Desktop, Mobil und im Footer erreichbar. Eigenständige Texte aus Site_Martina und home.txt; die leeren Haus-/Bürodateien aus den belegten allgemeinen Leistungen ergänzt. Die freigegebene Geschäftslokale-Komposition wird mit gemeinsamen Astro-Komponenten und typisierten Inhalten wiederverwendet. Farben, lokale Schrift, Spalten-/Abstandsrollen, Kontakt und Homepage-Gestaltung erhalten. Keine neue Bibliothek oder Interaktion.

35 passende Originalfotos für die sieben neuen Seiten ausgewählt, 70 responsive WebP-Dateien mit tatsächlich zutreffenden Größen exportiert. Originale unverändert; keine Vergrößerung, Retusche, neuen KI-/Stockbilder oder erfundenen Projektleistungen. Natürliche Bildproportionen, beschreibende Alt-Texte, lokale Leistungsicons und native Masonry-Spalten auf allen acht Unterseiten. Quellen, SHA-256 und Transformationen in ASSETS.json.

Technische Prüfung: Astro check mit 49 Dateien ohne Fehler/Warnungen/Hinweise, Build mit neun Routen, 48/48 Chromium-Fälle bestanden; keine übersprungenen, fehlgeschlagenen oder instabilen Fälle. Die Unterseitenprüfung erfasst Navigation, Bilder, Kontaktanker, Inhaltskanten und tatsächliche Galeriespalten an 14 Breiten von 320–1920px samt Breakpoint-Nachbarn; 320px mit 200% Schrift zusätzlich. Ganzseitenbelege für alle neun Routen an fünf Ansichten. Bei der Sichtung fiel eine Chromium-Aufnahmeauslassung bereits geladener Bilder in CSS-Spalten auf; die Aufnahme verwendet jetzt einen vollständig sichtbaren Seitenbereich im isolierten Testkontext. Vorschau und Anwendung bleiben dabei unverändert. Aktuelle technische Quittung und Sichtungsnachweise: .local-work/handoff/technical.json und .local-work/review/remaining-pages-2026-10-06/. Maßgebliche Eigenprüfung in REVIEW.json; die sieben neuen Seiten sind noch nicht von Greg akzeptiert.

Vorangegangene visuelle Eigenprüfung der Seitenumsetzung: alle neun Routen vollständig auf Desktop (1440px), Mobil (390px) und in schmalen Ansichten mit 200% Schrift (320px) über lesbare Bildstreifen gesichtet; Tablet (768px) und breiter Desktop (1920px) als Gesamtkomposition geprüft. Live-Vorschau mit Hotelzimmer und geöffnetem Gewerbemenü zusätzlich geprüft, Escape/Fokus bestätigt. Beobachtungen in `.local-work/review/remaining-pages-2026-10-06/observations.md`; damaliger Screenshot `final-hotel-navigation.png`. Die aktuelle Galerieprüfung ersetzt deren Caption-/Galeriebeurteilung. Eigenprüfung durch den Autor, keine unabhängige Review oder Kundenabnahme.

Offen: Aktuelles Leistungsangebot bestätigen, besonders Haus/Büro mit leeren Einzelvorlagen; konkrete MUH-Aufgaben zu den Fotos fehlen. Einige Originale sind nur 384–800px breit und bleiben entsprechend begrenzt. Bestehende Kontakt-/Stimmen-/Projektmuster und noindex bleiben erhalten. Neue vollständige Safari-/Firefox-Abdeckung fehlt. Keine Veröffentlichung beauftragt. Nächster Schritt ist Gregs Beurteilung der sieben neuen Seiten und Ergänzung der fehlenden Kundenfakten.

Versionskontrolle: Greg hat die Commit-Erstellung beauftragt. Homepage-Texte sind in `f8abca5`, alle acht Leistungsseiten mit Home-/Navigations-/Galerie-/Iconintegration und Tests in `09e4668` festgehalten. Diese Dokumentation wird in einem eigenen Commit versioniert; bisherige Wartungs-/Bereinigungscommits `b1f231f` und `51af020` bleiben erhalten. Lokale Prüfnachweise bleiben ignoriert, kein Push oder externes Backup. Dev-Server bleibt auf http://127.0.0.1:4236/ verfügbar. Originalquellen und aktives Git erhalten.

---

## Frühere Arbeitsschritte · durch den aktuellen Stand ersetzt

### Leistungsicons · vorheriger Arbeitsschritt

Gregs Browserkommentar: passende Icons für alle Punkte im Leistungsumfang. Alle elf Listeneinträge auf Geschäftslokale mit je einem fachlich passenden Lucide-SVG ergänzt. Typisierte Zuordnung im Inhalt, native Astro-SVG-Ausgabe; dekorative Icons für Assistenztechnik verborgen, Listensemantik erhalten. Einheitlich neben der ersten Textzeile, bestehendes Marken-Grün und Schrift. Natürliche Textumbrüche; auf sehr schmalen Ansichten dieselbe automatische Silbentrennung wie bei den übrigen Texten. Kein Laufzeit-JavaScript oder neues Paket. Original-SVGs, Quellrevision und Lizenz lokal erhalten; Lizenz auch im Build ausgeliefert.

Astro check (30 Dateien) und Build erfolgreich; 32/32 vorhandene Browserfälle bestanden. Nach der kleinen Ergänzung der schmalen Silbentrennung Build und gezielte 320px/200%-Prüfung bestanden. Desktop (1261px), Tablet (768px), Mobil (390px, alle drei Gruppen) und breiter Desktop (1920px) tatsächlich gesichtet; 320px/200%-Screenshot des längsten Leistungsblocks gesichtet. Viewport zurückgesetzt. Nachweise: `.local-work/review/business-icons-2026-10-06/desktop-icons.png` und `narrow-200.png`. Keine neue Safari-/Firefox-Prüfung oder Abnahme durch Greg. Änderungen lokal und noch nicht committet. Geschäftslokale bleibt zur Beurteilung offen; keine nächste Unterseite begonnen.

## Projektgalerie · vorheriger Arbeitsschritt

Greg beauftragt weitere repräsentative Originalfotos aus media-images und eine Masonry-Galerie oder vergleichbare Anordnung für Geschäftslokale. 25 allgemeine/gewerbliche Kandidaten und 14 fertige Büroaufnahmen gesichtet; Auswahl auf Verkaufs- und Beratungsräume sowie deren Geschäftsfront beschränkt. Büro-Flur nicht eingebaut. Vier Originale ergänzt: renovierung5.jpg, gewerblicherenovierung.jpg, renovierung22.jpg, renovierung26.jpg. Zusammen mit den zwei vorhandenen Fotos sechs Aufnahmen. Kein Stockmaterial oder generiertes Bild. Originale auf Quellplatte unverändert.

Galerie mit nativen CSS-Spalten: eine unter 640px, zwei ab 640px, drei ab 1200px; Bild und Caption bleiben ungeteilt. Natürliche Bildproportionen, bestehende Radien und Abstände erhalten. Responsive WebP-Varianten über bereits installiertes sharp erstellt, ohne Vergrößerung, Beschnitt oder Retusche. Kleinere Originale (533px breite Hochformate) mit korrekten srcset-Deskriptoren; Herkunft, SHA-256 und Exportgrößen in ASSETS.json. Tatsächliche Galeriegröße statt früherer Zweispalten-Größenangabe. Keine neue Bibliothek oder Galerie-JavaScript.

Bei Sichtprüfung kamen die neuen Scoped-CSS-Regeln der Route nicht in der Vorschau an; im damaligen Build fehlten die Seitenregeln ebenfalls. Seiten-CSS jetzt als business-premises.css ausdrücklich importiert und durch die Seitenklasse begrenzt; bisherigen Style-Block entfernt. Die technische Prüfung kontrolliert jetzt auch tatsächliche Bildspalten, ungeteilte Figures und Originalproportionen, sodass eine versehentlich einspaltige Galerie nicht mehr als Erfolg zählt.

Prüfung: Astro check ohne Fehler/Warnungen/Hinweise, Build mit zwei Routen und 32/32 Chromium-Browserfälle bestanden. Spalten, Bildladung und Bild-/Caption-Geometrie bei zwölf Breiten von 320–1920px geprüft, einschließlich 639/640 und 1199/1200. Alle sechs Bilder im Seitenkontext auf Desktop und während mobilen Leseflusses tatsächlich gesichtet; Zweispaltenansicht 640px und Dreispaltenansicht 1200px gesichtet. Viewport zurückgesetzt. Nachweis: `.local-work/review/business-gallery-2026-10-06/desktop-gallery.png`; Vorauswahl/Quellprüfung im selben Ordner. Keine neue Safari-/Firefox-Prüfung oder Abnahme durch Greg. Teilweise nur 533–800px breite Originale begrenzen die Detailauflösung auf großen/hochauflösenden Displays.

Änderungen lokal, noch nicht committet. Konkrete Projektleistungen weiterhin offen; neutraler Bildtext bleibt erhalten. Keine weiteren Unterseiten, Veröffentlichung oder externes Backup in diesem Schritt.

## Navigation · vorheriger Arbeitsschritt

Greg hat die Gliederung anhand von Site_Martina freigegeben: Privat (Wohnung, Haus, Badezimmer, Terrasse), Gewerbe (Geschäftslokale, Büro, Hotelzimmer, Gastronomieküchen), So arbeiten wir und Projekte. Die zuvor ergänzte flache Mischung aus Startseite/Geschäftslokale/Privat & Gewerbe/Leistungen ist verworfen und ersetzt.

Umgesetzt: zwei native Details-Untermenüs auf Desktop, dieselben Gruppen im vorhandenen mobilen Details-Menü, konsistente Gruppen im Footer. Das Logo führt zur Startseite. Beide Gruppen enthalten ihre vorhandene Homepage-Übersicht; nur Geschäftslokale ist bislang als fertige Unterseite verlinkt. Keine ungebauten oder deaktivierten Seitenziele. Eigene Sprungziele #privat/#gewerbe an den bestehenden Zielgruppenbereichen; sonstige Homepage-Komposition erhalten. Aktive Unterseite und zugehörige Gruppe sichtbar markiert. Menüinhalt einmal im typisierten Inhaltsmodul; identische Desktop-/Mobil-Ausgabe über NavigationItems. Native Öffnung und Gruppenausschluss ohne Laufzeitbibliothek; vorhandene JS-Ergänzung schließt mit Escape (Fokus zurück), nach Linkwahl und bei Klick außerhalb.

Prüfung: Astro check mit 29 Dateien ohne Fehler/Warnungen/Hinweise, Build mit zwei Routen, 32/32 Chromium-Browserfälle bestanden. Geschlossene/geöffnete Gruppen, Tastatur/Fokus, Escape in beiden Ebenen, Klick außerhalb, Linkziele, no-JS und Untermenükanten bei 320/390/768/899/900/1199/1200/1440/1920 geprüft. Desktop und Mobilmenü/Footernavigation tatsächlich gesichtet, Menü-Übergang 768/900 sowie breite Ansichten und 320px/200%-Schrift gesichtet. Temporärer Viewport zurückgesetzt. Sichtung ist keine Abnahme durch Greg; Safari/Firefox nicht neu geprüft. Nachweise: `.local-work/review/business-premises-2026-10-06/grouped-navigation.png`, `grouped-mobile.png`; vergrößerte Ansicht im Test-Ausgabeordner.

Änderungen lokal und noch nicht committet. Keine weiteren Unterseiten umgesetzt; Stopp zur Beurteilung bleibt bestehen. Nächster Schritt: Gregs Beurteilung von Geschäftslokale, danach nächste Unterseite mit ihrem Link in Gewerbe.

## Erste Unterseite · Geschäftslokale · aktueller Arbeitsschritt

Route `/geschaeftslokale/` anhand von Site_Martina/Geschäftslokale umgesetzt: Einstieg mit Originalfoto, Anforderungen des Betriebs, konkreter Leistungsumfang, zwei Original-Projektaufnahmen und vorhandener Kontaktabschnitt. Farben, Schriften und gemeinsame Layout-Komponenten beibehalten. Header-Verweise führen von Unterseiten zur passenden Homepage-Sektion; Footer erschließt die erste Unterseite. Zwei archivierte responsive Fassadenbilder wieder aktiviert; Archivkopien bleiben erhalten. Keine neuen Abhängigkeiten oder Interaktionsbausteine.

Gregs Vorgabe: nach jeder Seite zur Beurteilung stoppen. Geschäftslokale ist implementiert, noch nicht von Greg abgenommen. Weitere Seiten wurden nicht umgesetzt. Nächster Schritt nach Rückmeldung: Geschäftslokale korrigieren oder Hotelzimmer beginnen. Echte Kontakte und bestätigte Projektleistungen fehlen; noindex und Musterhinweise bleiben erhalten. Das historische Leistungsangebot muss vor Veröffentlichung bestätigt werden.

Prüfung: Astro check (28 Dateien) ohne Fehler/Warnungen/Hinweise; Build mit zwei Routen erfolgreich; 28/28 Chromium-Browserfälle bestanden. Navigation, Bildladen, Inhaltskanten/Overflow an zehn Breiten (320–1920px), 320px mit 200% Schrift und mobiles Menü/Escape geprüft. Desktop (1440px), Tablet (768px) und Mobil (390px) tatsächlich gesichtet; zusätzlich 320px/200%-Screenshot des Anforderungsabschnitts angesehen. Keine vollständige Safari-/Firefox-Prüfung und keine Designabnahme durch Greg. Temporärer Browser-Viewport zurückgesetzt; Dev-Server auf Port 4236 bleibt verfügbar. Screenshot: `.local-work/review/business-premises-2026-10-06/desktop.png`.

Homepage-Inhalte und erste Unterseite sind lokale, noch nicht committete Änderungen. Letzte tatsächliche Commits: b1f231f und 51af020. Kein Push oder Deployment.

## Inhaltsüberarbeitung · vorheriger Arbeitsschritt

Hero-Einleitung, Privat-/Gewerbeansprache, Planung, Leistungsgruppen und Kontakt überarbeitet. Quelle: Site_Martina/home/home.txt (Originalunterlagen der Vorgängerin). Konkrete Tätigkeiten und Anlässe übernommen, Wiederholungen und unbelegte Qualitäts-/Umsatz-/Wertversprechen ausgeschlossen. Die Quelle beschreibt das frühere Angebot; aktuelle Gültigkeit der Einzelleistungen vor Veröffentlichung bestätigen. Farben, Schriften, Abschnittsfolge, Bilder und Musterkennzeichnungen erhalten.

Astro check ohne Fehler/Warnungen/Hinweise; aktueller Build und 26/26 Chromium-Browsertests bestanden. Planung/Leistungen auf Desktop (1440px), Zielgruppen/Planung/Leistungen/Kontakt auf Mobil (390px) tatsächlich gesichtet; keine neue vollständige Whole-site-Abnahme. Temporäre Viewport-Einstellung zurückgesetzt; Dev-Server auf Port 4236 erhalten. Änderungen dieses Schritts lokal, noch nicht committet; Wartung/Bereinigung bereits in b1f231f und 51af020 committed.


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
