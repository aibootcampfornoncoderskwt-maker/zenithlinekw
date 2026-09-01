import { readFile, readdir, stat } from 'node:fs/promises';
import path from 'node:path';

const root = path.resolve('dist');
const htmlFiles = [];

async function walk(directory) {
  for (const entry of await readdir(directory)) {
    const target = path.join(directory, entry);
    const info = await stat(target);
    if (info.isDirectory()) await walk(target);
    else if (entry.endsWith('.html')) htmlFiles.push(target);
  }
}

await walk(root);
const problems = [];
const existing = new Set();
const checkedAssets = new Set();
const serviceTitles = new Map();
const serviceDescriptions = new Map();
const pageTitles = new Map();
const pageDescriptions = new Map();
const pageCanonicals = new Map();
const inboundCounts = new Map();
let servicePageCount = 0;
let brandPageCount = 0;
const FORBIDDEN_CLAIM_PHRASES = ['authorized partner', 'authorized reseller', 'official distributor', 'certified installer', 'exclusive supplier', 'approved dealer'];
const NEGATION_PATTERN = /\bno\b|\bnot\b|n't|does not|do not|isn't|doesn't/i;
const UNSAFE_HOST_PATTERN = /localhost|127\.0\.0\.1|\.vercel\.app|0\.0\.0\.0/i;

for (const file of htmlFiles) {
  const relative = path.relative(root, file).replaceAll(path.sep, '/');
  const route = relative === 'index.html' ? '/' : relative === '404.html' ? '/404.html' : `/${relative.replace(/index\.html$/, '')}`;
  existing.add(route);
  inboundCounts.set(route, 0);
}

const pageRecords = [];

