import { readFile, readdir, stat } from 'node:fs/promises';
import path from 'node:path';

const projectRoot = path.resolve('.');
const distRoot = path.join(projectRoot, 'dist');
const failures = [];
const pass = (condition, message) => { if (!condition) failures.push(message); };

async function filesUnder(directory, extension) {
  const files = [];
  async function walk(current) {
    for (const entry of await readdir(current)) {
      const target = path.join(current, entry);
      const info = await stat(target);
      if (info.isDirectory()) await walk(target);
      else if (!extension || target.endsWith(extension)) files.push(target);
    }
  }
  await walk(directory);
  return files;
}

const header = await readFile(path.join(projectRoot, 'src/components/Header.astro'), 'utf8');
const layout = await readFile(path.join(projectRoot, 'src/layouts/BaseLayout.astro'), 'utf8');
const splash = await readFile(path.join(projectRoot, 'src/components/SplashScreen.astro'), 'utf8');
const globalCss = await readFile(path.join(projectRoot, 'src/styles/global.css'), 'utf8');

const menuButton = header.match(/<button\s+[^>]*data-menu-toggle[^>]*>/)?.[0] ?? '';
pass(/type="button"/.test(menuButton), 'mobile menu control must be a button with type="button"');
pass(/aria-label="Open navigation"/.test(menuButton), 'mobile menu control needs a meaningful accessible name');
pass(/aria-controls="main-navigation"/.test(menuButton), 'mobile menu control must identify the controlled navigation');
pass(/aria-expanded="false"/.test(menuButton), 'mobile menu control must start collapsed');
pass((header.match(/\sdata-menu(?:\s|>)/g) || []).length === 1, 'expected exactly one mobile navigation instance');

const mobilePanelStart = header.indexOf('data-mobile-services-panel');
const mobilePanelEnd = header.indexOf("<a class:list={[active('/products-supply/')", mobilePanelStart);
const mobilePanel = mobilePanelStart >= 0 && mobilePanelEnd > mobilePanelStart ? header.slice(mobilePanelStart, mobilePanelEnd) : '';
const mobileServiceLinks = [...mobilePanel.matchAll(/href="(\/services\/[^"/]+\/)"/g)].map((match) => match[1]);
pass(mobilePanel.length > 0, 'mobile Services submenu is missing');
pass(new Set(mobileServiceLinks).size === 16 && mobileServiceLinks.length === 16, `expected 16 unique mobile service links, found ${new Set(mobileServiceLinks).size}`);
pass(/Construction & Structures/.test(mobilePanel) && /Telecom & IT/.test(mobilePanel) && /Trading & Support/.test(mobilePanel), 'mobile Services category wording is incomplete');
pass(/data-mobile-services-toggle/.test(header) && /aria-controls="mobile-services-submenu"/.test(header), 'mobile Services toggle is not connected to its submenu');
pass(!/mega-overview/.test(mobilePanel), 'desktop capability card must not appear in the mobile Services submenu');

