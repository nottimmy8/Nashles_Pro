import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div className=" bg-secondary w-full h-screen  ">
      <div className=" max-w-6xl  mx-auto p-4   relative ">
        <div className="flex items-center justify-between absolute top-36">
          <h1 className=" overflow-hidden z-50 flex flex-col text-5xl sm:text-8xl mt-20  ">
            <span className="font-bold">OYEWOLE</span>
            <span className="md:flex md:gap-1 overflow-hidden">
              <span className="text-lg text-center flex items-center justify-center  font-medium  gap-1">
                <div className="w-20 h-1"></div> nashles
              </span>
              <span className="font-bold"> EMMANUEL</span>
            </span>
          </h1>
          <div className="w-[480px] h-[480px]  ">
            <motion.img
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              whileDrag={{ scale: 0.9, rotate: 10 }}
              drag
              src="https://cdn.dribbble.com/users/1750819/screenshots/15532561/media/f3ec141c01d058c261324a79c23149c5.jpg"
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
