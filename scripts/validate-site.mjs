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
const telecomFaqSets = new Map();
const telecomContentRecords = [];
const organizationEntities = new Map();
let servicePageCount = 0;
let brandPageCount = 0;
const TELECOM_ROUTES = ['/services/wired-network/', '/services/wireless-microwave-networks/', '/services/structured-cabling/', '/services/cctv-surveillance-systems/', '/services/pbx-telephone-exchange/', '/services/door-access-security/', '/services/public-address-systems/', '/services/router-wifi/', '/services/network-security/', '/services/installation-support/'];
const FORBIDDEN_CLAIM_PHRASES = ['authorized partner', 'authorized reseller', 'official distributor', 'certified installer', 'exclusive supplier', 'approved dealer'];
const NEGATION_PATTERN = /\bno\b|\bnot\b|n't|does not|do not|isn't|doesn't/i;
const UNSAFE_HOST_PATTERN = /localhost|127\.0\.0\.1|\.vercel\.app|0\.0\.0\.0/i;

// The two client-approved contact numbers, each with exactly one purpose. Keep these in sync
// with `contact.call` / `contact.whatsapp` in src/data/site.ts -- this script cannot import that
// TypeScript module directly, so the values are mirrored here deliberately.
const CALL_RAW = '96566488191';
const CALL_INTERNATIONAL = '+96566488191';
const CALL_DISPLAY = '+965 66488191';
const WHATSAPP_RAW = '96565071368';
const WHATSAPP_DISPLAY = '+965 65071368';
const OBSOLETE_NUMBERS = ['96599088101', '96597116076'];

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
  const isTelecomHub = relative === path.join('services', 'telecom-it', 'index.html');
  const isServicePage = relative.startsWith(`services${path.sep}`) && relative !== path.join('services', 'index.html') && !isTelecomHub;
  const isTelecomService = TELECOM_ROUTES.includes(route);
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
    if (isIndexable && canonicalHref !== `https://zenithlinekw.com${route}`) problems.push(`${relative}: canonical does not match route (${canonicalHref} versus ${route})`);
  }
  if (/<meta name="keywords"/i.test(html)) problems.push(`${relative}: obsolete meta-keywords tag found`);
  const ogUrl = html.match(/<meta property="og:url" content="([^"]*)"/)?.[1] ?? '';
  if (ogUrl && canonicalHref && ogUrl !== canonicalHref) problems.push(`${relative}: og:url (${ogUrl}) does not match canonical (${canonicalHref})`);
  const ogTitle = html.match(/<meta property="og:title" content="([^"]*)"/)?.[1] ?? '';
  const ogDescription = html.match(/<meta property="og:description" content="([^"]*)"/)?.[1] ?? '';
  if (ogTitle !== pageTitle) problems.push(`${relative}: og:title does not match the page title`);
  if (ogDescription !== pageDescription) problems.push(`${relative}: og:description does not match the meta description`);
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
      for (const entry of entries) {
        if (entry?.['@type'] in universalSchemaCounts) universalSchemaCounts[entry['@type']] += 1;
        if (entry?.['@type'] === 'Organization') {
          if (entry.telephone !== CALL_INTERNATIONAL) problems.push(`${relative}: Organization schema telephone is "${entry.telephone}", expected "${CALL_INTERNATIONAL}"`);
          organizationEntities.set(relative, entry);
        }
      }
    } catch {
      problems.push(`${relative}: invalid JSON-LD`);
      jsonLdOk = false;
    }
  }
  if (jsonLdOk) {
    if (universalSchemaCounts.Organization !== 1) problems.push(`${relative}: expected exactly one Organization schema, found ${universalSchemaCounts.Organization}`);
    if (universalSchemaCounts.WebSite !== 1) problems.push(`${relative}: expected exactly one WebSite schema, found ${universalSchemaCounts.WebSite}`);
  }

  // --- Apex-only host and indexability guardrails (every page) ---
  if (/www\.zenithlinekw\.com/i.test(html)) problems.push(`${relative}: references www.zenithlinekw.com — the site is apex-only, use https://zenithlinekw.com`);
  if (!isIndexable && route !== '/404.html') problems.push(`${relative}: unexpectedly noindex — only /404.html should carry a noindex directive`);

  // --- Contact-number correctness (every page, every type) ---
  for (const obsolete of OBSOLETE_NUMBERS) {
    if (html.includes(obsolete)) problems.push(`${relative}: obsolete phone number ${obsolete} found in page output`);
  }
  for (const match of html.matchAll(/wa\.me\/(\d+)/g)) {
    if (match[1] !== WHATSAPP_RAW) problems.push(`${relative}: wa.me link uses unapproved number ${match[1]} (expected ${WHATSAPP_RAW})`);
  }
  if (html.includes('api.whatsapp.com')) problems.push(`${relative}: unexpected api.whatsapp.com usage — wa.me is the established pattern and no page currently requires the alternative`);
  for (const match of html.matchAll(/href="tel:\+?(\d+)"/g)) {
    if (match[1] !== CALL_RAW) problems.push(`${relative}: tel: link uses unapproved number ${match[1]} (expected ${CALL_RAW})`);
  }
  for (const anchor of html.matchAll(/<a\s[^>]*>([\s\S]*?)<\/a>/g)) {
    const tag = anchor[0];
    const hrefMatch = tag.match(/href="([^"]*)"/);
    if (!hrefMatch) continue;
    const href = hrefMatch[1];
    const label = `${tag.match(/aria-label="([^"]*)"/)?.[1] ?? ''} ${anchor[1].replace(/<[^>]+>/g, ' ')}`;
    const mentionsWhatsapp = /whatsapp/i.test(label);
    const mentionsCall = /\bcall\b/i.test(label) && !mentionsWhatsapp;
    if (mentionsWhatsapp && href.startsWith('tel:')) problems.push(`${relative}: a WhatsApp-labelled element uses a tel: link (${href})`);
    if (mentionsCall && (href.includes('wa.me') || href.includes('api.whatsapp.com'))) problems.push(`${relative}: a Call-labelled element uses a WhatsApp link (${href})`);
  }
  for (const match of html.matchAll(/<form[^>]*data-whatsapp-form[^>]*>/g)) {
    if (!match[0].includes(`data-phone="${WHATSAPP_RAW}"`)) problems.push(`${relative}: enquiry form does not carry the approved WhatsApp number`);
  }
  const showsCallNumber = html.includes(CALL_DISPLAY) || html.includes(CALL_RAW);
  const showsWhatsappNumber = html.includes(WHATSAPP_DISPLAY) || html.includes(WHATSAPP_RAW);
  if (showsCallNumber && showsWhatsappNumber) {
    if (!/\bcall\b/i.test(html)) problems.push(`${relative}: shows both contact numbers without a visible/accessible "Call" label`);
    if (!/whatsapp/i.test(html)) problems.push(`${relative}: shows both contact numbers without a visible/accessible "WhatsApp" label`);
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

    const schemaCounts = { Service: 0, BreadcrumbList: 0, FAQPage: 0, Product: 0, Offer: 0, AggregateRating: 0, Review: 0 };
    let schemaFaqCount = -1;
    let serviceSchemaEntry;
    let breadcrumbSchemaEntry;
    let faqSchemaEntry;
    for (const match of html.matchAll(/<script type="application\/ld\+json">(.*?)<\/script>/gs)) {
      const parsed = JSON.parse(match[1]);
      const entries = Array.isArray(parsed) ? parsed : [parsed];
      for (const entry of entries) {
        if (entry?.['@type'] in schemaCounts) schemaCounts[entry['@type']] += 1;
        if (entry?.['@type'] === 'FAQPage') schemaFaqCount = entry.mainEntity?.length ?? -1;
        if (entry?.['@type'] === 'FAQPage') faqSchemaEntry = entry;
        if (entry?.['@type'] === 'Service') serviceSchemaEntry = entry;
        if (entry?.['@type'] === 'BreadcrumbList') breadcrumbSchemaEntry = entry;
      }
    }
    for (const type of ['Service', 'BreadcrumbList', 'FAQPage']) if (schemaCounts[type] !== 1) problems.push(`${relative}: expected one ${type} schema, found ${schemaCounts[type]}`);
    for (const type of ['Product', 'Offer', 'AggregateRating', 'Review']) if (schemaCounts[type] !== 0) problems.push(`${relative}: prohibited ${type} schema found on a service page`);
    const visibleFaqCount = (html.match(/<details(?:\s|>)/g) || []).length;
    if (visibleFaqCount !== schemaFaqCount) problems.push(`${relative}: visible FAQ count ${visibleFaqCount} does not match schema count ${schemaFaqCount}`);
    if (visibleFaqCount < 6 || visibleFaqCount > 10) problems.push(`${relative}: expected 6-10 FAQs, found ${visibleFaqCount}`);

    const whatsappLinks = [...html.matchAll(/<a\s[^>]*data-conversion="whatsapp"[^>]*>/g)];
    if (whatsappLinks.length < 7) problems.push(`${relative}: expected at least seven WhatsApp conversion links, found ${whatsappLinks.length}`);
    for (const link of whatsappLinks) {
      if (!link[0].includes('https://wa.me/96565071368?text=')) problems.push(`${relative}: WhatsApp CTA does not use verified number and prefilled text`);
      const href = link[0].match(/href="([^"]+)"/)?.[1]?.replaceAll('&amp;', '&') ?? '';
      let decodedHref = href;
      try { decodedHref = decodeURIComponent(href); } catch { problems.push(`${relative}: malformed WhatsApp URL encoding`); }
      if (link[0].includes('data-service=') && !decodedHref.includes('Source page: https://zenithlinekw.com/services/')) problems.push(`${relative}: service WhatsApp CTA is missing an absolute source-page URL`);
      if (/\[object Object\]|undefined/i.test(decodedHref)) problems.push(`${relative}: malformed value found in WhatsApp message`);
    }
    if (!html.includes('data-phone="96565071368"')) problems.push(`${relative}: enquiry form does not use verified WhatsApp number`);
    if (/mobile-(?:bottom|action)-bar/.test(html)) problems.push(`${relative}: prohibited mobile bottom action bar found`);

    if (serviceSchemaEntry) {
      if (serviceSchemaEntry.url !== canonicalHref) problems.push(`${relative}: Service schema URL does not match the canonical`);
      if (serviceSchemaEntry.areaServed?.name !== 'Kuwait') problems.push(`${relative}: Service schema areaServed must be Kuwait`);
      if (serviceSchemaEntry.provider?.['@id'] !== 'https://zenithlinekw.com/#organization') problems.push(`${relative}: Service schema provider does not reference the stable Organization entity`);
      if (serviceSchemaEntry.image !== ogImage) problems.push(`${relative}: Service schema image does not match the page image`);
    }
    if (!isIndexable) problems.push(`${relative}: service page must be indexable`);

    const normalizeFaqText = (value) => String(value ?? '').replace(/<[^>]+>/g, ' ').replace(/&[a-z#0-9]+;/gi, ' ').replace(/\s+/g, ' ').trim().toLowerCase();
    const visibleFaqFingerprint = [...html.matchAll(/<details[^>]*>[\s\S]*?<summary>([\s\S]*?)<\/summary>[\s\S]*?<p>([\s\S]*?)<\/p>[\s\S]*?<\/details>/g)]
      .map((match) => `${normalizeFaqText(match[1])}::${normalizeFaqText(match[2])}`)
      .join('|');
    const schemaFaqFingerprint = (faqSchemaEntry?.mainEntity ?? [])
      .map((item) => `${normalizeFaqText(item.name)}::${normalizeFaqText(item.acceptedAnswer?.text)}`)
      .join('|');
    if (visibleFaqFingerprint !== schemaFaqFingerprint) problems.push(`${relative}: FAQ schema content does not exactly match the visible FAQ content`);

    if (isTelecomService) {
      const requiredSectionIds = ['direct-answer', 'service-at-a-glance', 'customer-problems', 'service-overview', 'service-scope', 'components-technologies', 'applications', 'quotation-factors', 'delivery-process', 'why-zenith-line', 'faq', 'service-enquiry', 'related-services', 'relevant-brands'];
      for (const id of requiredSectionIds) if (!html.includes(`id="${id}"`)) problems.push(`${relative}: missing essential content section #${id}`);

      const directAnswerHtml = html.match(/<section class="[^"]*service-direct-answer[^"]*" id="direct-answer"[\s\S]*?<p class="service-lead">([\s\S]*?)<\/p>/)?.[1] ?? '';
      const directAnswerText = directAnswerHtml.replace(/<[^>]+>/g, ' ').replace(/&[a-z#0-9]+;/gi, ' ').trim();
      const directAnswerWords = directAnswerText.match(/[A-Za-z0-9][A-Za-z0-9&/-]*/g)?.length ?? 0;
      if (directAnswerWords < 40 || directAnswerWords > 70) problems.push(`${relative}: direct answer must contain 40-70 words, found ${directAnswerWords}`);

      const faqFingerprint = visibleFaqFingerprint.split('|').sort().join('|');
      if (telecomFaqSets.has(faqFingerprint)) problems.push(`${relative}: FAQ set duplicates ${telecomFaqSets.get(faqFingerprint)}`);
      telecomFaqSets.set(faqFingerprint, relative);

      const breadcrumbItems = breadcrumbSchemaEntry?.itemListElement ?? [];
      if (breadcrumbItems.length !== 4 || breadcrumbItems[2]?.item !== 'https://zenithlinekw.com/services/telecom-it/') problems.push(`${relative}: Telecom breadcrumb schema must include the Telecom & IT hub`);
      if (!/<nav class="breadcrumbs"[^>]*>[\s\S]*?href="\/services\/telecom-it\/"/.test(html)) problems.push(`${relative}: visible breadcrumb must link to the Telecom & IT hub`);

      const requiredFields = ['propertyType', 'approximateSize', 'existingSystem', 'timeline', 'brandPreference', 'requirement', 'consent'];
      for (const name of requiredFields) if (!html.includes(`name="${name}"`)) problems.push(`${relative}: qualified enquiry form is missing ${name}`);
      if (!html.includes(`data-source-url="${canonicalHref}"`)) problems.push(`${relative}: enquiry form source URL does not match canonical`);

      const contentWords = pageVisibleText.toLowerCase().match(/[a-z0-9]+/g) ?? [];
      const shingles = new Set();
      for (let index = 0; index <= contentWords.length - 8; index += 1) shingles.add(contentWords.slice(index, index + 8).join(' '));
      telecomContentRecords.push({ relative, shingles });
    }
  }

  if (isTelecomHub) {
    const schemaCounts = { CollectionPage: 0, BreadcrumbList: 0, FAQPage: 0, ItemList: 0 };
    let schemaFaqCount = -1;
    let collectionEntry;
    for (const match of html.matchAll(/<script type="application\/ld\+json">(.*?)<\/script>/gs)) {
      const entries = Array.isArray(JSON.parse(match[1])) ? JSON.parse(match[1]) : [JSON.parse(match[1])];
      for (const entry of entries) {
        if (entry?.['@type'] in schemaCounts) schemaCounts[entry['@type']] += 1;
        if (entry?.['@type'] === 'FAQPage') schemaFaqCount = entry.mainEntity?.length ?? -1;
        if (entry?.['@type'] === 'ItemList' && entry.numberOfItems !== 10) problems.push('telecom hub: ItemList must contain 10 services');
        if (entry?.['@type'] === 'CollectionPage') collectionEntry = entry;
      }
    }
    for (const [type, count] of Object.entries(schemaCounts)) if (count !== 1) problems.push(`telecom hub: expected one ${type} schema, found ${count}`);
    const visibleFaqCount = (html.match(/<details(?:\s|>)/g) || []).length;
    if (visibleFaqCount !== schemaFaqCount || visibleFaqCount < 6 || visibleFaqCount > 10) problems.push(`telecom hub: visible/schema FAQ mismatch (${visibleFaqCount}/${schemaFaqCount})`);
    if (!html.includes('https://wa.me/96565071368?text=')) problems.push('telecom hub: missing prefilled WhatsApp link');
    if (collectionEntry?.areaServed?.name !== 'Kuwait') problems.push('telecom hub: CollectionPage areaServed must be Kuwait');
    if (!html.includes(`data-source-url="https://zenithlinekw.com/services/telecom-it/"`)) problems.push('telecom hub: enquiry form source URL is missing or incorrect');
    for (const name of ['propertyType', 'approximateSize', 'existingSystem', 'timeline', 'brandPreference', 'requirement', 'consent']) if (!html.includes(`name="${name}"`)) problems.push(`telecom hub: qualified enquiry form is missing ${name}`);
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
    for (const link of whatsappLinks) if (!link[0].includes('https://wa.me/96565071368?text=')) problems.push(`${relative}: WhatsApp CTA does not use verified number and prefilled text`);
    // The generic header/footer WhatsApp CTAs (site-wide, brand-agnostic) are intentionally source-less;
    // only the brand-specific CTAs inside <main> carry "Source page:" — scope this check to <main> alone.
    const brandMainHtml = html.match(/<main[^>]*>[\s\S]*?<\/main>/)?.[0] ?? '';
    const brandMainWhatsappLinks = [...brandMainHtml.matchAll(/<a\s[^>]*data-conversion="whatsapp"[^>]*>/g)];
    for (const link of brandMainWhatsappLinks) {
      const href = link[0].match(/href="([^"]+)"/)?.[1]?.replaceAll('&amp;', '&') ?? '';
      let decodedHref = href;
      try { decodedHref = decodeURIComponent(href); } catch { problems.push(`${relative}: malformed WhatsApp URL encoding`); }
      if (!decodedHref.includes(`Source page: ${canonicalHref}`)) problems.push(`${relative}: brand WhatsApp CTA is missing an absolute source-page URL matching its own canonical`);
    }
    if (!html.includes('data-phone="96565071368"')) problems.push(`${relative}: enquiry form does not use verified WhatsApp number`);
    if (/mobile-(?:bottom|action)-bar/.test(html)) problems.push(`${relative}: prohibited mobile bottom action bar found`);
    if (!html.includes('do not imply an authorized partnership')) problems.push(`${relative}: missing visible trademark disclaimer`);

    const wordCount = (pageVisibleText.match(/[A-Za-z0-9][A-Za-z0-9&/-]*/g) || []).length;
    if (wordCount < 700) problems.push(`${relative}: brand page has only ${wordCount} visible words`);
    if (wordCount > 1800) problems.push(`${relative}: brand page has ${wordCount} visible words, review for unnecessary padding`);
  }
}

for (let leftIndex = 0; leftIndex < telecomContentRecords.length; leftIndex += 1) {
  for (let rightIndex = leftIndex + 1; rightIndex < telecomContentRecords.length; rightIndex += 1) {
    const left = telecomContentRecords[leftIndex];
    const right = telecomContentRecords[rightIndex];
    let shared = 0;
    for (const shingle of left.shingles) if (right.shingles.has(shingle)) shared += 1;
    const union = left.shingles.size + right.shingles.size - shared;
    const similarity = union ? shared / union : 0;
    if (similarity >= 0.5) problems.push(`${left.relative} and ${right.relative}: substantially duplicated body copy (${Math.round(similarity * 100)}% eight-word-shingle similarity)`);
  }
}

if (servicePageCount !== 20) problems.push(`expected 20 service pages, found ${servicePageCount}`);
if (brandPageCount !== 15) problems.push(`expected 15 published brand pages, found ${brandPageCount}`);
if (htmlFiles.length !== 47) problems.push(`expected 47 generated pages, found ${htmlFiles.length}`);

// --- Service-image integrity checks ---
// The service directory is the canonical source for each service's primary image.
// Validate those records as a set, then ensure every detail-page hero renders the
// same asset so a stale or mismatched visual cannot slip through the build.
try {
  const serviceIndexHtml = await readFile(path.join(root, 'services', 'index.html'), 'utf8');
  const primaryImages = new Map();
  for (const card of serviceIndexHtml.matchAll(/<article class="[^"]*service-card[\s\S]*?<\/article>/g)) {
    const imageLink = card[0].match(/<a class="service-image" href="\/services\/([^/]+)\/"[\s\S]*?<img\s+([^>]+)>/);
    if (!imageLink) continue;
    const [, slug, attributes] = imageLink;
    const attribute = (name) => attributes.match(new RegExp(`(?:^|\\s)${name}="([^"]*)"`))?.[1] ?? '';
    const src = attribute('src');
    const alt = attribute('alt').trim();
    const width = attribute('width');
    const height = attribute('height');
    const loading = attribute('loading');

    if (!src) problems.push(`services/index.html: ${slug} primary image is missing src`);
    if (/^(?:https?:)?\/\//i.test(src)) problems.push(`services/index.html: ${slug} primary image uses an external hotlink (${src})`);
    else if (src && !src.startsWith('/images/')) problems.push(`services/index.html: ${slug} primary image has an invalid internal path (${src})`);
    if (src && !src.endsWith('.webp')) problems.push(`services/index.html: ${slug} primary image is not WebP (${src})`);
    if (!alt) problems.push(`services/index.html: ${slug} primary image has empty alt text`);
    if (!/^\d+$/.test(width) || !/^\d+$/.test(height)) problems.push(`services/index.html: ${slug} primary image is missing numeric dimensions`);
    if (loading !== 'lazy') problems.push(`services/index.html: ${slug} card image must load lazily`);
    if (primaryImages.has(src)) problems.push(`services/index.html: duplicate primary image ${src} used by ${primaryImages.get(src)} and ${slug}`);
    primaryImages.set(src, slug);

    if (src.startsWith('/')) {
      try {
        const assetInfo = await stat(path.join(root, src.slice(1)));
        if (!assetInfo.isFile() || assetInfo.size === 0) problems.push(`services/index.html: ${slug} primary image is empty (${src})`);
      } catch {
        problems.push(`services/index.html: ${slug} primary image is missing (${src})`);
      }
    }

    try {
      const detailHtml = await readFile(path.join(root, 'services', slug, 'index.html'), 'utf8');
      const heroAttributes = detailHtml.match(/<div class="page-hero-visual[^"]*">\s*<img\s+([^>]+)>/)?.[1] ?? '';
      const heroSrc = heroAttributes.match(/(?:^|\s)src="([^"]*)"/)?.[1] ?? '';
      const heroLoading = heroAttributes.match(/(?:^|\s)loading="([^"]*)"/)?.[1] ?? '';
      if (!heroSrc) problems.push(`services/${slug}/index.html: service hero image not found`);
      else if (heroSrc !== src) problems.push(`services/${slug}/index.html: hero image ${heroSrc} does not match primary image ${src}`);
      if (heroLoading !== 'eager') problems.push(`services/${slug}/index.html: service hero image must load eagerly`);
    } catch {
      problems.push(`services/${slug}/index.html: service detail page is missing`);
    }
  }
  if (primaryImages.size !== 20) problems.push(`services/index.html: expected 20 unique service primary images, found ${primaryImages.size}`);
} catch {
  problems.push('services/index.html: service directory is missing from build output');
}

