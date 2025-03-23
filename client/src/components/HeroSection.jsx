import React from "react";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";

const HeroSection = () => {
  return (
    <section className="flex flex-col items-center justify-center text-center px-6 py-32 min-h-screen bg-gradient-to-r from-blue-500 to-indigo-500 text-white">
      <motion.h1
        className="text-5xl lg:text-7xl font-extrabold leading-tight"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5 }}
      >
        Visual Compiler for Deep Understanding
      </motion.h1>

      <h2 className="text-2xl lg:text-4xl font-semibold mt-4">
        <Typewriter
          words={["Lexical Analysis", "Syntax Checking", "Semantic Analysis", "Code Optimization"]}
          loop={0}
          cursor
          cursorStyle="|"
          typeSpeed={100}
          deleteSpeed={100}
          delaySpeed={2500}
        />
      </h2>

      <motion.p
        className="text-lg lg:text-xl mt-6 max-w-2xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1.5 }}
      >
        Experience the step-by-step compilation process with visualization, making compiler theory easier to understand.
      </motion.p>

      <motion.button
        className="mt-8 px-8 py-3 text-lg font-semibold bg-white text-indigo-600 rounded-full shadow-lg hover:bg-indigo-100 transition-all duration-300"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        <a href="#Compiler">
        Get Started
        </a>
        
      </motion.button>
    </section>
  );
};

export default HeroSection;
