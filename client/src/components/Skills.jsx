import React from 'react';
import { motion } from 'framer-motion';

export default function Skills() {
  // Sample skill lists
  const languages = ["HTML", "CSS", "JavaScript", "Python", "SQL"];
  const frameworks = [
    "React",
    "Node.js",
    "Express.js",
    "TailwindCSS",
    "Framer Motion",
  ];
  const concepts = ["Responsive Design", "REST APIs", "UI/UX Basics", "Git/GitHub"];

  // Variants for list items
  const listVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i = 1) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.1 * i,
      },
    }),
  };

  return (
    <motion.section
      id="skills"
      className="py-16 px-4 bg-gray-100"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.3 }}
    >
      <h2 className="text-3xl font-bold text-center mb-8">Skills</h2>
      <div className="max-w-5xl mx-auto grid gap-12 md:grid-cols-3">
        {/* Languages */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Languages</h3>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            {languages.map((lang, i) => (
              <motion.li key={lang} custom={i} variants={listVariants}>
                {lang}
              </motion.li>
            ))}
          </ul>
        </div>

        {/* Frameworks & Tools */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Frameworks & Tools</h3>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            {frameworks.map((fw, i) => (
              <motion.li key={fw} custom={i} variants={listVariants}>
                {fw}
              </motion.li>
            ))}
          </ul>
        </div>

        {/* Core Concepts */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Core Concepts</h3>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            {concepts.map((c, i) => (
              <motion.li key={c} custom={i} variants={listVariants}>
                {c}
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </motion.section>
  );
}
