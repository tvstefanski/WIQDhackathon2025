import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Intro from "./components/Intro";
import Childhood from "./scenes/Childhood";

function Youth() {
  return <h1>Youth Scene (Coming Soon!)</h1>;
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/intro" element={<Intro />} />
        <Route path="/childhood" element={<Childhood />} />
        <Route path="/youth" element={<Youth />} />
      </Routes>
    </Router>
  );
}

export default App;
