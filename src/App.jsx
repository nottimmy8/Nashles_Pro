import React, { useEffect, useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Preloader from "./components/Preloader";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Project from "./components/Project";
import Contact from "./components/Contact";

const App = () => {
  const location = useLocation(); // Moved this above
  const [loading, setLoading] = useState(
    location.pathname === "/" && !sessionStorage.getItem("preloaderShown")
  );

  useEffect(() => {
    if (loading) {
      const timer = setTimeout(() => {
        setLoading(false);
        sessionStorage.setItem("preloaderShown", "true"); // Store preloader state
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [loading]);

  return (
    <>
      {loading ? (
        <Preloader setLoading={setLoading} />
      ) : (
        <>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/project" element={<Project />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </>
      )}
    </>
  );
};

export default App;
