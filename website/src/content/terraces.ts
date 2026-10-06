import type { ServicePageContent } from './service-page';
import { serviceImages as images } from './service-images';

// Sources: Site_Martina/Terrasse/terrasse.txt and general planning/surface tasks in home/home.txt.
export const terraces = {
  slug: 'terrasse', label: 'Terrasse', category: 'privat',
  title: 'Terrasse renovieren in Wien',
  description: 'Terrassenrenovierung in Wien. MUH bespricht den Bestand und die gewünschte Erneuerung mit Ihnen und begleitet Planung und Umsetzung.',
  heading: ['Terrasse', 'erneuern.'],
  eyebrow: 'Terrassen & Außenbereiche · Wien',
  intro: 'Ein neuer Belag oder eine umfassendere Erneuerung des Außenbereichs: MUH bespricht den vorhandenen Zustand und Ihre Wünsche mit Ihnen. Wir planen die vereinbarten Arbeiten und stimmen die Umsetzung mit den benötigten Fachfirmen ab.',
  action: 'Terrassenprojekt besprechen',
  hero: images['terrace-work'],
  requirementsEyebrow: 'Was Sie draußen verändern möchten',
  requirementsTitle: 'Den Außenbereich vom Bestand her planen.',
  requirementsText: 'Terrasse, Zugang und angrenzende Bereiche gehören zusammen. Wir klären mit Ihnen, was erneuert werden soll und welche Schritte dafür nötig sind.',
  requirements: [
    { title: 'Den Umfang abgrenzen', text: 'Geht es um den Terrassenbelag oder sind weitere Bereiche betroffen? Wir besprechen die gewünschten Veränderungen und betrachten auch Übergänge, Zugänge und angrenzende Flächen.' },
    { title: 'Material und Ausführung klären', text: 'Die gewünschte Oberfläche muss zur Nutzung im Außenbereich passen. Materialwahl und notwendige Vorarbeiten stimmen wir für das konkrete Vorhaben ab.' },
    { title: 'Die Umsetzung vorbereiten', text: 'Wir legen die einzelnen Arbeiten und ihren Zeitrahmen mit Ihnen fest. Welche Fachfirmen benötigt werden und wie die Schritte zusammenhängen, klären wir vor Beginn.' },
  ],
  work: [
    { title: 'Bestand und Konzept', items: [
      { text: 'Gewünschte Veränderungen und betroffene Außenbereiche klären', icon: 'file-check' },
      { text: 'Konzept und Kostenrahmen für die Erneuerung besprechen', icon: 'calculator' },
      { text: 'Planskizzen für einzelne Bereiche je nach Vorhaben erstellen', icon: 'pencil-ruler' },
    ] },
    { title: 'Materialien und Arbeiten', items: [
      { text: 'Beläge und Oberflächen für die vereinbarte Nutzung abstimmen', icon: 'palette' },
      { text: 'Notwendige Vor- und Nebenarbeiten in die Umsetzung einbeziehen', icon: 'paint-roller' },
      { text: 'Benötigte Fachfirmen und die gewählte Ausführung koordinieren', icon: 'users' },
    ] },
    { title: 'Ablauf und Abstimmung', items: [
      { text: 'Zeitplan für die einzelnen Arbeiten festlegen', icon: 'calendar-clock' },
      { text: 'Umsetzung und beteiligte Firmen miteinander abstimmen', icon: 'messages' },
      { text: 'Bauablauf und vereinbarte Schritte dokumentieren', icon: 'clipboard-list' },
    ] },
  ],
  galleryTitle: 'Einblicke in Terrassen und Außenbereiche.',
  galleryText: 'Die Originalaufnahmen zeigen Holzbeläge, einen Sichtschutz und eine Außentreppe. Konkrete Aufgaben und von MUH ausgeführte Arbeiten werden noch ergänzt.',
  gallery: [images['terrace-deck'], images['terrace-screen'], images['terrace-steps']],
} satisfies ServicePageContent;
