import React from "react";
import Complimentxt from "./Complimentxt";

const Hero = () => {
  return (
    <div className=" w-full ">
      {/* Text Content */}
      <div>
        <h1 className="text-[#0E0F14] text-4xl md:text-6xl lg:text-8xl font-bold text-center">
          FRONTEND <br /> DEVELOPER
        </h1>
      </div>
      <div className="absolute bottom-0 right-1/2">
        <Complimentxt />
      </div>
    </div>
  );
};

export default Hero;
