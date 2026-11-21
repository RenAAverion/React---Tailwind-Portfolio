import { useEffect, useState } from "react";
import { useMatch } from "react-router-dom";
import { shouldHideHeader } from "./headerScroll.js";

const navItems = [
  { id: "home", label: "Home", href: "/#hero" },
  { id: "about", label: "About", href: "/#about" },
  { id: "proj", label: "Projects", href: "/projects" },
  { id: "contact", label: "Contact", href: "/#contact" },
];

function Header() {
  const [active, setActive] = useState("home");
  const projectsMatch = useMatch("/projects");
  const [hidden, setHidden] = useState(false);
  useEffect(() => {
    let previousY = Math.max(0, window.scrollY);
    const handleScroll = () => {
      const currentY = Math.max(0, window.scrollY);
      if (currentY === previousY) return;
      setHidden(shouldHideHeader(currentY, previousY));
      previousY = currentY;
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const activeId = projectsMatch ? "proj" : active;

  return (
    <header
      inert={hidden}
      className={`font-stm w-full fixed shadow-xl z-[999] bg-white top-0 left-0 transition-transform duration-500 ease-in-out motion-reduce:transition-none ${hidden ? "-translate-y-full pointer-events-none" : "translate-y-0"}`}
      id="nav"
    >
      <div className="site-container flex flex-col justify-center py-3 md:flex-row md:items-center md:justify-between md:py-5">
      <p className="text-2xl mx-auto md:text-2xl md:mx-0">My Portfolio</p>
      <nav className="md:flex-col">
        <ul className="flex gap-3 sm:gap-8 md:gap-10 justify-center text-sm sm:text-base">
          {navItems.map((item) => (
            <li key={item.id}>
              <a
                href={item.href}
                className={`inline-flex min-h-11 items-center ${activeId === item.id ? "active" : ""}`}
                onClick={() => setActive(item.id)}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
      </div>
    </header>
  );
}

export default Header;

