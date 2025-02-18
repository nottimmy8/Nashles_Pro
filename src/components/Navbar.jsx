import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Navbar = () => {
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
      transition: { duration: 0.8, ease: "easeInOut" },
    },
  };
  const [nav, setNav] = useState(false);
  return (
    <div className="bg-[#0e0e0e]  text-black  z-50 fixed w-full">
      <nav className="max-w-7xl mx-auto  ">
        {/* destop nav */}
        <div className="">
          <div className=" flex items-center justify-between text-lightGray p-4 ">
            {/* logo text */}
            <h1 className=" font-family font-bold text-3xl">Nashles</h1>
            {/* menu */}
            <div onClick={() => setNav(true)} className=" cursor-pointer">
              <h2 className="font-family font-bold text-2xl">MENU</h2>
            </div>
          </div>
        </div>
        {/* mobile nav */}
        <div>
          <motion.div
            className="fixed left-0 top-0 w-full h-[400px] z-[1000] text-black bg-white p-4"
            variants={navVariants}
            initial="hidden"
            animate={nav ? "visible" : "hidden"}
            exit="exit"
          >
            {/* menuNav contents */}
            <div className="flex justify-between items-start">
              <div className="">
                <h1 className=" font-bold font-family text-2xl">
                  Oyewole Emmanuel <br />
                  Nasles
                </h1>
              </div>
              {/* Link */}
              <div className="">
                <ul className="flex flex-col items-center font-bold text-[60px] leading-14  ">
                  <li className=" ">
                    <Link to="/" onClick={() => setNav(false)}>
                      {" "}
                      HOME
                    </Link>
                  </li>
                  <li className=" ">
                    <Link to="/about" onClick={() => setNav(false)}>
                      ABOUT
                    </Link>
                  </li>
                  <li className=" ">
                    <Link to="/project" onClick={() => setNav(false)}>
                      {" "}
                      PROJECT
                    </Link>
                  </li>
                  <li className=" ">
                    <Link to="/contact" onClick={() => setNav(false)}>
                      {" "}
                      CONTACT
                    </Link>
                  </li>
                </ul>
                {/* social */}
                <div className="mt-14">
                  <div className=" flex gap-5">
                    <h1 className="font-bold font-family text-2xl">Linkdln</h1>
                    <h1 className="font-bold font-family text-2xl">Threads</h1>
                    <h1 className="font-bold font-family text-2xl">
                      X(Twitter)
                    </h1>
                  </div>
                </div>
              </div>
              {/* closemenu */}
              <div onClick={() => setNav(false)} className=" cursor-pointer">
                <h2 className="font-family font-bold text-2xl text-black">
                  CLOSE
                </h2>
              </div>
            </div>
          </motion.div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
