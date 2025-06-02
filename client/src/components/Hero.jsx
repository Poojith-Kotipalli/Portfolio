import React from 'react';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <motion.section
      id="home"
      className="pt-24 pb-20 bg-gray-100 text-center"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true, amount: 0.3 }}
    >
      <h2 className="text-lg text-gray-600 mb-2">Web Developer &amp; Designer</h2>
      <h1 className="text-5xl font-extrabold mb-4">Venkata Sai Poojith Kotipalli</h1>
      <p className="max-w-2xl mx-auto text-gray-700 mb-6">
        Open to opportunities worldwide. I build polished, intuitive, and thoughtful digital experiences.
      </p>
      <a
        href="#contact"
        className="inline-block bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700 transition-colors"
      >
        Contact &#8599;
      </a>
    </motion.section>
  );
}
