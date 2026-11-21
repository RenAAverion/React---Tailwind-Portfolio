import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { pages, siteUrl, getPageSeo } from '../src/data/seo.js';

for (const path of Object.keys(pages)) {
  const file = path === '/' ? 'dist/index.html' : `dist${path}/index.html`;
  const html = await readFile(file, 'utf8');
  const page = getPageSeo(path);
  assert.equal((html.match(/<title>/g) || []).length, 1);
  assert.equal((html.match(/name="description"/g) || []).length, 1);
  assert.equal((html.match(/rel="canonical"/g) || []).length, 1);
  assert(html.includes(`href="${page.url}"`));
  assert(html.includes(`content="${page.url}"`));
  assert(html.includes('name="twitter:card"'));
  assert(html.includes('property="og:image:alt"'));
  assert.equal(JSON.parse(html.match(/<script type="application\/ld\+json">(.*?)<\/script>/s)[1])['@graph'][0].name, 'Ren Averion');
  assert(!html.includes('content="M"'));
}
const projectHtml = await readFile('dist/projects/index.html', 'utf8');
assert(projectHtml.includes('<title>Website Projects | Ren Averion</title>'));
assert.equal(getPageSeo('/projects/').url, `${siteUrl}/projects`);
const sitemap = await readFile('dist/sitemap.xml', 'utf8');
for (const path of Object.keys(pages)) assert(sitemap.includes(`<loc>${getPageSeo(path).url}</loc>`));
assert((await readFile('dist/robots.txt', 'utf8')).includes(`Sitemap: ${siteUrl}/sitemap.xml`));
console.log('Built page metadata, canonical URLs, structured data, sitemap, and robots checks passed.');
