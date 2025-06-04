// src/components/Navbar.jsx
import React from "react";
import { Link } from "react-scroll";
import { useReducedMotion } from "framer-motion";

const Navbar = () => {
  const prefersReduced = useReducedMotion();

  return (
    <nav
      className={`
        fixed top-0 left-0 w-full z-50
        bg-transparent
      `}
    >
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo/Text */}
        <div className="text-white font-bold text-lg">MyLogo</div>

        <ul className="flex space-x-6">
          {["home", "about", "services", "skills", "projects", "contact"].map(
            (section) => (
              <li key={section}>
                <Link
                  to={section}
                  smooth
                  duration={prefersReduced ? 0 : 500}
                  className="text-white hover:text-gray-300 cursor-pointer text-base font-medium"
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </Link>
              </li>
            )
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
