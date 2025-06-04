// src/components/Services.jsx
import React, { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Services = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRef = useRef(null);
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
      observers.forEach((observer) => observer.disconnect());
    };
  }, []);

  const addToRefs = (el) => {
    if (el && !cardRefs.current.includes(el)) {
      cardRefs.current.push(el);
    }
  };

  return (
    <section
      ref={sectionRef}
      id="services"
      className="bg-gradient-to-r from-[#1e053a] to-[#0f0033] text-white min-h-screen"
    >
      {/* Main heading */}
      <div className="container mx-auto px-8 pt-20 pb-10">
        <h2 className="text-8xl md:text-9xl font-bold">WHAT I DO /</h2>
      </div>

      {/* Content area */}
      <div className="container mx-auto px-8">
        <div className="flex gap-16">
          {/* Left sidebar - Service titles */}
          <div className="hidden md:block w-1/4 sticky top-40 h-fit">
            <div className="space-y-6">
              {services.map((service, index) => (
                <h3
                  key={index}
                  className={`text-2xl font-normal transition-all duration-300 cursor-pointer ${
                    activeIndex === index
                      ? 'text-white'
                      : 'text-gray-400 hover:text-gray-200'
                  }`}
                  onClick={() => {
                    cardRefs.current[index]?.scrollIntoView({
                      behavior: 'smooth',
                    });
                  }}
                >
                  {service.title}
                </h3>
              ))}
            </div>
          </div>

          {/* Right content area */}
          <div className="w-full md:w-3/4">
            {services.map((service, index) => (
              <div
                key={index}
                ref={addToRefs}
                className="min-h-screen py-20 relative"
              >
                {/* Large background number */}
                <div className="absolute top-20 right-0 text-[220px] font-bold text-gray-800 select-none pointer-events-none">
                  {service.number}
                </div>

                {/* Content */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{
                    opacity: activeIndex === index ? 1 : 0,
                    y: activeIndex === index ? 0 : 30,
                  }}
                  transition={{ duration: 0.5, ease: 'easeOut' }}
                  className={`relative z-10 ${
                    activeIndex !== index ? 'pointer-events-none' : ''
                  }`}
                >
                  {/* Mobile title */}
                  <h3 className="md:hidden text-4xl font-medium mb-8">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-xl text-gray-200 leading-relaxed max-w-2xl mb-12">
                    {service.description}
                  </p>

                  {/* Service points */}
                  <div className="space-y-6">
                    {service.points.map((point, pointIndex) => (
                      <div key={pointIndex} className="flex items-start gap-6">
                        <span className="text-gray-500 text-base font-mono">
                          0{pointIndex + 1}
                        </span>
                        <span className="text-gray-300 text-lg">{point}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
