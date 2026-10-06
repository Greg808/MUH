import type { ServicePageContent } from './service-page';
import { serviceImages as images } from './service-images';

// Büro/büro.txt is empty. Source: confirmed office offer and general tasks in home/home.txt.
export const offices = {
  slug: 'buero', label: 'Büro', category: 'gewerbe',
  title: 'Büro renovieren in Wien',
  description: 'Bürorenovierung in Wien. MUH plant die Erneuerung von Räumen und Oberflächen und koordiniert die beteiligten Fachfirmen und den Bauablauf.',
  heading: ['Büro', 'renovieren.'],
  eyebrow: 'Arbeitsräume & Büroflächen · Wien',
  intro: 'Arbeitsräume, Besprechungsbereiche und die Wege dazwischen haben unterschiedliche Aufgaben. MUH bespricht den Renovierungsumfang mit Ihnen und stimmt Oberflächen, Gestaltung und die einzelnen Arbeiten auf Ihren Büroalltag ab.',
  action: 'Büroprojekt besprechen',
  hero: images['office-entrance'],
  requirementsEyebrow: 'Was Ihre Arbeitsräume brauchen',
  requirementsTitle: 'Die Räume passend zu ihrer Nutzung erneuern.',
  requirementsText: 'Eine Erneuerung kann einzelne Bereiche oder das gesamte Büro betreffen. Ausgangspunkt sind die vorhandenen Räume und die Arbeiten, die Sie tatsächlich benötigen.',
  requirements: [
    { title: 'Die einzelnen Bereiche betrachten', text: 'Arbeitsplätze, Besprechungsräume, Gänge und Teeküche werden unterschiedlich genutzt. Gemeinsam legen wir fest, welche Bereiche erneuert werden und welche Arbeiten dazugehören.' },
    { title: 'Materialien und Gestaltung abstimmen', text: 'Farben, Boden- und Wandbeläge sollen zur Nutzung und zum Erscheinungsbild Ihres Unternehmens passen. Beanspruchung und Reinigung beziehen wir in die Auswahl ein.' },
    { title: 'Den Arbeitsalltag berücksichtigen', text: 'Wir besprechen Zeitrahmen, Zugänge und mögliche Sperrzeiten mit Ihnen. Daraus entsteht die Grundlage für den Bauzeitplan und die Abstimmung der beteiligten Firmen.' },
  ],
  work: [
    { title: 'Umfang und Planung', items: [
      { text: 'Zu erneuernde Büroräume und Oberflächen im Konzept festhalten', icon: 'file-check' },
      { text: 'Kostenrahmen und notwendige Arbeitsschritte klären', icon: 'calculator' },
      { text: 'Planskizzen und Voransichten für einzelne Bereiche erstellen', icon: 'pencil-ruler' },
    ] },
    { title: 'Gestaltung und Umsetzung', items: [
      { text: 'Farben sowie Boden- und Wandbeläge abstimmen', icon: 'paint-roller' },
      { text: 'Vorgaben zum Erscheinungsbild des Unternehmens berücksichtigen', icon: 'palette' },
      { text: 'Benötigte Fachfirmen für die vereinbarten Arbeiten koordinieren', icon: 'users' },
    ] },
    { title: 'Zeitplan und Abstimmung', items: [
      { text: 'Bauzeitplan und mögliche Sperrzeiten festlegen', icon: 'calendar-clock' },
      { text: 'Arbeiten und beteiligte Firmen in Baubesprechungen abstimmen', icon: 'messages' },
      { text: 'Bauablauf und Umsetzung dokumentieren', icon: 'clipboard-list' },
    ] },
  ],
  galleryTitle: 'Einblicke in Arbeits- und Besprechungsräume.',
  galleryText: 'Die Originalaufnahmen zeigen Büroräume, Raumtrennungen und gemeinsam genutzte Bereiche. Konkrete Aufgaben und von MUH ausgeführte Arbeiten werden noch ergänzt.',
  gallery: [images['office-glass'], images['office-corridor'], images['office-meeting'], images['office-kitchen'], images['office-workroom']],
} satisfies ServicePageContent;
