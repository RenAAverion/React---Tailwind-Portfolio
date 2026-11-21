import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { getPageSeo, getMetaTags } from '../../data/seo.js';

export default function Seo() {
  const { pathname } = useLocation();

  useEffect(() => {
    const page = getPageSeo(pathname);
    document.title = page.title;
    for (const attributes of getMetaTags(page)) {
      const key = attributes.name ? 'name' : 'property';
      const element = document.head.querySelector(`meta[${key}="${attributes[key]}"]`) || document.createElement('meta');
      for (const [name, value] of Object.entries(attributes)) element.setAttribute(name, value);
      if (!element.isConnected) document.head.append(element);
    }
    const canonical = document.head.querySelector('link[rel="canonical"]') || document.createElement('link');
    canonical.rel = 'canonical';
    canonical.href = page.url;
    if (!canonical.isConnected) document.head.append(canonical);
  }, [pathname]);

  return null;
}
