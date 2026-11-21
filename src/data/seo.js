export const siteUrl = 'https://renportfolio.netlify.app';
export const siteName = 'Ren Averion Portfolio';
export const socialImage = 'https://i.ibb.co/bjc6hQSs/371083425-324521823543726-8201669079437847996-n.jpg';

export const pages = {
  '/': {
    title: 'Ren Averion | Web Developer & UI/UX Designer',
    description: 'Explore Ren Averion’s portfolio of web development and UI/UX design work, including client websites, skills, and ways to get in touch.',
  },
  '/projects': {
    title: 'Website Projects | Ren Averion',
    description: 'Browse Ren Averion’s website projects, explore work by company and category, and view live sites and design previews.',
  },
};

export function getPageSeo(pathname) {
  const path = pathname.replace(/\/+$/, '') || '/';
  return { ...(pages[path] || pages['/']), url: `${siteUrl}${path === '/' ? '/' : path}` };
}

export function getMetaTags(page) {
  return [
    { name: 'description', content: page.description },
    { name: 'author', content: 'Ren Averion' },
    { name: 'robots', content: 'index, follow, max-image-preview:large' },
    { property: 'og:type', content: 'website' },
    { property: 'og:site_name', content: siteName },
    { property: 'og:title', content: page.title },
    { property: 'og:description', content: page.description },
    { property: 'og:url', content: page.url },
    { property: 'og:image', content: socialImage },
    { property: 'og:image:alt', content: 'Ren Averion, web developer and UI/UX designer' },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: page.title },
    { name: 'twitter:description', content: page.description },
    { name: 'twitter:image', content: socialImage },
    { name: 'twitter:image:alt', content: 'Ren Averion, web developer and UI/UX designer' },
  ];
}
