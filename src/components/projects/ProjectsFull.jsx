import getLinkStatus from "../../data/projectLink.js";
import ProjectDropdown from './ProjectDropdown.jsx';
import { useState, useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { A11y, Autoplay, EffectFade, Keyboard, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import sitesData, { companies } from "../../data/projects.js"
import companyDetails from "/Datas/companies.json"

// ─── Icons ───────────────────────────────────────────────────────────────────
const tag = <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-5">
  <path strokeLinecap="round" strokeLinejoin="round" d="M9.568 3H5.25A2.25 2.25 0 0 0 3 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 0 0 5.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 0 0 9.568 3Z" />
  <path strokeLinecap="round" strokeLinejoin="round" d="M6 6h.008v.008H6V6Z" />
</svg>;

const GlobeIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <circle cx="12" cy="12" r="10" />
    <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
  </svg>
);

const LinkSlashIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
    <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
    <line x1="4" y1="4" x2="20" y2="20" />
  </svg>
);

const StarIcon = ({ filled = false, className = "w-3.5 h-3.5" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} fill={filled ? "currentColor" : "none"} viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
  </svg>
);

const FilterIcon = ({ open = false }) => (
  <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    {open ? <path strokeLinecap="round" d="m6 6 12 12M6 18 18 6" /> : <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3" />}
  </svg>
);

function getCategories(data) {
  return ["All", ...[...new Set(data.map((s) => s.category))].sort()];
}

// ─── SiteCard ─────────────────────────────────────────────────────────────────

function SiteCard({ site, view = "grid" }) {
  const linkStatus = getLinkStatus(site.link);
  const expanded = view !== "grid";

  return (
    <div data-project-card className={`h-full flex flex-col rounded-md shadow-sm border border-gray-100 relative overflow-hidden bg-white hover:shadow-md transition-shadow duration-200 ${view === "list" ? "sm:flex-row" : ""}`}>
      {/* Category badge */}
      <span className={`flex items-center gap-1 absolute m-2 px-1.5 py-0.5 rounded bg-white/90 right-0 shadow-sm z-10 text-xs text-gray-500 max-w-[70%] truncate ${view === "list" ? "sm:left-0 sm:right-auto sm:max-w-[35%]" : ""}`}>
        {site.fav && <StarIcon filled className="w-3 h-3 text-yellow-500 shrink-0" />}
        <span className="flex justify-center truncate">{tag}|{" " + site.category}</span>
      </span>

      <img
        src={site.snapshot}
        alt={site.name + " preview"}
        loading="lazy"
        className={`w-full object-cover ${view === "list" ? "aspect-video sm:aspect-auto sm:w-2/5 sm:h-64 sm:shrink-0" : expanded ? "aspect-video" : "h-28 md:h-44"}`}
      />

      <div className="py-1 px-1 min-w-0 flex-1 flex flex-col justify-between">
        <div className={`px-2 md:px-5 py-2 md:py-4 ${expanded ? "text-left" : "text-center"}`}>
          <h4 className={`font-stm text-sm md:text-base font-semibold mb-1 leading-tight ${expanded ? "min-h-8" : "min-h-8 md:min-h-12 flex items-center justify-center"}`}>
            {site.name}
          </h4>
          <p className="mt-1 font-stm text-xs md:text-sm text-gray-500 line-clamp-3 h-14">
            {site.description}
          </p>
        </div>

        <div className="flex px-2 md:px-4 pb-2 md:pb-3 gap-2">
          {/* Live link button */}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href={linkStatus.status === "live" ? linkStatus.url : undefined}
            title={linkStatus.status === "unpublished" ? "Not published" : "Visit site"}
            className={`flex ${expanded ? "w-28 shrink-0" : "flex-3"} justify-center items-center px-2 py-1.5 border border-dbl bg-dbl text-white rounded-md text-xs
              hover:bg-white hover:text-dbl transition ease-linear duration-300
              ${linkStatus.status === "unpublished" ? "opacity-40 cursor-not-allowed pointer-events-none" : ""}`}
          >
            {linkStatus.status === "live" ? <GlobeIcon /> : <LinkSlashIcon />}
             &nbsp;Visit
          </a>

          {/* Preview button */}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href={site.preview}
            className={`${expanded ? "w-28 shrink-0" : "flex-[3]"} flex items-center justify-center px-2 py-1.5 border border-dbl bg-white text-dbl rounded-md text-xs
              hover:bg-dbl hover:text-white transition ease-linear duration-300`}
          >
            Preview
          </a>
        </div>
      </div>
    </div>
  );
}

// ─── FavoritesSlideshow ───────────────────────────────────────────────────────

function FavoritesSlideshow({ favorites }) {
  return (
    <Swiper
      modules={[A11y, Autoplay, EffectFade, Keyboard, Navigation, Pagination]}
      effect="fade"
      fadeEffect={{ crossFade: true }}
      speed={700}
      loop={favorites.length > 1}
      autoplay={favorites.length > 1 ? { delay: 4500, disableOnInteraction: false, pauseOnMouseEnter: true } : false}
      navigation={favorites.length > 1}
      pagination={favorites.length > 1 ? { clickable: true } : false}
      keyboard={{ enabled: true }}
      a11y={{ containerMessage: "Favorite projects" }}
      className="favorites-swiper w-full min-w-0 rounded-md font-stm"
    >
      {favorites.map((site) => {
        const linkStatus = getLinkStatus(site.link);
        return (
          <SwiperSlide key={site.company + site.name}>
            <div className="relative min-h-[280px] sm:min-h-[400px] lg:min-h-[560px] overflow-hidden">
      <img
        loading="lazy"
        decoding="async"
        key={site.snapshot}
        src={site.snapshot}
        alt={site.name}
        className="absolute inset-0 w-full h-full object-cover transition-opacity duration-700"
      />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-dbl/85 via-dbl/30 to-dbl/10" />

      {/* Content */}
      <div className="absolute inset-0 flex flex-col justify-end p-4 md:p-6">
        <span className="text-xs text-yellow-400 font-semibold tracking-widest uppercase mb-1.5 flex items-center gap-1">
          <StarIcon filled className="w-3.5 h-3.5" /> Personal Favorite
        </span>
        <h3 className="text-white text-lg md:text-2xl font-bold leading-tight mb-1">
          {site.name}
        </h3>
        <p className="text-gray-300 text-xs md:text-sm line-clamp-2 mb-4">
          {site.description}
        </p>
        <div className="flex gap-2">
          {linkStatus.status === "live" && (
            <a
              href={linkStatus.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-3 py-1.5 bg-white text-dbl rounded-md text-xs font-semibold hover:bg-gray-100 transition-colors"
            >
              <GlobeIcon /> Visit
            </a>
          )}
          <a
            href={site.preview}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-3 py-1.5 border border-white text-white rounded-md text-xs font-semibold hover:bg-white hover:text-dbl transition-colors"
          >
            Preview
          </a>
        </div>
      </div>

            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}

const gridLayouts = {
  1: "grid-cols-1",
  2: "grid-cols-1 sm:grid-cols-2",
  3: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3",
  4: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4",
  5: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5",
};

export function ProjectResults({ projects, view, columns }) {
  const [rows, setRows] = useState(2);
  const [rowSize, setRowSize] = useState(1);
  const gridRef = useRef(null);
  const loadRef = useRef(null);
  const visibleCount = Math.min(rows * rowSize, projects.length);
  const hasMore = visibleCount < projects.length;

  useEffect(() => {
    const grid = gridRef.current;
    if (!grid) return;
    const measure = () => setRowSize(getComputedStyle(grid).gridTemplateColumns.split(" ").length);
    measure();
    const observer = new ResizeObserver(measure);
    observer.observe(grid);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!hasMore) return;
    let frame = 0;
    const onScroll = () => {
      if (frame) return;
      frame = requestAnimationFrame(() => {
        frame = 0;
        if (loadRef.current?.getBoundingClientRect().top < window.innerHeight + 200) {
          setRows((count) => count + 1);
        }
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(frame);
    };
  }, [hasMore]);

  return (
    <>
      <div ref={gridRef} className={`project-results grid gap-3 ${view === "list" ? "grid-cols-1" : gridLayouts[columns]}`}>
        {projects.slice(0, visibleCount).map((site) => (
          <SiteCard key={site.company + site.name} site={site} view={view === "grid" && columns === 1 ? "wide" : view} />
        ))}
      </div>
      <div className="py-6 text-center text-sm text-gray-500">
        <p aria-live="polite">{visibleCount} of {projects.length} projects</p>
        {hasMore && <button ref={loadRef} type="button" onClick={() => setRows((count) => count + 1)} className="mt-3 rounded-md border border-dbl px-4 py-2 text-dbl hover:bg-dbl hover:text-white transition-colors">Load more</button>}
      </div>
    </>
  );
}

export default function PortfolioGallery() {
  const [view, setView] = useState("grid");
  const [columns, setColumns] = useState(5);
  const [selectedCompany, setSelectedCompany] = useState("All");
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const companySites = sitesData.filter((site) => selectedCompany === "All" || site.company === selectedCompany);
  const favorites = companySites.filter((s) => s.fav);
  const categories = getCategories(companySites);

  const isFiltering = search.trim() !== "" || selectedCategory !== "All";

  const filtered = companySites.filter((site) => {
    const q = search.toLowerCase().trim();
    const matchesSearch =
      !q ||
      site.name.toLowerCase().includes(q) ||
      site.description.toLowerCase().includes(q) ||
      site.category.toLowerCase().includes(q);
    const matchesCat =
      selectedCategory === "All" || site.category === selectedCategory;
    return matchesSearch && matchesCat;
  });

  return (
    <div className="min-h-screen bg-[#F0F0F0] pt-28 md:pt-24">
      <main className="site-container py-6 font-stm">
        {/* ── Search + Filter ── */}
        <div className="flex flex-col xl:flex-row items-start xl:items-center justify-between gap-4 mb-6">
            <div className="py-2 ">
                <h1 className="text-2xl font-semibold">Projects</h1>
            </div>
            <div className="flex w-full xl:w-auto gap-3 flex-wrap items-center">
            <input
                type="text"
                placeholder="Search projects..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full sm:w-64 min-w-0 px-3 py-2 rounded-md border border-gray-200 bg-white text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-dbl transition"
            />

            <ProjectDropdown label="Filter by category" value={selectedCategory} onChange={setSelectedCategory} options={categories.map((category) => ({ value: category, label: category === "All" ? "Filter by category" : category }))} widthOptions={getCategories(sitesData).map((category) => ({ value: category, label: category === "All" ? "Filter by category" : category }))} icon={(open) => <FilterIcon open={open} />} />
            <div className="flex flex-wrap items-center gap-2 text-sm">
              <span>Company:</span>
              <div role="group" aria-label="Company" className="flex items-center flex-wrap gap-1 rounded-md border border-gray-200 bg-white p-1 shadow-sm">
              {["All", ...companies].map((company) => (
                <button
                  key={company}
                  type="button"
                  aria-pressed={selectedCompany === company}
                  onClick={() => { setSelectedCompany(company); setSelectedCategory("All"); }}
                  className={`rounded px-3 py-1.5 transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 ${selectedCompany === company ? "bg-dbl text-white" : "hover:bg-gray-100"}`}
                >
                  {company}
                </button>
              ))}
              </div>
            </div>
            <div role="group" aria-label="Project view" className="hidden sm:flex items-center gap-1 rounded-md border border-gray-200 bg-white p-1 shadow-sm">
              {["grid", "list"].map((mode) => (
                <button key={mode} type="button" aria-label={mode === "grid" ? "Grid view" : "List view"} title={mode === "grid" ? "Grid view" : "List view"} aria-pressed={view === mode} onClick={() => setView(mode)} className={`flex h-8 w-10 items-center justify-center rounded transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 ${view === mode ? "bg-dbl text-white" : "hover:bg-gray-100"}`}>
                  <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="size-5">
                    {mode === "grid" ? <><rect x="3" y="3" width="7" height="7" rx="1" /><rect x="14" y="3" width="7" height="7" rx="1" /><rect x="3" y="14" width="7" height="7" rx="1" /><rect x="14" y="14" width="7" height="7" rx="1" /></> : <><path strokeLinecap="round" d="M9 5h12M9 12h12M9 19h12" /><path strokeLinecap="round" strokeWidth="3" d="M3 5h1M3 12h1M3 19h1" /></>}
                  </svg>
                </button>
              ))}
            </div>
            {view === "grid" && <div className="hidden sm:block"><ProjectDropdown label="Projects per row (limited by screen width)" value={columns} onChange={setColumns} options={[1, 2, 3, 4, 5].map((count) => ({ value: count, label: count + " / row" }))} /></div>}
            </div>
        </div>
        <hr className="block border-dashed my-2 " />
        <div key={selectedCompany} className="project-results grid grid-cols-1 xl:grid-cols-2 gap-3 my-5">
          {companies.filter((company) => selectedCompany === "All" || selectedCompany === company).map((company) => {
            const details = companyDetails[company];
            if (!details) return null;
            return (
              <article key={company} className={`flex flex-col sm:flex-row sm:items-center rounded-md border border-gray-200 bg-white shadow-sm ${selectedCompany === "All" ? "min-h-32 gap-4 p-4" : "col-span-full min-h-64 gap-6 p-6 md:gap-10 md:p-8"}`}>
                <img src={details.logo} alt={`${details.name} logo`} className={`shrink-0 object-contain ${selectedCompany === "All" ? "h-16 w-24" : "h-32 w-48"}`} />
                <div className={`flex flex-1 min-w-0 gap-4 ${selectedCompany === "All" ? "flex-col sm:flex-row sm:items-center" : "flex-col items-start"}`}>
                <div className="flex-1">
                  <h2 className={`font-semibold ${selectedCompany === "All" ? "text-lg" : "text-2xl md:text-3xl"}`}>{details.name}</h2>
                  <p className={`mt-1 text-gray-500 ${selectedCompany === "All" ? "text-sm" : "text-base md:text-lg leading-relaxed"}`}>{selectedCompany === "All" ? details.description : (details.fullDescription || details.description)}</p>
                </div>
                <a href={details.url} target="_blank" rel="noopener noreferrer" aria-label={`Visit ${details.name} (opens in a new tab)`} className={`inline-flex shrink-0 items-center justify-center gap-2 rounded-md border border-dbl bg-dbl px-3 py-2 text-sm text-white hover:bg-white hover:text-dbl transition-colors ${selectedCompany === "All" ? "self-start sm:self-center" : "self-start"}`}>
                  Visit
                  <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="size-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M7 17 17 7M7 7h10v10" />
                  </svg>
                </a>
                </div>
              </article>
            );
          })}
        </div>
        {favorites.length > 0 && !isFiltering && view === "grid" && columns === 5 && <>
          <h2 className="text-base font-semibold mb-3 text-yellow-500 flex items-center gap-2"><StarIcon filled className="w-4 h-4" />Personal Favorites</h2>
          <div key={selectedCompany} className="project-results min-w-0 shadow-xl mb-5 border-2 rounded-lg border-yellow-500">
            <FavoritesSlideshow key={selectedCompany} favorites={favorites} />
          </div>
        </>}
        {isFiltering && <p className="text-sm text-gray-500 mb-4">{filtered.length} result{filtered.length !== 1 ? "s" : ""}</p>}
        {filtered.length === 0 ? (
          <p key={JSON.stringify([selectedCompany, selectedCategory, search])} className="project-results py-20 text-center text-sm text-gray-500">{isFiltering ? "No projects found. Try a different search or category." : selectedCompany === "All" ? "No projects added yet." : `No projects added for ${selectedCompany} yet.`}</p>
        ) : (
          <ProjectResults key={JSON.stringify([selectedCompany, selectedCategory, search, view, columns])} projects={filtered} view={view} columns={columns} />
        )}
      </main>
    </div>
  );
}