for (const route of [...TELECOM_ROUTES, '/services/telecom-it/']) if (!existing.has(route)) problems.push(`required Telecom & IT route missing: ${route}`);
if (existing.has('/services/voip-voice/')) problems.push('retired VoIP route still generates indexable HTML');
for (const file of htmlFiles) {
  const html = await readFile(file, 'utf8');
  if (/href="\/services\/voip-voice\/?"/.test(html)) problems.push(`${path.relative(root, file)}: internal link targets retired VoIP URL`);
}
const headerSource = await readFile(path.resolve('src/components/Header.astro'), 'utf8');
for (const route of TELECOM_ROUTES) {
  const occurrences = (headerSource.match(new RegExp(`href="${route}"`, 'g')) || []).length;
  if (occurrences !== 2) problems.push(`header: expected desktop and mobile links for ${route}, found ${occurrences}`);
}
const enquiryFormSource = await readFile(path.resolve('src/components/EnquiryForm.astro'), 'utf8');
for (const requiredMessageLine of ['Service: ${selectedService}', 'Property or project type:', 'Approximate size or quantity:', 'Existing system details:', 'Desired timeline:', 'Model or brand preference:', 'Requirement:', 'Consent: Confirmed', 'Source page: ${sourcePage}']) {
  if (!enquiryFormSource.includes(requiredMessageLine)) problems.push(`enquiry form: generated WhatsApp message is missing "${requiredMessageLine}"`);
}
if (!enquiryFormSource.includes('encodeURIComponent(message)')) problems.push('enquiry form: WhatsApp message must be safely encoded');

