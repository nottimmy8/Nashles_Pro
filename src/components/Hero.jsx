import React from "react";
import Complimentxt from "./Complimentxt";

const Hero = () => {
  return (
    <div className="  w-full flex flex-col items-center justify-center ">
      {/* Text Content */}
      <div>
        <h1 className="text-white text-4xl md:text-6xl lg:text-8xl font-bold text-center">
          FRONTEND <br /> DEVELOPER
        </h1>
      </div>
      <div className="absolute bottom-8">
        <Complimentxt />
      </div>
    </div>
  );
};

export default Hero;
