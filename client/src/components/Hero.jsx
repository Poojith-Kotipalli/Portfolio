// client/src/components/Hero.jsx

import React from 'react';
import { motion } from 'framer-motion';

export default function Hero() {
  // Container variants to stagger child animations
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.4,    // 0.4s between each child
      },
    },
  };

  // Child variants for each line/item
  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        duration: 0.8,         // 0.8s fade/slide
        ease: 'easeOut' 
      } 
    },
  };

  return (
    <motion.section
      id="home"
      className="h-screen bg-gray-100 flex flex-col justify-center items-center text-center px-4"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* 1) Role / subtitle */}
      <motion.h2
        className="text-lg text-gray-600 mb-2"
        variants={itemVariants}
      >
        Sample Role • Web Portfolio
      </motion.h2>

      {/* 2) Main site owner name */}
      <motion.h1
        className="text-5xl font-extrabold mb-4"
        variants={itemVariants}
      >
        Sample Name
      </motion.h1>

      {/* 3) Small descriptive line */}
      <motion.p
        className="max-w-2xl text-gray-700 mb-6"
        variants={itemVariants}
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio.
      </motion.p>

      {/* 4) CTA Button */}
      <motion.a
        href="#contact"
        className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700 transition-colors"
        variants={itemVariants}
      >
        Get in Touch
      </motion.a>
    </motion.section>
  );
}
