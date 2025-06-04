// src/components/Projects.jsx

import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Import your images from src/images (replace with actual project images)
import projectImage1 from "../images/home.jpg";
import projectImage2 from "../images/home.jpg";
import projectImage3 from "../images/home.jpg";

// Sample projects array—replace imgSrc with each project’s actual image
const projects = [
  {
    title: "Sample Project 1",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sit amet eros nec mauris fermentum.",
    link: "#",
    imgAlt: "Project 1 Screenshot",
    imgSrc: projectImage1,
  },
  {
    title: "Sample Project 2",
    description:
      "Pellentesque ac bibendum tortor. Nam vulputate augue id lorem tincidunt, non scelerisque nisi auctor.",
    link: "#",
    imgAlt: "Project 2 Screenshot",
    imgSrc: projectImage2,
  },
  {
    title: "Sample Project 3",
    description:
      "Mauris tincidunt justo vitae lacus sagittis, eget commodo ligula fringilla. Vestibulum convallis suscipit.",
    link: "#",
    imgAlt: "Project 3 Screenshot",
    imgSrc: projectImage3,
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

  // Keep previous formatted index to compare digits
  const [prevFormatted, setPrevFormatted] = useState(formatIndex(0));
  const formatted = formatIndex(currentIndex);

  useEffect(() => {
    setPrevFormatted((prev) => {
      if (prev !== formatted) return prev;
      return prev;
    });
  }, [formatted]);

  // Variants for flipping a single digit
  const flipIn = {
    initial: { rotateX: -90, opacity: 0 },
    animate: { rotateX: 0, opacity: 1, transition: { duration: 0.5, ease: "easeOut" } },
    exit: { rotateX: 90, opacity: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  return (
    <section
      id="projects"
      className="
        min-h-screen
        bg-gradient-to-r from-[#1e053a] to-[#0f0033]
        text-white text-lg text-justify
        py-20
      "
    >
      <h2 className="text-5xl md:text-6xl font-bold text-center mb-12">
        Projects
      </h2>

      <div className="flex">
        {/* LEFT COLUMN: sticky 1/4 width showing current index */}
        <div
          className="
            hidden md:flex
            w-1/4 h-screen
            sticky top-0
            items-center justify-center
          "
        >
          <div className="flex space-x-2">
            {formatted.split("").map((digit, pos) => {
              const prevDigit = prevFormatted[pos] || "";
              const key = `${digit}-${pos}`;
              if (digit !== prevDigit) {
                return (
                  <AnimatePresence mode="wait" key={pos}>
                    <motion.span
                      key={key}
                      initial={flipIn.initial}
                      animate={flipIn.animate}
                      exit={flipIn.exit}
                      className="text-[120px] font-extrabold block"
                    >
                      {digit}
                    </motion.span>
                  </AnimatePresence>
                );
              } else {
                // unchanged digit: render statically without animation
                return (
                  <span key={digit + pos} className="text-[120px] font-extrabold block">
                    {digit}
                  </span>
                );
              }
            })}
          </div>
        </div>

        {/* RIGHT COLUMN: scrollable project cards (each full viewport height) */}
        <div className="w-full md:w-3/4">
          {projects.map((proj, idx) => (
            <motion.div
              key={proj.title}
              data-index={idx}
              ref={(el) => (projectRefs.current[idx] = el)}
              className="
                mx-auto w-full md:w-[90%] h-screen my-8
                bg-[#3a0f5b]/50 border border-white/20
                rounded-lg overflow-hidden shadow-lg
                flex flex-col
              "
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              viewport={{ once: false, amount: 0.5 }}
            >
              {/* Image at top (occupies about 40% of card height) */}
              <div className="h-2/5 w-full">
                <img
                  src={proj.imgSrc}
                  alt={proj.imgAlt}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Content below (occupies remaining 60%) */}
              <div className="p-8 flex-1 flex flex-col justify-center">
                <h3 className="text-3xl md:text-4xl font-semibold mb-6">
                  {proj.title}
                </h3>
                <p className="text-gray-200 mb-8 leading-relaxed">
                  {proj.description}
                </p>
                <a
                  href={proj.link}
                  className="text-[#a1eafb] text-xl hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Project →
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
