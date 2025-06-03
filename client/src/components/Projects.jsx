// client/src/components/Projects.jsx

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

// Import your images from src/images:
import bgLeft from '../images/home.jpg';



// Sample projects array, each with an imported imgSrc:
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
  
  },
  {
    title: "Sample Project 3",
    description:
      "Mauris tincidunt justo vitae lacus sagittis, eget commodo ligula fringilla. Vestibulum convallis suscipit.",
    link: "#",
    imgAlt: "Project 3 Screenshot",
   
  },
];

// Zero-pad index function (e.g. 0 → "01", 1 → "02", etc.)
function formatIndex(idx) {
  return String(idx + 1).padStart(2, "0");
}

export default function Projects() {
  const rightRef = useRef(null);

  // Track scroll progress within the right column
  const { scrollYProgress } = useScroll({
    target: rightRef,
    offset: ["start end", "end start"],
  });

  const totalProjects = projects.length;
  const maxShift = (totalProjects - 1) * 100; // e.g. 3 projects → 200

  // Map scroll progress [0→1] to shift [0→ -maxShift]
  const yTransform = useTransform(scrollYProgress, [0, 1], [0, -maxShift]);

  return (
    <section id="projects" className="relative bg-white">
      <h2 className="text-3xl font-bold text-center py-8">Projects</h2>

      <div className="flex">
        {/* ---------------------------------------- */}
        {/* LEFT COLUMN: pinned 1/4 width, full‐height “number stack” */}
        <div
          className="hidden md:block w-1/4 h-screen bg-cover bg-center sticky top-0 overflow-hidden"
          style={{ backgroundImage: `url(${bgLeft})` }}
        >
          <motion.div
            style={{ y: yTransform }} // numeric → interpreted as vh in CSS
            transition={{ ease: "easeOut", duration: 0.5 }}
          >
            {projects.map((_, idx) => (
              <div
                key={idx}
                className="h-screen flex items-center justify-center"
              >
                <span className="text-8xl font-extrabold text-gray-300">
                  {formatIndex(idx)}
                </span>
              </div>
            ))}
          </motion.div>
        </div>

        {/* ---------------------------------------- */}
        {/* RIGHT COLUMN: scrollable project cards (each full viewport height) */}
        <div
          ref={rightRef}
          className="w-full md:w-3/4"
        >
          {projects.map((proj, idx) => (
            <motion.div
              key={proj.title}
              className="mx-auto w-full md:w-[90%] h-screen my-0 border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow bg-gray-50 flex flex-col"
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
                <h3 className="text-2xl font-semibold mb-4">{proj.title}</h3>
                <p className="text-gray-600 mb-6">{proj.description}</p>
                <a href={proj.link} className="text-blue-600 hover:underline">
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
