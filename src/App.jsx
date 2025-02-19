import React, { useEffect, useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Preloader from "./components/Preloader";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Project from "./components/Project";
import Contact from "./components/Contact";

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
            <Route path="/home" element={<Home />} />
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
