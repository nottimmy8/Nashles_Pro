import React from "react";

const Hero = () => {
  return (
    <div className=" bg-black w-full h-screen  ">
      <div className=" max-w-6xl  mx-auto p-4   relative ">
        <div className=" text-lightGray  absolute top-36">
          <h1 className=" overflow-hidden z-50 flex flex-col text-5xl sm:text-8xl mt-20  ">
            <span className="font-bold">OYEWOLE</span>
            <span className="md:flex md:gap-1 overflow-hidden">
              <span className="text-lg text-center flex items-center justify-center  font-medium  gap-1">
                <div className="w-20 h-1"></div> nashles
              </span>
              <span className="font-bold"> EMMANUEL</span>
            </span>
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Hero;
