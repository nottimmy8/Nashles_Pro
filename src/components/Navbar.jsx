import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const navVariants = {
    hidden: { y: "-100%", opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: "easeInOut" },
    },
    exit: {
      y: "-100%",
      opacity: 0,
      transition: { duration: 0.9, ease: "easeInOut" },
    },
  };

  const menuItems = ["HOME", "ABOUT", "PROJECT", "CONTACT"];

  return (
    <div className="bg-transparent text-[#0E0F14] z-50 fixed w-full">
      <nav className="max-w-7xl mx-auto">
        {/* Desktop Nav */}
        <div className="">
          <div className="flex items-center justify-between text-[#0E0F14] p-4">
            {/* Logo Text */}
            <motion.h1
              initial={{ y: "100%", opacity: 0 }}
              animate={{ y: "0%", opacity: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="font-family font-bold text-3xl"
            >
              Nashles
            </motion.h1>

            {/* Menu Button */}
            <div onClick={() => setNav(true)} className="cursor-pointer">
              <motion.h2
                initial={{ y: "100%", opacity: 0 }}
                animate={{ y: "0%", opacity: 1 }}
                transition={{ duration: 1, ease: "easeOut" }}
                className="font-family font-bold text-2xl "
              >
                MENU
              </motion.h2>
            </div>
          </div>
        </div>

        {/* Mobile Nav */}
        <AnimatePresence>
          {nav && (
            <motion.div
              key="mobile-nav"
              className="fixed left-0 top-0 w-full h-[400px] z-[1000] text-[#F1F0EB] bg-[#1C1D1D] p-4"
              variants={navVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <motion.div className="flex justify-between items-start">
                {/* Name */}
                <motion.h1
                  initial={{ y: "100%", opacity: 0 }}
                  animate={{ y: "0%", opacity: 1 }}
                  transition={{
                    duration: 0.6,
                    ease: "easeOut",
                    delay: 0.5,
                    speed: "0.2",
                  }}
                  className="font-bold font-family text-2xl"
                >
                  Oyewole Emmanuel <br /> Nashles
                </motion.h1>

                <div>
                  {/* Navigation Links */}
                  <ul className="flex flex-col items-center font-bold text-[60px] leading-14">
                    {menuItems.map((item, index) => (
                      <motion.li
                        key={item}
                        initial={{ y: "100%", opacity: 0 }}
                        animate={{ y: "0%", opacity: 1 }}
                        transition={{
                          duration: 0.6,
                          ease: "easeOut",
                          speed: "0.2",
                          delay: index * 0.2,
                        }}
                      >
                        <Link
                          to={`/${item.toLowerCase()}`}
                          onClick={() => setNav(false)}
                        >
                          {item}
                        </Link>
                      </motion.li>
                    ))}
                  </ul>

                  {/* Social Links */}
                  <motion.div className="mt-14 flex gap-5">
                    {["LinkedIn", "Threads", "X (Twitter)"].map(
                      (platform, index) => (
                        <motion.h1
                          key={platform}
                          initial={{ y: "100%", opacity: 0 }}
                          animate={{ y: "0%", opacity: 1 }}
                          transition={{
                            duration: 0.6,
                            ease: "easeOut",
                            delay: index * 0.4,
                          }}
                          className="font-bold font-family text-2xl"
                        >
                          {platform}
                        </motion.h1>
                      )
                    )}
                  </motion.div>
                </div>
                {/* Close Button */}
                <div onClick={() => setNav(false)} className="cursor-pointer">
                  <h2 className="font-family font-bold text-2xl text-[#F1F0EB]">
                    CLOSE
                  </h2>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </div>
  );
};

export default Navbar;
