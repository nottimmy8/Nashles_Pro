import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const Contact = () => {
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
    <div className="w-full bg-[#F1F0EB]  py-12">
      <div className="max-w-7xl mx-auto p-4 relative text-center flex flex-col items-center justify-center">
        <h1 className="font-family inline-block font-bold text-[160px] absolute -top-20 text-center text-[#0E0F14] z-40">
          <motion.span
            className="inline-block"
            animate={{ y: scrollY > 50 ? -30 : 0 }}
            transition={{ type: "spring", stiffness: 100 }}
          >
            CON
          </motion.span>
          <motion.span
            className="inline-block"
            animate={{ y: scrollY > 50 ? 30 : 0 }}
            transition={{ type: "spring", stiffness: 100 }}
          >
            TACT
          </motion.span>
        </h1>
        <div className="w-full h-[200vh]"></div>
      </div>
    </div>
  );
};

export default Contact;
