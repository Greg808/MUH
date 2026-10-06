import type { WorkIconName } from '../assets/icons/lucide';

export interface ProjectImage {
  image: string;
  src: string;
  srcset: string;
  width: number;
  height: number;
  alt: string;
}

export interface ContentGroup { title: string; text: string; }
export interface WorkGroup {
  title: string;
  items: { text: string; icon: WorkIconName }[];
}

export interface ServicePageContent {
  slug: string;
  label: string;
  category: 'privat' | 'gewerbe';
  title: string;
  description: string;
  heading: [string, string];
  eyebrow: string;
  intro: string;
  action: string;
  hero: ProjectImage;
  requirementsEyebrow: string;
  requirementsTitle: string;
  requirementsText: string;
  requirements: ContentGroup[];
  work: WorkGroup[];
  galleryTitle: string;
  galleryText: string;
  gallery: ProjectImage[];
}
