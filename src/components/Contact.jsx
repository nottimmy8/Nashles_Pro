import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { RiTwitterXLine } from "react-icons/ri";
import { FaLinkedin } from "react-icons/fa6";
import { FaGithubSquare } from "react-icons/fa";
import Cursor from "./Cursor";

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

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <div className="w-full bg-[#0e0e0e] h-screen  py-12">
      <Cursor />
      <div className="max-w-7xl mx-auto p-4 relative text-center flex flex-col items-center justify-center">
        <h1 className="font-family inline-block font-bold text text-[160px] absolute -top-20 text-center text-white z-40">
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

        {/*  */}
        <div className="mt-40 w-full    flex flex-col items-center justify-center ">
          <motion.div
            className="text-white text-center max-w-lg px-4"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.h1
              className="text-4xl md:text-5xl font-bold mb-4 tracking-tight"
              variants={itemVariants}
            >
              Let's Connect and Work Together
            </motion.h1>
            <motion.p
              className="text-lg md:text-xl text-gray-300 mb-6"
              variants={itemVariants}
            >
              Looking for a passionate front-end engineer for freelance,
              part-time, or full-time roles? I’d love to hear from you!
            </motion.p>
            <motion.button
              className="border-2 border-white rounded-lg py-3 px-6 text-lg hover:bg-white hover:text-black transition-all duration-300"
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link to="mailto:oyewoletimilehin2@gmail.com">Send an Email</Link>
            </motion.button>
            <motion.p className="mt-6 text-gray-400" variants={itemVariants}>
              Or connect with me on these platforms:
            </motion.p>
            <motion.div
              className="flex justify-center gap-6 mt-4"
              variants={itemVariants}
            >
              {/* Add your social links here */}
              <a
                href="https://linkedin.com/in/yourprofile"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin
                  size={30}
                  className="text-white hover:text-blue-500 transition-colors"
                />
              </a>
              <a
                href="https://github.com/@nottimmy8"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithubSquare
                  size={30}
                  className="text-white hover:text-blue-500 transition-colors"
                />
              </a>
              <a
                href="https://twitter.com/@nottimmy8"
                target="_blank"
                rel="noopener noreferrer"
              >
                <RiTwitterXLine
                  size={30}
                  className="text-white hover:text-blue-400 transition-colors"
                />
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
