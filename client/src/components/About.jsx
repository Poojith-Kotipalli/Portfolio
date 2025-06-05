// src/components/About.jsx
import React from "react";
import { motion } from "framer-motion";

const About = () => {
  const paragraphs = [
    "I’m a Master’s student in Information Systems at Northeastern University, specializing in backend development, machine learning, and data engineering. My academic foundation in computer science with a focus on AI/ML allows me to translate theory into real-world impact.",
    "Over the past few years, I’ve worked on projects ranging from intelligent character recognition at EXL to AI chatbots and real-time banking dashboards at DXC Technology. My development spans full-stack systems, automated ETL pipelines, real-time fraud detection, and NLP applications that directly serve business needs.",
    "I believe in building technology that’s practical, scalable, and user-centric. Whether it’s optimizing a database, designing a predictive model, or orchestrating cloud data flows, I approach every challenge with a mindset to innovate. Outside of development, I explore AI in creative domains like music composition and visual recognition."
  ];

  const headingVariant = {
    hidden: { opacity: 0, y: -30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const paragraphVariant = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <section
      id="about"
      className="
        min-h-screen
        flex flex-col items-center
        bg-gradient-to-r from-[#1e053a] to-[#0f0033]
        text-white text-justify
        py-20
      "
    >
      <div className="container mx-auto px-8">
        <motion.h2
          className="text-6xl md:text-7xl font-bold text-center mb-16"
          variants={headingVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.9 }}
        >
          About Me
        </motion.h2>

        <div className="max-w-4xl mx-auto space-y-12">
          {paragraphs.map((paragraph, index) => (
            <motion.p
              key={index}
              className="text-xl leading-relaxed"
              variants={paragraphVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.9 }}
              transition={{ delay: index * 0.1 }}
            >
              {paragraph}
            </motion.p>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
