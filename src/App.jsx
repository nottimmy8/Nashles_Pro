import React, { useEffect, useState } from "react";
import Preloader from "./components/Preloader";
import MainContent from "./components/MainContent";

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000); // Simulate loading for 3 seconds
  }, []);

  return <>{loading ? <Preloader /> : <MainContent />}</>;
};

export default App;
