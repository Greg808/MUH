import type { ProjectImage } from './service-page';

// Original source and transformations: docs/ASSETS.json.
export const serviceImages = {
  "apartment-room": {
    "image": "apartment-room",
    "src": "/images/apartment-room-800.webp",
    "srcset": "/images/apartment-room-480.webp 480w, /images/apartment-room-800.webp 800w",
    "width": 800,
    "height": 600,
    "alt": "Heller Wohnraum mit weißen Wänden, Fenstern und Fischgrätparkett"
  },
  "apartment-hall": {
    "image": "apartment-hall",
    "src": "/images/apartment-hall-600.webp",
    "srcset": "/images/apartment-hall-480.webp 480w, /images/apartment-hall-600.webp 600w",
    "width": 600,
    "height": 800,
    "alt": "Wohnungsgang mit weißen Altbautüren, hohen Wänden und Holzboden"
  },
  "apartment-floor": {
    "image": "apartment-floor",
    "src": "/images/apartment-floor-800.webp",
    "srcset": "/images/apartment-floor-480.webp 480w, /images/apartment-floor-800.webp 800w",
    "width": 800,
    "height": 600,
    "alt": "Holzboden und weißer Türrahmen am Übergang zwischen zwei Wohnräumen"
  },
  "apartment-living": {
    "image": "apartment-living",
    "src": "/images/apartment-living-800.webp",
    "srcset": "/images/apartment-living-480.webp 480w, /images/apartment-living-800.webp 800w",
    "width": 800,
    "height": 384,
    "alt": "Leerer Wohnraum mit weißen Wänden, dunklem Holzboden und offener Zimmertür"
  },
  "apartment-doors": {
    "image": "apartment-doors",
    "src": "/images/apartment-doors-800.webp",
    "srcset": "/images/apartment-doors-480.webp 480w, /images/apartment-doors-800.webp 800w",
    "width": 800,
    "height": 384,
    "alt": "Weiße Altbautür und hohe Wandflächen in einem Wohnraum"
  },
  "house-courtyard": {
    "image": "house-courtyard",
    "src": "/images/house-courtyard-800.webp",
    "srcset": "/images/house-courtyard-480.webp 480w, /images/house-courtyard-800.webp 800w",
    "width": 800,
    "height": 387,
    "alt": "Helle gegliederte Fassade mit Fenstern in einem Innenhof"
  },
  "house-entrance": {
    "image": "house-entrance",
    "src": "/images/house-entrance-800.webp",
    "srcset": "/images/house-entrance-480.webp 480w, /images/house-entrance-800.webp 800w",
    "width": 800,
    "height": 384,
    "alt": "Hauseingang mit verglaster Holztür und hellen Wandflächen im Innenhof"
  },
  "house-passage": {
    "image": "house-passage",
    "src": "/images/house-passage-800.webp",
    "srcset": "/images/house-passage-480.webp 480w, /images/house-passage-800.webp 800w",
    "width": 800,
    "height": 1067,
    "alt": "Hoher Hausdurchgang mit hellen Wandflächen, Stuck und verglaster Eingangstür"
  },
  "house-stucco": {
    "image": "house-stucco",
    "src": "/images/house-stucco-800.webp",
    "srcset": "/images/house-stucco-480.webp 480w, /images/house-stucco-800.webp 800w",
    "width": 800,
    "height": 1067,
    "alt": "Geometrische und florale Stuckfelder an einer hellen Decke"
  },
  "house-wall-detail": {
    "image": "house-wall-detail",
    "src": "/images/house-wall-detail-800.webp",
    "srcset": "/images/house-wall-detail-480.webp 480w, /images/house-wall-detail-800.webp 800w",
    "width": 800,
    "height": 600,
    "alt": "Helle gegliederte Wandfläche mit Stuckornamenten"
  },
  "house-door": {
    "image": "house-door",
    "src": "/images/house-door-387.webp",
    "srcset": "/images/house-door-387.webp 387w",
    "width": 387,
    "height": 800,
    "alt": "Hohe verglaste Holztür in einem hellen Hausdurchgang"
  },
  "bathroom-overview": {
    "image": "bathroom-overview",
    "src": "/images/bathroom-overview-800.webp",
    "srcset": "/images/bathroom-overview-480.webp 480w, /images/bathroom-overview-800.webp 800w",
    "width": 800,
    "height": 600,
    "alt": "Badezimmer mit Waschbecken, großformatigen Wandbelägen und Fenster"
  },
  "bathroom-shower": {
    "image": "bathroom-shower",
    "src": "/images/bathroom-shower-600.webp",
    "srcset": "/images/bathroom-shower-480.webp 480w, /images/bathroom-shower-600.webp 600w",
    "width": 600,
    "height": 800,
    "alt": "Duschbereich mit grauen Wandflächen, Armatur und kleinem Fenster"
  },
  "bathroom-door": {
    "image": "bathroom-door",
    "src": "/images/bathroom-door-800.webp",
    "srcset": "/images/bathroom-door-480.webp 480w, /images/bathroom-door-800.webp 800w",
    "width": 800,
    "height": 600,
    "alt": "Badezimmer mit grauen Wandbelägen, Waschbecken und beleuchtetem Eingangsbereich"
  },
  "bathroom-basin": {
    "image": "bathroom-basin",
    "src": "/images/bathroom-basin-600.webp",
    "srcset": "/images/bathroom-basin-480.webp 480w, /images/bathroom-basin-600.webp 600w",
    "width": 600,
    "height": 800,
    "alt": "Weißes Waschbecken mit Spiegel vor einer grauen Wandfläche"
  },
  "terrace-work": {
    "image": "terrace-work",
    "src": "/images/terrace-work-800.webp",
    "srcset": "/images/terrace-work-480.webp 480w, /images/terrace-work-800.webp 800w",
    "width": 800,
    "height": 384,
    "alt": "Terrasse mit Holzdielen, Gartenpflanzen und Arbeitsmaterial während der Arbeiten"
  },
  "terrace-deck": {
    "image": "terrace-deck",
    "src": "/images/terrace-deck-600.webp",
    "srcset": "/images/terrace-deck-480.webp 480w, /images/terrace-deck-600.webp 600w",
    "width": 600,
    "height": 800,
    "alt": "Terrasse mit dunklen Holzdielen vor einer hellen Hauswand und Glastür"
  },
  "terrace-screen": {
    "image": "terrace-screen",
    "src": "/images/terrace-screen-600.webp",
    "srcset": "/images/terrace-screen-480.webp 480w, /images/terrace-screen-600.webp 600w",
    "width": 600,
    "height": 800,
    "alt": "Holzterrasse mit seitlichem Sichtschutz und Zugang zum Haus"
  },
  "terrace-steps": {
    "image": "terrace-steps",
    "src": "/images/terrace-steps-600.webp",
    "srcset": "/images/terrace-steps-480.webp 480w, /images/terrace-steps-600.webp 600w",
    "width": 600,
    "height": 800,
    "alt": "Außentreppe mit rötlichen Holzstufen und Handlauf neben Gartenpflanzen"
  },
  "office-entrance": {
    "image": "office-entrance",
    "src": "/images/office-entrance-1200.webp",
    "srcset": "/images/office-entrance-480.webp 480w, /images/office-entrance-800.webp 800w, /images/office-entrance-1200.webp 1200w",
    "width": 2560,
    "height": 1920,
    "alt": "Bürogang mit Holz- und Glastrennwänden, blauem Teppichboden und Deckenbeleuchtung"
  },
  "office-glass": {
    "image": "office-glass",
    "src": "/images/office-glass-800.webp",
    "srcset": "/images/office-glass-480.webp 480w, /images/office-glass-800.webp 800w",
    "width": 800,
    "height": 600,
    "alt": "Büroräume mit Holzrahmen und verglasten Trennwänden"
  },
  "office-corridor": {
    "image": "office-corridor",
    "src": "/images/office-corridor-600.webp",
    "srcset": "/images/office-corridor-480.webp 480w, /images/office-corridor-600.webp 600w",
    "width": 600,
    "height": 800,
    "alt": "Bürogang mit Glastrennwänden, blauem Boden und heller Deckenbeleuchtung"
  },
  "office-meeting": {
    "image": "office-meeting",
    "src": "/images/office-meeting-800.webp",
    "srcset": "/images/office-meeting-480.webp 480w, /images/office-meeting-800.webp 800w",
    "width": 800,
    "height": 600,
    "alt": "Besprechungsraum mit großem Tisch, Stühlen, weißen Wänden und Teppichboden"
  },
  "office-kitchen": {
    "image": "office-kitchen",
    "src": "/images/office-kitchen-800.webp",
    "srcset": "/images/office-kitchen-480.webp 480w, /images/office-kitchen-800.webp 800w",
    "width": 800,
    "height": 600,
    "alt": "Teeküche mit weißen Schränken, Holzrückwand und Pendelleuchten"
  },
  "office-workroom": {
    "image": "office-workroom",
    "src": "/images/office-workroom-800.webp",
    "srcset": "/images/office-workroom-480.webp 480w, /images/office-workroom-800.webp 800w",
    "width": 800,
    "height": 600,
    "alt": "Büroraum mit Schreibtisch, großem Fenster und blauem Teppichboden"
  },
  "hotel-room": {
    "image": "hotel-room",
    "src": "/images/hotel-room-800.webp",
    "srcset": "/images/hotel-room-480.webp 480w, /images/hotel-room-800.webp 800w",
    "width": 800,
    "height": 600,
    "alt": "Hotelzimmer mit Doppelbett, grauem gepolstertem Kopfteil, Sessel und Parkettboden"
  },
  "hotel-bed": {
    "image": "hotel-bed",
    "src": "/images/hotel-bed-800.webp",
    "srcset": "/images/hotel-bed-480.webp 480w, /images/hotel-bed-800.webp 800w",
    "width": 800,
    "height": 600,
    "alt": "Doppelbett mit grauem Kopfteil und Nachttisch in einem hellen Hotelzimmer"
  },
  "hotel-seating": {
    "image": "hotel-seating",
    "src": "/images/hotel-seating-800.webp",
    "srcset": "/images/hotel-seating-480.webp 480w, /images/hotel-seating-800.webp 800w",
    "width": 800,
    "height": 600,
    "alt": "Sitzbereich mit Sofa, Schreibtisch, Vorhängen und Parkettboden im Hotelzimmer"
  },
  "hotel-passage": {
    "image": "hotel-passage",
    "src": "/images/hotel-passage-602.webp",
    "srcset": "/images/hotel-passage-480.webp 480w, /images/hotel-passage-602.webp 602w",
    "width": 602,
    "height": 800,
    "alt": "Durchgang mit Holzboden und weißen Türen innerhalb eines Hotelzimmers"
  },
  "hotel-bathroom": {
    "image": "hotel-bathroom",
    "src": "/images/hotel-bathroom-800.webp",
    "srcset": "/images/hotel-bathroom-480.webp 480w, /images/hotel-bathroom-800.webp 800w",
    "width": 800,
    "height": 600,
    "alt": "Hotelbad mit weißem Waschplatz, Spiegel, Fliesen und Handtuchheizkörper"
  },
  "hotel-shower": {
    "image": "hotel-shower",
    "src": "/images/hotel-shower-800.webp",
    "srcset": "/images/hotel-shower-480.webp 480w, /images/hotel-shower-800.webp 800w",
    "width": 800,
    "height": 600,
    "alt": "Duschbereich mit weißen Wandfliesen, dunklen Bodenfliesen und Glasabtrennung"
  },
  "commercial-kitchen": {
    "image": "commercial-kitchen",
    "src": "/images/commercial-kitchen-800.webp",
    "srcset": "/images/commercial-kitchen-480.webp 480w, /images/commercial-kitchen-800.webp 800w",
    "width": 800,
    "height": 600,
    "alt": "Gewerbliche Küche mit Edelstahlflächen, Arbeitsplätzen, Abzugshaube und Fenstern"
  },
  "commercial-kitchen-ceiling": {
    "image": "commercial-kitchen-ceiling",
    "src": "/images/commercial-kitchen-ceiling-800.webp",
    "srcset": "/images/commercial-kitchen-ceiling-480.webp 480w, /images/commercial-kitchen-ceiling-800.webp 800w",
    "width": 800,
    "height": 600,
    "alt": "Abzugshaube und helle Deckenflächen über einer gewerblichen Küche"
  },
  "commercial-kitchen-wash": {
    "image": "commercial-kitchen-wash",
    "src": "/images/commercial-kitchen-wash-800.webp",
    "srcset": "/images/commercial-kitchen-wash-480.webp 480w, /images/commercial-kitchen-wash-800.webp 800w",
    "width": 800,
    "height": 600,
    "alt": "Edelstahlspüle und Arbeitsfläche unter einem Fenster in einer gewerblichen Küche"
  },
  "commercial-kitchen-work": {
    "image": "commercial-kitchen-work",
    "src": "/images/commercial-kitchen-work-800.webp",
    "srcset": "/images/commercial-kitchen-work-480.webp 480w, /images/commercial-kitchen-work-800.webp 800w",
    "width": 800,
    "height": 600,
    "alt": "Gewerbliche Küche mit Leiter und Arbeitsmaterial während der Umbauarbeiten"
  }
} satisfies Record<string, ProjectImage>;
