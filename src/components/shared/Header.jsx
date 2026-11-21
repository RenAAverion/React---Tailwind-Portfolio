import { useState } from "react";
import { useLocation } from "react-router-dom";

const navItems = [
  { id: "home", label: "Home", href: "/#hero" },
  { id: "about", label: "About", href: "/#about" },
  { id: "proj", label: "Projects", href: "/projects" },
  { id: "contact", label: "Contact", href: "/#contact" },
];

function Header() {
  const [active, setActive] = useState("home");
  const location = useLocation();
  const activeId = location.pathname === "/projects" ? "proj" : active;

  return (
    <div
      className="flex flex-col justify-center font-stm w-full p-3 fixed shadow-xl z-[999] bg-white top-0 left-0 md:flex md:flex-row md:justify-between md:p-5"
      id="nav"
    >
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
  );
}

export default Header;

