import { useState, useEffect, useRef } from "react";
import Header from "../modular/Header";
import Reveal from "../modular/Reveal";
import sitesData from "/Datas/Websites.json"

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

const FilterIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3" />
  </svg>
);

const ChevronLeft = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <polyline points="15 18 9 12 15 6" />
  </svg>
);

const ChevronRight = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <polyline points="9 18 15 12 9 6" />
  </svg>
);

// ─── Helpers ─────────────────────────────────────────────────────────────────

function getLinkStatus(link) {
  if (!link || link === "Unpublished") return { status: "unpublished", url: null };
  const raw = link.split(" or ")[0].trim();
  const url = raw.startsWith("http") ? raw : `https://${raw}`;
  return { status: "live", url };
}

function getCategories(data) {
  return ["All", ...[...new Set(data.map((s) => s.category))].sort()];
}

// ─── SiteCard ─────────────────────────────────────────────────────────────────

function SiteCard({ site }) {
  const linkStatus = getLinkStatus(site.link);

  return (
    <div className="h-full flex flex-col rounded-md shadow-sm border border-gray-100 relative overflow-hidden bg-white hover:shadow-md transition-shadow duration-200">
      {/* Category badge */}
      <span className="flex items-center gap-1 absolute m-2 px-1.5 py-0.5 rounded bg-white/90 right-0 shadow-sm z-10 text-xs text-gray-500 max-w-[70%] truncate">
        {site.fav && <StarIcon filled className="w-3 h-3 text-yellow-500 shrink-0" />}
        <span className="flex justify-center truncate">{tag}|{" " + site.category}</span>
      </span>

      <img
        src={site.snapshot}
        alt={site.name + " preview"}
        className="w-full h-28 md:h-44 object-cover"
      />

      <div className="py-1 px-1 flex-1 flex flex-col justify-between">
        <div className="text-center px-2 md:px-5 py-2 md:py-4">
          <h4 className="font-stm text-sm md:text-base font-semibold mb-1 h-8 md:h-12 flex items-center justify-center leading-tight">
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
            className={`flex flex-3 justify-center items-center px-2 py-1.5 border border-dbl bg-dbl text-white rounded-md text-xs
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
            className="flex-[3] flex items-center justify-center px-2 py-1.5 border border-dbl bg-white text-dbl rounded-md text-xs
              hover:bg-dbl hover:text-white transition ease-linear duration-300"
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
  const [current, setCurrent] = useState(0);
  const timerRef = useRef(null);

  const go = (dir) => {
    setCurrent((c) => (c + dir + favorites.length) % favorites.length);
    restart();
  };

  const jumpTo = (i) => {
    setCurrent(i);
    restart();
  };

  const restart = () => {
    clearInterval(timerRef.current);
    timerRef.current = setInterval(
      () => setCurrent((c) => (c + 1) % favorites.length),
      4500
    );
  };

  useEffect(() => {
    timerRef.current = setInterval(
      () => setCurrent((c) => (c + 1) % favorites.length),
      4500
    );
    return () => clearInterval(timerRef.current);
  }, [favorites.length]);

  const site = favorites[current];
  const linkStatus = getLinkStatus(site.link);

  return (
    <div className="relative h-full min-h-[280px] md:min-h-[720px] overflow-hidden rounded-md group cursor-default select-none font-stm">
      {/* BG image — key forces re-mount on slide change for fade */}
      <img
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

      {/* Prev / Next */}
      <button
        onClick={() => go(-1)}
        className="absolute left-2 top-1/2 -translate-y-1/2 bg-dbl/40 hover:bg-dbl/70 text-white rounded-full p-1.5 opacity-0 group-hover:opacity-100 transition-opacity"
      >
        <ChevronLeft />
      </button>
      <button
        onClick={() => go(1)}
        className="absolute right-2 top-1/2 -translate-y-1/2 bg-dbl/40 hover:bg-dbl/70 text-white rounded-full p-1.5 opacity-0 group-hover:opacity-100 transition-opacity"
      >
        <ChevronRight />
      </button>

      {/* Dot indicators */}
      <div className="absolute top-3 left-1/2 -translate-x-1/2 flex gap-1.5">
        {favorites.map((_, i) => (
          <button
            key={i}
            onClick={() => jumpTo(i)}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              i === current ? "w-5 bg-white" : "w-1.5 bg-white/40"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

// ─── Main Component ───────────────────────────────────────────────────────────

export default function PortfolioGallery() {
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [filterOpen, setFilterOpen] = useState(false);
  const filterRef = useRef(null);

  const favorites = sitesData.filter((s) => s.fav);
  const categories = getCategories(sitesData);

  // Close filter dropdown when clicking outside
  useEffect(() => {
    const handler = (e) => {
      if (filterRef.current && !filterRef.current.contains(e.target)) {
        setFilterOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const isFiltering = search.trim() !== "" || selectedCategory !== "All";

  const filtered = sitesData.filter((site) => {
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
    <div className="min-h-screen bg-[#F0F0F0] pt-[70px]">
      <main className="px-4 md:px-8 py-6 max-w-screen mx-auto font-stm">
        {/* ── Search + Filter ── */}
        <div className="flex flex-col md:flex-row items-center justify-between mb-6">
            <div className="py-2 ">
                <p className="text-2xl font-semibold">Projects</p>
            </div>
            <div className="flex gap-3 flex-wrap justify-center">
            <input
                type="text"
                placeholder="Search projects..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-56 md:w-72 px-3 py-2 rounded-md border border-gray-200 bg-white text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-dbl transition"
            />

            <div className="relative" ref={filterRef}>
                <button
                onClick={() => setFilterOpen((o) => !o)}
                className={`flex text-white bg-dbl items-center gap-2 px-3 py-2 rounded-md border text-sm shadow-sm transition
                    ${selectedCategory !== "All"
                    ? "border-dbl bg-dbl text-dbl"
                    : "border-gray-200 bg-dbl text-gray-700 hover:border-gray-400"
                    }`}
                >
                <FilterIcon />
                <span className="max-w-[140px] truncate">
                    {selectedCategory === "All" ? "Filter by category" : selectedCategory}
                </span>
                {selectedCategory !== "All" && (
                    <span
                    role="button"
                    onClick={(e) => { e.stopPropagation(); setSelectedCategory("All"); }}
                    className="ml-1 text-gray-300 hover:text-white text-base leading-none"
                    >
                    ×
                    </span>
                )}
                </button>

                {filterOpen && (
                <div className="absolute right-0 mt-1 w-60 bg-white border border-gray-200 rounded-md shadow-xl z-20 max-h-72 overflow-y-auto">
                    {categories.map((cat) => (
                    <button
                        key={cat}
                        onClick={() => { setSelectedCategory(cat); setFilterOpen(false); }}
                        className={`w-full text-left px-4 py-2 text-sm transition
                        ${selectedCategory === cat
                            ? "bg-dbl text-white font-semibold"
                            : "hover:bg-gray-50 text-gray-700"
                        }`}
                    >
                        {cat}
                    </button>
                    ))}
                </div>
                )}
            </div>
            </div>
        </div>
        <hr className="block border-dashed my-2 " />
        {/* ── Default view: favorites panel + grid ── */}
        {!isFiltering ? (
          <>
            <h2 className="text-base font-semibold mb-3 text-yellow-500 flex items-center gap-2">
              <StarIcon filled className="w-4 h-4 text-yellow-500" />
              Personal Favorites
            </h2>

            {/*
              Grid layout:
              - Col 1-2: Favorites slideshow spanning 2 cols + 2 rows
              - Col 3-6: Normal project cards
              On mobile: slideshow takes full width (2 cols of a 2-col grid), then cards below
            */}
            <div className="grid grid-cols-1 md:grid-cols-5 gap-3">
              {/* Favorites slideshow — 2×2 */}
              <div className="col-span-1 md:col-span-5 shadow-xl md:mb-5 border-2 rounded-lg border-yellow-500">
                <FavoritesSlideshow favorites={favorites} />
              </div>

              {/* All project cards */}
              {sitesData.map((site) => (
                <div key={site.name} className="col-span-1">
                  <SiteCard site={site} />
                </div>
              ))}
            </div>
          </>
        ) : (
          /* ── Filtered view ── */
          <>
            <div className="col-span-3 md:col-span-6 shadow-xl md:mb-5">
                <FavoritesSlideshow favorites={favorites} />
            </div>
            <p className="text-sm text-gray-500 mb-4">
              {filtered.length} result{filtered.length !== 1 ? "s" : ""}
              {search && <> for "<span className="font-medium text-gray-800">{search}</span>"</>}
              {selectedCategory !== "All" && (
                <> in <span className="font-medium text-gray-800">{selectedCategory}</span></>
              )}
            </p>

            {filtered.length === 0 ? (
              <div className="text-center py-28 text-gray-400 text-sm">
                No projects found. Try a different search or category.
              </div>
            ) : (
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
                {filtered.map((site) => (
                  <div key={site.name}>
                    <SiteCard site={site} />
                  </div>
                ))}
              </div>
            )}
          </>
        )}
      </main>
    </div>
  );
}