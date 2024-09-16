import { useState } from 'react';
import { navLinks } from '../constants/index.js';

const NavItems = ({ onClick = () => {} }) => (
  <ul className="nav-ul">
    {navLinks.map((item) => (
      <li key={item.id} className="nav-li">
        <a href={item.href} className="nav-li_a" onClick={onClick}>
          {item.name}
        </a>
      </li>
    ))}
  </ul>
);

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <header className="fixed top-5 left-20 right-20 z-50 h-12 glass-navbar">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mx-auto sm-space c-space">
          <a
            href="/"
            className="text-neutral-400 font-bold text-10 hover:text-white transition-colors"
          >
            <img
              src="assets/logo2.png" // Replace with the path to your logo image
              alt="Logo"
              className="inline-block align-middle mr-1 w-7 h-7"
            />
            Aniket Subudhi
          </a>

          <button
            onClick={toggleMenu}
            className="text-neutral-400 hover:text-white focus:outline-none sm:hidden flex"
            aria-label="Toggle menu"
          >
            <img
              src={isOpen ? 'assets/close.svg' : 'assets/menu.svg'}
              alt="toggle"
              className="w-5 h-5"
            />
          </button>

          <nav className="sm:flex hidden">
            <NavItems />
          </nav>
        </div>
      </div>

      <div
        className={`nav-sidebar top-16 ${
          isOpen
            ? 'max-h-screen border border-[rgba(255,255,255,0.18)] shadow-[0_8px_32px_0_rgba(0,0,0,0.37)]'
            : 'max-h-0 border-none shadow-none'
        }`}
      >
        <nav className="p-4">
          <NavItems onClick={closeMenu} />
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
