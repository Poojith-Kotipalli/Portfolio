// Skills.jsx - Skills Section with exact staggered animations
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

  // Container variants for staggered children
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1, // 0.1s delay between each item
        delayChildren: 0
      }
    }
  };

  // Individual item variants
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

  // Flatten all items with their index for staggering
  const allItems = skillCategories.flatMap((category, categoryIndex) =>
    category.items.map((item, itemIndex) => ({
      category: category.title,
      item,
      globalIndex: categoryIndex * 6 + itemIndex // Assuming ~6 items per category
    }))
  );

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Centered Headline */}
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">Skills</h2>
        
        {/* Skills Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }} // Trigger when 30% visible
          className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto"
        >
          {skillCategories.map((category, categoryIndex) => (
            <div key={categoryIndex}>
              <h3 className="text-xl font-semibold mb-4 text-gray-800">
                {category.title}
              </h3>
              <motion.ul 
                className="space-y-2"
                variants={containerVariants}
              >
                {category.items.map((item, itemIndex) => (
                  <motion.li
                    key={itemIndex}
                    variants={itemVariants}
                    className="text-gray-700 flex items-start"
                  >
                    <span className="text-blue-500 mr-2">•</span>
                    <span>{item}</span>
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