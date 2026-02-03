import { useEffect, useState } from "react";
import Websites from "/Datas/Websites.json"


function Sites() {
  const [screenshots, setScreenshots] = useState([]);

  useEffect(() => {
    async function fetchScreenshots() {
      const results = await Promise.all(
        Websites.map(async (site) => {
          const res = await fetch(
            `https://api.microlink.io/?screenshot=true&url=${encodeURIComponent(site.preview)}`
          );
          const { data } = await res.json();
          return { name: site.name, screenshot: data.screenshot.url };
        })
      );
      setScreenshots(results);
    }

    fetchScreenshots();
  }, []);

  return (
    <div className="p-20">
      {screenshots.map((site, index) => (
        <div key={index}>
          <img src={site.screenshot} alt={`${site.name} preview`} className="w-[1280px]" />
          <p>{site.name}</p>
        </div>
      ))}
    </div>
  );
}

export default Sites;