// --- Analytics event-name consistency (checked against source, since the GA4 bridge script
// only renders into the build when PUBLIC_GA_MEASUREMENT_ID is set — see ANALYTICS-CONVERSION-SETUP.md) ---
const baseLayoutSource = await readFile(path.resolve('src/layouts/BaseLayout.astro'), 'utf8');
const REQUIRED_CONVERSION_EVENTS = ['whatsapp_click', 'phone_click', 'email_click', 'enquiry_start', 'enquiry_submit', 'profile_download', 'instagram_click'];
for (const eventName of REQUIRED_CONVERSION_EVENTS) {
  if (!baseLayoutSource.includes(`track('${eventName}'`)) problems.push(`BaseLayout.astro: expected conversion event "${eventName}" is missing from the analytics bridge`);
}
if (process.env.PUBLIC_GA_MEASUREMENT_ID) {
  // Defensive: if this script is ever run with a real GA env var present, the build it validates
  // must actually contain the bridge — silent env-gating bugs would otherwise ship no tracking at all.
  const anyPageHasGtag = htmlFiles.length > 0 && (await readFile(htmlFiles[0], 'utf8')).includes('googletagmanager.com');
  if (!anyPageHasGtag) problems.push('PUBLIC_GA_MEASUREMENT_ID is set but the built output contains no googletagmanager.com reference');
}
const vercelConfig = JSON.parse(await readFile(path.resolve('vercel.json'), 'utf8'));
const voipRedirects = vercelConfig.redirects.filter((item) => item.source.replace(/\/$/, '') === '/services/voip-voice');
if (!voipRedirects.length || voipRedirects.some((item) => item.destination !== '/services/pbx-telephone-exchange/' || item.permanent !== true)) problems.push('vercel.json: permanent VoIP redirect is missing or incorrect');

