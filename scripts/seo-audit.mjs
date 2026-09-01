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

let sitemapUrls = new Set();
try {
  const sitemapXml = await readFile(path.join(root, 'sitemap-0.xml'), 'utf8');
  sitemapUrls = new Set([...sitemapXml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]));
} catch {
  // sitemap not found; leave empty
}

function routeFor(file) {
  const relative = path.relative(root, file).replaceAll(path.sep, '/');
  if (relative === 'index.html') return '/';
  if (relative === '404.html') return '/404.html';
  return `/${relative.replace(/index\.html$/, '')}`;
}

function pageType(route) {
  if (route === '/') return 'homepage';
  if (route === '/404.html') return 'error';
  if (route.startsWith('/services/') && route !== '/services/') return 'service';
  if (route === '/services/') return 'service-directory';
  if (route.startsWith('/brands/') && route !== '/brands/') return 'brand';
  if (route === '/brands/') return 'brand-directory';
  return 'core';
}

const pages = [];
const outboundByPage = new Map();

for (const file of htmlFiles) {
  const html = await readFile(file, 'utf8');
  const route = routeFor(file);
  const title = html.match(/<title>(.*?)<\/title>/s)?.[1]?.trim() ?? '';
  const description = html.match(/<meta name="description" content="([^"]*)"/)?.[1]?.trim() ?? '';
  const h1Count = (html.match(/<h1(?:\s|>)/g) || []).length;
  const canonical = html.match(/<link rel="canonical" href="([^"]*)"/)?.[1] ?? '';
  const ogImage = html.match(/<meta property="og:image" content="([^"]*)"/)?.[1] ?? '';
  const robotsMeta = html.match(/<meta name="robots" content="([^"]*)"/)?.[1] ?? '';
  const indexable = !robotsMeta.includes('noindex');

  const schemaTypes = [];
  for (const match of html.matchAll(/<script type="application\/ld\+json">(.*?)<\/script>/gs)) {
    try {
      const parsed = JSON.parse(match[1]);
      const entries = Array.isArray(parsed) ? parsed : [parsed];
      for (const entry of entries) if (entry?.['@type']) schemaTypes.push(entry['@type']);
    } catch {
      schemaTypes.push('INVALID_JSON');
    }
  }

  const visibleText = html
    .replace(/<script[\s\S]*?<\/script>/g, ' ')
    .replace(/<style[\s\S]*?<\/style>/g, ' ')
    .replace(/<[^>]+>/g, ' ')
    .replace(/&[a-z#0-9]+;/gi, ' ');
  const wordCount = (visibleText.match(/[A-Za-z0-9][A-Za-z0-9&/-]*/g) || []).length;

  const images = [...html.matchAll(/<img\s[^>]*>/g)].map((m) => m[0]);
  const missingAlt = images.filter((img) => !/\salt="[^"]*"/.test(img)).length;
  const missingDims = images.filter((img) => !/\swidth="\d+"/.test(img) || !/\sheight="\d+"/.test(img)).length;

  const whatsappCtaCount = (html.match(/data-conversion="whatsapp"/g) || []).length;

  const internalHrefs = new Set();
  for (const match of html.matchAll(/href="(\/[^"]*)"/g)) {
    const href = match[1].split('#')[0].split('?')[0];
    if (!href || href.startsWith('/_astro/') || href.startsWith('/images/') || href.startsWith('/downloads/') || href.endsWith('.xml') || href.endsWith('.txt')) continue;
    const normalized = href.endsWith('/') ? href : `${href}/`;
    internalHrefs.add(normalized);
  }
  outboundByPage.set(route, internalHrefs);

  const canonicalUrl = canonical.replace(/\/$/, '') + '/';
  const inSitemap = sitemapUrls.has(canonical) || sitemapUrls.has(canonicalUrl);

  pages.push({
    route,
    type: pageType(route),
    title,
    titleLength: title.length,
    description,
    descriptionLength: description.length,
    h1Count,
    canonical,
    ogImage,
    schemaTypes: [...new Set(schemaTypes)],
    wordCount,
    imageCount: images.length,
    missingAlt,
    missingDims,
    whatsappCtaCount,
    indexable,
    inSitemap: route === '/404.html' ? 'n/a (correctly excluded)' : inSitemap
  });
}

const inboundCounts = new Map();
for (const page of pages) inboundCounts.set(page.route, 0);
for (const [, hrefs] of outboundByPage) {
  for (const href of hrefs) {
    if (inboundCounts.has(href)) inboundCounts.set(href, (inboundCounts.get(href) ?? 0) + 1);
  }
}

for (const page of pages) {
  page.outboundCount = outboundByPage.get(page.route)?.size ?? 0;
  page.inboundCount = inboundCounts.get(page.route) ?? 0;
}

const orphans = pages.filter((p) => p.indexable && p.route !== '/' && p.inboundCount === 0);

console.log('| URL | Type | Title (len) | Description (len) | H1 | Canonical OK | OG Image | Schema | Words | In-links | Out-links | Images | Missing alt | WhatsApp CTAs | Sitemap | Indexable |');
console.log('|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|');
for (const p of pages.sort((a, b) => a.route.localeCompare(b.route))) {
  console.log(
    `| ${p.route} | ${p.type} | ${p.titleLength} | ${p.descriptionLength} | ${p.h1Count} | ${p.canonical ? 'yes' : 'MISSING'} | ${p.ogImage ? 'yes' : 'MISSING'} | ${p.schemaTypes.join(', ')} | ${p.wordCount} | ${p.inboundCount} | ${p.outboundCount} | ${p.imageCount} | ${p.missingAlt} | ${p.whatsappCtaCount} | ${p.inSitemap === true ? 'yes' : p.inSitemap === false ? 'MISSING' : p.inSitemap} | ${p.indexable ? 'yes' : 'no'} |`
  );
}

console.log('\n--- Orphan pages (indexable, zero inbound internal links found) ---');
console.log(orphans.length ? orphans.map((p) => p.route).join('\n') : 'None found.');

console.log('\n--- Duplicate titles ---');
const byTitle = new Map();
for (const p of pages) byTitle.set(p.title, [...(byTitle.get(p.title) ?? []), p.route]);
for (const [title, routes] of byTitle) if (routes.length > 1) console.log(`"${title}": ${routes.join(', ')}`);

console.log('\n--- Duplicate descriptions ---');
const byDesc = new Map();
for (const p of pages) byDesc.set(p.description, [...(byDesc.get(p.description) ?? []), p.route]);
for (const [desc, routes] of byDesc) if (routes.length > 1) console.log(`"${desc.slice(0, 60)}...": ${routes.join(', ')}`);

console.log('\n--- Pages missing canonical, OG image, or with H1 != 1 ---');
for (const p of pages) {
  const issues = [];
  if (!p.canonical) issues.push('no canonical');
  if (!p.ogImage) issues.push('no OG image');
  if (p.h1Count !== 1) issues.push(`h1 count = ${p.h1Count}`);
  if (issues.length) console.log(`${p.route}: ${issues.join('; ')}`);
}

console.log('\n--- Sitemap cross-check ---');
console.log(`Sitemap URL count: ${sitemapUrls.size}`);
console.log(`Indexable page count: ${pages.filter((p) => p.indexable && p.route !== '/404.html').length}`);
const notInSitemap = pages.filter((p) => p.indexable && p.route !== '/404.html' && p.inSitemap === false);
console.log(notInSitemap.length ? `Indexable pages missing from sitemap: ${notInSitemap.map((p) => p.route).join(', ')}` : 'All indexable pages present in sitemap.');
