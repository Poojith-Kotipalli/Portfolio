import React, { useState } from 'react';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(prev => !prev);
  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="fixed top-0 left-0 w-full bg-white shadow z-20">
      <nav className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        {/* Sample Brand/Name */}
        <a href="#home" className="text-2xl font-bold">
          Sample Name
        </a>

        {/* Desktop Links */}
        <ul className="hidden md:flex space-x-8 text-lg">
          <li>
            <a href="#services" className="hover:text-blue-600">
              What I Do
            </a>
          </li>
          <li>
            <a href="#skills" className="hover:text-blue-600">
              Skills
            </a>
          </li>
          <li>
            <a href="#projects" className="hover:text-blue-600">
              Projects
            </a>
          </li>
          <li>
            <a href="#about" className="hover:text-blue-600">
              About
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:text-blue-600">
              Contact
            </a>
          </li>
        </ul>

        {/* Mobile Menu Toggle */}
        <button
          onClick={toggleMenu}
          className="flex md:hidden"
          aria-label="Toggle menu"
        >
          {menuOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>

        {/* Mobile Links */}
        {menuOpen && (
          <div className="absolute top-full left-0 w-full bg-white shadow-md py-4 flex flex-col items-center space-y-4 md:hidden">
            <a href="#services" onClick={closeMenu} className="text-lg">
              What I Do
            </a>
            <a href="#skills" onClick={closeMenu} className="text-lg">
              Skills
            </a>
            <a href="#projects" onClick={closeMenu} className="text-lg">
              Projects
            </a>
            <a href="#about" onClick={closeMenu} className="text-lg">
              About
            </a>
            <a href="#contact" onClick={closeMenu} className="text-lg">
              Contact
            </a>

            {/* Social Icons as placeholders */}
            <div className="mt-4 flex space-x-6 text-xl">
              <a href="#" target="_blank" rel="noopener noreferrer">
                LinkedIn
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer">
                Instagram
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer">
                GitHub
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
