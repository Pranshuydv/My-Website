import React, { useState } from "react";
import logo from "../assets/Logo.png";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = ["Home", "About", "Skills", "Projects"];

  return (
    <nav className="w-full fixed top-0 left-0 z-50 backdrop-blur-md bg-black/50 border-b border-gray-800 text-white font-sans">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        {/* Logo */}
        <div className="text-2xl font-extrabold tracking-wider flex items-center">
          <img src={logo} alt="Logo" className="h-10 w-auto" />
        </div>

        {/* Desktop Nav Links */}
        <ul className="hidden md:flex gap-10 text-sm font-semibold tracking-wide">
          {navLinks.map((item) => (
            <li key={item}>
              <a
                href={`#${item.toLowerCase()}`}
                className="relative hover:text-green-400 transition duration-300 before:absolute before:bottom-[-4px] before:left-0 before:w-0 before:h-[2px] before:bg-green-400 before:transition-all hover:before:w-full"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>

        {/* Contact Button - Desktop */}
        <a
          href="#contact"
          className="hidden md:block border border-green-400 px-5 py-1.5 rounded-md hover:bg-green-500 hover:text-white transition text-sm font-medium"
        >
          Contact
        </a>

        {/* Hamburger - Mobile */}
        <div
          className="md:hidden cursor-pointer text-3xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? "✖" : "☰"}
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-black/90 px-6 pb-6 pt-2 text-center space-y-4 text-base font-medium">
          {navLinks.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              onClick={() => setMenuOpen(false)}
              className="block hover:text-green-400 transition"
            >
              {item}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setMenuOpen(false)}
            className="inline-block mt-3 border border-green-400 px-5 py-1.5 rounded-md hover:bg-green-500 hover:text-white transition"
          >
            Contact
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
