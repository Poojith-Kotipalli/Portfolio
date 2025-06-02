import React, { useState } from 'react';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(prev => !prev);
  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="fixed top-0 left-0 w-full bg-white shadow z-20">
      <nav className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        <a href="#home" className="text-2xl font-bold">Zuned Aalim</a>
        {/* Desktop Links */}
        <ul className="hidden md:flex space-x-8 text-lg">
          <li><a href="#services" className="hover:text-blue-600">Services</a></li>
          <li><a href="#projects" className="hover:text-blue-600">Projects</a></li>
          <li><a href="#skills" className="hover:text-blue-600">Skills</a></li>
          <li><a href="#about" className="hover:text-blue-600">About</a></li>
          <li><a href="#contact" className="hover:text-blue-600">Contact</a></li>
        </ul>
        {/* Hamburger (mobile) */}
        <button
          className="md:hidden flex flex-col space-y-1 focus:outline-none"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <span className="block w-6 h-0.5 bg-black"></span>
          <span className="block w-6 h-0.5 bg-black"></span>
          <span className="block w-6 h-0.5 bg-black"></span>
        </button>
      </nav>
      {/* Mobile Overlay Menu */}
      {menuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-90 flex flex-col items-center justify-center space-y-8 text-white text-2xl z-10"
          onClick={closeMenu}
        >
          <a href="#home" onClick={closeMenu}>Home</a>
          <a href="#services" onClick={closeMenu}>Services</a>
          <a href="#projects" onClick={closeMenu}>Projects</a>
          <a href="#skills" onClick={closeMenu}>Skills</a>
          <a href="#about" onClick={closeMenu}>About</a>
          <a href="#contact" onClick={closeMenu}>Contact</a>
          <div className="mt-8 flex space-x-6 text-xl">
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer">GitHub</a>
          </div>
        </div>
      )}
    </header>
  );
}
