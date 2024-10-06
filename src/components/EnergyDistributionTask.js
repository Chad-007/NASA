import React, { useState } from "react";
import "./EnergyDistributionTask.css";

const EnergyDistributionTask = ({ onComplete }) => {
  const [energy, setEnergy] = useState({
    mobility: 25,
    sensors: 25,
    lifeSupport: 25,
    communications: 25,
  });

  const handleSliderChange = (system, value) => {
    setEnergy({
      ...energy,
      [system]: value,
    });
  };

  const handleComplete = () => {
    // Just a basic check that total energy allocation is 100%
    const total = Object.values(energy).reduce((a, b) => a + b, 0);
    if (total === 100) {
      alert("Energy distribution successful!");
      onComplete(); // Task complete
    } else {
      alert("Please allocate exactly 100% of the energy.");
    }
  };

  return (
    <div className="energy-task-container">
      <h2>Energy Distribution</h2>
      <p>Distribute 100% of the energy across the rover's critical systems:</p>

      {Object.keys(energy).map((system) => (
        <div key={system}>
          <label>{system.charAt(0).toUpperCase() + system.slice(1)}</label>
          <input
            type="range"
            min="0"
            max="100"
            value={energy[system]}
            onChange={(e) =>
              handleSliderChange(system, parseInt(e.target.value))
            }
          />
          <p>{energy[system]}%</p>
        </div>
      ))}

      <button onClick={handleComplete}>Complete Energy Distribution</button>
    </div>
  );
};

export default EnergyDistributionTask;
