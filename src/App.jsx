import React, { useEffect, useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Preloader from "./components/Preloader";
import Navbar from "./components/Navbar";
import AboutP from "./page/AboutP";
import HomeP from "./page/HomeP";
import ProjectP from "./page/ProjectP";
import ContactP from "./page/ContactP";
import Footer from "./components/Footer";
const App = () => {
  const location = useLocation();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // Show preloader if it's the first visit or the user is reloading on "/home"
    if (location.pathname === "/home") {
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
            <Route path="/home" element={<HomeP />} />
            <Route path="/about" element={<AboutP />} />
            <Route path="/project" element={<ProjectP />} />
            <Route path="/contact" element={<ContactP />} />
          </Routes>
          {/* <Footer /> */}
        </>
      )}
    </>
  );
};

export default App;
