import React from 'react';
import { motion } from 'framer-motion';

export default function About() {
  return (
    <motion.section
      id="about"
      className="py-16 px-4 bg-gray-50"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true, amount: 0.3 }}
    >
      <h2 className="text-3xl font-bold text-center mb-8">About Me</h2>
      <div className="max-w-3xl mx-auto text-gray-700 space-y-6 leading-relaxed">
        <p>
          I’m a passionate software engineer who loves building full-stack web applications. My journey began with a curiosity for problem-solving, which soon evolved into a lifelong passion for crafting intuitive, user-centric digital experiences.
        </p>
        <p>
          Over the years, I’ve honed my skills in React, Node.js, Express, and modern CSS frameworks like Tailwind. I thrive on collaborating with teams to tackle complex challenges and deliver polished, maintainable code.
        </p>
        <p>
          When I’m not coding, you’ll find me exploring new design trends, experimenting with JavaScript animations, or contributing to open-source projects. Let’s build something remarkable together!
        </p>
      </div>
    </motion.section>
  );
}
