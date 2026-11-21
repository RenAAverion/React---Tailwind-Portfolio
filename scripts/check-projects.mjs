import assert from 'node:assert/strict';
import { createElement } from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { createServer } from 'vite';
import { MemoryRouter } from 'react-router-dom';

const server = await createServer({ server: { middlewareMode: true } });
try {
  const { default: projects, companies } = await server.ssrLoadModule('/src/data/projects.js');
  const { default: Gallery } = await server.ssrLoadModule('/src/components/projects/ProjectsFull.jsx');
  const { SitesPreview } = await server.ssrLoadModule('/src/components/home/GalleryProjects.jsx');
  const { default: Skills } = await server.ssrLoadModule('/src/components/home/GalleryStack.jsx');
  assert(companies.includes('Simple') && companies.includes('SMP'));
  assert(projects.length > 0);
  assert(projects.every((project) => companies.includes(project.company)));
  const original = [...projects];
  const preview = renderToStaticMarkup(createElement(MemoryRouter, null, createElement(SitesPreview)));
  assert.equal((preview.match(/class="swiper-slide(?: |")/g) || []).length, projects.length);
  const skills = renderToStaticMarkup(createElement(Skills));
  assert(skills.includes('swiper-wrapper'));
  assert.equal((skills.match(/WordPress logo/g) || []).length, 1);
  const render = () => renderToStaticMarkup(createElement(Gallery));
  assert(render().includes(original[0].name));
  assert(render().includes('Company:'));
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

