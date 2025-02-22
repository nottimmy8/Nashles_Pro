import React from "react";
import Hero from "./Hero";
import Complimentxt from "./Complimentxt";

const Home = ({}) => {
  return (
    <div className=" bg-[#0e0e0e] relative w-full h-screen flex flex-col items-center justify-center">
      <div>
        <Hero />
      </div>
    </div>
  );
};

export default Home;
