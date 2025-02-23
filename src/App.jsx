import React, { useEffect, useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Preloader from "./components/Preloader";
import Navbar from "./components/Navbar";
import AboutP from "./page/AboutP";
import HomeP from "./page/HomeP";
import ProjectP from "./page/ProjectP";
import ContactP from "./page/ContactP";
import Footer from "./components/Footer";
import RevealCard from "./components/Tryout/RevealCard";
import HeroPage from "./components/Tryout/HeroPage";
import Marquee from "./components/Tryout/Marquee";
import CaseCard from "./components/Tryout/CaseCard";
const App = () => {
  const location = useLocation();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // Show preloader if it's the first visit or the user is reloading on "/home"
    if (location.pathname === "/") {
      setLoading(true);
      const timer = setTimeout(() => {
        setLoading(false);
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [location.pathname]);

  return (
    <>
      {loading ? (
        <Preloader setLoading={setLoading} />
      ) : (
        <>
          <Navbar />
          <Routes>
            <Route path="/" element={<HomeP />} />
            <Route path="/about" element={<AboutP />} />
            <Route path="/project" element={<ProjectP />} />
            <Route path="/contact" element={<ContactP />} />
          </Routes>
          {/* <HeroPage /> */}
          {/* <CaseCard
            titlePart1="Anai"
            titlePart2="Wood"
            slug="anai-wood"
            image1x="https://d1oo4riy5et4sg.cloudfront.net/v3-1/assets/cases/anai-wood/thumb@1x.jpg"
            image2x="https://d1oo4riy5et4sg.cloudfront.net/v3-1/assets/cases/anai-wood/thumb@2x.jpg"
            imageMob="https://d1oo4riy5et4sg.cloudfront.net/v3-1/assets/cases/anai-wood/thumb@1x.jpg"
          /> */}
        </>
      )}
    </>
  );
};

export default App;
