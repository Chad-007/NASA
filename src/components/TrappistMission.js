import React, { useState } from "react";
import HelmetHUD from "./HelmetHUD";
import "./TrappistMission.css";

function TrappistMission() {
  const [iceBroken, setIceBroken] = useState(false); // Track ice-breaking progress
  const [temperature, setTemperature] = useState(0); // Track temperature slider value
  const [missionComplete, setMissionComplete] = useState(false); // Track mission completion
  const [showSliderModal, setShowSliderModal] = useState(false); // For showing slider modal
  const [breakIceCount, setBreakIceCount] = useState(0); // Track number of presses

  const requiredTemperature = 10;
  const totalBreaksNeeded = 5;

  const handleTemperatureChange = (event) => {
    setTemperature(event.target.value);
  };

  const breakIce = () => {
    setBreakIceCount((prevCount) => prevCount + 1);

    if (breakIceCount + 1 === totalBreaksNeeded) {
      setIceBroken(true);
      setShowSliderModal(true);
    }
  };

  const checkMissionCompletion = () => {
    if (temperature === requiredTemperature) {
      setMissionComplete(true);
      setShowSliderModal(false);
    }
  };

  return (
    <div className="app">
      <HelmetHUD />

      {!iceBroken && (
        <div className="break-ice">
          <h2>The rover is covered in ice!</h2>
          <p>
            Press the button {totalBreaksNeeded - breakIceCount} times to break
            the ice.
          </p>
          <button onClick={breakIce}>Break Ice</button>
        </div>
      )}

      {showSliderModal && (
        <div className="modal">
          <div className="modal-content">
            <h2>Adjust Rover Heating Elements</h2>
            <input
              type="range"
              min="-70"
              max="70"
              value={temperature}
              onChange={handleTemperatureChange}
            />
            <p>Current Temperature: {temperature}°C</p>
            <p>Required Temperature: {requiredTemperature}°C</p>
            <button onClick={checkMissionCompletion}>Check Temperature</button>
          </div>
        </div>
      )}

      {missionComplete && (
        <div className="modal">
          <div className="modal-content">
            <h2>Mission Complete!</h2>
            <button onClick={() => alert("Proceeding to the next mission!")}>
              Next Mission
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default TrappistMission;
