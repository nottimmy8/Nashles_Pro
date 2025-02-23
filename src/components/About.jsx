import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Cursor from "./Cursor";

const About = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  // framer
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };
  return (
    <div className="w-full bg-[#0e0e0e]  py-12">
      <Cursor />
      <div className="max-w-7xl mx-auto p-4 relative text-center flex flex-col items-center justify-center">
        <h1 className="font-family inline-block font-bold text-[160px] absolute -top-20 text-center text-white z-40">
          <motion.span
            className="inline-block"
            animate={{ y: scrollY > 50 ? -30 : 0 }}
            transition={{ type: "spring", stiffness: 100 }}
          >
            AB
          </motion.span>
          <motion.span
            className="inline-block"
            animate={{ y: scrollY > 50 ? 30 : 0 }}
            transition={{ type: "spring", stiffness: 100 }}
          >
            OUT
          </motion.span>
        </h1>
        {/*  */}
        <div className="w-full min-h-screen flex flex-col items-center justify-center py-16">
          <motion.div
            className="max-w-3xl h-[400px] text-white px-6"
            initial="hidden"
            animate="visible"
            variants={{
              visible: { transition: { staggerChildren: 0.2 } },
            }}
          >
            {/* Headline */}
            <motion.h1
              className="text-5xl md:text-6xl font-bold mb-6 text-center"
              variants={fadeInUp}
            >
              Hey, I’m Timilehin
            </motion.h1>

            {/* Intro */}
            <motion.p
              className="text-lg md:text-xl text-gray-300 mb-8 text-center"
              variants={fadeInUp}
            >
              I’m a front-end developer who turns ideas into interactive,
              beautiful web experiences with React, Tailwind, and a sprinkle of
              creativity. Coding’s my craft, and I’m here to build something
              extraordinary with you.
            </motion.p>
          </motion.div>
          {/*  */}
        </div>
      </div>
    </div>
  );
};

export default About;

{
  /* CTA */
}
//  <motion.div className="text-center" variants={fadeInUp}>
//  <a
//    href="mailto:oyewoletimilehin2@gmail.com"
//    className="inline-block border-2 border-white text-white rounded-lg py-3 px-6 text-lg hover:bg-white hover:text-black transition-all"
//  >
//    Let’s Build Something Epic
//  </a>
// </motion.div>
