import { motion } from "framer-motion";

const Test = () => {
  return (
    <div className="overflow-hidden h-10 flex items-center">
      <motion.div
        className="text-2xl font-bold"
        initial={{ y: "100%" }}
        animate={{ y: "0%" }}
        transition={{
          duration: 1,
          ease: "easeOut",
          repeat: Infinity,
          repeatType: "reverse",
        }}
      >
        Rolling Text Effect
      </motion.div>
      <motion.h1
        className="text-4xl font-bold"
        initial={{ y: "100%", opacity: 0 }}
        animate={{ y: "0%", opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        Revealing Text
      </motion.h1>
    </div>
  );
};

export default Test;
