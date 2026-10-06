import { servicePages } from './service-pages';

export const site = {
  name: 'MUH – Malerei & Handwerk',
  description: 'Renovierung und Sanierung für Privat- und Gewerbekunden in Wien. MUH begleitet Wohnungen, Häuser und Geschäftsräume von der Planung bis zur Umsetzung.',
  locale: 'de-AT', tier: 'starter' as const, url: '', indexable: false,
};
export const starterContent = { skip: 'Zum Inhalt' };
interface NavigationLink { label: string; href: string; }
type NavigationItem = NavigationLink & { links?: never } | { label: string; links: NavigationLink[]; href?: never };

export const navigation: NavigationItem[] = [
  { label: 'Privat', links: [
    { label: 'Für Ihr Zuhause', href: '#privat' },
    ...servicePages.filter(page => page.category === 'privat').map(page => ({ label: page.label, href: `/${page.slug}/` })),
  ] },
  { label: 'Gewerbe', links: [
    { label: 'Für Ihren Betrieb', href: '#gewerbe' },
    ...servicePages.filter(page => page.category === 'gewerbe').map(page => ({ label: page.label, href: `/${page.slug}/` })),
  ] },
  { label: 'So arbeiten wir', href: '#planung' },
  { label: 'Projekte', href: '#projekte' },
];
export const contact = { email: 'hallo@muh.example.com', phone: '+43 (0)1 000 00 00', isPlaceholder: true };
export const audiences = [
  { id: 'privat', title: 'Für Ihr Zuhause', image: 'private-home', alt: 'Wohnbereich mit Holzboden, weißen Altbautüren und offener Küche', text: 'Nach einem Wohnungskauf, vor der Rückgabe einer Mietwohnung oder für die Erneuerung Ihres Zuhauses: Wir planen die nötigen Arbeiten mit Ihnen – von Wänden und Böden bis zu Bad und Küche.', detail: 'Wohnungen · Häuser · Bäder & Küchen', action: 'Privates Vorhaben besprechen' },
  { id: 'gewerbe', title: 'Für Ihren Betrieb', image: 'business-retail', alt: 'Geschäftsraum mit Produktregalen, Verkaufstheke und runder Deckenbeleuchtung', text: 'Geschäftslokal, Büro oder Hotel: Wir stimmen die Renovierung auf Ihren Betrieb ab. Dabei berücksichtigen wir Sperrzeiten, die Gestaltung Ihres Unternehmens sowie strapazierfähige und leicht zu reinigende Oberflächen.', detail: 'Geschäftslokale · Büros · Hotels', action: 'Gewerbliches Vorhaben besprechen' },
];
export const planning = [
  { title: 'Umfang und Kosten klären', text: 'Wir besprechen, welche Bereiche erneuert werden sollen, und erstellen ein Sanierungskonzept mit Kostenrahmen. Planskizzen und Voransichten machen die geplante Umsetzung nachvollziehbar.' },
  { title: 'Zeitplan und Fachfirmen abstimmen', text: 'Wir erstellen einen Bauzeitplan und koordinieren die beteiligten Fachfirmen. Notwendige Sperrzeiten und Behördenabstimmungen berücksichtigen wir je nach Vorhaben.' },
  { title: 'Die Umsetzung begleiten', text: 'Wir stimmen die Arbeiten in Baubesprechungen ab und dokumentieren den Bauablauf. So bleiben die einzelnen Gewerke und die nächsten Schritte im Blick.' },
];
export const projects = [
  { title: 'Ein einladender erster Eindruck.', category: 'Geschäftslokal', image: 'project-retail-evening', alt: 'Geschäftsfront mit beleuchteten Fenstern am Abend', text: 'Einblicke in die Erneuerung eines Geschäftsstandorts – vom Eingang bis zu den Räumen dahinter.' },
  { title: 'Raum für Ihr Zuhause.', category: 'Wohnung', image: 'project-private', alt: 'Heller Wohnungsgang mit weißen Altbautüren und Holzboden', text: 'Einblicke in eine Wohnung mit hellen Wänden, Holzboden und erhaltenen Altbautüren. Die Gestaltung verbindet vorhandenen Charakter mit einer neuen Raumwirkung.' },
];
export const testimonials = [
  { quote: 'Für uns war wichtig, dass jemand die einzelnen Arbeiten zusammenhält. Die klare Abstimmung hat vieles einfacher gemacht – und die Räume passen jetzt zu unserem Arbeitsalltag.', role: 'So könnte eine Stimme aus einem Büroprojekt klingen.' },
  { quote: 'Bei unserer Wohnung wollten wir vieles erneuern und den ursprünglichen Charakter erhalten. Uns war wichtig, Materialien und die einzelnen Schritte gemeinsam durchzugehen.', role: 'So könnte eine Stimme aus einer Wohnungsrenovierung klingen.' },
];
export const services = [
  { title: 'Malerei & Oberflächen', text: 'Wir beraten zu Farben, Oberflächen sowie Boden- und Wandbelägen. Ob Parkett, Designboden, Fliesen oder Stein: Nutzung, Beanspruchung und gewünschte Raumwirkung bestimmen die Auswahl und Ausführung.' },
  { title: 'Bäder, Küchen & Funktionsräume', text: 'Wir renovieren private Bäder und Küchen sowie gewerbliche Küchen und Funktionsräume. Materialien und Oberflächen stimmen wir auf Feuchtigkeit, Reinigung und tägliche Nutzung ab; notwendige Fachfirmen koordinieren wir.' },
  { title: 'Gebäude & Fassaden', text: 'Wir planen die Erneuerung von Fassaden und Gebäudebereichen anhand ihres Zustands. Gemeinsam klären wir den Sanierungsumfang und stimmen die einzelnen Arbeiten auf das vereinbarte Konzept ab.' },
  { title: 'Wasser- & Brandschäden', text: 'Nach Wasser- oder Brandschäden erstellen wir ein Sanierungskonzept und koordinieren die Wiederherstellung. Dazu gehören je nach Schaden Trocknungsarbeiten, die Entfernung beschädigter Gegenstände und die Abstimmung mit Elektrikern, Installateuren oder Tischlern.' },
];