for (const file of htmlFiles) {
  const html = await readFile(file, 'utf8');
  const relative = path.relative(root, file);
  const route = relative.replaceAll(path.sep, '/') === 'index.html' ? '/' : relative.replaceAll(path.sep, '/') === '404.html' ? '/404.html' : `/${relative.replaceAll(path.sep, '/').replace(/index\.html$/, '')}`;
  const isServicePage = relative.startsWith(`services${path.sep}`) && relative !== path.join('services', 'index.html');
  const isBrandPage = relative.startsWith(`brands${path.sep}`) && relative !== path.join('brands', 'index.html');
  const isIndexable = !/<meta name="robots" content="[^"]*noindex/.test(html);
  const titleCount = (html.match(/<title>/g) || []).length;
  const h1Count = (html.match(/<h1(?:\s|>)/g) || []).length;
  const metaCount = (html.match(/<meta name="description"/g) || []).length;
  if (titleCount !== 1) problems.push(`${relative}: expected one title, found ${titleCount}`);
  if (h1Count !== 1) problems.push(`${relative}: expected one h1, found ${h1Count}`);
  if (metaCount !== 1) problems.push(`${relative}: expected one meta description, found ${metaCount}`);
  if (/Lorem ipsum|href="undefined|>undefined</.test(html)) problems.push(`${relative}: placeholder or undefined content found`);
  const pageTitle = html.match(/<title>(.*?)<\/title>/s)?.[1]?.trim() ?? '';
  const pageDescription = html.match(/<meta name="description" content="([^"]*)"/)?.[1]?.trim() ?? '';
  if (pageTitles.has(pageTitle)) problems.push(`${relative}: duplicate title also used by ${pageTitles.get(pageTitle)}`);
  if (pageDescriptions.has(pageDescription)) problems.push(`${relative}: duplicate meta description also used by ${pageDescriptions.get(pageDescription)}`);
  pageTitles.set(pageTitle, relative);
  pageDescriptions.set(pageDescription, relative);

  // --- Universal technical checks (every page, every type) ---
  const canonicalCount = (html.match(/<link rel="canonical"/g) || []).length;
  if (canonicalCount !== 1) problems.push(`${relative}: expected one canonical link, found ${canonicalCount}`);
  const canonicalHref = html.match(/<link rel="canonical" href="([^"]*)"/)?.[1] ?? '';
  if (canonicalHref) {
    if (pageCanonicals.has(canonicalHref)) problems.push(`${relative}: duplicate canonical URL also used by ${pageCanonicals.get(canonicalHref)}`);
    pageCanonicals.set(canonicalHref, relative);
    if (!canonicalHref.startsWith('https://zenithlinekw.com/')) problems.push(`${relative}: canonical does not use the production hostname: ${canonicalHref}`);
  }
  const ogUrl = html.match(/<meta property="og:url" content="([^"]*)"/)?.[1] ?? '';
  if (ogUrl && canonicalHref && ogUrl !== canonicalHref) problems.push(`${relative}: og:url (${ogUrl}) does not match canonical (${canonicalHref})`);
  const ogImage = html.match(/<meta property="og:image" content="([^"]*)"/)?.[1] ?? '';
  if (!ogImage) problems.push(`${relative}: missing og:image`);
  if (!html.includes('<meta name="twitter:card"')) problems.push(`${relative}: missing Twitter card metadata`);
  if (!/<html lang="[a-z-]+"/i.test(html)) problems.push(`${relative}: missing html lang attribute`);
  if (!html.includes('name="viewport"')) problems.push(`${relative}: missing viewport meta tag`);
  if (UNSAFE_HOST_PATTERN.test(html)) problems.push(`${relative}: contains a localhost/preview-host reference`);
  if (/href="http:\/\/(?!schema\.org)/.test(html)) problems.push(`${relative}: contains an insecure http:// link`);

  for (const image of html.matchAll(/<img\s[^>]*>/g)) {
    if (!/\salt="[^"]*"/.test(image[0])) problems.push(`${relative}: image missing alt attribute`);
    if (!/\swidth="\d+"/.test(image[0]) || !/\sheight="\d+"/.test(image[0])) problems.push(`${relative}: image missing intrinsic dimensions`);
  }

  const universalSchemaCounts = { Organization: 0, WebSite: 0 };
  let jsonLdOk = true;
  for (const match of html.matchAll(/<script type="application\/ld\+json">(.*?)<\/script>/gs)) {
    try {
      const parsed = JSON.parse(match[1]);
      const entries = Array.isArray(parsed) ? parsed : [parsed];
      for (const entry of entries) if (entry?.['@type'] in universalSchemaCounts) universalSchemaCounts[entry['@type']] += 1;
    } catch {
      problems.push(`${relative}: invalid JSON-LD`);
      jsonLdOk = false;
    }
  }
  if (jsonLdOk) {
    if (universalSchemaCounts.Organization !== 1) problems.push(`${relative}: expected exactly one Organization schema, found ${universalSchemaCounts.Organization}`);
    if (universalSchemaCounts.WebSite !== 1) problems.push(`${relative}: expected exactly one WebSite schema, found ${universalSchemaCounts.WebSite}`);
  }

  for (const match of html.matchAll(/\/(?:images|downloads)\/[^"'?#<\s]+/g)) {
    const assetUrl = match[0];
    if (checkedAssets.has(assetUrl)) continue;
    checkedAssets.add(assetUrl);
    const assetPath = path.join(root, assetUrl.slice(1));
    try {
      const assetInfo = await stat(assetPath);
      if (!assetInfo.isFile() || assetInfo.size === 0) problems.push(`${relative}: empty asset ${assetUrl}`);
    } catch {
      problems.push(`${relative}: missing asset ${assetUrl}`);
    }
  }

  const outboundInternal = new Set();
  for (const match of html.matchAll(/href="(\/[^"]*)"/g)) {
    const href = match[1].split('#')[0].split('?')[0];
    if (!href || href.startsWith('/_astro/') || href.startsWith('/images/') || href.startsWith('/downloads/') || href.endsWith('.xml') || href.endsWith('.txt')) continue;
    const normalized = href.endsWith('/') ? href : `${href}/`;
    if (!existing.has(normalized) && !existing.has(href) && href !== '/404.html') problems.push(`${relative}: missing internal target ${href}`);
    outboundInternal.add(normalized);
  }
  for (const target of outboundInternal) if (inboundCounts.has(target)) inboundCounts.set(target, inboundCounts.get(target) + 1);

  const pageVisibleText = html.replace(/<script[\s\S]*?<\/script>/g, ' ').replace(/<style[\s\S]*?<\/style>/g, ' ').replace(/<[^>]+>/g, ' ').replace(/&[a-z#0-9]+;/gi, ' ');
  for (const phrase of FORBIDDEN_CLAIM_PHRASES) {
    for (const match of pageVisibleText.matchAll(new RegExp(phrase, 'gi'))) {
      const context = pageVisibleText.slice(Math.max(0, match.index - 80), match.index + phrase.length + 160);
      if (!NEGATION_PATTERN.test(context)) problems.push(`${relative}: possible unverified claim "${phrase}" found without negation nearby`);
    }
  }

  pageRecords.push({ relative, route, isIndexable });

  if (isServicePage) {
    servicePageCount += 1;
    const title = pageTitle;
    const description = pageDescription;
    if (serviceTitles.has(title)) problems.push(`${relative}: duplicate service title also used by ${serviceTitles.get(title)}`);
    if (serviceDescriptions.has(description)) problems.push(`${relative}: duplicate service description also used by ${serviceDescriptions.get(description)}`);
    serviceTitles.set(title, relative);
    serviceDescriptions.set(description, relative);
    if (title.length < 45 || title.length > 70) problems.push(`${relative}: service title length ${title.length} is outside 45-70 characters`);
    if (description.length < 135 || description.length > 170) problems.push(`${relative}: service description length ${description.length} is outside 135-170 characters`);

    const schemaCounts = { Service: 0, BreadcrumbList: 0, FAQPage: 0 };
    let schemaFaqCount = -1;
    for (const match of html.matchAll(/<script type="application\/ld\+json">(.*?)<\/script>/gs)) {
      const parsed = JSON.parse(match[1]);
      const entries = Array.isArray(parsed) ? parsed : [parsed];
      for (const entry of entries) {
        if (entry?.['@type'] in schemaCounts) schemaCounts[entry['@type']] += 1;
        if (entry?.['@type'] === 'FAQPage') schemaFaqCount = entry.mainEntity?.length ?? -1;
      }
    }
    for (const [type, count] of Object.entries(schemaCounts)) if (count !== 1) problems.push(`${relative}: expected one ${type} schema, found ${count}`);
    const visibleFaqCount = (html.match(/<details(?:\s|>)/g) || []).length;
    if (visibleFaqCount !== schemaFaqCount) problems.push(`${relative}: visible FAQ count ${visibleFaqCount} does not match schema count ${schemaFaqCount}`);
    if (visibleFaqCount < 6 || visibleFaqCount > 8) problems.push(`${relative}: expected 6-8 FAQs, found ${visibleFaqCount}`);

    const whatsappLinks = [...html.matchAll(/<a\s[^>]*data-conversion="whatsapp"[^>]*>/g)];
    if (whatsappLinks.length < 7) problems.push(`${relative}: expected at least seven WhatsApp conversion links, found ${whatsappLinks.length}`);
    for (const link of whatsappLinks) if (!link[0].includes('https://wa.me/96566488191?text=')) problems.push(`${relative}: WhatsApp CTA does not use verified number and prefilled text`);
    if (!html.includes('data-phone="96566488191"')) problems.push(`${relative}: enquiry form does not use verified WhatsApp number`);
    if (/mobile-(?:bottom|action)-bar/.test(html)) problems.push(`${relative}: prohibited mobile bottom action bar found`);

    const wordCount = (pageVisibleText.match(/[A-Za-z0-9][A-Za-z0-9&/-]*/g) || []).length;
    if (wordCount < 800) problems.push(`${relative}: service page has only ${wordCount} visible words`);
  }

  if (isBrandPage) {
    brandPageCount += 1;
    const title = pageTitle;
    const description = pageDescription;
    if (title.length < 40 || title.length > 75) problems.push(`${relative}: brand title length ${title.length} is outside 40-75 characters`);
    if (description.length < 120 || description.length > 175) problems.push(`${relative}: brand description length ${description.length} is outside 120-175 characters`);

    const schemaCounts = { WebPage: 0, BreadcrumbList: 0, FAQPage: 0, Product: 0, Offer: 0, AggregateRating: 0, Review: 0 };
    let schemaFaqCount = -1;
    for (const match of html.matchAll(/<script type="application\/ld\+json">(.*?)<\/script>/gs)) {
      const parsed = JSON.parse(match[1]);
      const entries = Array.isArray(parsed) ? parsed : [parsed];
      for (const entry of entries) {
        if (entry?.['@type'] in schemaCounts) schemaCounts[entry['@type']] += 1;
        if (entry?.['@type'] === 'FAQPage') schemaFaqCount = entry.mainEntity?.length ?? -1;
      }
    }
    for (const type of ['WebPage', 'BreadcrumbList', 'FAQPage']) if (schemaCounts[type] !== 1) problems.push(`${relative}: expected one ${type} schema, found ${schemaCounts[type]}`);
    for (const type of ['Product', 'Offer', 'AggregateRating', 'Review']) if (schemaCounts[type] !== 0) problems.push(`${relative}: prohibited ${type} schema found on a brand page`);
    const visibleFaqCount = (html.match(/<details(?:\s|>)/g) || []).length;
    if (visibleFaqCount !== schemaFaqCount) problems.push(`${relative}: visible FAQ count ${visibleFaqCount} does not match schema count ${schemaFaqCount}`);
    if (visibleFaqCount < 6 || visibleFaqCount > 8) problems.push(`${relative}: expected 6-8 FAQs, found ${visibleFaqCount}`);

    const whatsappLinks = [...html.matchAll(/<a\s[^>]*data-conversion="whatsapp"[^>]*>/g)];
    if (whatsappLinks.length < 4) problems.push(`${relative}: expected at least four WhatsApp conversion links, found ${whatsappLinks.length}`);
    for (const link of whatsappLinks) if (!link[0].includes('https://wa.me/96566488191?text=')) problems.push(`${relative}: WhatsApp CTA does not use verified number and prefilled text`);
    if (!html.includes('data-phone="96566488191"')) problems.push(`${relative}: enquiry form does not use verified WhatsApp number`);
    if (/mobile-(?:bottom|action)-bar/.test(html)) problems.push(`${relative}: prohibited mobile bottom action bar found`);
    if (!html.includes('do not imply an authorized partnership')) problems.push(`${relative}: missing visible trademark disclaimer`);

    const wordCount = (pageVisibleText.match(/[A-Za-z0-9][A-Za-z0-9&/-]*/g) || []).length;
    if (wordCount < 700) problems.push(`${relative}: brand page has only ${wordCount} visible words`);
    if (wordCount > 1800) problems.push(`${relative}: brand page has ${wordCount} visible words, review for unnecessary padding`);
  }
}

if (servicePageCount !== 16) problems.push(`expected 16 service pages, found ${servicePageCount}`);
if (brandPageCount !== 15) problems.push(`expected 15 published brand pages, found ${brandPageCount}`);
if (htmlFiles.length !== 42) problems.push(`expected 42 generated pages, found ${htmlFiles.length}`);

// --- Orphan-page check (every indexable page except the homepage must have >=1 internal inbound link) ---
for (const { relative, route, isIndexable } of pageRecords) {
  if (!isIndexable || route === '/' || route === '/404.html') continue;
  if ((inboundCounts.get(route) ?? 0) === 0) problems.push(`${relative}: orphan page — no internal links point to ${route}`);
}

// --- Directory-only brands must not have generated routes ---
// Kept as a literal list (rather than importing the TypeScript source) since this plain Node
// script has no TS loader; src/pages/brands/[slug].astro is the single source of truth for
// which brands actually get a route (it filters brandPages by status === 'published').
const PUBLISHED_BRAND_SLUGS = new Set(['cisco', 'aruba', 'fortinet', 'hikvision', 'dahua', 'commscope', 'belden', 'corning', 'panduit', 'tp-link', 'ubiquiti', 'grandstream', 'avaya', 'bosch', 'honeywell']);
for (const route of existing) {
  const brandMatch = route.match(/^\/brands\/([^/]+)\/$/);
  if (brandMatch && !PUBLISHED_BRAND_SLUGS.has(brandMatch[1])) problems.push(`unexpected generated brand route for a non-Phase-1 brand: ${route}`);
}

// --- robots.txt checks ---
try {
  const robotsTxt = await readFile(path.join(root, 'robots.txt'), 'utf8');
  if (!/Sitemap:\s*https:\/\/zenithlinekw\.com\/sitemap-index\.xml/i.test(robotsTxt)) problems.push('robots.txt: missing or incorrect absolute sitemap URL');
  if (/^Disallow:\s*\/\s*$/im.test(robotsTxt)) problems.push('robots.txt: blanket "Disallow: /" found — this would block the entire site');
  if (/Disallow:\s*\/(images|services|brands)\/?\s*$/im.test(robotsTxt)) problems.push('robots.txt: blocks a required indexable directory');
  if (/noindex/i.test(robotsTxt)) problems.push('robots.txt: attempts to use noindex directive, which robots.txt does not support');
} catch {
  problems.push('robots.txt: file missing from build output');
}

// --- Sitemap alignment checks ---
try {
  const sitemapXml = await readFile(path.join(root, 'sitemap-0.xml'), 'utf8');
  const sitemapUrls = new Set([...sitemapXml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]));
  for (const { relative, route, isIndexable } of pageRecords) {
    if (!isIndexable || route === '/404.html') continue;
    const canonicalForRoute = [...pageCanonicals.keys()].find((c) => pageCanonicals.get(c) === relative);
    if (canonicalForRoute && !sitemapUrls.has(canonicalForRoute)) problems.push(`${relative}: indexable page missing from sitemap (${canonicalForRoute})`);
  }
  for (const url of sitemapUrls) {
    if (!url.startsWith('https://zenithlinekw.com/')) problems.push(`sitemap contains a non-production URL: ${url}`);
    const brandMatch = url.match(/^https:\/\/zenithlinekw\.com\/brands\/([^/]+)\/$/);
    if (brandMatch && !PUBLISHED_BRAND_SLUGS.has(brandMatch[1])) problems.push(`sitemap contains a directory-only brand URL that should not have a route: ${url}`);
  }
} catch {
  problems.push('sitemap-0.xml: file missing from build output');
}

if (problems.length) {
  console.error(problems.join('\n'));
  process.exit(1);
}

console.log(`Validated ${htmlFiles.length} HTML pages (${servicePageCount} service pages, ${brandPageCount} brand pages) and ${checkedAssets.size} linked assets: metadata, canonicals, OG/Twitter tags, JSON-LD, FAQs, WhatsApp CTAs, brand-claim language, orphan pages, robots.txt and sitemap alignment, image attributes and non-empty media passed.`);
