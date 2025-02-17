import React from "react";

const Hero = () => {
  return (
    <div className=" bg-black w-full h-screen  ">
      <div className=" max-w-6xl  mx-auto p-4   relative ">
        <div className=" text-lightGray  absolute top-36">
          <h1 className="overflow-hidden z-50 flex flex-col text-5xl sm:text-8xl">
            <span className="font-bold">OYEWOLE</span>
            <span className="md:flex md:gap-1 items-center justify-center">
              <span className="text-lg flex items-center font-medium gap-2">
                <div className="w-20 h-1 bg-lightGray" aria-hidden="true"></div>{" "}
                nashles
              </span>
              <span className="font-bold">EMMANUEL</span>
            </span>
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Hero;