// --- Redirect sources must never appear as a generated route or a live route target ---
// A URL that vercel.json redirects away from must not simultaneously be a real generated page
// (that would make the redirect unreachable / create ambiguous routing), and no redirect may
// point at another redirect source (a chain) or back at itself (a loop).
const redirectSourceRoutes = new Set();
for (const item of vercelConfig.redirects ?? []) {
  const normalizedSource = item.source.endsWith('/') ? item.source : `${item.source}/`;
  redirectSourceRoutes.add(normalizedSource);
  if (existing.has(normalizedSource) || existing.has(item.source)) problems.push(`vercel.json: redirect source ${item.source} is also a generated route — remove the redirect or the page`);
  if (item.permanent !== true) problems.push(`vercel.json: redirect from ${item.source} is not marked permanent (301/308) — migrated URLs must use a permanent redirect`);
  const normalizedDestination = item.destination.endsWith('/') || item.destination.includes('#') || item.destination.includes('?') ? item.destination : `${item.destination}/`;
  if (redirectSourceRoutes.has(normalizedDestination) && normalizedDestination !== normalizedSource) problems.push(`vercel.json: redirect from ${item.source} points to ${item.destination}, which is itself another redirect's source (chain)`);
  if (normalizedDestination === normalizedSource) problems.push(`vercel.json: redirect from ${item.source} points to itself (loop)`);
}

