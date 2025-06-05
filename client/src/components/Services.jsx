// src/components/Services.jsx
import React, { useRef, useState, useEffect } from 'react';
import { motion, useReducedMotion } from 'framer-motion';

const Services = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const cardRefs = useRef([]);

  const services = [
    {
      number: "(01)",
      title: "Machine Learning & AI Development",
      description:
        "I build intelligent systems like AI chatbots, fall detection models, and handwriting recognition apps. My focus is on applying deep learning, NLP, and classical ML to solve real-world business problems.",
      points: [
        "Developed Intelligent Character Recognition (ICR) system with 98.9% accuracy (EXL)",
        "Designed AI chatbot using BERT and spaCy to handle IT queries (DXC Technology)",
        "Built fall & object detection system using YOLO NAS (DYP University)",
        "Deployed ICR-based ML backend for form processing in banking & insurance",
      ],
    },
    {
      number: "(02)",
      title: "Data Engineering & ETL Pipelines",
      description:
        "I design automated, scalable data pipelines to power analytics and machine learning. My expertise includes data orchestration, transformation, and workflow automation using modern tools.",
      points: [
        "Built ETL pipeline using Apache Airflow, PySpark, and AWS (S3/Redshift)",
        "Migrated 1TB+ data using GCP Dataflow & Snowflake; optimized query performance",
        "Created CI/CD and continuous testing pipeline with unit tests for ML backend (EXL)",
        "Automated data workflows for real-time alerts on NEFT/RTGS failures (DXC)",
      ],
    },
    {
      number: "(03)",
      title: "Backend & Full-Stack Development",
      description:
        "From robust APIs to real-time monitoring systems, I develop backend solutions that are secure, scalable, and production-ready. I've worked with cross-functional teams to deploy full-stack web apps end-to-end.",
      points: [
        "Developed full-stack web application with backend in Python for ICR (EXL)",
        "Created an e-banking dashboard with live refresh & SMS alerts (DXC)",
        "Architected relational database for ride-share platform with ACID compliance",
        "Integrated frontend/backend with HTML, CSS, JS, and responsive UI design",
      ],
    },
  ];

  useEffect(() => {
    const observers = [];

    cardRefs.current.forEach((card, index) => {
      if (card) {
        const observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting && entry.intersectionRatio >= 0.6) {
                setActiveIndex(index);
              }
            });
          },
          {
            threshold: [0.6],
            rootMargin: '0px',
          }
        );

        observer.observe(card);
        observers.push(observer);
      }
    });

    return () => {
      observers.forEach((obs) => obs.disconnect());
    };
  }, []);

  const addToRefs = (el) => {
    if (el && !cardRefs.current.includes(el)) {
      cardRefs.current.push(el);
    }
  };

  const prefersReduced = useReducedMotion();

  const headingVariant = {
    hidden: { opacity: 0, y: -20, transition: { duration: 0.6, ease: 'easeOut' } },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  };

  const cardVariant = {
    hidden: { opacity: 0, y: 20, transition: { duration: 0.6, ease: 'easeOut' } },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  };

  return (
    <section
      id="services"
      className="bg-gradient-to-r from-[#1b0332] to-[#0b0028] text-white min-h-screen"
    >
      <motion.div
        className="container mx-auto px-8 pt-20 pb-10"
        variants={headingVariant}
        initial={prefersReduced ? 'visible' : 'hidden'}
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
      >
        <h2 className="text-5xl sm:text-6xl md:text-7xl font-bold">WHAT I DO /</h2>
      </motion.div>

      <div className="container mx-auto px-8">
        <div className="flex gap-16">
          <div className="hidden md:block w-1/4 sticky top-40 h-fit">
            <div className="space-y-6">
              {services.map((service, index) => (
                <h3
                  key={index}
                  className={`text-2xl sm:text-3xl font-normal transition-all duration-300 cursor-pointer ${
                    activeIndex === index
                      ? 'text-white'
                      : 'text-gray-400 hover:text-gray-200'
                  }`}
                  onClick={() => {
                    cardRefs.current[index]?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  {service.title}
                </h3>
              ))}
            </div>
          </div>

          <div className="w-full md:w-3/4 space-y-20">
            {services.map((service, index) => (
              <motion.div
                key={index}
                ref={addToRefs}
                className="min-h-screen py-20 relative"
                variants={cardVariant}
                initial={prefersReduced ? 'visible' : 'hidden'}
                whileInView="visible"
                viewport={{ once: false, amount: 0.3 }}
                transition={{ delay: index * 0.2 }}
              >
                <div className="absolute top-20 right-0 text-[180px] font-bold text-gray-800 select-none pointer-events-none">
                  {service.number}
                </div>

                <div className={`relative z-10 ${activeIndex !== index ? 'pointer-events-none' : ''}`}>
                  <h3 className="md:hidden text-3xl sm:text-4xl font-medium mb-8 text-white">
                    {service.title}
                  </h3>

                  <p className="text-lg sm:text-xl text-gray-200 leading-relaxed max-w-2xl mb-12">
                    {service.description}
                  </p>

                  <div className="space-y-6">
                    {service.points.map((point, pointIndex) => (
                      <div key={pointIndex} className="flex items-start gap-6">
                        <span className="text-gray-500 text-base sm:text-lg font-mono">
                          0{pointIndex + 1}
                        </span>
                        <span className="text-gray-300 text-base sm:text-lg">{point}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
