import React from "react";
import Hero from "./Hero";
import Complimentxt from "./Complimentxt";
import Techstack from "./Techstack";
import Footer from "./Footer";

const Home = () => {
  return (
    <div className=" bg-[#F1F0EB]   ">
      <Hero />
      <Complimentxt />
      <Techstack />
      <Footer />
    </div>
  );
};

export default Home;