// --- Conflicting business identity: the Organization entity must be byte-identical on every page ---
const organizationSnapshots = [...organizationEntities.entries()];
if (organizationSnapshots.length > 0) {
  const [firstPage, firstEntity] = organizationSnapshots[0];
  const firstJson = JSON.stringify(firstEntity);
  for (const [relative, entity] of organizationSnapshots.slice(1)) {
    if (JSON.stringify(entity) !== firstJson) problems.push(`${relative}: Organization schema differs from ${firstPage} — a single stable business identity must be used sitewide`);
  }
  if (firstEntity['@id'] !== 'https://zenithlinekw.com/#organization') problems.push(`${firstPage}: Organization schema @id is "${firstEntity['@id']}", expected the stable https://zenithlinekw.com/#organization identity`);
}

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
let sitemapUrls = new Set();
try {
  const sitemapXml = await readFile(path.join(root, 'sitemap-0.xml'), 'utf8');
  sitemapUrls = new Set([...sitemapXml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]));
  const sitemapUrlList = [...sitemapXml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);

  for (const { relative, route, isIndexable } of pageRecords) {
    if (!isIndexable || route === '/404.html') continue;
    const canonicalForRoute = [...pageCanonicals.keys()].find((c) => pageCanonicals.get(c) === relative);
    if (canonicalForRoute && !sitemapUrls.has(canonicalForRoute)) problems.push(`${relative}: indexable page missing from sitemap (${canonicalForRoute})`);
  }

  // Duplicate <loc> entries.
  const seenUrls = new Set();
  for (const url of sitemapUrlList) {
    if (seenUrls.has(url)) problems.push(`sitemap-0.xml: duplicate <loc> entry ${url}`);
    seenUrls.add(url);
  }

  for (const url of sitemapUrls) {
    if (!url.startsWith('https://zenithlinekw.com/')) problems.push(`sitemap contains a non-production URL: ${url}`);
    if (UNSAFE_HOST_PATTERN.test(url)) problems.push(`sitemap-0.xml: contains a localhost/preview-host URL: ${url}`);
    if (url.includes('?') || url.includes('#')) problems.push(`sitemap-0.xml: URL contains a query string or fragment: ${url}`);
    if (!url.endsWith('/')) problems.push(`sitemap-0.xml: URL is missing the trailing slash required by the site's slash policy: ${url}`);
    const routeForUrl = url.replace('https://zenithlinekw.com', '') || '/';
    if (!existing.has(routeForUrl)) problems.push(`sitemap-0.xml: URL does not correspond to a generated page: ${url}`);
    const canonicalMatch = pageCanonicals.has(url);
    if (existing.has(routeForUrl) && !canonicalMatch) problems.push(`sitemap-0.xml: URL does not match any page's self-referencing canonical: ${url}`);
    const brandMatch = url.match(/^https:\/\/zenithlinekw\.com\/brands\/([^/]+)\/$/);
    if (brandMatch && !PUBLISHED_BRAND_SLUGS.has(brandMatch[1])) problems.push(`sitemap contains a directory-only brand URL that should not have a route: ${url}`);
  }

  // The retired VoIP route and the 404 page must never appear in the XML sitemap.
  if (sitemapUrls.has('https://zenithlinekw.com/services/voip-voice/')) problems.push('sitemap-0.xml: retired VoIP route present in the XML sitemap');
  if ([...sitemapUrls].some((url) => /404/.test(url))) problems.push('sitemap-0.xml: 404 page present in the XML sitemap');

  // Every published service and brand page, and the Telecom & IT hub, must be present by exact URL.
  if (!sitemapUrls.has('https://zenithlinekw.com/services/telecom-it/')) problems.push('sitemap-0.xml: Telecom, IT & ELV hub is missing');
  for (const slug of PUBLISHED_BRAND_SLUGS) {
    if (!sitemapUrls.has(`https://zenithlinekw.com/brands/${slug}/`)) problems.push(`sitemap-0.xml: published brand page missing (${slug})`);
  }

  // A redirect source must never be indexed — it is a URL that will 301/308 elsewhere, not a real page.
  for (const url of sitemapUrls) {
    const routeForUrl = url.replace('https://zenithlinekw.com', '') || '/';
    const normalizedRoute = routeForUrl.endsWith('/') ? routeForUrl : `${routeForUrl}/`;
    if (redirectSourceRoutes.has(normalizedRoute)) problems.push(`sitemap-0.xml: contains a redirect-source URL, which must not be indexed: ${url}`);
  }
} catch {
  problems.push('sitemap-0.xml: file missing from build output');
}

