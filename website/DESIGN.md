# MUH · freigegebenes Homepage-Konzept · 16.09.2026

Brikly ist Hauptreferenz für Bildgewichtung und Freiraum; keine Kopie des Demo-Heros. Gruppe2000 V3 bleibt Qualitätsreferenz. Helle Oberflächen, echtes MUH-Grün und leicht gerundete Bilder. Keine dekorative Bewegung. Greg hat Konzept und Umsetzung einschließlich Musterinhalten freigegeben, die Designabnahme des Ergebnisses steht aus.

Desktop/Mobil: jede Sektion und Gesamtfluss tatsächlich sichten. Prüfbreiten 390/768/1440/1920 sowie 320px mit 200% Text. Menü, Tastatur, no-JS, reduzierte Bewegung, Kontaktplatzhalter, Print und Bildladung prüfen. Technische Prüfung, eigene Sichtung und Gregs Abnahme getrennt.

```json design-contract
{
  "audience": "Privat- und Gewerbekunden in Wien gleichwertig: Wohnungen und Häuser sowie Geschäftslokale, Büros und Hotels",
  "primaryAction": "Projekt besprechen: Kontaktabschnitt mit gekennzeichneten E-Mail-/Telefon-Dummy-Daten",
  "layout": {
    "container": "1200px maximal; 24px mobile Seitenränder, 16px bei 320px",
    "alignment": "Gemeinsame linke Achsen; zwei gleich große Spalten für Privat und Gewerbe; einspaltig mobil",
    "typography": "Source Sans 3 lokal, 400/500/600/700; H1 38–64px, H2 32–46px, body 18px",
    "spacing": "copy 16px, content 40–56px, columns 32–64px, sections 56–104px",
    "textMeasure": "Hero 19ch heading / 44ch body, long paragraphs 55ch; mobile full content width"
  },
  "patterns": [
    {
      "id": "intro",
      "purpose": "Angebot und Kontakt erklären",
      "rule": "Heller geteilter Hero, links Aussage, rechts von Greg freigegebene KI-generierte Empfangsillustration mit sichtbarer Kennzeichnung; mobile Text vor Bild"
    },
    {
      "id": "audiences",
      "purpose": "Private und gewerbliche Eignung gleichwertig zeigen",
      "rule": "Zwei gleich große offene Bild-/Textgruppen, identische Bildform, gleichwertige Kontaktlinks"
    },
    {
      "id": "coordination",
      "purpose": "Entlastung durch Planung erläutern",
      "rule": "Große Aussage und Erfahrungsbeleg links, drei Planungsgruppen rechts"
    },
    {
      "id": "projects",
      "purpose": "Echte Arbeiten sichtbar machen",
      "rule": "Interaktiver Altbau-Vergleich mit KI/Original-Umschaltung, danach zwei echte Projektbilder mit gekennzeichneten Beispielbeschreibungen"
    },
    {
      "id": "voices",
      "purpose": "Kundenstimmenlayout präsentieren",
      "rule": "Zwei gut lesbare Beispielzitate, keine Namen, Sterne oder echten Zuschreibungen"
    },
    {
      "id": "services",
      "purpose": "Leistungsumfang und private Ergänzung erklären",
      "rule": "Vier offene Leistungsgruppen, klare Grenzen und Kontaktlink"
    },
    {
      "id": "contact",
      "purpose": "Anfrage erleichtern",
      "rule": "Dunkelgrüne Abschlussfläche; Dummy-Kontakte sichtbar markiert, keine echte Telefonwahl"
    }
  ],
  "pages": [
    {
      "route": "/",
      "sections": [
        {
          "id": "start",
          "question": "Wer renoviert mein Zuhause oder meine Geschäftsräume?",
          "pattern": "intro"
        },
        {
          "id": "einsatzbereiche",
          "question": "Passt MUH zu meinem privaten oder gewerblichen Vorhaben?",
          "pattern": "audiences"
        },
        {
          "id": "planung",
          "question": "Wer koordiniert mein Projekt?",
          "pattern": "coordination"
        },
        {
          "id": "projekte",
          "question": "Wie sehen Arbeiten von MUH aus?",
          "pattern": "projects"
        },
        {
          "id": "kundenstimmen",
          "question": "Wie könnten Kundenstimmen dargestellt werden?",
          "pattern": "voices"
        },
        {
          "id": "leistungen",
          "question": "Welche weiteren Leistungen bietet MUH?",
          "pattern": "services"
        },
        {
          "id": "kontakt",
          "question": "Wie bespreche ich mein Projekt?",
          "pattern": "contact"
        }
      ]
    }
  ],
  "sources": [
    "Greg Briefing und Konzeptfreigabe, 16.09.2026; ausschließlich Homepage",
    "Greg erlaubt Dummy-Kundenstimmen und allgemeine Projektbeschreibungen zur Präsentation",
    "/Volumes/Greg Worxx/Martin/muh/Site_Martina/home/home.txt",
    "/Volumes/Greg Worxx/Martin/muh/media-images.zip; Nutzung echter Projekte von Greg bestätigt",
    "Brikly: lokale Bibliotheks-Screenshots geprüft; Gruppe2000 V3 Qualitätsmaßstab",
    "Source Sans 3: https://github.com/adobe-fonts/source-sans, Lizenz lokal"
  ],
  "exceptions": [
    "Keine Unterseiten oder Veröffentlichung. Dummy-Kontakte nicht als echte Kontakte behandeln.",
    "Projektfotos authentisch laut Greg; zugehörige Texte sind Muster und keine bestätigte Leistungsdokumentation.",
    "Keine Originalkundenstimmen vorhanden; zwei ausdrücklich autorisierte und sichtbar gekennzeichnete Muster.",
    "Original-Logo unverändert; Platzhalter-Rechtstexte werden nicht erfunden."
  ]
}
```
