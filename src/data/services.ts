export type ServiceFaq = { question: string; answer: string };

export type ServiceCategory = 'Construction' | 'Structures' | 'MEP' | 'Telecom & IT' | 'Trading & Support';

export type ServicePoint = { title: string; description: string };

export type ServiceImage = {
  src: string;
  alt: string;
  width: number;
  height: number;
  caption?: string;
};

export type Service = {
  slug: string;
  title: string;
  shortTitle: string;
  category: ServiceCategory;
  seoTitle: string;
  metaDescription: string;
  heroEyebrow: string;
  summary: string;
  intro: string;
  overviewHeading: string;
  scopeHeading: string;
  applicationHeading: string;
  considerationsHeading: string;
  processHeading: string;
  primaryKeyword: string;
  secondaryKeywords: string[];
  image: string;
  imageAlt: string;
  imageWidth: number;
  imageHeight: number;
  detailImages: ServiceImage[];
  customerProblems: ServicePoint[];
  scope: string[];
  deliverables: ServicePoint[];
  suitableFor: ServicePoint[];
  technicalHeading: string;
  technicalIntro: string;
  considerations: ServicePoint[];
  process: ServicePoint[];
  whyZenith: ServicePoint[];
  outcome: string;
  cta: string;
  secondaryCta: string;
  whatsapp: string;
  enquiryPrompt: string;
  relatedSlugs: string[];
  faqs: ServiceFaq[];
};

import { constructionServices } from './services/construction';
import { telecomServices } from './services/telecom';
import { supportServices } from './services/support';

export const services: Service[] = [...constructionServices, ...telecomServices, ...supportServices];

export const categories = ['All', 'Construction', 'Structures', 'MEP', 'Telecom & IT', 'Trading & Support'] as const;

export function getService(slug: string) {
  return services.find((service) => service.slug === slug);
}
