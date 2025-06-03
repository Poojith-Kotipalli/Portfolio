import React from 'react';
import { motion } from 'framer-motion';

export default function Contact() {
  return (
    <motion.section
      id="contact"
      className="py-16 px-4 bg-gray-50"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: false, amount: 0.3 }}
    >
      <h2 className="text-3xl font-bold text-center mb-8">Contact Me</h2>
      <div className="max-w-lg mx-auto text-center space-y-6">
        <p className="text-gray-700">
          Feel free to reach out at: <br />
          <a href="mailto:email@example.com" className="text-blue-600 hover:underline">
            email@example.com
          </a>
        </p>
        <p className="text-gray-700">
          Or connect on social media (placeholder):
        </p>
        <div className="flex justify-center space-x-6 text-xl">
          <a href="#" target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer">
            Twitter
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
        </div>
      </div>
    </motion.section>
  );
}
