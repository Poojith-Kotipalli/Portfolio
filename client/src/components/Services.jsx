import React from 'react';
import { motion } from 'framer-motion';

const items = [
  {
    title: "Full-Stack Development",
    description: "I build complete web solutions (frontend + backend) using React, Node.js, Express, and more.",
  },
  {
    title: "UI/UX & Frontend",
    description: "Clean, responsive interfaces focusing on accessibility and seamless user experience.",
  },
  {
    title: "Optimization",
    description: "Performance tuning, SEO basics, and scalable architecture to keep your app fast and maintainable.",
  }
];

export default function Services() {
  return (
    <motion.section
      id="services"
      className="py-16 px-4 bg-white"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true, amount: 0.3 }}
    >
      <h2 className="text-3xl font-bold text-center mb-12">What I Do</h2>
      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {items.map((svc, idx) => (
          <motion.div
            key={idx}
            className="p-6 border border-gray-200 rounded-lg hover:shadow-md transition-shadow"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 * idx, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-semibold mb-4">{svc.title}</h3>
            <p className="text-gray-600">{svc.description}</p>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