// --- sitemap-index.xml checks ---
try {
  const sitemapIndexXml = await readFile(path.join(root, 'sitemap-index.xml'), 'utf8');
  const referencedSitemaps = [...sitemapIndexXml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
  if (referencedSitemaps.length === 0) problems.push('sitemap-index.xml: does not reference any numbered sitemap file');
  for (const url of referencedSitemaps) {
    if (!url.startsWith('https://zenithlinekw.com/')) problems.push(`sitemap-index.xml: references a non-production URL: ${url}`);
    const fileName = url.replace('https://zenithlinekw.com/', '');
    try {
      await stat(path.join(root, fileName));
    } catch {
      problems.push(`sitemap-index.xml: references ${fileName}, which is missing from the build output`);
    }
  }
} catch {
  problems.push('sitemap-index.xml: file missing from build output');
}

// --- Global <link rel="sitemap"> discovery tag ---
for (const file of htmlFiles) {
  const html = await readFile(file, 'utf8');
  const relative = path.relative(root, file).replaceAll(path.sep, '/');
  const sitemapLinkHref = html.match(/<link rel="sitemap" href="([^"]*)"/)?.[1];
  if (!sitemapLinkHref) { problems.push(`${relative}: missing <link rel="sitemap"> in the document head`); continue; }
  if (sitemapLinkHref !== '/sitemap-index.xml') problems.push(`${relative}: <link rel="sitemap"> points to ${sitemapLinkHref} instead of /sitemap-index.xml`);
  try {
    await stat(path.join(root, 'sitemap-index.xml'));
  } catch {
    problems.push(`${relative}: <link rel="sitemap"> references a file missing from the build output`);
  }
}

