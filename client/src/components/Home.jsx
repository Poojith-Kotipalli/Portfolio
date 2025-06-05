// src/components/Hero.jsx
import React, { useRef, useEffect } from "react";
import { motion, useInView, useAnimation, useReducedMotion } from "framer-motion";

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0, transition: { duration: 0.8, ease: "easeOut" } },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        when: "beforeChildren",
      },
    },
  };

  const headingVariant = {
    hidden: { x: -100, opacity: 0, transition: { duration: 0.8, ease: "easeOut" } },
    visible: { x: 0, opacity: 1, transition: { duration: 0.8, ease: "easeOut" } },
  };

  const subtitleVariant = {
    hidden: { opacity: 0, transition: { duration: 0.8, ease: "easeOut" } },
    visible: { opacity: 1, transition: { duration: 0.8, ease: "easeOut" } },
  };

  const buttonVariant = {
    hidden: { scale: 0.8, opacity: 0, transition: { duration: 0.6, ease: "easeOut" } },
    visible: { scale: 1, opacity: 1, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const imageVariant = {
    hidden: { scale: 0.8, opacity: 0, transition: { duration: 0.8, ease: "easeOut" } },
    visible: { scale: 1, opacity: 1, transition: { duration: 0.8, ease: "easeOut" } },
  };

  const prefersReduced = useReducedMotion();
  const ref = useRef(null);
  const inView = useInView(ref, { amount: 0.5, once: false });
  const controls = useAnimation();

  useEffect(() => {
    if (prefersReduced) {
      controls.start("visible");
    } else {
      controls.start(inView ? "visible" : "hidden");
    }
  }, [inView, controls, prefersReduced]);

  return (
    <section
      id="home"
      ref={ref}
      className="
        min-h-screen
        bg-gradient-to-r from-[#2e0854] to-[#191970]
        text-white
        flex items-center
        pt-16
      "
    >
      <motion.div
        className="container mx-auto px-6 lg:px-8 flex flex-col lg:flex-row items-center"
        variants={containerVariants}
        initial={prefersReduced ? "visible" : "hidden"}
        animate={controls}
      >
        {/* LEFT SIDE: Heading and Text */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center">
          <motion.h1
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight"
            variants={headingVariant}
          >
            Poojith Kotipalli
          </motion.h1>

          <motion.p
            className="mt-8 max-w-lg text-base sm:text-lg md:text-xl"
            variants={subtitleVariant}
          >
            Software Engineer | Machine Learning & Data Specialist | MSIS @ Northeastern
            <br /><br />
            I build intelligent systems—from ML-based web apps and chatbots to ETL pipelines and streaming dashboards.
            Passionate about solving real-world problems with scalable technology.
          </motion.p>

          <motion.div className="mt-10" variants={buttonVariant}>
            <a
              href="#contact"
              className="
                inline-block
                bg-white text-[#2e0854]
                px-6 py-3
                rounded-full
                text-base sm:text-lg
                font-medium
                hover:bg-gray-100
                transition-colors
              "
            >
              Contact →
            </a>
          </motion.div>
        </div>

        {/* RIGHT SIDE: Hero image (optional placeholder) */}
        <div className="hidden sm:flex w-full lg:w-1/2 mt-12 lg:mt-0 justify-center">
          <motion.div
            className="max-w-md w-full rounded-lg overflow-hidden shadow-lg will-change-transform"
            variants={imageVariant}
          >
            <img
              src="/hero-image.jpg"
              alt="Hero"
              className="object-cover w-full h-full"
            />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
