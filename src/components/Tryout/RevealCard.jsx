import { motion } from "framer-motion";
import { useState } from "react";

const RevealCard = () => {
  const [isHovered, setIsHovered] = useState(false);

  // Animation variants for circular rotation
  const circleVariants = {
    initial: {
      rotate: 0,
    },
    hover: {
      rotate: 360, // Full rotation
      transition: {
        duration: 2,
        ease: "linear",
        repeat: Infinity, // Continuous rotation while hovered
      },
    },
    exit: {
      rotate: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <div
      className="container"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <motion.div
        className="circle"
        variants={circleVariants}
        initial="initial"
        animate={isHovered ? "hover" : "exit"}
      >
        {/* Text positioned around the circle */}
        <span className="text front">Home</span>
        <span className="text back">Home</span>
      </motion.div>
    </div>
  );
};

export default RevealCard;
