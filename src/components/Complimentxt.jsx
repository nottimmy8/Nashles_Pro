import React from "react";
import { motion } from "framer-motion";

const Complimentxt = () => {
  const textLines = [
    "I approach every project with",
    "wonder fueled by a boundless",
    "spirit of inquisitiveness.",
  ];

  return (
    <div className=" ">
      <motion.h1 className="text-[#0E0F14] text-xl font-light font-family flex flex-col text-center">
        {textLines.map((line, index) => (
          <motion.span
            key={index}
            initial={{ y: "100%", opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: index * 0.3 }}
          >
            {line}
          </motion.span>
        ))}
      </motion.h1>
    </div>
  );
};

export default Complimentxt;
