// src/components/Skills.jsx
import React from 'react';
import { motion } from 'framer-motion';

const Skills = () => {
  const skillCategories = [
    {
      title: "Languages",
      items: [
        "JavaScript / TypeScript",
        "Python",
        "Java",
        "HTML5 / CSS3",
        "SQL",
        "GraphQL"
      ]
    },
    {
      title: "Frameworks & Tools",
      items: [
        "React / Next.js",
        "Node.js / Express",
        "Vue.js",
        "MongoDB / PostgreSQL",
        "Docker / Kubernetes",
        "AWS / Google Cloud"
      ]
    },
    {
      title: "Core Concepts",
      items: [
        "RESTful APIs",
        "Microservices",
        "CI/CD",
        "Test-Driven Development",
        "Agile / Scrum",
        "System Design"
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
    hidden: { 
      opacity: 0, 
      y: 20 
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="skills" className="min-h-screen flex items-center bg-gray-50">
      <div className="container mx-auto px-4 py-20">
        <motion.h2 
          className="text-4xl md:text-5xl font-bold text-center mb-16"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          Skills
        </motion.h2>
        
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
        >
          {skillCategories.map((category, categoryIndex) => (
            <div key={categoryIndex}>
              <motion.h3 
                className="text-xl font-semibold mb-4 text-gray-800"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false, amount: 0.3 }}
                transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
              >
                {category.title}
              </motion.h3>
              <motion.ul 
                className="space-y-2"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.3 }}
              >
                {category.items.map((item, itemIndex) => (
                  <motion.li
                    key={itemIndex}
                    variants={itemVariants}
                    className="text-gray-700 flex items-start group cursor-pointer"
                    whileHover={{ x: 5, transition: { duration: 0.2 } }}
                  >
                    <span className="text-blue-500 mr-2 group-hover:text-blue-600 transition-colors">•</span>
                    <span className="group-hover:text-gray-900 transition-colors">{item}</span>
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