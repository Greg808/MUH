import type { ServicePageContent } from './service-page';
import { serviceImages as images } from './service-images';

// Sources: Site_Martina/Hotelzimmer/hotel.txt and home/home.txt.
export const hotelRooms = {
  slug: 'hotelzimmer', label: 'Hotelzimmer', category: 'gewerbe',
  title: 'Hotelzimmer renovieren in Wien',
  description: 'Renovierung von Hotelzimmern in Wien. MUH stimmt Gestaltung, Oberflächen, Ausstattung und Bauablauf auf Ihren Beherbergungsbetrieb ab.',
  heading: ['Hotelzimmer', 'renovieren.'],
  eyebrow: 'Zimmer & Beherbergungsbetriebe · Wien',
  intro: 'Zimmer werden täglich genutzt und regelmäßig gereinigt. MUH plant die Renovierung mit Ihnen – mit einem stimmigen Erscheinungsbild, geeigneten Oberflächen und einem Zeitplan, der notwendige Sperrzeiten berücksichtigt.',
  action: 'Zimmerprojekt besprechen',
  hero: images['hotel-room'],
  requirementsEyebrow: 'Was im Hotelalltag zählt',
  requirementsTitle: 'Gestaltung, Nutzung und Reinigung zusammenbringen.',
  requirementsText: 'Ein Zimmerkonzept muss im Alltag funktionieren. Ausstattung, Materialwahl und die Abstimmung mit Ihrem Betrieb gehören deshalb in die Planung.',
  requirements: [
    { title: 'Oberflächen für den Alltag', text: 'Bei Boden- und Wandflächen berücksichtigen wir Beanspruchung und Reinigungsfähigkeit. Die gewünschte Optik und die praktische Nutzung bestimmen die Materialauswahl gemeinsam.' },
    { title: 'Ein durchgängiges Erscheinungsbild', text: 'Farben, Oberflächen und Ausstattung stimmen wir auf das Gestaltungskonzept Ihres Hauses ab. Dabei betrachten wir auch die Übergänge zwischen Zimmer, Bad und den angrenzenden Bereichen.' },
    { title: 'Sperrzeiten früh abstimmen', text: 'Welche Zimmer können wann bearbeitet werden? Diese Frage klären wir mit Ihnen, bevor die Arbeiten beginnen, und beziehen sie in den Bauzeitplan ein.' },
  ],
  work: [
    { title: 'Konzept und Vorbereitung', items: [
      { text: 'Zimmer und betroffene Bereiche im Sanierungskonzept erfassen', icon: 'file-check' },
      { text: 'Kostenrahmen und geplante Schritte besprechen', icon: 'calculator' },
      { text: 'Planskizzen und Voransichten für einzelne Bereiche erstellen', icon: 'pencil-ruler' },
    ] },
    { title: 'Oberflächen und Ausstattung', items: [
      { text: 'Farben sowie Boden- und Wandbeläge auf Nutzung und Reinigung abstimmen', icon: 'paint-roller' },
      { text: 'Vorgaben zum Erscheinungsbild Ihres Hauses berücksichtigen', icon: 'palette' },
      { text: 'Benötigte Fachfirmen für Einrichtung und weitere Arbeiten koordinieren', icon: 'users' },
    ] },
    { title: 'Ablauf und Koordination', items: [
      { text: 'Bauzeitplan und notwendige Sperrzeiten der Zimmer abstimmen', icon: 'calendar-clock' },
      { text: 'Beteiligte Firmen und Arbeiten in Baubesprechungen abstimmen', icon: 'messages' },
      { text: 'Bauablauf und ausgeführte Schritte dokumentieren', icon: 'clipboard-list' },
    ] },
  ],
  galleryTitle: 'Einblicke in Zimmer und Hotelbäder.',
  galleryText: 'Originalaufnahmen aus dem vorhandenen Projektmaterial zeigen Ausstattung, Oberflächen und Raumübergänge. Konkrete Aufgaben und von MUH ausgeführte Arbeiten werden noch ergänzt.',
  gallery: [images['hotel-bed'], images['hotel-seating'], images['hotel-passage'], images['hotel-bathroom'], images['hotel-shower']],
} satisfies ServicePageContent;
