import React from 'react';
import { motion } from 'framer-motion';

export default function About() {
  return (
    <motion.section
      id="about"
      className="py-16 px-4 bg-white"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: false, amount: 0.3 }}
    >
      <h2 className="text-3xl font-bold text-center mb-8">About Me</h2>
      <div className="max-w-3xl mx-auto text-gray-700 space-y-6 leading-relaxed">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vehicula, purus at blandit commodo, lectus dolor sollicitudin nunc,
          vitae lacinia lacus urna id mauris.
        </p>
        <p>
          Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Maecenas aliquam mollis mauris, ut accumsan orci.
        </p>
        <p>
          Phasellus at leo nec nisi vulputate tincidunt in at ipsum. Sed commodo, nisl id luctus molestie, ex nulla ullamcorper eros,
          a feugiat erat arcu nec eros.
        </p>
      </div>
    </motion.section>
  );
}
