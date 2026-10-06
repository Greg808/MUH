import type { ServicePageContent } from './service-page';
import { serviceImages as images } from './service-images';

// Sources: Site_Martina/Badezimmer/bad.txt and home/home.txt.
export const bathrooms = {
  slug: 'badezimmer', label: 'Badezimmer', category: 'privat',
  title: 'Badezimmer renovieren in Wien',
  description: 'Badezimmerrenovierung in Wien. MUH begleitet die Planung, Auswahl von Oberflächen und Ausstattung sowie die Abstimmung mit benötigten Fachfirmen.',
  heading: ['Badezimmer', 'renovieren.'],
  eyebrow: 'Bäder & Nassbereiche · Wien',
  intro: 'Ein Badezimmer soll zu Ihrer täglichen Nutzung passen. MUH bespricht die gewünschte Gestaltung und Ausstattung mit Ihnen, plant die nötigen Arbeiten und stimmt Oberflächen sowie Sanitär- und Elektroarbeiten mit den benötigten Fachfirmen ab.',
  action: 'Badprojekt besprechen',
  hero: images['bathroom-overview'],
  requirementsEyebrow: 'Was Ihr Bad braucht',
  requirementsTitle: 'Nutzung, Ausstattung und Oberflächen gemeinsam klären.',
  requirementsText: 'Ob einzelne Erneuerungen oder eine umfassendere Renovierung: Die vorhandenen Räume und Ihre Wünsche bilden die Grundlage für das Badkonzept.',
  requirements: [
    { title: 'Die tägliche Nutzung besprechen', text: 'Waschplatz, Dusche oder Wanne und die übrige Ausstattung sollen zu Ihren Bedürfnissen passen. Wir besprechen, welche Veränderungen Sie wünschen und welche Bereiche betroffen sind.' },
    { title: 'Materialien für den Nassbereich', text: 'Bei Boden- und Wandflächen betrachten wir Feuchtigkeit, Oberflächenbeschaffenheit und die gewünschte Gestaltung. Die passende Ausführung und notwendige Vorarbeiten klären wir für das jeweilige Vorhaben.' },
    { title: 'Die Facharbeiten abstimmen', text: 'Oberflächen, Sanitär- und Elektroarbeiten greifen bei einer Badrenovierung ineinander. Wir koordinieren die benötigten Fachfirmen und stimmen die Reihenfolge der vereinbarten Arbeiten ab.' },
  ],
  work: [
    { title: 'Badkonzept und Planung', items: [
      { text: 'Renovierungsumfang und gewünschte Ausstattung klären', icon: 'file-check' },
      { text: 'Planskizzen und Voransichten für einzelne Bereiche erstellen', icon: 'pencil-ruler' },
      { text: 'Kostenrahmen für die geplanten Arbeiten besprechen', icon: 'calculator' },
    ] },
    { title: 'Oberflächen und Ausstattung', items: [
      { text: 'Boden- und Wandbeläge sowie Farben für den Nassbereich abstimmen', icon: 'paint-roller' },
      { text: 'Waschplatz, Armaturen und weitere Ausstattungswünsche abstimmen', icon: 'palette' },
      { text: 'Sanitär- und Elektroarbeiten mit den benötigten Fachfirmen koordinieren', icon: 'users' },
    ] },
    { title: 'Umsetzung und Begleitung', items: [
      { text: 'Zeitplan und Reihenfolge der Arbeiten festlegen', icon: 'calendar-clock' },
      { text: 'Arbeiten der beteiligten Firmen aufeinander abstimmen', icon: 'workflow' },
      { text: 'Bauablauf und Umsetzung dokumentieren', icon: 'clipboard-list' },
    ] },
  ],
  galleryTitle: 'Einblicke in Bäder und Nassbereiche.',
  galleryText: 'Die Originalaufnahmen zeigen Waschplätze, einen Duschbereich und verschiedene Wandflächen. Konkrete Aufgaben und von MUH ausgeführte Arbeiten werden noch ergänzt.',
  gallery: [images['bathroom-shower'], images['bathroom-door'], images['bathroom-basin']],
} satisfies ServicePageContent;
