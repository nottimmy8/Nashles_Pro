import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const Preloader = ({ setLoading }) => {
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000); // Duration of the preloader
  }, [setLoading]);

  return (
    <motion.div
      className="fixed top-0 left-0 w-full h-screen bg-gray-900 flex items-center justify-center z-50"
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ duration: 1, ease: "easeInOut" }}
      exit={{ opacity: 0 }}
    >
      <motion.div
        className="w-16 h-16 border-4 border-gray-300 border-t-transparent rounded-full"
        initial={{ scale: 0.5 }}
        animate={{ scale: 1, rotate: 360 }}
        transition={{
          duration: 1.5,
          ease: "easeInOut",
          repeat: Infinity,
          repeatType: "reverse",
        }}
      />
    </motion.div>
  );
};

export default Preloader;
