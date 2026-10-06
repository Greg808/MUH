import type { ContentGroup, WorkGroup, ServicePageContent } from './service-page';

// Sources: Site_Martina/Geschäftslokale/Geschäftslokal.txt and home/home.txt.
export const businessPremises = {
  slug: 'geschaeftslokale',
  label: 'Geschäftslokale',
  category: 'gewerbe',
  heading: ['Geschäftslokale', 'renovieren.'],
  eyebrow: 'Geschäftslokale & Gewerbeflächen · Wien',
  action: 'Geschäftslokal besprechen',
  hero: { image: 'project-retail', src: '/images/project-retail-800.webp', srcset: '/images/project-retail-480.webp 480w, /images/project-retail-800.webp 800w', width: 800, height: 533, alt: 'Geschäftseingang mit hohen Fenstern und heller gegliederter Fassade' },
  requirementsEyebrow: 'Was Ihr Geschäftslokal braucht',
  requirementsTitle: 'Die Räume und den Betrieb gemeinsam planen.',
  requirementsText: 'Eine gewerbliche Renovierung betrifft mehr als die Optik. Nutzung, Arbeitsabläufe und Gestaltung gehören zusammen.',
  galleryTitle: 'Einblicke in Geschäftsräume.',
  galleryText: 'Die Bilder zeigen Räume und Außenansichten aus dem vorhandenen Projektmaterial. Konkrete Aufgaben und von MUH ausgeführte Arbeiten werden noch ergänzt.',
  title: 'Geschäftslokale renovieren in Wien',
  description: 'Renovierung und Sanierung von Geschäftslokalen und Gewerbeflächen in Wien. MUH plant die Arbeiten und koordiniert die beteiligten Fachfirmen.',
  intro: 'Ihr Geschäftslokal muss zu Ihrem Betrieb passen – von den Verkaufsflächen bis zum Eingang. MUH plant die Renovierung, stimmt die beteiligten Fachfirmen ab und berücksichtigt Nutzung, Gestaltung und notwendige Sperrzeiten.',
  requirements: [
    { title: 'Den Betrieb mitdenken', text: 'Welche Bereiche werden erneuert, wann können die Arbeiten stattfinden und welche Sperrzeiten sind möglich? Diese Fragen gehören in die Planung, bevor die Umsetzung beginnt.' },
    { title: 'Ihre Gestaltung aufgreifen', text: 'Farben, Materialien und Oberflächen stimmen wir auf die gewünschte Raumwirkung und das Erscheinungsbild Ihres Unternehmens ab. Dabei berücksichtigen wir auch die Beanspruchung und Reinigung im Alltag.' },
    { title: 'Anforderungen früh klären', text: 'Je nach Vorhaben sind behördliche Vorgaben und Abstimmungen zu berücksichtigen. Wir beziehen diese in das Sanierungskonzept ein und koordinieren die beteiligten Fachfirmen.' },
  ] satisfies ContentGroup[],
  work: [
    {
      title: 'Konzept und Vorbereitung',
      items: [
        { text: 'Sanierungsumfang und Kostenrahmen klären', icon: 'calculator' },
        { text: 'Planskizzen und Voransichten für einzelne Bereiche erstellen', icon: 'pencil-ruler' },
        { text: 'Notwendige Baupläne und Behördenabstimmungen je nach Vorhaben einplanen', icon: 'file-check' },
        { text: 'Gewerbe- und arbeitnehmerschutzrechtliche Anforderungen in der Abstimmung berücksichtigen', icon: 'shield-check' },
      ],
    },
    {
      title: 'Gestaltung und Ausführung',
      items: [
        { text: 'Farben, Oberflächen sowie Boden- und Wandbeläge abstimmen', icon: 'paint-roller' },
        { text: 'Vorgaben zum Erscheinungsbild Ihres Unternehmens berücksichtigen', icon: 'palette' },
        { text: 'Benötigte Fachfirmen wie Tischler, Einrichter oder Ladenbauer koordinieren', icon: 'users' },
      ],
    },
    {
      title: 'Ablauf und Koordination',
      items: [
        { text: 'Bauzeitplan und mögliche Sperrzeiten abstimmen', icon: 'calendar-clock' },
        { text: 'Baubesprechungen und beteiligte Firmen koordinieren', icon: 'messages' },
        { text: 'Arbeiten während der Umsetzung aufeinander abstimmen', icon: 'workflow' },
        { text: 'Bauablauf dokumentieren', icon: 'clipboard-list' },
      ],
    },
  ] satisfies WorkGroup[],
  gallery: [
    { image: 'business-retail', width: 800, height: 533, alt: 'Verkaufsraum mit Produktregalen, runder Deckenbeleuchtung und Sitzbereich' },
    { image: 'retail-front-day', width: 533, height: 800, alt: 'Hohe Schaufenster, heller Fassadenputz und Geschäftseingang im Tageslicht' },
    { image: 'retail-counter', width: 800, height: 533, alt: 'Verkaufstheke aus Holz mit dunkler Arbeitsfläche und runder Deckenbeleuchtung' },
    { image: 'retail-consultation', width: 800, height: 533, alt: 'Beratungsplätze mit grünen Trennwänden, Teppichboden und hellen Wandflächen' },
    { image: 'project-retail-evening', width: 800, height: 533, alt: 'Beleuchtete Geschäftsfront mit hohen Fenstern am Abend' },
    { image: 'retail-front-night', width: 533, height: 800, alt: 'Seitliche Ansicht der Geschäftsfront mit beleuchteten hohen Fenstern am Abend' },
  ].map(image => ({ ...image, src: `/images/${image.image}-800.webp`, srcset: `/images/${image.image}-480.webp 480w, /images/${image.image}-800.webp ${image.width}w` })),
} satisfies ServicePageContent;