pass(/position:\s*fixed/.test(splash) && /inset:\s*0/.test(splash), 'splash must be fixed to all viewport edges');
pass(/width:\s*100%/.test(splash) && /min-height:\s*100vh/.test(splash) && /min-height:\s*100svh/.test(splash) && /height:\s*100dvh/.test(splash), 'splash viewport fallback chain is incomplete');
pass(/--mark-size:\s*clamp\(145px,\s*38vmin,\s*190px\)/.test(splash), 'splash mark must use responsive vmin sizing');
pass(/aspect-ratio:\s*1/.test(splash) && /object-fit:\s*contain/.test(splash), 'splash logo wrapper must remain square and contain the logo');
pass(!/translate(?:X|Y)?\(/.test(splash) && !/margin[^;]*-\d+px/.test(splash), 'splash must not use desktop-derived translation or negative-margin positioning');

const failSafe = layout.match(/setTimeout\(clearSplash,\s*(\d+)\)/)?.[1];
pass(Boolean(failSafe) && Number(failSafe) <= 2500, 'splash fail-safe must remove the overlay within 2.5 seconds');
pass(/sessionStorage\.getItem/.test(layout) && /catch\s*{[\s\S]*alreadyShown\s*=\s*false/.test(layout), 'sessionStorage errors must not break splash removal');
pass(/classList\.remove\('splash-active',\s*'splash-exiting'\)/.test(layout), 'splash state classes must be removed on completion');
pass(/prefers-reduced-motion/.test(splash) && /\.splash-mark img\s*{[\s\S]*opacity:\s*1/.test(splash), 'reduced-motion splash must retain a visible static logo');

pass(/event\.key === 'Escape'/.test(layout) && /setMenuState\(false, true\)/.test(layout), 'Escape must close the drawer and restore focus');
pass(/menu\.inert/.test(layout), 'closed mobile navigation must be removed from keyboard interaction');
pass(/event\.target\.closest\('a'\)/.test(layout), 'normal mobile navigation links must close the drawer');
pass(/mobileQuery\.addEventListener\('change'/.test(layout), 'mobile drawer must reset at the desktop breakpoint');
pass(/body\.menu-open/.test(globalCss) && /overscroll-behavior:\s*contain/.test(globalCss), 'mobile drawer scroll locking and independent scrolling are incomplete');
pass(/min-height:\s*44px/.test(globalCss), 'mobile navigation needs 44px minimum touch targets');
pass(/\.floating-whatsapp\s*{\s*display:\s*none/.test(globalCss), 'mobile floating WhatsApp control must remain disabled');

const sourceFiles = await filesUnder(path.join(projectRoot, 'src'), '.astro');
for (const file of sourceFiles) {
  const source = await readFile(file, 'utf8');
  pass(!/mobile-(?:bottom|action)-bar/.test(source), `${path.relative(projectRoot, file)} contains a prohibited mobile bottom action bar`);
}

const htmlFiles = await filesUnder(distRoot, '.html');
const routes = new Set();
for (const file of htmlFiles) {
  const relative = path.relative(distRoot, file).replaceAll(path.sep, '/');
  routes.add(relative === 'index.html' ? '/' : relative === '404.html' ? '/404.html' : `/${relative.replace(/index\.html$/, '')}`);
}

let checkedImages = 0;
let checkedLinks = 0;
let checkedAssets = 0;
for (const file of htmlFiles) {
  const html = await readFile(file, 'utf8');
  const relative = path.relative(distRoot, file);
  pass(!/mobile-(?:bottom|action)-bar/.test(html), `${relative} contains a prohibited mobile bottom action bar`);
  for (const image of html.matchAll(/<img\s[^>]*>/g)) {
    checkedImages += 1;
    pass(/\swidth="\d+"/.test(image[0]) && /\sheight="\d+"/.test(image[0]), `${relative} has an image without intrinsic dimensions`);
  }
  for (const match of html.matchAll(/href="(\/[^"#?]*)/g)) {
    const href = match[1];
    if (!href || href.startsWith('/_astro/') || href.startsWith('/images/') || href.startsWith('/downloads/') || href.endsWith('.xml') || href.endsWith('.txt')) continue;
    checkedLinks += 1;
    const normalized = href.endsWith('/') ? href : `${href}/`;
    pass(routes.has(href) || routes.has(normalized) || href === '/404.html', `${relative} has a broken internal link to ${href}`);
  }
  for (const match of html.matchAll(/\/(?:images|downloads)\/[^"'?#<\s]+/g)) {
    checkedAssets += 1;
    const asset = path.join(distRoot, match[0].slice(1));
    try {
      const info = await stat(asset);
      pass(info.isFile() && info.size > 0, `${relative} references an empty asset ${match[0]}`);
    } catch {
      failures.push(`${relative} references a missing asset ${match[0]}`);
    }
  }
}

if (failures.length) {
  console.error(failures.join('\n'));
  process.exit(1);
}

console.log(`Responsive regression audit passed: one mobile drawer, 16 service links, splash fail-safe, scroll/focus behavior, ${checkedLinks} internal links, ${checkedImages} images and ${checkedAssets} asset references checked across ${htmlFiles.length} pages.`);
