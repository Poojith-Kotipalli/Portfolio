// src/components/About.jsx
import React from "react";
import { motion } from "framer-motion";

const About = () => {
  const paragraphs = [
    "I'm a passionate full-stack developer with a deep love for creating elegant solutions to complex problems. My journey in technology began with a curiosity about how things work, which quickly evolved into a career dedicated to building meaningful digital experiences.",
    "With expertise spanning from front-end interfaces to back-end architectures, I specialize in crafting scalable web applications that not only meet technical requirements but also deliver exceptional user experiences. My approach combines clean code principles with creative problem-solving to build products that make a difference.",
    "When I'm not coding, you'll find me exploring new technologies, contributing to open-source projects, or sharing knowledge with the developer community. I believe in continuous learning and staying at the forefront of web development trends to deliver cutting-edge solutions for every project."
  ];

  // Variants for heading
  const headingVariant = {
    hidden: { opacity: 0, y: -30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  // Variants for each paragraph
  const paragraphVariant = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <section
      id="about"
      className="
        min-h-screen
        flex flex-col items-center
        bg-gradient-to-r from-[#1e053a] to-[#0f0033]
        text-white text-justify
        py-20
      "
    >
      <div className="container mx-auto px-8">
        {/* Heading: fade in/out based on scroll */}
        <motion.h2
          className="text-6xl md:text-7xl font-bold text-center mb-16"
          variants={headingVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.9 }}
        >
          About Me
        </motion.h2>

        {/* Paragraphs: fade in top→bottom on scroll down, and fade out bottom→top on scroll up */}
        <div className="max-w-4xl mx-auto space-y-12">
          {paragraphs.map((paragraph, index) => (
            <motion.p
              key={index}
              className="text-xl leading-relaxed"
              variants={paragraphVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.9 }}
              transition={{ delay: index * 0.1 }}
            >
              {paragraph}
            </motion.p>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
