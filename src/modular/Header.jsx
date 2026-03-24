import { useState } from "react";
import { useLocation } from "react-router-dom";
import Reveal from "./Reveal";

function Header() {
  const [active, setActive] = useState("home");
  const location = useLocation();

  // check if we're on the projects page
  const isProjectsPage = location.pathname === "/projects";

  return (
    <div
      className="flex flex-col justify-center font-stm w-full p-3 fixed w-screen shadow-xl z-[999] bg-white top-0 left-0 md:flex md:flex-row md:justify-between md:p-5"
      id="nav"
    >
      <h1 className="text-2xl mx-auto md:text-2xl md:mx-0">My Portfolio</h1>
      <nav className="md:flex-col">
        <ul className="flex space gap-10 justify-center">
          <li>
            <a
              href="/#hero"
              className={active === "home" && !isProjectsPage ? "active" : ""}
              onClick={() => setActive("home")}
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="/#about"
              className={active === "about" && !isProjectsPage ? "active" : ""}
              onClick={() => setActive("about")}
            >
              About
            </a>
          </li>
          <li>
            <a
              href="/#proj"
              className={isProjectsPage || active === "proj" ? "active" : ""}
              onClick={() => setActive("proj")}
            >
              Projects
            </a>
          </li>
          <li>
            <a
              href="/#contact"
              className={active === "contact" && !isProjectsPage ? "active" : ""}
              onClick={() => setActive("contact")}
            >
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Header;