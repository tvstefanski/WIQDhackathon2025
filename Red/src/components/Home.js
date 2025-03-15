import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Home.css";

function Home() {
  const navigate = useNavigate();

  return (
    <div className="home-container">
      <img src="/images/background.jpg" alt="The story of her life" className="main-image" />
      <h1 className="title">Through Her Eyes</h1>
      <button className="start-button" onClick={() => navigate("/intro")}>Start</button>
    </div>
  );
}

export default Home;
