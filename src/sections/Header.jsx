import { useState } from "react";

//navbar
function Header() {
  const [active, setActive] = useState("home");

  return (
    <div
      className="flex flex-col justify-center font-stm w-full p-3 fixed w-screen shadow-xl z-[999] bg-white top-0 left-0 md:flex md:flex-row md:justify-between md:p-5  "
      id="nav"
    >
      <h1 className="text-2xl mx-auto md:text-2xl md:mx-0">My Portfolio</h1>
      <nav className="md:flex-col">
        <ul className="md:group flex space gap-10">
          <li>
            <a
              href="#hero"
              className={active === "home" ? "active" : ""}
              onClick={() => setActive("home")}
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#about"
              className={active === "about" ? "active" : ""}
              onClick={() => setActive("about")}
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#proj"
              className={active === "proj" ? "active" : ""}
              onClick={() => setActive("proj")}
            >
              Projects
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className={active === "contact" ? "active" : ""}
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
