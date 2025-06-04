// src/components/Hero.jsx
import React, { useRef, useEffect } from "react";
import { motion, useInView, useAnimation } from "framer-motion";

const Hero = () => {
  // 1) Container variant to stagger children
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        when: "beforeChildren",
      },
    },
  };

  // 2) Heading slides in from left
  const headingVariant = {
    hidden: { x: -100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  // 3) Subtitle fades in
  const subtitleVariant = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  // 4) Button pops in (scale + fade)
  const buttonVariant = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  // 5) Image card scales up + fades in
  const imageVariant = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  // 6) Badge slides up + fades in/out
  const badgeVariant = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  // Set up in-view detection for the entire hero section
  const ref = useRef(null);
  const inView = useInView(ref, { amount: 0.5, once: false });
  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [inView, controls]);

  return (
    <section
      id="hero"
      ref={ref}
      className="min-h-screen
                 bg-gradient-to-r from-[#2e0854] to-[#191970]
                 text-white text-base text-justify
                 flex items-center pt-16"
      /* 
        - pt-16 ensures content sits below the fixed Navbar (64px). 
      */
    >
      <motion.div
        className="container mx-auto px-6 lg:px-8 flex flex-col lg:flex-row items-center"
        variants={containerVariants}
        initial="hidden"
        animate={controls}
      >
        {/* LEFT SIDE: Big heading, subtitle, button */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center">
          <motion.h1
            className="text-6xl lg:text-7xl font-extrabold leading-tight"
            variants={headingVariant}
          >
            Your Name
          </motion.h1>

          <motion.p className="mt-8 max-w-lg" variants={subtitleVariant}>
            Open to job opportunities worldwide.
            <br />
            Passionate about building polished, intuitive, and thoughtful
            digital experiences that leave a mark.
          </motion.p>

          <motion.div className="mt-10" variants={buttonVariant}>
            <a
              href="#contact"
              className="inline-block bg-white text-[#2e0854] py-3 px-6 
                         rounded-full text-base font-medium hover:bg-gray-100 
                         transition"
            >
              Contact →
            </a>
          </motion.div>
        </div>

        {/* RIGHT SIDE: Hero image */}
        <div className="w-full lg:w-1/2 mt-12 lg:mt-0 flex justify-center">
          <motion.div
            className="max-w-md w-full rounded-lg overflow-hidden shadow-lg"
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

      {/* “Available for work” badge (bottom-right) */}
      <motion.div
        className="absolute bottom-8 right-8 text-right"
        variants={badgeVariant}
        initial="hidden"
        animate={controls}
      >
        <p className="text-sm uppercase tracking-widest">Available for work</p>
        <p className="mt-1 text-4xl lg:text-5xl font-bold">Jun ’25</p>
      </motion.div>
    </section>
  );
};

export default Hero;
