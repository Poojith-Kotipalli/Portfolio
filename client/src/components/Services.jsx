// client/src/components/Services.jsx

import React from "react";
import { motion } from "framer-motion";

/**
 * Sample “What I Do” items.
 * We will explicitly time their fade/slide animations exactly as in the video.
 */
const items = [
  {
    title: "Sample Service 1",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum id ligula felis euismod semper.",
  },
  {
    title: "Sample Service 2",
    description:
      "Quisque velit nisi, pretium ut lacinia in, elementum id enim. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus.",
  },
  {
    title: "Sample Service 3",
    description:
      "Donec sollicitudin molestie malesuada. Vivamus suscipit tortor eget felis porttitor volutpat.",
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="py-16 px-4 bg-white"
    >
      <h2 className="text-3xl font-bold text-center mb-8">What I Do</h2>

      <div className="max-w-5xl mx-auto grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((svc, idx) => {
          // Compute a per‐card delay of 0.3s, starting from when the section enters view
          const cardDelay = 0.6 + idx * 0.3;
          return (
            <motion.div
              key={svc.title}
              className="p-6 border border-gray-200 rounded-lg hover:shadow-md transition-shadow bg-gray-50 flex flex-col"
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                delay: cardDelay,
                duration: 0.6,
                ease: "easeOut",
              }}
              viewport={{ once: true, amount: 0.4 }}
            >
              <h3 className="text-xl font-semibold mb-4">{svc.title}</h3>
              <p className="text-gray-600 flex-1">{svc.description}</p>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
