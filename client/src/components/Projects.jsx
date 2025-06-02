import React from 'react';
import { motion } from 'framer-motion';

const projects = [
  {
    title: "Modern Marketing Website",
    description: "NURA – Marketing Site (2025)",
    image: "/placeholder-1.jpg", // place real images under client/public/
    link: "#"
  },
  {
    title: "Full-Stack Recruitment Platform",
    description: "Job Portal Application (2025)",
    image: "/placeholder-2.jpg",
    link: "#"
  },
  {
    title: "SAAS Platform",
    description: "Productivity SAAS Tool (2025)",
    image: "/placeholder-3.jpg",
    link: "#"
  },
  {
    title: "CineRec (ML Recommendation)",
    description: "Movie Recommendation Engine (2025)",
    image: "/placeholder-4.jpg",
    link: "#"
  },
  {
    title: "Code2Img Tool",
    description: "Code-to-Image Generator (2025)",
    image: "/placeholder-5.jpg",
    link: "#"
  }
];

export default function Projects() {
  return (
    <motion.section
      id="projects"
      className="py-16 px-4 bg-gray-50"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true, amount: 0.3 }}
    >
      <h2 className="text-3xl font-bold text-center mb-8">Selected Works</h2>
      <p className="text-center text-gray-600 mb-12">
        Thoughtfully crafted projects blending utility and aesthetics into functional, memorable experiences.
      </p>
      <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((proj, idx) => (
          <motion.div
            key={idx}
            className="bg-white rounded-lg overflow-hidden shadow hover:shadow-lg transition-shadow"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 * idx, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <img
              src={proj.image}
              alt={`${proj.title} screenshot`}
              className="w-full h-40 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold">{proj.title}</h3>
              <p className="text-sm text-gray-600">{proj.description}</p>
              <a
                href={proj.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-2 text-blue-600 hover:underline text-sm"
              >
                View Project
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
