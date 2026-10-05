export const site = {
  name: 'MUH – Malerei & Handwerk',
  description: 'Renovierung und Sanierung für Privat- und Gewerbekunden in Wien. MUH begleitet Wohnungen, Häuser und Geschäftsräume von der Planung bis zur Umsetzung.',
  locale: 'de-AT', tier: 'starter' as const, url: '', indexable: false,
};
export const starterContent = { skip: 'Zum Inhalt' };
export const navigation = [
  { label: 'Privat & Gewerbe', href: '#einsatzbereiche' },
  { label: 'So arbeiten wir', href: '#planung' },
  { label: 'Projekte', href: '#projekte' },
  { label: 'Leistungen', href: '#leistungen' },
];
export const contact = { email: 'hallo@muh.example.com', phone: '+43 (0)1 000 00 00', isPlaceholder: true };
export const audiences = [
  { title: 'Für Ihr Zuhause', image: 'private-home', alt: 'Wohnbereich mit Holzboden, weißen Altbautüren und offener Küche', text: 'Eine Wohnung renovieren, das Haus erneuern oder Bad und Küche verändern: Wir besprechen Ihre Wünsche und stimmen Materialien, Arbeitsschritte und Zeitplan auf Ihr Vorhaben ab.', detail: 'Wohnungen · Häuser · Bäder & Küchen', action: 'Privates Vorhaben besprechen' },
  { title: 'Für Ihren Betrieb', image: 'business-retail', alt: 'Geschäftsraum mit Produktregalen, Verkaufstheke und runder Deckenbeleuchtung', text: 'Geschäftslokal, Büro oder Hotel: Wir planen die Erneuerung Ihrer Räume mit Blick auf Nutzung, Gestaltung und notwendige Sperrzeiten. Die beteiligten Fachfirmen stimmen wir aufeinander ab.', detail: 'Geschäftslokale · Büros · Hotels', action: 'Gewerbliches Vorhaben besprechen' },
];
export const planning = [
  { title: 'Das Vorhaben durchdenken', text: 'Sanierungskonzept, Kostenrahmen und Zeitablauf bilden die Grundlage. Planskizzen und notwendige Behördenabstimmungen gehören je nach Projekt dazu.' },
  { title: 'Die Arbeiten zusammenbringen', text: 'Wir stimmen die beteiligten Fachfirmen ab, koordinieren die einzelnen Schritte und berücksichtigen die Nutzung Ihrer Räume und Ihren Alltag.' },
  { title: 'Die Umsetzung begleiten', text: 'Baubesprechungen, laufende Abstimmungen und die Dokumentation des Bauablaufs halten die Arbeiten zusammen.' },
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
  { title: 'Malerei & Oberflächen', text: 'Farbberatung, Oberflächengestaltung sowie Boden- und Wandbeläge – passend zu Nutzung, Material und gewünschter Wirkung.' },
  { title: 'Bäder, Küchen & Funktionsräume', text: 'Renovierung privater Bäder und Küchen sowie gewerblicher Funktionsräume. Wir stimmen Oberflächen und beteiligte Fachfirmen auf die jeweilige Nutzung ab.' },
  { title: 'Gebäude & Fassaden', text: 'Erneuerung von Gebäudebereichen und Fassaden, abgestimmt auf den Zustand und das vereinbarte Sanierungskonzept.' },
  { title: 'Wasser- & Brandschäden', text: 'Vom Sanierungskonzept über Trocknungsarbeiten bis zur Koordination notwendiger Fachfirmen und der Wiederherstellung.' },
];
