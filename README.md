# Portfolio

## Adding projects

Edit the company's file in `Datas/projects/`: `Simple.json` or `SMP.json`.
Copy this object into its array, separating entries with commas:

```json
{
  "name": "Project name",
  "link": "https://example.com",
  "preview": "https://example.com/preview",
  "description": "A short description of the project.",
  "category": "Business Services",
  "snapshot": "https://example.com/screenshot.jpg",
  "fav": false
}
```

Use `"Unpublished"` for a site without a live link. Set `fav` to `true` to
include it in that company's favorites slideshow. Categories appear automatically.

To add a company, create `Datas/projects/Company Name.json` containing `[]`,
then add projects. The filename becomes its company switch label. Add its
company profile to `Datas/companies.json`, keyed by the same filename
(without `.json`). Include `name`, `logo`, `description`, and `url` for each profile.
Projects also appear in the homepage carousel and count automatically. An empty company shows
an empty state until its first project is added.

Run `npm run build` after editing to check the JSON and build.

## Search and social previews

Edit `src/data/seo.js` to change page titles, descriptions, the preview image,
or the production domain (`https://renportfolio.netlify.app`). `npm run build`
generates distinct metadata for `/` and `/projects` in the built HTML, plus
`sitemap.xml`, `robots.txt`, and Person/WebSite structured data. Client-side
navigation also updates the title, description, social tags, and canonical URL.
Run `npm run check:seo` after building to verify these files.

Deploy the generated `dist` folder on Netlify. Then verify the website in
Google Search Console, submit `https://renportfolio.netlify.app/sitemap.xml`,
and use URL Inspection to request indexing for the homepage and `/projects`.
Search Console ownership verification and indexing requests are manual steps.
Google decides whether and when to index pages; these changes do not guarantee rankings.

## Components

Components are grouped by where they are used:

- `src/components/home/`: homepage sections and galleries.
- `src/components/projects/`: the full projects gallery.
- `src/components/shared/`: header, footer, contact, and shared behaviour.

Company profiles use `description` for the All view and `fullDescription` for
the expanded company view. Their Visit links point to the company websites.

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
