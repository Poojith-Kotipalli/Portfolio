// src/components/About.jsx
import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  const paragraphs = [
    "I'm a passionate full-stack developer with a deep love for creating elegant solutions to complex problems. My journey in technology began with a curiosity about how things work, which quickly evolved into a career dedicated to building meaningful digital experiences.",
    "With expertise spanning from front-end interfaces to back-end architectures, I specialize in crafting scalable web applications that not only meet technical requirements but also deliver exceptional user experiences. My approach combines clean code principles with creative problem-solving to build products that make a difference.",
    "When I'm not coding, you'll find me exploring new technologies, contributing to open-source projects, or sharing knowledge with the developer community. I believe in continuous learning and staying at the forefront of web development trends to deliver cutting-edge solutions for every project."
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const paragraphVariants = {
    hidden: { 
      opacity: 0, 
      y: 40
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="about" className="min-h-screen flex items-center bg-white">
      <div className="container mx-auto px-4 py-20">
        <motion.h2 
          className="text-4xl md:text-5xl font-bold text-center mb-16"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          About Me
        </motion.h2>
        
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          className="max-w-4xl mx-auto"
        >
          {paragraphs.map((paragraph, index) => (
            <motion.p
              key={index}
              variants={paragraphVariants}
              className="text-lg text-gray-700 leading-relaxed mb-6 last:mb-0"
            >
              {paragraph}
            </motion.p>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default About;