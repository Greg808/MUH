import type { ServicePageContent } from './service-page';
import { serviceImages as images } from './service-images';

// Haus/haus.txt is empty. Source: home/home.txt, building/facade and private renovation tasks.
export const houses = {
  slug: 'haus', label: 'Haus', category: 'privat',
  title: 'Haus und Gebäude renovieren in Wien',
  description: 'Haus- und Gebäuderenovierung in Wien. MUH plant Arbeiten an Wohnbereichen, Fassaden und weiteren Gebäudebereichen und koordiniert die Umsetzung.',
  heading: ['Haus', 'renovieren.'],
  eyebrow: 'Wohnhäuser & Gebäudebereiche · Wien',
  intro: 'Wohnräume, Hauseingang oder Fassade: Ein Haus umfasst Bereiche mit unterschiedlichen Anforderungen. MUH klärt den Renovierungsbedarf mit Ihnen, erstellt ein Sanierungskonzept und stimmt die beteiligten Arbeiten und Fachfirmen ab.',
  action: 'Hausprojekt besprechen',
  hero: images['house-courtyard'],
  requirementsEyebrow: 'Was Ihr Gebäude braucht',
  requirementsTitle: 'Den Bestand als Ausgangspunkt nehmen.',
  requirementsText: 'Der Zustand der einzelnen Bereiche bestimmt den Umfang der Erneuerung. Wir besprechen, was erhalten bleiben soll und welche Flächen oder Räume bearbeitet werden.',
  requirements: [
    { title: 'Gebäudebereiche getrennt betrachten', text: 'Innenräume, Eingänge und Fassaden haben unterschiedliche Aufgaben. Gemeinsam legen wir fest, welche Bereiche zum Vorhaben gehören und wie die einzelnen Arbeiten zusammenhängen.' },
    { title: 'Oberflächen und Gestaltung abstimmen', text: 'Vorhandene Materialien und Gebäudedetails fließen in die Planung ein. Farben und Beläge wählen wir passend zu den vereinbarten Arbeiten und zur gewünschten Gestaltung.' },
    { title: 'Den Bauablauf vorbereiten', text: 'Je nach Vorhaben sind weitere Fachfirmen, Baupläne oder Behördenabstimmungen erforderlich. Wir berücksichtigen diese Schritte im Konzept und im Zeitplan.' },
  ],
  work: [
    { title: 'Umfang und Konzept', items: [
      { text: 'Betroffene Räume, Fassaden und Gebäudebereiche festlegen', icon: 'file-check' },
      { text: 'Sanierungskonzept und Kostenrahmen erstellen', icon: 'calculator' },
      { text: 'Planskizzen und notwendige Baupläne je nach Vorhaben einplanen', icon: 'pencil-ruler' },
    ] },
    { title: 'Oberflächen und Ausführung', items: [
      { text: 'Farben sowie Boden- und Wandbeläge im Innenbereich abstimmen', icon: 'palette' },
      { text: 'Arbeiten an Fassaden und weiteren Oberflächen nach dem Konzept abstimmen', icon: 'paint-roller' },
      { text: 'Benötigte Fachfirmen für die vereinbarten Arbeiten koordinieren', icon: 'users' },
    ] },
    { title: 'Ablauf und Begleitung', items: [
      { text: 'Bauzeitplan und notwendige Abstimmungen vorbereiten', icon: 'calendar-clock' },
      { text: 'Arbeiten und beteiligte Firmen in Baubesprechungen abstimmen', icon: 'messages' },
      { text: 'Bauablauf und einzelne Schritte dokumentieren', icon: 'clipboard-list' },
    ] },
  ],
  galleryTitle: 'Einblicke in Fassaden, Eingänge und Gebäudedetails.',
  galleryText: 'Die Originalaufnahmen zeigen Gebäudebereiche mit gegliederten Oberflächen und historischen Details. Konkrete Aufgaben und von MUH ausgeführte Arbeiten werden noch ergänzt.',
  gallery: [images['house-entrance'], images['house-passage'], images['house-stucco'], images['house-wall-detail'], images['house-door']],
} satisfies ServicePageContent;
