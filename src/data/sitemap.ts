import { services } from './services';
import { publishedBrandPages } from './brand-pages';
import { brands, getBrandBySlug } from './brands';

export type SitemapLink = { label: string; href: string };

/**
 * Core company/navigation pages that are not individual service or brand
 * pages. These are literal routes (there is no dynamic collection to derive
 * them from), so they are the one list in this module that is hand-written.
 * Every entry here must correspond to a real, indexable route.
 */
export const companyLinks: SitemapLink[] = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about/' },
  { label: 'All Services', href: '/services/' },
  { label: 'Projects', href: '/projects/' },
  { label: 'Products & Supply', href: '/products-supply/' },
  { label: 'Brands', href: '/brands/' },
  { label: 'Company Profile', href: '/company-profile/' },
  { label: 'Contact', href: '/contact/' },
  { label: 'Privacy', href: '/privacy/' },
  { label: 'Website Sitemap', href: '/sitemap-visual/' }
];

export const telecomHubLink: SitemapLink = { label: 'Telecom, IT & ELV Systems Hub', href: '/services/telecom-it/' };

// Grouped directly from the services data model so the directory can never
// drift from the pages Astro actually generates.
export const constructionServices = services.filter((service) => service.category === 'Construction' || service.category === 'Structures' || service.category === 'MEP');
export const telecomServices = services.filter((service) => service.category === 'Telecom & IT');
export const tradingServices = services.filter((service) => service.category === 'General Trading & Manpower');

export const brandDirectoryLinks: SitemapLink[] = publishedBrandPages
  .map((page) => {
    const brand = getBrandBySlug(page.slug);
    return brand ? { label: brand.name, href: `/brands/${brand.slug}/` } : null;
  })
  .filter((item): item is SitemapLink => Boolean(item))
  .sort((a, b) => a.label.localeCompare(b.label));

export const directoryOnlyBrandCount = brands.length - brandDirectoryLinks.length;

/**
 * Search-readiness statistics for the visual sitemap. Every figure is
 * derived from the arrays above (and therefore from the same services /
 * brand-pages records that generate the actual routes) rather than typed in
 * by hand, so the displayed counts cannot go stale independently of a real
 * content change.
 */
export const sitemapStats = {
  coreCompany: companyLinks.length + 1, // + the Telecom, IT & ELV hub
  services: constructionServices.length + telecomServices.length + tradingServices.length,
  brands: brandDirectoryLinks.length,
  get total() {
    return this.coreCompany + this.services + this.brands;
  }
};
