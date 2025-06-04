// client/src/components/Projects.jsx

import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

// Import your images from src/images:
import bgLeft from "../images/home.jpg";

// Sample projects array—replace with your actual project data:
const projects = [
  {
    title: "Sample Project 1",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sit amet eros nec mauris fermentum.",
    link: "#",
    imgAlt: "Project 1 Screenshot",
    imgSrc: bgLeft,
  },
  {
    title: "Sample Project 2",
    description:
      "Pellentesque ac bibendum tortor. Nam vulputate augue id lorem tincidunt, non scelerisque nisi auctor.",
    link: "#",
    imgAlt: "Project 2 Screenshot",
    imgSrc: bgLeft,
  },
  {
    title: "Sample Project 3",
    description:
      "Mauris tincidunt justo vitae lacus sagittis, eget commodo ligula fringilla. Vestibulum convallis suscipit.",
    link: "#",
    imgAlt: "Project 3 Screenshot",
    imgSrc: bgLeft,
  },
  // …add more projects as needed
];

// Zero-pad index function (e.g. 0 → "01", 1 → "02", etc.)
function formatIndex(idx) {
  return String(idx + 1).padStart(2, "0");
}

export default function Projects() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const projectRefs = useRef([]);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5,
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const idx = Number(entry.target.getAttribute("data-index"));
          setCurrentIndex(idx);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, options);

    projectRefs.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => {
      projectRefs.current.forEach((el) => {
        if (el) observer.unobserve(el);
      });
    };
  }, []);

  return (
    <section id="projects" className="relative bg-white">
      <h2 className="text-3xl font-bold text-center py-8">Projects</h2>

      <div className="flex">
        {/* ---------------------------------------- */}
        {/* LEFT COLUMN: sticky 1/4 width showing current index */}
        <div
          className="hidden md:flex w-1/4 h-screen bg-cover bg-center sticky top-0 items-center justify-center"
          style={{ backgroundImage: `url(${bgLeft})` }}
        >
          <h2 className="text-8xl font-extrabold text-gray-300">
            {formatIndex(currentIndex)}
          </h2>
        </div>

        {/* ---------------------------------------- */}
        {/* RIGHT COLUMN: scrollable project cards (each full viewport height) */}
        <div className="w-full md:w-3/4">
          {projects.map((proj, idx) => (
            <motion.div
              key={proj.title}
              data-index={idx}
              ref={(el) => (projectRefs.current[idx] = el)}
              className="mx-auto w-full md:w-[90%] h-screen my-8 bg-gray-50 flex flex-col rounded-lg shadow-sm overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: false, amount: 0.5 }}
            >
              {/* Image at top (occupies about 40% of card height) */}
              <div className="h-2/5">
                <img
                  src={proj.imgSrc}
                  alt={proj.imgAlt}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Content below (occupies remaining 60%) */}
              <div className="p-6 flex-1 flex flex-col justify-center">
                <h3 className="text-2xl font-semibold mb-4">
                  {proj.title}
                </h3>
                <p className="text-gray-600 mb-6">{proj.description}</p>
                <a
                  href={proj.link}
                  className="text-blue-600 hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Project
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
