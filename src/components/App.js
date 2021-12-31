import "../style/App.css";
import Home from "./Home";
import Footer from "./Footer";
import React, { useState, useEffect } from "react";
import KeyboardDoubleArrowUpIcon from "@mui/icons-material/KeyboardDoubleArrowUp";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import FetchData from "./FetchData";

function App() {
  const [up, setUp] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setUp(true);
      } else {
        setUp(false);
      }
    });
  }, []);

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/fetch" element={<FetchData />} />
        </Routes>
        <Footer />
      </Router>
      <button
        className={`top_to_button ${up && "visible"}`}
        onClick={handleClick}
      >
        <KeyboardDoubleArrowUpIcon />
      </button>
    </div>
  );
}

export default App;
