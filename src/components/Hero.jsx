import Spline from "@splinetool/react-spline";
import React from "react";

const Hero = () => {
  return (
    <div className="relative bg-[#0e0e0e] w-full min-h-screen flex items-center justify-center">
      {/* 3D Model Background */}
      <div className="absolute top-0 left-0 w-full h-full ">
        <Spline scene="https://prod.spline.design/jOFqRv8dG4BHgiyh/scene.splinecode" />
      </div>

      {/* Text Content */}
      <div className=" z-20 text-lightGray text-center md:text-left max-w-7xl w-full px-6">
        <h1 className="text-5xl sm:text-8xl font-bold leading-tight">
          OYEWOLE
          <br />
          <span className="md:flex md:gap-1">
            <span className="text-lg flex items-center font-medium gap-2">
              <div className="w-20 h-1 bg-lightGray"></div> nashles
            </span>
            <span className="font-bold">EMMANUEL</span>
          </span>
        </h1>
      </div>
    </div>
  );
};

export default Hero;
