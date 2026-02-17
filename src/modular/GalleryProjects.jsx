import { useState, useEffect } from "react";
import Websites from "/Datas/Websites.json"

const globe = <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418" />
</svg>;

const linkSlash = <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M13.181 8.68a4.503 4.503 0 0 1 1.903 6.405m-9.768-2.782L3.56 14.06a4.5 4.5 0 0 0 6.364 6.365l3.129-3.129m5.614-5.615 1.757-1.757a4.5 4.5 0 0 0-6.364-6.365l-4.5 4.5c-.258.26-.479.541-.661.84m1.903 6.405a4.495 4.495 0 0 1-1.242-.88 4.483 4.483 0 0 1-1.062-1.683m6.587 2.345 5.907 5.907m-5.907-5.907L8.898 8.898M2.991 2.99 8.898 8.9" />
</svg>;

const tag = <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-5">
  <path strokeLinecap="round" strokeLinejoin="round" d="M9.568 3H5.25A2.25 2.25 0 0 0 3 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 0 0 5.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 0 0 9.568 3Z" />
  <path strokeLinecap="round" strokeLinejoin="round" d="M6 6h.008v.008H6V6Z" />
</svg>;

async function checkLink(link) {
  if (link === "Unpublished") return { status: "unpublished", url: null };

  try {
    const response = await fetch(`https://corsproxy.io/?${encodeURIComponent(link)}`, {
      method: "HEAD",
      signal: AbortSignal.timeout(5000),
    });

    return response.ok
      ? { status: "live", url: link }
      : { status: "unpublished", url: null };

  } catch {
    return { status: "unpublished", url: null };
  }
}

function SiteCard({ site }) {
  const [linkStatus, setLinkStatus] = useState(null);

  useEffect(() => {
    checkLink(site.link).then(result => setLinkStatus(result));
  }, [site.link]);

  return (
    <div className="h-full flex flex-col rounded-md shadow-xl/30 relative overflow-hidden">
      <span className="flex items-center font-stm absolute m-5 p-1 rounded-md bg-white right-0 shadow-md z-10">{tag}|{" " + site.category}</span>
      
      {/* Fixed height image */}
      <img src={site.snapshot} alt={site.name + " preview"} className="w-full h-48 object-cover" />
      
      <div className="py-2 px-1 flex-1 flex flex-col justify-between">
        <div className="text-center px-10 py-5">
          {/* Fixed height title area */}
          <h4 className="text-l font-stm text-xl mb-2 h-14 flex items-center justify-center">{site.name}</h4>
          
          {/* Fixed height description - exactly 3 lines */}
          <p className="font-stm text-sm line-clamp-3 h-16">{site.description}</p>
        </div>
        
        {/* Buttons always at bottom */}
        <div className="flex px-5 pb-3 gap-2">
          <a
            target="_blank"
            href={linkStatus?.status === "live" ? linkStatus.url : undefined}
            className="flex flex-1 justify-center items-center px-2 py-2 border-1 bg-black text-white font-stm rounded-md text-m hover:bg-white hover:text-black transition ease-linear duration-300"
          >
            {linkStatus === null && globe}
            {linkStatus?.status === "live" && globe}
            {linkStatus?.status === "unpublished" && linkSlash}
          </a>
          <a
            target="_blank"
            href={site.preview}
            className="flex-6 flex items-center justify-center px-2 py-2 border-1 bg-black text-white font-stm rounded-md text-m hover:bg-white hover:text-black transition ease-linear duration-300"
          >
            Preview
          </a>
        </div>
      </div>
    </div>
  );
}

function Sites() {
  return (
    <div className="grid grid-cols-3 gap-4">
      {Websites.map((site, index) => (
        <SiteCard key={index} site={site} />
      ))}
    </div>
  );
}


export function SitesPreview() {
  return (
    <div className="relative overflow-hidden">
      {/* Left fade overlay */}
      <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
      
      {/* Right fade overlay */}
      <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>
      
      {/* Scrolling container */}
      <div className="flex gap-4 animate-scroll ">
        {/* First set of items */}
        {Websites.map((site, index) => (
          <div key={`first-${index}`} className="flex-shrink-0 w-80 h-[500px] ">
            <SiteCard site={site} />
          </div>
        ))}
        
        {/* Duplicate set for seamless loop */}
        {Websites.map((site, index) => (
          <div key={`second-${index}`} className="flex-shrink-0 w-80 h-[500px]">
            <SiteCard site={site} />
          </div>
        ))}
      </div>
      
      <div className="flex justify-center mt-8">
        <a 
          href="/gallery" 
          className="text-center px-5 py-2 border-1 bg-black text-white font-stm rounded-md text-m hover:bg-white hover:text-black transition ease-linear duration-300"
        >
          View More
        </a>
      </div>
    </div>
  );
}
export default Sites;