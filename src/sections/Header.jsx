import { list } from "postcss";
import { useState } from "react";

//navbar
function Header() {
  const [active, setActive] = useState('home');

  return (
    <div
      className="flex fixed justify-between p-5 w-screen shadow-xl bg-black-400 z-999 bg-white top-0 left-0"
      id="nav"
    >
      <h1 className="font-stm text-2xl ">My Portfolio</h1>
      <nav className="font-stm">
        <ul className="group flex space gap-10">
          <li>
            <a href="#hero" 
            className={active === 'home' ? 'active' : ''}
            onClick={() => setActive('home')}
            >
              Home
            </a>
          </li>
          <li>
            <a href="#about" 
            className={active === 'about' ? 'active' : ''}
            onClick={() => setActive('about')}>
              About
            </a>
          </li>
          <li>
            <a href="#proj" 
            className={active === 'proj' ? 'active' : ''}
            onClick={() => setActive('proj')}>
              Projects
            </a>
          </li>
          <li>
            <a href="#contact" 
            className={active === 'contact' ? 'active' : ''}
            onClick={() => setActive('contact')}>
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Header;
