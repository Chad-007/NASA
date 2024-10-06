import React, { useState } from "react";
import "./SolarPanelTask.css";

const SolarPanelTask = ({ onComplete }) => {
  const [panelEfficiency, setPanelEfficiency] = useState(50);

  const handleSliderChange = (e) => {
    setPanelEfficiency(e.target.value);
  };

  const handleComplete = () => {
    // Check if the solar panel efficiency is optimal (for simplicity, let's assume 80-90%)
    if (panelEfficiency >= 80 && panelEfficiency <= 90) {
      alert("Solar panels are calibrated successfully!");
      onComplete(); // Trigger completion of this task
    } else {
      alert("Solar panels need further calibration.");
    }
  };

  return (
    <div className="solar-task-container">
      <h2>Calibrate Solar Panels</h2>
      <p>
        Adjust the slider to optimize energy absorption between 80 and 90% based
        on light levels.
      </p>
      <input
        type="range"
        min="0"
        max="100"
        value={panelEfficiency}
        onChange={handleSliderChange}
      />
      <p>Current Efficiency: {panelEfficiency}%</p>
      <button onClick={handleComplete}>Complete Calibration</button>
    </div>
  );
};

export default SolarPanelTask;
