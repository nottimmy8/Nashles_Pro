import React from "react";
import herogif from "../assets/herogif.gif";

const Preloader = () => {
  return (
    <div className="w-full h-screen bg-black flex justify-center items-center relative">
      {/* loader-content */}
      <div className=" transform -translate-x-1/2 -translate-y-1/2 text-center z-10">
        {/* count */}
        <div className=" grid grid-cols-1">
          <span className="text-white text-5xl">0</span>

          <span className="text-white  text-7xl mt-10">Nashles</span>
        </div>
      </div>
      {/* loader-2 */}
      <div className="-z-10 ">
        <img src={herogif} alt="" />
      </div>
    </div>
  );
};

export default Preloader;
