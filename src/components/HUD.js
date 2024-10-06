import React from "react";
import "./HUD.css";

const HUD = ({ planetDetails, roverDetails }) => {
  return (
    <div className="hud-container">
      <div className="planet-details">
        <h2>Planet Details: {planetDetails.name}</h2>
        <p>Atmosphere: {planetDetails.atmosphere}</p>
        <p>Light Level: {planetDetails.lightLevel}%</p>
        <p>Temperature: {planetDetails.temperature}°C</p>
      </div>

      <div className="rover-details">
        <h2>Rover Details</h2>
        <p>Solar Efficiency: {roverDetails.solarEfficiency}%</p>
        <p>Power: {roverDetails.powerLevel}%</p>
        <p>Mobility: {roverDetails.mobility}%</p>
        <p>
          Issues: {roverDetails.issues} Solar energy generation efficiency
          reduced due to clouds
        </p>
        <p>Fix: {roverDetails.fix} Adjust parameters </p>
      </div>
    </div>
  );
};

export default HUD;
