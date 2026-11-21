import assert from 'node:assert/strict';
import { createElement } from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { createServer } from 'vite';
import { MemoryRouter } from 'react-router-dom';
import getLinkStatus from '../src/data/projectLink.js';

assert.deepEqual(getLinkStatus('Unpublished'), { status: 'unpublished', url: null });
assert.deepEqual(getLinkStatus(''), { status: 'unpublished', url: null });
assert.equal(getLinkStatus('example.com or https://other.example').url, 'https://example.com');
assert.equal(getLinkStatus('https://example.com').url, 'https://example.com');

const server = await createServer({ server: { middlewareMode: true } });
try {
  const { default: projects, companies } = await server.ssrLoadModule('/src/data/projects.js');
  const { default: Gallery, ProjectResults } = await server.ssrLoadModule('/src/components/projects/ProjectsFull.jsx');
  const { SitesPreview } = await server.ssrLoadModule('/src/components/home/GalleryProjects.jsx');
  const { default: Skills } = await server.ssrLoadModule('/src/components/home/GalleryStack.jsx');
  const { default: Hero } = await server.ssrLoadModule('/src/components/home/Hero.jsx');
  const { default: Stack } = await server.ssrLoadModule('/src/components/home/Stack.jsx');
  for (const Section of [Hero, Stack]) {
    const html = renderToStaticMarkup(createElement(Section));
    assert(!html.includes('<iframe'), 'Video players must not load before user interaction');
    assert(!html.includes('Play background video'));
    assert(html.includes('section-video'));
  }
  assert(companies.includes('Simple') && companies.includes('SMP'));
  assert(projects.length > 0);
  assert(projects.every((project) => companies.includes(project.company)));
  const original = [...projects];
  const batch = Array.from({ length: 12 }, (_, index) => ({ ...original[0], name: `Batch project ${index}` }));
  const initialGrid = renderToStaticMarkup(createElement(ProjectResults, { projects: batch, view: 'grid', columns: 5 }));
  assert.equal((initialGrid.match(/data-project-card/g) || []).length, 2);
  assert(initialGrid.includes('Load more'));
  assert(!initialGrid.includes('Batch project 11'));
  assert(initialGrid.includes('xl:grid-cols-5'));
  const list = renderToStaticMarkup(createElement(ProjectResults, { projects: batch.slice(0, 1), view: 'list', columns: 5 }));
  assert(list.includes('sm:flex-row'));
  assert(list.includes('sm:w-2/5 sm:h-64'));
  const singleColumn = renderToStaticMarkup(createElement(ProjectResults, { projects: batch.slice(0, 1), view: 'grid', columns: 1 }));
  assert(singleColumn.includes('w-full object-cover aspect-video'));
  assert(!singleColumn.includes('sm:flex-row'));
  assert.equal((list.match(/w-28 shrink-0/g) || []).length, 2);
  assert(!list.includes('xl:grid-cols-5'));
  assert(!list.includes('Load more'));
  const preview = renderToStaticMarkup(createElement(MemoryRouter, null, createElement(SitesPreview)));
  assert.equal((preview.match(/class="swiper-slide(?: |")/g) || []).length, projects.length);
  assert.equal((preview.match(/loading="lazy"/g) || []).length, projects.length);
  const skills = renderToStaticMarkup(createElement(Skills));
  assert(skills.includes('swiper-wrapper'));
  assert.equal((skills.match(/WordPress logo/g) || []).length, 1);
  const render = () => renderToStaticMarkup(createElement(Gallery));
  assert(render().includes(original[0].name));
  assert(render().includes('Company:'));
  assert(render().includes('aria-label="Grid view"'));
  assert(render().includes('aria-label="List view"'));
  assert(render().includes('Projects per row'));
  assert(render().includes('favorites-swiper'));
  assert(render().includes('Simple.biz logo'));
  assert(render().includes('Visit Simple.biz (opens in a new tab)'));
  assert(render().includes('Seek Marketing Partners logo'));
  assert(render().includes('Visit Seek Marketing Partners (opens in a new tab)'));
  assert(render().includes('https://seekmarketingpartners.com/'));
  assert.match(render(), /aria-pressed="true"[^>]*>All<\/button>/);

  // A company with no favorites still renders its project cards.
  projects.splice(0, projects.length, { ...original[0], fav: false });
  assert(render().includes(original[0].name));
  assert(!render().includes('Personal Favorites'));
  projects[0].fav = true;
  assert(render().includes('favorites-swiper'));
  assert.equal((render().match(/class="swiper-slide(?: |")/g) || []).length, 1);
  projects[0].fav = false;

  // The default All view includes projects from both companies.
  projects.push({ ...original[0], name: 'SMP example', company: 'SMP', fav: false });
  assert(render().includes(original[0].name));
  assert(render().includes('SMP example'));
  projects.splice(0, projects.length);
  assert(render().includes('No projects added yet.'));
  projects.splice(0, projects.length, ...original);
  console.log('Swiper galleries, single/empty favorites, project loading, and default All selection passed.');
} finally {
  await server.close();
}

