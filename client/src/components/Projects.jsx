// src/components/Projects.jsx

import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Replace with your actual project images later
import projectImage1 from "../images/home.jpg";

const projects = [
  {
    title: "Automated ETL Pipeline with AWS & Airflow",
    description:
      "Built a scalable ETL pipeline using PySpark and Apache Airflow to ingest and validate US immigration and airport data. Automated daily workflows with AWS S3 and Redshift.",
    link: "#",
    imgAlt: "ETL Pipeline Project",
    imgSrc: projectImage1,
  },
  {
    title: "Data Streaming with Kafka and PySpark",
    description:
      "Developed a real-time fraud detection system using Apache Kafka and PySpark. Visualized streaming data with Tableau and Power BI, reducing response time for anomaly detection.",
    link: "#",
    imgAlt: "Real-time Streaming Project",
    imgSrc: projectImage1,
  },
  {
    title: "AI Chatbot for Internal IT Queries",
    description:
      "Designed a BERT-based NLP chatbot to automate IT ticket resolution at DXC Technology. Deployed at Bank of India’s data center and reduced helpdesk load by 30%.",
    link: "#",
    imgAlt: "Chatbot Project",
    imgSrc: projectImage1,
  },
  {
    title: "Preventing Accidents: Object & Fall Detection",
    description:
      "Implemented YOLO NAS for fall and object detection in industrial settings. Achieved 98% recall on diverse datasets and deployed for real-time safety monitoring.",
    link: "#",
    imgAlt: "Fall Detection Project",
    imgSrc: projectImage1,
  },
  {
    title: "Ride Share: Cab Booking Database",
    description:
      "Designed a relational database system for 100K+ users, drivers, and rides. Ensured ACID compliance and optimized ride-matching SQL queries.",
    link: "#",
    imgAlt: "Cab Booking Project",
    imgSrc: projectImage1,
  },
  {
    title: "Scalable Data Processing with Snowflake & GCP",
    description:
      "Migrated 1TB+ of retail data using GCP Dataflow to Snowflake and created dashboards with Looker Studio. Enabled near real-time analytics and improved query efficiency.",
    link: "#",
    imgAlt: "Snowflake GCP Project",
    imgSrc: projectImage1,
  },
  {
    title: "NYC Taxi Fare Prediction",
    description:
      "Trained a Random Forest model (MAE: 1.78) on over 1M records to accurately predict taxi fares. Focused on data cleaning and regression tuning.",
    link: "#",
    imgAlt: "Taxi Fare Prediction",
    imgSrc: projectImage1,
  },
  {
    title: "AI Music Composer",
    description:
      "Built a Python-based algorithm that analyzes MIDI patterns to generate original music. Explored creative applications of machine learning in sound design.",
    link: "#",
    imgAlt: "AI Music Project",
    imgSrc: projectImage1,
  },
];

function formatIndex(idx) {
  return String(idx + 1).padStart(2, "0");
}

export default function Projects() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const projectRefs = useRef([]);

  // Ensure the number of refs matches the number of projects
  useEffect(() => {
    projectRefs.current = projectRefs.current.slice(0, projects.length);
  }, [projects.length]);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5,
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const idx = Number(entry.target.getAttribute("data-index"));
          setCurrentIndex(idx);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, options);

    projectRefs.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => {
      projectRefs.current.forEach((el) => {
        if (el) observer.unobserve(el);
      });
    };
  }, []);

  const [prevFormatted, setPrevFormatted] = useState(formatIndex(0));
  const formatted = formatIndex(currentIndex);

  useEffect(() => {
    setPrevFormatted((prev) => {
      if (prev !== formatted) return prev;
      return prev;
    });
  }, [formatted]);

  const flipIn = {
    initial: { rotateX: -90, opacity: 0 },
    animate: { rotateX: 0, opacity: 1, transition: { duration: 0.5, ease: "easeOut" } },
    exit: { rotateX: 90, opacity: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  return (
    <section
      id="projects"
      className="min-h-screen bg-gradient-to-r from-[#1e053a] to-[#0f0033] text-white text-lg text-justify py-20"
    >
      <h2 className="text-5xl md:text-6xl font-bold text-center mb-12">Projects</h2>

      <div className="flex">
        {/* LEFT COLUMN – Project Number */}
        <div className="hidden md:flex w-1/4 h-screen sticky top-0 items-center justify-center">
          <div className="flex space-x-2">
            {formatted.split("").map((digit, pos) => {
              const prevDigit = prevFormatted[pos] || "";
              const key = `${digit}-${pos}`;
              if (digit !== prevDigit) {
                return (
                  <AnimatePresence mode="wait" key={pos}>
                    <motion.span
                      key={key}
                      initial={flipIn.initial}
                      animate={flipIn.animate}
                      exit={flipIn.exit}
                      className="text-[120px] font-extrabold block"
                    >
                      {digit}
                    </motion.span>
                  </AnimatePresence>
                );
              } else {
                return (
                  <span key={digit + pos} className="text-[120px] font-extrabold block">
                    {digit}
                  </span>
                );
              }
            })}
          </div>
        </div>

        {/* RIGHT COLUMN – Project Cards */}
        <div className="w-full md:w-3/4">
          {projects.map((proj, idx) => (
            <motion.div
              key={proj.title}
              data-index={idx}
              ref={(el) => (projectRefs.current[idx] = el)}
              className="mx-auto w-full md:w-[90%] h-screen my-8 bg-[#3a0f5b]/50 border border-white/20 rounded-lg overflow-hidden shadow-lg flex flex-col"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              viewport={{ once: false, amount: 0.5 }}
            >
              <div className="h-2/5 w-full">
                <img
                  src={proj.imgSrc}
                  alt={proj.imgAlt}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="p-8 flex-1 flex flex-col justify-center">
                <h3 className="text-3xl md:text-4xl font-semibold mb-6">{proj.title}</h3>
                <p className="text-gray-200 mb-8 leading-relaxed">{proj.description}</p>
                <a
                  href={proj.link}
                  className="text-[#a1eafb] text-xl hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Project →
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
