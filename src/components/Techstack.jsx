import React from "react";

const Techstack = () => {
  return (
    <div className="bg-blue-500 w-full  py-12 px-4">
      <div className="max-w-7xl mx-auto min-h-[100vh]   relative  ">
        {/* cards */}
        <div className="w-[300px] h-[350px]  bg-red-300 rounded-2xl z-10 absolute left-0  "></div>
        <div className="w-[300px] h-[350px]  bg-blue-300 rounded-2xl z-10 absolute left-1/2 translate-x-[-50px]  "></div>
        <div className="w-[300px] h-[350px]  bg-yellow-300 rounded-2xl z-10 absolute right-0 bottom-20  "></div>
        <div className="w-[300px] h-[350px]  bg-green-300 rounded-2xl z-10 absolute  left-35 -bottom-10 "></div>
        <div className="w-[300px] h-[350px]  bg-purple-300 rounded-2xl z-10 absolute  right-1/3 -bottom-50 "></div>
        {/* <div className="w-[300px] h-[350px]  bg-orange-300 rounded-2xl z-10 absolute left-0 -bottom-40 "></div>*/}
        <div className="w-[300px] h-[350px]  bg-pink-300 rounded-2xl z-10 absolute left-0 -bottom-110 "></div>
      </div>
    </div>
  );
};

export default Techstack;
