import assert from 'node:assert/strict';
import { createElement } from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { MemoryRouter } from 'react-router-dom';
import { createServer } from 'vite';
import { shouldHideHeader } from '../src/components/shared/headerScroll.js';

assert.equal(shouldHideHeader(150, 100), true);
assert.equal(shouldHideHeader(100, 150), false);
assert.equal(shouldHideHeader(40, 0), false);
assert.equal(shouldHideHeader(0, 100), false);
console.log('Header hides scrolling down, reappears scrolling up, and stays visible near the top.');

const server = await createServer({ server: { middlewareMode: true } });
try {
  const { default: Header } = await server.ssrLoadModule('/src/components/shared/Header.jsx');
  for (const [path, expected] of [['/', 'Home'], ['/projects', 'Projects'], ['/projects/', 'Projects']]) {
    const html = renderToStaticMarkup(createElement(MemoryRouter, { initialEntries: [path] }, createElement(Header)));
    const activeLinks = [...html.matchAll(/<a[^>]*class="[^"]*\bactive\b[^"]*"[^>]*>([^<]+)<\/a>/g)];
    assert.deepEqual(activeLinks.map((match) => match[1]), [expected], path);
  }
  console.log('Home and both Projects URL forms underline the correct navigation link.');
} finally {
  await server.close();
}
