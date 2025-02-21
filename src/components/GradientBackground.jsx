import React from "react";
import { motion } from "framer-motion";

const GradientBackground = ({ children }) => {
  // Animation variants for the gradient
  const gradientVariants = {
    animate: {
      backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
      transition: {
        duration: 10, // Adjust speed of animation
        ease: "linear",
        repeat: Infinity, // Loop indefinitely
      },
    },
  };

  return (
    <motion.div
      className="absolute inset-0 h-screen w-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-[length:400%_400%]"
      variants={gradientVariants}
      animate="animate"
    >
      {children} {/* Content of your landing page goes here */}
    </motion.div>
  );
};

export default GradientBackground;
