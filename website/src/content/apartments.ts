import type { ServicePageContent } from './service-page';
import { serviceImages as images } from './service-images';

// Sources: Site_Martina/Wohnung/wohnung1.txt, wohnung2.txt and home/home.txt.
export const apartments = {
  slug: 'wohnung', label: 'Wohnung', category: 'privat',
  title: 'Wohnung renovieren in Wien',
  description: 'Wohnungsrenovierung und Wohnungssanierung in Wien. MUH plant einzelne Erneuerungen und umfangreichere Vorhaben und koordiniert die beteiligten Fachfirmen.',
  heading: ['Wohnung', 'renovieren.'],
  eyebrow: 'Wohnräume & Altbauwohnungen · Wien',
  intro: 'Nach dem Wohnungskauf, vor einer Mietrückgabe oder wenn Sie Ihr Zuhause erneuern möchten: MUH bespricht die nötigen Arbeiten mit Ihnen. Wir planen einzelne Bereiche ebenso wie eine umfangreichere Wohnungsrenovierung und koordinieren die Umsetzung.',
  action: 'Wohnungsprojekt besprechen',
  hero: images['apartment-room'],
  requirementsEyebrow: 'Was Sie verändern möchten',
  requirementsTitle: 'Vom einzelnen Raum bis zur ganzen Wohnung.',
  requirementsText: 'Nicht jede Wohnung braucht dieselben Arbeiten. Wir betrachten den Bestand, Ihre gewünschten Veränderungen und die Nutzung der einzelnen Räume.',
  requirements: [
    { title: 'Umfang gemeinsam festlegen', text: 'Wände und Böden erneuern, Bad oder Küche überarbeiten oder mehrere Räume zusammen planen: Wir klären, welche Arbeiten zu Ihrem Vorhaben gehören und in welcher Reihenfolge sie stattfinden sollen.' },
    { title: 'Den vorhandenen Charakter einbeziehen', text: 'Gerade bei einer Altbauwohnung prägen Türen, hohe Räume und vorhandene Oberflächen die Gestaltung. Wir beziehen den Bestand in die Auswahl von Farben und Belägen ein.' },
    { title: 'Nutzung und Zeitrahmen berücksichtigen', text: 'Wohnungskauf, laufende Nutzung und Mietrückgabe stellen unterschiedliche Anforderungen an den Ablauf. Teilen Sie uns mit, wann die Räume zugänglich sind und bis wann welche Arbeiten benötigt werden.' },
  ],
  work: [
    { title: 'Konzept und Vorbereitung', items: [
      { text: 'Sanierungsumfang und gewünschte Veränderungen klären', icon: 'file-check' },
      { text: 'Kostenrahmen und einzelne Arbeitsschritte besprechen', icon: 'calculator' },
      { text: 'Planskizzen und Voransichten für einzelne Bereiche erstellen', icon: 'pencil-ruler' },
    ] },
    { title: 'Räume und Oberflächen', items: [
      { text: 'Farben, Boden- und Wandbeläge mit Ihnen auswählen', icon: 'palette' },
      { text: 'Oberflächenarbeiten und notwendige Nebenarbeiten aufeinander abstimmen', icon: 'paint-roller' },
      { text: 'Benötigte Fachfirmen, etwa für Bad, Küche oder Elektroarbeiten, koordinieren', icon: 'users' },
    ] },
    { title: 'Ablauf und Umsetzung', items: [
      { text: 'Bauzeitplan für die vereinbarten Arbeiten erstellen', icon: 'calendar-clock' },
      { text: 'Beteiligte Firmen und notwendige Abstimmungen koordinieren', icon: 'messages' },
      { text: 'Bauablauf und Umsetzung dokumentieren', icon: 'clipboard-list' },
    ] },
  ],
  galleryTitle: 'Einblicke in Wohnräume und Altbaudetails.',
  galleryText: 'Die Originalaufnahmen zeigen Wohnräume, Böden und vorhandene Türen. Konkrete Aufgaben und von MUH ausgeführte Arbeiten werden noch ergänzt.',
  gallery: [images['apartment-hall'], images['apartment-floor'], images['apartment-living'], images['apartment-doors']],
} satisfies ServicePageContent;
