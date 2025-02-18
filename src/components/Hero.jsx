import React from "react";
import lapp from "../assets/lappp.png";
const Hero = () => {
  return (
    <div className=" bg-[#0e0e0e] w-full min-h-screen  ">
      <div className=" max-w-7xl  mx-auto p-4 flex  justify-between items-center   pt-14 ">
        <div className=" text-lightGray  text-center ">
          <h1 className="overflow-hidden z-50 flex flex-col text-5xl sm:text-8xl">
            <span className="font-bold">OYEWOLE</span>
            <span className="md:flex md:gap-1">
              <span className="text-lg flex items-center font-medium gap-2">
                <div className="w-20 h-1 bg-lightGray"></div> nashles
              </span>
              <span className="font-bold">EMMANUEL</span>
            </span>
          </h1>
        </div>
        <div className="w-[500px] h-[500px] ">
          <img src={lapp} alt="" className=" w-full h-full object-cover" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
