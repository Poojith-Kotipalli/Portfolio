// src/components/Hero.jsx
import React, { useRef, useEffect } from "react";
import { motion, useInView, useAnimation, useReducedMotion } from "framer-motion";

const Hero = () => {
  // 1) Container variant to stagger children (with same duration on exit)
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

  // 2) Heading slides in from left (same duration on exit)
  const headingVariant = {
    hidden: { x: -100, opacity: 0, transition: { duration: 0.8, ease: "easeOut" } },
    visible: { x: 0, opacity: 1, transition: { duration: 0.8, ease: "easeOut" } },
  };

  // 3) Subtitle fades in/out
  const subtitleVariant = {
    hidden: { opacity: 0, transition: { duration: 0.8, ease: "easeOut" } },
    visible: { opacity: 1, transition: { duration: 0.8, ease: "easeOut" } },
  };

  // 4) Button pops in/out (scale + fade)
  const buttonVariant = {
    hidden: { scale: 0.8, opacity: 0, transition: { duration: 0.6, ease: "easeOut" } },
    visible: { scale: 1, opacity: 1, transition: { duration: 0.6, ease: "easeOut" } },
  };

  // 5) Image card scales up + fades in/out
  const imageVariant = {
    hidden: { scale: 0.8, opacity: 0, transition: { duration: 0.8, ease: "easeOut" } },
    visible: { scale: 1, opacity: 1, transition: { duration: 0.8, ease: "easeOut" } },
  };

  // Reduced motion detection
  const prefersReduced = useReducedMotion();

  // In-view detection for the entire hero section
  const ref = useRef(null);
  const inView = useInView(ref, { amount: 0.5, once: false });
  const controls = useAnimation();

  useEffect(() => {
    if (prefersReduced) {
      // If user prefers reduced motion, always show without animation
      controls.start("visible");
    } else {
      if (inView) {
        controls.start("visible");
      } else {
        controls.start("hidden");
      }
    }
  }, [inView, controls, prefersReduced]);

  return (
    <section
      id="hero"
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
        {/* LEFT SIDE: Big heading, subtitle, button */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center">
          <motion.h1
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight"
            variants={headingVariant}
          >
            Your Name
          </motion.h1>

          <motion.p
            className="mt-8 max-w-lg text-base sm:text-lg md:text-xl"
            variants={subtitleVariant}
          >
            Open to job opportunities worldwide.
            <br />
            Passionate about building polished, intuitive, and thoughtful
            digital experiences that leave a mark.
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

        {/* RIGHT SIDE: Hero image; hidden on small screens */}
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

      {/* Badge removed to simplify; re-add if desired */}
    </section>
  );
};

export default Hero;
