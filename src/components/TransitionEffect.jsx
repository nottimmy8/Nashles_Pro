import React from "react";
import { motion } from "framer-motion";

const TransitionEffect = () => {
  return (
    <div>
      {/* First layer */}
      <motion.div
        className="fixed left-0 right-0 bottom-full w-screen h-screen z-30 bg-[#CD505A]"
        initial={{ y: "100%", height: "100%" }}
        animate={{ y: "0%", height: "0%" }}
        exit={{ y: ["0%", "-100%"], height: ["0%", "100%"] }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
      ></motion.div>

      {/* Second layer */}
      {/* <motion.div
        className="fixed left-0 right-0 bottom-full w-screen h-screen z-20 bg-[#14CF93]"
        initial={{ y: "100%", height: "100%" }}
        animate={{ y: "0%", height: "0%" }}
        transition={{
          delay: 0.2,
          duration: 0.8,
          ease: "easeInOut",
        }}
      ></motion.div> */}

      {/* Third layer */}
      {/* <motion.div
        className="fixed left-0 right-0 bottom-full w-screen h-screen z-10 bg-[#CD505A]"
        initial={{ y: "100%", height: "100%" }}
        animate={{ y: "0%", height: "0%" }}
        transition={{
          delay: 0.4,
          duration: 0.8,
          ease: "easeInOut",
        }}
      ></motion.div> */}
    </div>
  );
};

export default TransitionEffect;
