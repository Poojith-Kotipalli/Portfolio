// src/components/Services.jsx
import React, { useRef, useState, useEffect } from 'react';
import { motion, useReducedMotion } from 'framer-motion';

const Services = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const cardRefs = useRef([]);

  const services = [
    {
      number: "(01)",
      title: "Full-Stack Development",
      description:
        "From frontend interactions to backend APIs, I build complete web solutions. I work with modern stacks to deliver apps that are scalable, maintainable, and ready for real-world users.",
      points: [
        "React, Node.js, Express.js",
        "REST APIs, Firebase, Docker",
        "Git, GitHub, Postman",
      ],
    },
    {
      number: "(02)",
      title: "UI/UX & Frontend",
      description:
        "Design is more than looks — it's about clarity and connection. I design and develop clean, responsive interfaces that feel intuitive across devices. My focus is on clarity, accessibility, and seamless user experiences.",
      points: [
        "Next.js, TailwindCSS, GSAP",
        "Figma to Code",
        "HTML, CSS, JavaScript",
      ],
    },
    {
      number: "(03)",
      title: "Optimization",
      description:
        "Beyond handling data, I'm driven by the challenge of turning complex raw inputs into reliable, usable systems. I enjoy designing pipelines that power insights and apply core CS principles to build for scale, speed, and stability.",
      points: [
        "Data Structures & Algorithms",
        "DBMS, OOP, OS Fundamentals",
        "Data Pipelines, ETL, and Scalability",
      ],
    },
  ];

  // IntersectionObserver logic to highlight the active card
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

  // Check for reduced‐motion preference
  const prefersReduced = useReducedMotion();

  // Variants for fade‐in/fade‐out
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
      {/* Main heading */}
      <motion.div
        className="container mx-auto px-8 pt-20 pb-10"
        variants={headingVariant}
        initial={prefersReduced ? 'visible' : 'hidden'}
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
      >
        <h2 className="text-5xl sm:text-6xl md:text-7xl font-bold">WHAT I DO /</h2>
      </motion.div>

      {/* Content area */}
      <div className="container mx-auto px-8">
        <div className="flex gap-16">
          {/* Left sidebar - Service titles */}
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

          {/* Right content area */}
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
                {/* Large background number */}
                <div className="absolute top-20 right-0 text-[180px] font-bold text-gray-800 select-none pointer-events-none">
                  {service.number}
                </div>

                {/* Content */}
                <div className={`relative z-10 ${activeIndex !== index ? 'pointer-events-none' : ''}`}>
                  {/* Mobile title */}
                  <h3 className="md:hidden text-3xl sm:text-4xl font-medium mb-8 text-white">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-lg sm:text-xl text-gray-200 leading-relaxed max-w-2xl mb-12">
                    {service.description}
                  </p>

                  {/* Service points */}
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
