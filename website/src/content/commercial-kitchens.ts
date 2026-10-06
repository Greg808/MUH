import type { ServicePageContent } from './service-page';
import { serviceImages as images } from './service-images';

// Sources: Site_Martina/Küche/Küche.txt and home/home.txt; commercial kitchen scope.
export const commercialKitchens = {
  slug: 'gastronomiekuechen', label: 'Gastronomieküchen', category: 'gewerbe',
  title: 'Gastronomieküchen renovieren in Wien',
  description: 'Renovierung und Sanierung gewerblicher Küchen in Wien. MUH begleitet Planung und Umsetzung für Restaurants, Hotels und andere Betriebe.',
  heading: ['Küchen', 'für die Gastronomie.'],
  eyebrow: 'Gewerbliche Küchen · Wien',
  intro: 'Eine gewerbliche Küche ist ein Arbeitsbereich mit eigenen Anforderungen an Nutzung und Reinigung. MUH plant die Renovierung mit Ihnen und stimmt die Arbeiten an Räumen und Oberflächen mit den beteiligten Fachfirmen ab.',
  action: 'Küchenprojekt besprechen',
  hero: images['commercial-kitchen'],
  requirementsEyebrow: 'Was Ihre Betriebsküche braucht',
  requirementsTitle: 'Den Umbau vom Küchenalltag her planen.',
  requirementsText: 'Ob Restaurant, Hotel oder anderer Betrieb: Der Umfang der Renovierung hängt von der vorhandenen Küche, ihrer Ausstattung und den gewünschten Änderungen ab.',
  requirements: [
    { title: 'Nutzung und Ausstattung klären', text: 'Wir besprechen, welche Bereiche erneuert werden sollen und welche Ausstattung betroffen ist. Schnittstellen zu weiteren Arbeiten klären wir mit den beteiligten Fachfirmen.' },
    { title: 'Oberflächen bewusst auswählen', text: 'Boden- und Wandflächen werden in einer Betriebsküche stark beansprucht. Feuchtigkeit, Reinigung und gewünschte Gestaltung gehören deshalb zu den Fragen bei der Materialauswahl.' },
    { title: 'Arbeiten und Sperrzeiten abstimmen', text: 'Der Zeitplan muss zu den vereinbarten Arbeiten passen. Mögliche Sperrzeiten und notwendige Abstimmungen berücksichtigen wir früh im Sanierungskonzept.' },
  ],
  work: [
    { title: 'Konzept und Vorbereitung', items: [
      { text: 'Renovierungsumfang und betroffene Küchenbereiche festlegen', icon: 'file-check' },
      { text: 'Kostenrahmen und geplante Umsetzung besprechen', icon: 'calculator' },
      { text: 'Planskizzen und notwendige Abstimmungen je nach Vorhaben einplanen', icon: 'pencil-ruler' },
    ] },
    { title: 'Oberflächen und Fachfirmen', items: [
      { text: 'Boden- und Wandbeläge sowie weitere Oberflächen abstimmen', icon: 'paint-roller' },
      { text: 'Anforderungen des gewerblichen Vorhabens in der Abstimmung berücksichtigen', icon: 'shield-check' },
      { text: 'Benötigte Fachfirmen und Schnittstellen zur Küchenausstattung koordinieren', icon: 'users' },
    ] },
    { title: 'Ablauf und Umsetzung', items: [
      { text: 'Bauzeitplan und mögliche Sperrzeiten der Küche abstimmen', icon: 'calendar-clock' },
      { text: 'Arbeiten der beteiligten Firmen aufeinander abstimmen', icon: 'workflow' },
      { text: 'Bauablauf und Umsetzung dokumentieren', icon: 'clipboard-list' },
    ] },
  ],
  galleryTitle: 'Einblicke in eine gewerbliche Küche.',
  galleryText: 'Die Originalaufnahmen zeigen Küchenbereiche, Oberflächen und Arbeiten im Bestand. Konkrete Aufgaben und von MUH ausgeführte Arbeiten werden noch ergänzt.',
  gallery: [images['commercial-kitchen-ceiling'], images['commercial-kitchen-wash'], images['commercial-kitchen-work']],
} satisfies ServicePageContent;
