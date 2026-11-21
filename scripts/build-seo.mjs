import { readFile, writeFile, mkdir } from 'node:fs/promises';
import { pages, siteUrl, siteName, socialImage, getPageSeo, getMetaTags } from '../src/data/seo.js';

const escape = (value) => value.replaceAll('&', '&amp;').replaceAll('"', '&quot;').replaceAll('<', '&lt;').replaceAll('>', '&gt;');
const template = await readFile('dist/index.html', 'utf8');
const structuredData = {
  '@context': 'https://schema.org',
  '@graph': [
    { '@type': 'Person', '@id': `${siteUrl}/#person`, name: 'Ren Averion', url: `${siteUrl}/`, image: socialImage, jobTitle: 'Web Developer and UI/UX Designer' },
    { '@type': 'WebSite', '@id': `${siteUrl}/#website`, name: siteName, url: `${siteUrl}/`, author: { '@id': `${siteUrl}/#person` } },
  ],
};

for (const path of Object.keys(pages)) {
  const page = getPageSeo(path);
  const head = [
    `<title>${escape(page.title)}</title>`,
    ...getMetaTags(page).map((attributes) => `<meta ${Object.entries(attributes).map(([key, value]) => `${key}="${escape(value)}"`).join(' ')} />`),
    `<link rel="canonical" href="${escape(page.url)}" />`,
    `<script type="application/ld+json">${JSON.stringify(structuredData).replaceAll('<', '\\u003c')}</script>`,
  ].join('\n    ');
  const html = template.replace(/<!-- seo:start -->[\s\S]*?<!-- seo:end -->/, `<!-- seo:start -->\n    ${head}\n    <!-- seo:end -->`);
  const directory = path === '/' ? 'dist' : `dist${path}`;
  await mkdir(directory, { recursive: true });
  await writeFile(`${directory}/index.html`, html);
}

await writeFile('dist/sitemap.xml', `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${Object.keys(pages).map((path) => `  <url><loc>${escape(getPageSeo(path).url)}</loc></url>`).join('\n')}\n</urlset>\n`);
await writeFile('dist/robots.txt', `User-agent: *\nAllow: /\n\nSitemap: ${siteUrl}/sitemap.xml\n`);
console.log('Generated page metadata, structured data, robots.txt, and sitemap.xml.');
