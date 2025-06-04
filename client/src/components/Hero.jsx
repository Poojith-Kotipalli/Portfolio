// src/components/Hero.jsx

import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
  //
  // 1. We’ll define a few simple variants for staggering and direction.
  //
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        // Stagger children by 0.3s each
        staggerChildren: 0.3,
        when: "beforeChildren",
      },
    },
  };

  // Each child will slide in from left or fade in
  const headingVariant = {
    hidden: { x: -100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const subtitleVariant = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const buttonVariant = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const imageVariant = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const badgeVariant = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen bg-gray-100 flex items-center"
    >
      {/* 
        Wrap everything in a motion.div so we can stagger children.
        We start “hidden” and animate to “visible” on mount.
      */}
      <motion.div
        className="container mx-auto px-6 lg:px-8 flex flex-col lg:flex-row items-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Left side: text content */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center">
          {/* 1) Big heading */}
          <motion.h1
            className="text-6xl lg:text-7xl font-extrabold text-gray-900 leading-tight"
            variants={headingVariant}
          >
            Your Name
          </motion.h1>

          {/* 2) Subtitle / description */}
          <motion.p
            className="mt-8 text-lg lg:text-xl text-gray-700 max-w-lg"
            variants={subtitleVariant}
          >
            Open to job opportunities worldwide.
            <br />
            Passionate about building polished, intuitive, and thoughtful
            digital experiences that leave a mark.
          </motion.p>

          {/* 3) Call-to-action button */}
          <motion.div className="mt-10" variants={buttonVariant}>
            <a
              href="#contact"
              className="inline-block bg-gray-900 text-white py-3 px-6 rounded-full text-lg font-medium hover:bg-gray-800 transition"
            >
              Contact →
            </a>
          </motion.div>
        </div>

        {/* Right side: hero image card */}
        <div className="w-full lg:w-1/2 mt-12 lg:mt-0 flex justify-center">
          <motion.div
            className="max-w-md w-full rounded-lg overflow-hidden shadow-lg"
            variants={imageVariant}
          >
            <img
              src="/hero-image.jpg"
              alt="Hero"
              className="object-cover w-full h-full"
            />
          </motion.div>
        </div>
      </motion.div>

    
    </section>
  );
};

export default Hero;
