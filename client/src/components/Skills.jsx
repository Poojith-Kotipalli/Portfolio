// src/components/Skills.jsx
import React from 'react';
import { motion } from 'framer-motion';

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages & Frameworks",
      items: [
        "Python (Flask, Pandas, NumPy, PySpark, SciPy, scikit-learn)",
        "JavaScript / TypeScript",
        "Java, SQL (MySQL, PostgreSQL)",
        "HTML / CSS",
        "MIDI Scripting"
      ]
    },
    {
      title: "Data Engineering & Cloud",
      items: [
        "Apache Kafka, PySpark",
        "Apache Airflow, GCP Dataflow",
        "AWS (S3, Redshift, EMR), Snowflake",
        "ETL / ELT Pipelines",
        "CI/CD (GitHub Actions, Jenkins)"
      ]
    },
    {
      title: "Machine Learning & AI",
      items: [
        "Scikit-learn, TensorFlow, Keras, PyTorch",
        "Deep Learning (CNN, YOLO NAS)",
        "Natural Language Processing (BERT, spaCy)",
        "Regression, Classification, Random Forest"
      ]
    },
    {
      title: "Visualization & Databases",
      items: [
        "Tableau, Power BI, Looker Studio",
        "SQL Query Optimization",
        "Database Design (ACID, Crow’s Foot Notation)",
        "MongoDB, Redshift, Snowflake"
      ]
    },
    {
      title: "Development & DevOps",
      items: [
        "REST APIs, Git, GitHub, Postman",
        "Full-Stack Web Development",
        "System Design, Agile, TDD",
        "Realtime Dashboards, Alerting Systems"
      ]
    },
    {
      title: "Other Tools & Soft Skills",
      items: [
        "Linux, VSCode, Figma",
        "Communication, Team Collaboration",
        "Problem Solving, Fast Learning"
      ]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  return (
    <section
      id="skills"
      className="
        min-h-screen
        flex items-center
        bg-gradient-to-r from-[#1e053a] to-[#0f0033]
        text-white text-lg text-justify
      "
    >
      <div className="container mx-auto px-8 py-20">
        <motion.h2 
          className="text-6xl md:text-7xl font-bold text-center mb-16"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          Skills
        </motion.h2>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-6xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
        >
          {skillCategories.map((category, categoryIndex) => (
            <div key={categoryIndex}>
              <motion.h3 
                className="text-2xl md:text-3xl font-semibold mb-6 text-white"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false, amount: 0.3 }}
                transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
              >
                {category.title}
              </motion.h3>
              <motion.ul 
                className="space-y-4"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.3 }}
              >
                {category.items.map((item, itemIndex) => (
                  <motion.li
                    key={itemIndex}
                    variants={itemVariants}
                    className="flex items-start group cursor-pointer"
                    whileHover={{ x: 5, transition: { duration: 0.2 } }}
                  >
                    <span className="text-[#a1eafb] mr-3 text-xl">•</span>
                    <span className="text-gray-200 text-xl group-hover:text-white transition-colors">
                      {item}
                    </span>
                  </motion.li>
                ))}
              </motion.ul>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
