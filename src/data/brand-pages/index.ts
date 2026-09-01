import { networkingBrandPages } from './networking';
import { securityBrandPages } from './security';
import { cablingBrandPages } from './cabling';
import { voiceBrandPages } from './voice';

export type { BrandPage, BrandPageStatus, BrandTextBlock, BrandFaq } from './types';

export const brandPages = [...networkingBrandPages, ...securityBrandPages, ...cablingBrandPages, ...voiceBrandPages];

export const publishedBrandPages = brandPages.filter((page) => page.status === 'published');

export function getBrandPage(slug: string) {
  return brandPages.find((page) => page.slug === slug);
}
