import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/SceneTemplate.css";

function SceneTemplate({ title, image, conversations, dataPages }) {
  const [step, setStep] = useState(0);
  const [showDataPage, setShowDataPage] = useState(null);
  const navigate = useNavigate();

  const handleChoiceClick = (nextStep) => {
    if (typeof nextStep === "string") {
      navigate(nextStep); // Move to the next scene
    } else if (typeof nextStep === "object") {
      setShowDataPage(nextStep); // Show data page first
    } else {
      setStep(nextStep); // Move to the next conversation step
    }
  };

  return (
    <div className="scene-container">
      {/* Navigation Buttons */}
      <div className="nav-buttons">
        <button onClick={() => navigate("/")} className="nav-button">🏠 Home</button>
        <button onClick={() => navigate(-1)} className="nav-button">🔙 Back</button>
      </div>

      {/* Title Click to Start */}
      {step === 0 && !showDataPage ? (
        <h1 className="scene-title" onClick={() => setStep(1)}>{title}</h1>
      ) : showDataPage ? (
        <>
          {/* Data Page */}
          <img src={showDataPage.image} alt="Data" className="scene-image" />
          <h2 className="data-title">{showDataPage.title}</h2>
          <div className="dialogue-box">
            <p>{showDataPage.description}</p>
          </div>
          <button className="choice-button" onClick={() => navigate(showDataPage.nextScene)}>
            Continue Story
          </button>
        </>
      ) : (
        <>
          {/* Scene Image */}
          <img src={image} alt="Scene" className="scene-image" />

          {/* Dialogue Box */}
          <div className="dialogue-box">
            <p>{conversations[step - 1].text}</p>
          </div>

          {/* Choices */}
          <div className="choices-container">
            {conversations[step - 1].choices.map((choice, index) => (
              <button key={index} className="choice-button" onClick={() => handleChoiceClick(choice.next)}>
                {choice.text}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default SceneTemplate;
