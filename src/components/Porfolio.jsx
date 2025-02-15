import React from "react";
import { motion } from "framer-motion";

const Porfolio = () => {
  return (
    <div>
      <div className="min-h-screen bg-gray-900 text-white p-6 flex flex-col items-center">
        <motion.h1
          className="text-5xl font-bold mt-10"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Welcome to My Portfolio
        </motion.h1>

        <motion.p
          className="mt-4 text-gray-400 max-w-xl text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          Showcasing my projects, skills, and experience with a sleek and modern
          design.
        </motion.p>
      </div>
    </div>
  );
};

export default Porfolio;
