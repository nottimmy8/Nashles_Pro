import React, { useState } from "react";
import { motion } from "framer-motion";
import Complimentxt from "./Complimentxt";
import Cursor from "./Cursor";

const Hero = () => {
  const [scaling, setScaling] = useState(false);

  const handleMouseEnter = () => {
    setScaling(true);
  };

  const handleMouseLeave = () => {
    setScaling(false);
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <div className="  w-full flex flex-col items-center justify-center ">
      <Cursor scale={scaling} />
      {/* Text Content */}
      <div className="text-center">
        <h1
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          variants={itemVariants}
          className="text-white text-4xl  mb-4 md:text-6xl lg:text-8xl font-bold text-center"
        >
          Timilehin Oyewole
        </h1>
        <div
          variants={itemVariants}
          className="text-2xl text-white md:text-3xl mb-6"
        >
          <span>I’m a Front-End Developer </span>
        </div>
        {/* Subheadline */}
        <motion.p
          className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto"
          variants={itemVariants}
        >
          Specializing in React, Tailwind, and crafting pixel-perfect interfaces
          that bring ideas to life—one line of code at a time.
        </motion.p>
      </div>
    </div>
  );
};

export default Hero;

{
  /* <div className="absolute bottom-8">
        <Complimentxt />
      </div> */
}
