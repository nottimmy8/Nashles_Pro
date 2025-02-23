import { motion } from "framer-motion";
import { Link } from "react-router-dom"; // Assuming react-router-dom

const HeroPage = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.8, ease: "easeOut", staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  // Word cycle animation for dynamic tagline
  const taglineWords = ["Engineer", "Creator", "Innovator"];
  const wordVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    exit: { opacity: 0, y: -20, transition: { duration: 0.5 } },
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-900 via-gray-900 to-black text-white overflow-hidden">
      <motion.div
        className="text-center px-6 max-w-4xl"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Headline */}
        <motion.h1
          className="text-5xl md:text-7xl font-bold mb-4 tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500"
          variants={itemVariants}
        >
          Timilehin Oyewole
        </motion.h1>

        {/* Dynamic Tagline */}
        <motion.div
          className="text-2xl md:text-3xl mb-6"
          variants={itemVariants}
        >
          <span>I’m a Front-End </span>
          <motion.span
            className="inline-block font-semibold text-indigo-400"
            key={taglineWords[0]} // Replace with logic for cycling words
            variants={wordVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            {taglineWords[0]}
          </motion.span>
        </motion.div>

        {/* Subheadline */}
        <motion.p
          className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto"
          variants={itemVariants}
        >
          Specializing in React, Tailwind, and crafting pixel-perfect interfaces
          that bring ideas to life—one line of code at a time.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          className="flex justify-center gap-4"
          variants={itemVariants}
        >
          <Link
            to="/portfolio"
            className="border-2 border-white rounded-lg py-3 px-6 text-lg hover:bg-white hover:text-black transition-all"
          >
            See My Work
          </Link>
          <Link
            to="/contact"
            className="bg-indigo-600 rounded-lg py-3 px-6 text-lg hover:bg-indigo-700 transition-all"
          >
            Let’s Talk
          </Link>
        </motion.div>

        {/* Quirky Bit */}
        <motion.p
          className="mt-6 text-gray-400 text-sm"
          variants={itemVariants}
        >
          Powered by coffee, code, and a love for clean UX. 🚀
        </motion.p>
      </motion.div>
    </div>
  );
};

export default HeroPage;
