import React from "react";
import { Link } from "react-scroll"; // or whichever scrolling/router library you use

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-transparent">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Replace “MyLogo” with your actual logo/text */}
        <div className="text-white font-bold text-lg">MyLogo</div>

        <ul className="flex space-x-6">
          <li>
            <Link
              to="hero"
              smooth
              duration={500}
              className="text-white hover:text-gray-300 cursor-pointer text-base font-medium"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="about"
              smooth
              duration={500}
              className="text-white hover:text-gray-300 cursor-pointer text-base font-medium"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="services"
              smooth
              duration={500}
              className="text-white hover:text-gray-300 cursor-pointer text-base font-medium"
            >
              What I Do
            </Link>
          </li>
          <li>
            <Link
              to="projects"
              smooth
              duration={500}
              className="text-white hover:text-gray-300 cursor-pointer text-base font-medium"
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              to="contact"
              smooth
              duration={500}
              className="text-white hover:text-gray-300 cursor-pointer text-base font-medium"
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
