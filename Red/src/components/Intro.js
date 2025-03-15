import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Intro.css";

function Intro() {
  const navigate = useNavigate(); // Enables navigation

  return (
    <div className="intro-container">
      {/* Navigation Buttons */}
      <div className="nav-buttons">
        <button onClick={() => navigate("/")} className="nav-button">🏠 Home</button>
        <button onClick={() => navigate(-1)} className="nav-button">🔙 Back</button>
      </div>

      {/* Background Image */}
      <img src="/images/background.jpg" alt="Background" className="intro-image" />

      {/* Clickable Story Text */}
      <div className="intro-text" onClick={() => navigate("/childhood")}>
        <p>
          <i>This is her story. A story shaped by choices, unseen barriers, and hidden opportunities.
            As you walk through her life, you’ll see her path. But remember—your choices are shaped by data, by history, by society.</i>
        </p>
      </div>
    </div>
  );
}

export default Intro;
