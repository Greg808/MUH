# MUH · freigegebenes Homepage-Konzept · 16.09.2026

Brikly ist Hauptreferenz für Bildgewichtung und Freiraum; keine Kopie des Demo-Heros. Gruppe2000 V3 bleibt Qualitätsreferenz. Helle Oberflächen, echtes MUH-Grün und leicht gerundete Bilder. Keine dekorative Bewegung. Greg hat Konzept und Umsetzung einschließlich Musterinhalten freigegeben. Am 06.10. hat Greg Geschäftslokale akzeptiert und alle sieben weiteren Leistungsseiten gemeinsam beauftragt. Deren Beurteilung steht noch aus.

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
    },
    {
      "id": "service-intro",
      "purpose": "Eignung für das konkrete Vorhaben erklären",
      "rule": "Freigegebener geteilter Einstieg: konkrete Leistung, Kontaktaktion und proportionale Originalaufnahme; mobil Text vor Bild."
    },
    {
      "id": "service-requirements",
      "purpose": "Nutzung und Anforderungen des jeweiligen Vorhabens klären",
      "rule": "Drei offene sachliche Textgruppen, gemeinsam ausgerichtet; Inhalte je Thema eigenständig."
    },
    {
      "id": "service-work",
      "purpose": "Belegte Aufgaben und Koordination verständlich zeigen",
      "rule": "Gruppierte Leistungslisten mit lokalen dekorativen Icons; keine erfundenen Garantien oder Fachqualifikationen."
    },
    {
      "id": "service-gallery",
      "purpose": "Passende Originalaufnahmen aus dem Kundenmaterial zeigen",
      "rule": "Native Masonry-Spalten mit gleichmäßigen Bildabständen und vollständigen Bildproportionen. Keine sichtbaren Bildunterschriften auf Leistungsseiten; beschreibende Alt-Texte erhalten. Keine erfundenen Projektleistungen."
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
    },
    {
      "route": "/geschaeftslokale/",
      "sections": [
        {
          "id": "start",
          "question": "Begleitet MUH die Renovierung meines Vorhabens: Geschäftslokal?",
          "pattern": "service-intro"
        },
        {
          "id": "anforderungen",
          "question": "Welche Anforderungen sind bei Geschäftslokal zu beachten?",
          "pattern": "service-requirements"
        },
        {
          "id": "umfang",
          "question": "Welche Arbeiten werden geplant und koordiniert?",
          "pattern": "service-work"
        },
        {
          "id": "einblicke",
          "question": "Welche passenden Räume und Oberflächen zeigt das Originalmaterial?",
          "pattern": "service-gallery"
        },
        {
          "id": "kontakt",
          "question": "Wie bespreche ich mein konkretes Vorhaben?",
          "pattern": "contact"
        }
      ]
    },
    {
      "route": "/wohnung/",
      "sections": [
        {
          "id": "start",
          "question": "Begleitet MUH die Renovierung meines Vorhabens: Wohnung?",
          "pattern": "service-intro"
        },
        {
          "id": "anforderungen",
          "question": "Welche Anforderungen sind bei Wohnung zu beachten?",
          "pattern": "service-requirements"
        },
        {
          "id": "umfang",
          "question": "Welche Arbeiten werden geplant und koordiniert?",
          "pattern": "service-work"
        },
        {
          "id": "einblicke",
          "question": "Welche passenden Räume und Oberflächen zeigt das Originalmaterial?",
          "pattern": "service-gallery"
        },
        {
          "id": "kontakt",
          "question": "Wie bespreche ich mein konkretes Vorhaben?",
          "pattern": "contact"
        }
      ]
    },
    {
      "route": "/haus/",
      "sections": [
        {
          "id": "start",
          "question": "Begleitet MUH die Renovierung meines Vorhabens: Haus?",
          "pattern": "service-intro"
        },
        {
          "id": "anforderungen",
          "question": "Welche Anforderungen sind bei Haus zu beachten?",
          "pattern": "service-requirements"
        },
        {
          "id": "umfang",
          "question": "Welche Arbeiten werden geplant und koordiniert?",
          "pattern": "service-work"
        },
        {
          "id": "einblicke",
          "question": "Welche passenden Räume und Oberflächen zeigt das Originalmaterial?",
          "pattern": "service-gallery"
        },
        {
          "id": "kontakt",
          "question": "Wie bespreche ich mein konkretes Vorhaben?",
          "pattern": "contact"
        }
      ]
    },
    {
      "route": "/badezimmer/",
      "sections": [
        {
          "id": "start",
          "question": "Begleitet MUH die Renovierung meines Vorhabens: Badezimmer?",
          "pattern": "service-intro"
        },
        {
          "id": "anforderungen",
          "question": "Welche Anforderungen sind bei Badezimmer zu beachten?",
          "pattern": "service-requirements"
        },
        {
          "id": "umfang",
          "question": "Welche Arbeiten werden geplant und koordiniert?",
          "pattern": "service-work"
        },
        {
          "id": "einblicke",
          "question": "Welche passenden Räume und Oberflächen zeigt das Originalmaterial?",
          "pattern": "service-gallery"
        },
        {
          "id": "kontakt",
          "question": "Wie bespreche ich mein konkretes Vorhaben?",
          "pattern": "contact"
        }
      ]
    },
    {
      "route": "/terrasse/",
      "sections": [
        {
          "id": "start",
          "question": "Begleitet MUH die Renovierung meines Vorhabens: Terrasse?",
          "pattern": "service-intro"
        },
        {
          "id": "anforderungen",
          "question": "Welche Anforderungen sind bei Terrasse zu beachten?",
          "pattern": "service-requirements"
        },
        {
          "id": "umfang",
          "question": "Welche Arbeiten werden geplant und koordiniert?",
          "pattern": "service-work"
        },
        {
          "id": "einblicke",
          "question": "Welche passenden Räume und Oberflächen zeigt das Originalmaterial?",
          "pattern": "service-gallery"
        },
        {
          "id": "kontakt",
          "question": "Wie bespreche ich mein konkretes Vorhaben?",
          "pattern": "contact"
        }
      ]
    },
    {
      "route": "/buero/",
      "sections": [
        {
          "id": "start",
          "question": "Begleitet MUH die Renovierung meines Vorhabens: Büro?",
          "pattern": "service-intro"
        },
        {
          "id": "anforderungen",
          "question": "Welche Anforderungen sind bei Büro zu beachten?",
          "pattern": "service-requirements"
        },
        {
          "id": "umfang",
          "question": "Welche Arbeiten werden geplant und koordiniert?",
          "pattern": "service-work"
        },
        {
          "id": "einblicke",
          "question": "Welche passenden Räume und Oberflächen zeigt das Originalmaterial?",
          "pattern": "service-gallery"
        },
        {
          "id": "kontakt",
          "question": "Wie bespreche ich mein konkretes Vorhaben?",
          "pattern": "contact"
        }
      ]
    },
    {
      "route": "/hotelzimmer/",
      "sections": [
        {
          "id": "start",
          "question": "Begleitet MUH die Renovierung meines Vorhabens: Hotelzimmer?",
          "pattern": "service-intro"
        },
        {
          "id": "anforderungen",
          "question": "Welche Anforderungen sind bei Hotelzimmer zu beachten?",
          "pattern": "service-requirements"
        },
        {
          "id": "umfang",
          "question": "Welche Arbeiten werden geplant und koordiniert?",
          "pattern": "service-work"
        },
        {
          "id": "einblicke",
          "question": "Welche passenden Räume und Oberflächen zeigt das Originalmaterial?",
          "pattern": "service-gallery"
        },
        {
          "id": "kontakt",
          "question": "Wie bespreche ich mein konkretes Vorhaben?",
          "pattern": "contact"
        }
      ]
    },
    {
      "route": "/gastronomiekuechen/",
      "sections": [
        {
          "id": "start",
          "question": "Begleitet MUH die Renovierung meines Vorhabens: Gastronomieküche?",
          "pattern": "service-intro"
        },
        {
          "id": "anforderungen",
          "question": "Welche Anforderungen sind bei Gastronomieküche zu beachten?",
          "pattern": "service-requirements"
        },
        {
          "id": "umfang",
          "question": "Welche Arbeiten werden geplant und koordiniert?",
          "pattern": "service-work"
        },
        {
          "id": "einblicke",
          "question": "Welche passenden Räume und Oberflächen zeigt das Originalmaterial?",
          "pattern": "service-gallery"
        },
        {
          "id": "kontakt",
          "question": "Wie bespreche ich mein konkretes Vorhaben?",
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
    "Source Sans 3: https://github.com/adobe-fonts/source-sans, Lizenz lokal",
    "Greg, 06.10.2026: Geschäftslokale passt; alle restlichen Seiten jetzt umsetzen. Site_Martina und media-images als Quellen."
  ],
  "exceptions": [
    "Acht Leistungsunterseiten zusätzlich zur Home freigegeben. Keine Veröffentlichung. Dummy-Kontakte bleiben als solche markiert.",
    "Projektfotos authentisch laut Greg; zugehörige Texte sind Muster und keine bestätigte Leistungsdokumentation.",
    "Keine Originalkundenstimmen vorhanden; zwei ausdrücklich autorisierte und sichtbar gekennzeichnete Muster.",
    "Original-Logo unverändert; Platzhalter-Rechtstexte werden nicht erfunden.",
    "Haus-/Büro-Vorlagen leer: allgemeine Aufgaben aus home.txt auf diese bestätigten Angebote beziehen; keine zusätzlichen technischen Leistungen erfinden."
  ]
}
```

## Erste Unterseite · Geschäftslokale · 06.10.2026

Beauftragte Erweiterung, von Greg am 06.10. nach Navigation, Galerie und Icons akzeptiert. Farben, Source Sans 3, Container/Abstandsrollen und Bildradien der Home bleiben erhalten. Originale Fotografie im Hero, keine Übernahme der KI-Illustration. Einstieg mit konkretem Angebot und Kontaktaktion, Anforderungen als drei gleichrangige Gruppen, belegte Aufgaben in drei Gruppen, sechs originale Galeriebilder mit neutralen Bildunterschriften, vorhandener Kontaktabschluss. Bilder proportional ohne Beschnitt; keine erfundenen Projektleistungen. Header/Abschnitte/Galerie/Kontakt/Footer teilen Inhaltskanten; mobile Reihenfolge Text, Aktion, Bild. Keine neuen Bibliotheken oder Animation.

## Gruppierte Navigation · 06.10.2026

Freigegebene Struktur: Privat/Gewerbe als gleichrangige native Untermenüs, danach So arbeiten wir/Projekte und separate Kontaktaktion. Logo führt zur Home. Aktuelle Unterseite durch Unterstreichung und aria-current markiert, zugehörige Gruppe ebenfalls sichtbar. Footer verwendet dieselben Inhalte in offenen Gruppen. Mobil öffnet das vorhandene native Menü; innere Gruppen bleiben unabhängig vom äußeren Menü bedienbar. Escape schließt die nächste offene Ebene und stellt den Fokus wieder her. Nur existierende Ziele anzeigen; weitere Unterseiten wachsen in die freigegebenen Gruppen hinein. Farben/Schriften und Homepage-Komposition erhalten. Frühere flache Navigation ist superseded.

## Geschäftslokale · Projektgalerie · 06.10.2026

Greg wünscht mehr authentische Arbeitsbeispiele in einer Masonry-Anordnung oder vergleichbarer Galerie. Sechs Originalaufnahmen, natürliche Hoch-/Querformate. Native CSS-Spalten (1 unter 640px, 2 ab 640px, 3 ab 1200px), vollständige Bilder ohne Fragmentierung. Lesereihenfolge pro Spalte von oben nach unten, auf Mobil als einfache Folge. Responsive optimierte Bilddateien ohne Vergrößerung/Beschnitt; Source-Fakten und Transformation in ASSETS.json. Seiten-CSS explizit in der Route importieren und über die Seitenklasse begrenzen. Frühere zwei gleich breite Galerie-Bilder durch diese Komposition ersetzt.

Aktuelle Korrektur durch Greg: auf allen acht Leistungsseiten Masonry mit gleichen horizontalen/vertikalen Bildabständen; keine sichtbaren Bildunterschriften, auch nicht unter dem jeweiligen Hauptbild. Vorhandene beschreibende Alt-Texte erhalten. Die frühere Caption-Vorgabe ist überholt. Farben, Schriften, Bildauswahl und andere Seitenabschnitte bleiben erhalten.
