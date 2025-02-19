import React from "react";
import Hero from "./Hero";
import Complimentxt from "./Complimentxt";
import Techstack from "./Techstack";
import Footer from "./Footer";

const Home = () => {
  return (
    <div className=" bg-[#0e0e0e]   ">
      <Hero />
      <Complimentxt />
      <Techstack />
      <Footer />
    </div>
  );
};

export default Home;
