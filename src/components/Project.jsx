import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Cursor from "./Cursor";

const Project = () => {
  // mouse effect
  const [scaling, setScaling] = useState(false);

  const handleMouseEnter = () => {
    setScaling(true);
  };

  const handleMouseLeave = () => {
    setScaling(false);
  };

  // header effect
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
  return (
    <div className="w-full bg-[#0e0e0e]   py-12">
      <Cursor scale={scaling} />
      <div className="max-w-7xl mx-auto p-4 relative text-center flex flex-col items-center justify-center">
        <h1
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          className="font-family inline-block font-bold text-[160px] absolute -top-20 text-center z-40 text-white"
        >
          <motion.span
            className="inline-block"
            animate={{ y: scrollY > 50 ? -30 : 0 }}
            transition={{ type: "spring", stiffness: 100 }}
          >
            PRO
          </motion.span>
          <motion.span
            className="inline-block"
            animate={{ y: scrollY > 50 ? 30 : 0 }}
            transition={{ type: "spring", stiffness: 100 }}
          >
            JECT
          </motion.span>
        </h1>
        <div className="w-full h-[200vh]"></div>
      </div>
    </div>
  );
};

export default Project;
