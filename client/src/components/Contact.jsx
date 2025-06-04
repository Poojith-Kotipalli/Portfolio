// src/components/Contact.jsx
import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const Contact = () => {
  // Create a ref and track whether the container is in view
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { amount: 0.6, once: false });

  // Variants for individual elements
  const headingVariant = {
    hidden: { x: -100, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 0.8, ease: 'easeOut' } },
  };

  const paragraphVariant = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
  };

  const buttonVariant = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: { scale: 1, opacity: 1, transition: { duration: 0.6, ease: 'easeOut' } },
  };

  const iconVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  };

  return (
    <section
      id="contact"
      className="
        relative
        min-h-screen
        flex items-center
        bg-gradient-to-r from-[#1e053a] to-[#0f0033]
        text-white text-lg text-justify
        py-20
      "
      ref={containerRef}
    >
      <div className="container mx-auto px-8 text-center">
        {/* Heading: animates based on isInView */}
        <motion.h2
          className="text-6xl md:text-7xl font-bold mb-8"
          variants={headingVariant}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          Get In Touch
        </motion.h2>

        {/* Paragraph: animates based on isInView */}
        <motion.p
          className="text-xl text-gray-200 mb-12 max-w-2xl mx-auto leading-relaxed"
          variants={paragraphVariant}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          I'm always interested in hearing about new projects and opportunities.
          Whether you have a question or just want to say hi, feel free to reach
          out!
        </motion.p>

        {/* Button: animates based on isInView */}
        <motion.div
          variants={buttonVariant}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          <a
            href="mailto:hello@example.com"
            className="
              inline-block
              bg-white text-[#1e053a]
              px-8 py-3
              rounded-full font-medium
              hover:bg-gray-200 transition-colors
            "
          >
            Say Hello
          </a>
        </motion.div>

        {/* Social Icons: animate based on isInView */}
        <div className="flex justify-center gap-8 mt-16">
          <motion.a
            href="#"
            className="text-gray-300 hover:text-white text-xl transition-colors"
            variants={iconVariant}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </motion.a>
          <motion.a
            href="#"
            className="text-gray-300 hover:text-white text-xl transition-colors"
            variants={iconVariant}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </motion.a>
          <motion.a
            href="#"
            className="text-gray-300 hover:text-white text-xl transition-colors"
            variants={iconVariant}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            target="_blank"
            rel="noopener noreferrer"
          >
            Twitter
          </motion.a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
