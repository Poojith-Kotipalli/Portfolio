// src/components/Navbar.jsx

import React, { useState, useEffect } from 'react';
import { Link, animateScroll as scroll } from 'react-scroll'; 
// (Optional) react-scroll if you want smooth scroll behavior

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // 1) Listen for scroll to switch background from transparent → solid
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // 2) Toggle hamburger on mobile
  const toggleMenu = () => setMenuOpen(prev => !prev);
  const closeMenu = () => setMenuOpen(false);

  return (
    <header
      className={`fixed w-full top-0 left-0 z-30 transition-colors duration-300 ${
        scrolled
          ? 'bg-white shadow-md'    // Solid white + shadow once scrolled
          : 'bg-transparent'         // Transparent at top
      }`}
    >
      <nav className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* === Brand / Logo === */}
        <div
          className="text-2xl font-bold cursor-pointer text-gray-800"
          onClick={() => {
            scroll.scrollToTop({ duration: 500, smooth: true });
            closeMenu();
          }}
        >
          SampleLogo
        </div>

        {/* === Desktop Links === */}
        <ul className="hidden md:flex space-x-8 text-gray-700">
          {/* Using react-scroll’s <Link> for smooth scrolling to each section’s id */}
          <li className="hover:text-blue-600 cursor-pointer">
            <Link
              to="hero"
              smooth={true}
              duration={500}
              offset={-80} // adjust for fixed header height
            >
              Home
            </Link>
          </li>
          <li className="hover:text-blue-600 cursor-pointer">
            <Link to="about" smooth offset={-80} duration={500}>
              About
            </Link>
          </li>
          <li className="hover:text-blue-600 cursor-pointer">
            <Link to="services" smooth offset={-80} duration={500}>
              What I Do
            </Link>
          </li>
          <li className="hover:text-blue-600 cursor-pointer">
            <Link to="skills" smooth offset={-80} duration={500}>
              Skills
            </Link>
          </li>
          <li className="hover:text-blue-600 cursor-pointer">
            <Link to="projects" smooth offset={-80} duration={500}>
              Projects
            </Link>
          </li>
          <li className="hover:text-blue-600 cursor-pointer">
            <Link to="contact" smooth offset={-80} duration={500}>
              Contact
            </Link>
          </li>
        </ul>

        {/* === Mobile Hamburger === */}
        <button
          onClick={toggleMenu}
          className="md:hidden flex items-center justify-center p-2 focus:outline-none"
          aria-label="Toggle Menu"
        >
          {menuOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-gray-800"
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
              className="h-6 w-6 text-gray-800"
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

        {/* === Mobile Menu Drawer === */}
        {menuOpen && (
          <div
            className="absolute top-full left-0 w-full bg-white shadow-md"
            onClick={closeMenu}
          >
            <ul className="flex flex-col items-center space-y-4 py-6 text-gray-700">
              <li className="hover:text-blue-600">
                <Link to="home" smooth offset={-80} duration={500}>
                  Home
                </Link>
              </li>
              <li className="hover:text-blue-600">
                <Link to="services" smooth offset={-80} duration={500}>
                  What I Do
                </Link>
              </li>
              <li className="hover:text-blue-600">
                <Link to="skills" smooth offset={-80} duration={500}>
                  Skills
                </Link>
              </li>
              <li className="hover:text-blue-600">
                <Link to="projects" smooth offset={-80} duration={500}>
                  Projects
                </Link>
              </li>
              <li className="hover:text-blue-600">
                <Link to="about" smooth offset={-80} duration={500}>
                  About
                </Link>
              </li>
              <li className="hover:text-blue-600">
                <Link to="contact" smooth offset={-80} duration={500}>
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
}
