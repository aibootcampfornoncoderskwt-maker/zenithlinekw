export type BrandPageStatus = 'published' | 'directory-only' | 'needs-review';

export type BrandTextBlock = {
  title: string;
  description: string;
};

export type BrandFaq = {
  question: string;
  answer: string;
};

/**
 * Content record for a brand landing page. Brand identity (name, slug, logo)
 * lives in `src/data/brands.ts` and is joined here by `slug` to avoid
 * duplicating the same brand data in two places.
 */
export type BrandPage = {
  slug: string;
  status: BrandPageStatus;
  aliases?: string[];
  officialUrl?: string;

  seoTitle: string;
  metaDescription: string;
  primaryKeyword: string;
  secondaryKeywords: string[];

  heroEyebrow: string;
  heroTitle: string;
  heroSummary: string;
  reassurance: string;

  directAnswer: string;
  roleSummary: string;

  productCategories: BrandTextBlock[];
  projectApplications: BrandTextBlock[];
  connectedServiceSlugs: string[];
  selectionFactors: BrandTextBlock[];
  enquiryRequirements: string[];
  faqs: BrandFaq[];
  relatedBrandSlugs: string[];
};