// --- Visual sitemap <-> XML sitemap parity ---
// The visual "Website Sitemap" page must link to exactly the set of pages the XML sitemap
// lists (no omissions, no broken/extra links) so the two sitemap systems never drift apart.
try {
  const visualHtml = await readFile(path.join(root, 'sitemap-visual', 'index.html'), 'utf8');
  const directorySlice = visualHtml.slice(visualHtml.indexOf('sitemap-directory'), visualHtml.indexOf('sitemap-note'));
  const brandsCardMatch = visualHtml.match(/<article class="sitemap-card sitemap-brands[\s\S]*?<\/article>/);
  const directoryHtml = directorySlice + (brandsCardMatch ? brandsCardMatch[0] : '');
  const visualHrefs = [...directoryHtml.matchAll(/href="(\/[^"]*)"/g)].map((m) => m[1]);

  // Broken links: every href in the directory must resolve to a real generated route.
  for (const href of visualHrefs) {
    const normalized = href.endsWith('/') ? href : `${href}/`;
    if (!existing.has(normalized) && !existing.has(href)) problems.push(`sitemap-visual/index.html: directory links to a route that does not exist (${href})`);
  }

  const visualAbsoluteSet = new Set(visualHrefs.map((href) => `https://zenithlinekw.com${href}`));
  for (const url of visualAbsoluteSet) {
    if (!sitemapUrls.has(url)) problems.push(`sitemap-visual/index.html: directory links to ${url}, which is absent from the XML sitemap`);
  }
  for (const url of sitemapUrls) {
    if (url === 'https://zenithlinekw.com/sitemap-visual/') continue; // the page does not need to link to itself from within the directory body
    if (!visualAbsoluteSet.has(url)) problems.push(`sitemap-visual/index.html: XML sitemap lists ${url}, which the visual directory omits`);
  }

  // Displayed category counts must match the number of links actually rendered in each card.
  const cardBlocks = [...directoryHtml.matchAll(/<article class="sitemap-card[^"]*"[\s\S]*?<\/article>/g)].map((m) => m[0]);
  for (const block of cardBlocks) {
    const declaredCount = Number(block.match(/sitemap-card-count">(\d+) pages/)?.[1]);
    const actualCount = (block.match(/<li><a /g) || []).length;
    const cardName = block.match(/<h2[^>]*>(?:<a[^>]*>)?([^<]+)/)?.[1] ?? 'unknown card';
    if (Number.isFinite(declaredCount) && declaredCount !== actualCount) problems.push(`sitemap-visual/index.html: "${cardName}" card declares ${declaredCount} pages but lists ${actualCount}`);
  }
  const totalStat = Number(visualHtml.match(/sitemap-stat"><strong>(\d+)<\/strong><span>Indexable pages/)?.[1]);
  if (Number.isFinite(totalStat) && totalStat !== visualAbsoluteSet.size) problems.push(`sitemap-visual/index.html: "Indexable pages" stat shows ${totalStat} but the directory links to ${visualAbsoluteSet.size} unique pages`);
} catch {
  problems.push('sitemap-visual/index.html: file missing from build output');
}

// --- Division rename ("Trading & Support" -> "General Trading & Manpower") and ELV positioning checks ---
const allPageHtml = new Map();
for (const file of htmlFiles) allPageHtml.set(path.relative(root, file).replaceAll(path.sep, '/'), await readFile(file, 'utf8'));
const homepageHtml = allPageHtml.get('index.html') ?? '';
const hubHtml = allPageHtml.get(path.join('services', 'telecom-it', 'index.html').replaceAll(path.sep, '/')) ?? '';

// 1. The retired "Trading & Support" division name must not appear anywhere in the published output.
for (const [relative, html] of allPageHtml) {
  if (/Trading\s*&(?:amp;)?\s*Support/i.test(html)) problems.push(`${relative}: obsolete "Trading & Support" wording still present`);
}

// 2 & 3. "General Trading & Manpower" must appear on the homepage in the desktop nav, mobile nav and division card alike.
const homepageDivisionNameCount = (homepageHtml.match(/General Trading & Manpower/g) || []).length;
if (homepageDivisionNameCount < 3) problems.push(`index.html: expected "General Trading & Manpower" in the desktop nav, mobile nav and homepage division card, found ${homepageDivisionNameCount} occurrence(s)`);

// 4. Homepage trust strip must mention ELV.
if (!/Civil, MEP, ELV, telecom and IT capability/.test(homepageHtml)) problems.push('index.html: trust strip is missing the ELV capability mention');

// 5. The shared footer company description must mention ELV and the renamed division on every page.
for (const [relative, html] of allPageHtml) {
  if (!/MEP, ELV, telecom, IT, general trading and manpower company/i.test(html)) problems.push(`${relative}: footer company description is missing the ELV / general trading and manpower wording`);
}

// 6. The Telecom & IT hub must contain a visible, spelled-out ELV definition.
if (!/Extra-Low Voltage \(ELV\) systems are/.test(hubHtml)) problems.push('services/telecom-it/index.html: missing a visible spelled-out ELV definition');

// 7. ELV content must exist on the technically appropriate ("strong relevance") individual service pages.
const ELV_STRONG_ROUTES = ['wired-network', 'structured-cabling', 'cctv-surveillance-systems', 'pbx-telephone-exchange', 'door-access-security', 'public-address-systems'];
for (const slug of ELV_STRONG_ROUTES) {
  const html = allPageHtml.get(path.join('services', slug, 'index.html').replaceAll(path.sep, '/')) ?? '';
  if (!/ELV/.test(html)) problems.push(`services/${slug}/: expected ELV-relevant content on a strong-relevance Telecom & IT page`);
}

// 8. Unconfirmed ELV-adjacent services, certifications and superlative claims must never appear.
const FORBIDDEN_ELV_PHRASES = ['fire alarm system', 'emergency evacuation system', 'building management system', 'building automation', 'smatv', 'nurse-call', 'nurse call', 'master-clock system', 'master clock system', 'audio-visual system', 'audio visual system', 'home automation', 'civil defence approval', 'ministry approval', 'certified elv engineer', 'authorized system integrator', 'authorised system integrator', 'manufacturer partnership', 'guaranteed regulatory compliance', 'best elv company in kuwait', 'leading elv contractor', 'number-one elv provider', 'number one elv provider', 'fully certified', 'government approved'];
for (const [relative, html] of allPageHtml) {
  const lower = html.toLowerCase();
  for (const phrase of FORBIDDEN_ELV_PHRASES) if (lower.includes(phrase)) problems.push(`${relative}: contains prohibited ELV-adjacent claim "${phrase}"`);
}

// 9. ELV wording must read as distinct per-page content, not one sentence copy-pasted across most of the site.
const elvSentencePages = new Map();
for (const [relative, html] of allPageHtml) {
  const withoutFooter = html.replace(/<footer[\s\S]*?<\/footer>/i, ' ');
  const text = withoutFooter.replace(/<script[\s\S]*?<\/script>/g, ' ').replace(/<[^>]+>/g, ' ').replace(/&[a-z#0-9]+;/gi, ' ').replace(/\s+/g, ' ');
  for (const sentence of text.match(/[^.!?]*\bELV\b[^.!?]*[.!?]/gi) || []) {
    const normalized = sentence.trim().toLowerCase();
    if (!elvSentencePages.has(normalized)) elvSentencePages.set(normalized, new Set());
    elvSentencePages.get(normalized).add(relative);
  }
}
for (const [sentence, pages] of elvSentencePages) {
  if (pages.size > 4) problems.push(`ELV sentence duplicated verbatim across ${pages.size} pages: "${sentence.slice(0, 90)}..."`);
}

// 10, 11 & 12. FAQ/schema parity, stable routes/canonicals and the approved phone/WhatsApp separation
// are already enforced by the universal and Telecom-specific checks earlier in this script; the ELV
// and rename edits do not change routes, canonicals or contact numbers, so no additional check is needed here.

// --- Official Instagram profile checks ---
const INSTAGRAM_URL = 'https://www.instagram.com/znthline/';
const instagramAnchorPattern = /<a\s[^>]*href="https:\/\/www\.instagram\.com\/[^"]*"[^>]*>[\s\S]*?<\/a>/g;
let instagramLinkTotal = 0;

for (const [relative, html] of allPageHtml) {
  // 1 & 3. Only the exact confirmed handle/URL may ever appear; no alternative Instagram username.
  for (const match of html.matchAll(/https:\/\/(?:www\.)?instagram\.com\/[^"'\s\\]*/gi)) {
    if (match[0] !== INSTAGRAM_URL) problems.push(`${relative}: unexpected Instagram URL/handle "${match[0]}" — only ${INSTAGRAM_URL} is approved`);
  }
  // 4. Every public Instagram reference must use HTTPS.
  if (/href="http:\/\/(?:www\.)?instagram\.com/i.test(html)) problems.push(`${relative}: Instagram link uses insecure http://`);

  for (const anchor of html.match(instagramAnchorPattern) || []) {
    instagramLinkTotal += 1;
    // 5. External Instagram links must open safely in a new tab.
    if (!/target="_blank"/.test(anchor)) problems.push(`${relative}: Instagram link is missing target="_blank"`);
    if (!/rel="noopener noreferrer"/.test(anchor)) problems.push(`${relative}: Instagram link is missing rel="noopener noreferrer"`);
    // 6. Every Instagram link must have an accessible name (aria-label or non-empty link text).
    const hasAriaLabel = /aria-label="[^"]+"/.test(anchor);
    const visibleText = anchor.replace(/<[^>]+>/g, '').trim();
    if (!hasAriaLabel && !visibleText) problems.push(`${relative}: Instagram link has no accessible name`);
    // 8. Instagram links must never be tagged as a WhatsApp conversion.
    if (/data-conversion="whatsapp"/.test(anchor)) problems.push(`${relative}: Instagram link is incorrectly marked as a WhatsApp conversion`);
    if (!/data-social="instagram"/.test(anchor)) problems.push(`${relative}: Instagram link is missing data-social="instagram"`);
  }

  // 7. No Instagram iframe, embed script or third-party feed dependency.
  if (/<iframe[^>]*instagram/i.test(html)) problems.push(`${relative}: Instagram iframe embed found`);
  if (/instagram\.com\/embed|graph\.instagram\.com|platform\.instagram\.com|cdninstagram\.com/i.test(html)) problems.push(`${relative}: third-party Instagram embed/API/feed reference found`);
}
if (instagramLinkTotal === 0) problems.push('no Instagram links found anywhere in the built output');

// 2. The Organization schema's sameAs must contain the exact official Instagram URL, on every page.
for (const [relative, html] of allPageHtml) {
  let organizationEntry;
  for (const match of html.matchAll(/<script type="application\/ld\+json">(.*?)<\/script>/gs)) {
    let parsed;
    try { parsed = JSON.parse(match[1]); } catch { continue; }
    for (const entry of Array.isArray(parsed) ? parsed : [parsed]) if (entry?.['@type'] === 'Organization') organizationEntry = entry;
  }
  if (!organizationEntry) { problems.push(`${relative}: Organization schema not found`); continue; }
  const sameAs = Array.isArray(organizationEntry.sameAs) ? organizationEntry.sameAs : [];
  if (!sameAs.includes(INSTAGRAM_URL)) problems.push(`${relative}: Organization schema sameAs is missing ${INSTAGRAM_URL}`);
  if (sameAs.some((url) => url !== INSTAGRAM_URL)) problems.push(`${relative}: Organization schema sameAs contains an unexpected entry`);
}

if (problems.length) {
  console.error(problems.join('\n'));
  process.exit(1);
}

console.log(`Validated ${htmlFiles.length} HTML pages (${servicePageCount} service pages, ${brandPageCount} brand pages) and ${checkedAssets.size} linked assets: metadata, canonicals, OG/Twitter tags, JSON-LD, unique FAQ sets, substantial-copy duplication, Telecom content architecture, qualified WhatsApp messages, breadcrumb alignment, brand-claim language, orphan pages, robots.txt and sitemap alignment, plus unique local WebP service primaries, matching eager heroes, lazy cards, image attributes and non-empty media passed.`);
