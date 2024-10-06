import React from 'react';
import './HelmetHUD.css';

function HelmetHUD() {
  const planetDetails = {
    name: "TRAPPIST-1e",
    distanceFromEarth: "39.5 light-years",
    surfaceTemperature: "-53°C",
    atmosphere: "Thin, rocky, potentially habitable",
    gravity: "0.93g",
    missionStatus: "Rover temperature sensor failed",
  };

  const roverDetails = {
    currentTemperature: "-52°C",
    requiredTemperature: "10°C",
    status: "Heating system malfunction",
    fix: "Adjust the rover's heating elements to maintain proper functioning.",
  };

  return (
    <div className="hud-container">
      <div className="planet-details">
        <h2>Planet: {planetDetails.name}</h2>
        <p><strong>Distance from Earth:</strong> {planetDetails.distanceFromEarth}</p>
        <p><strong>Surface Temperature:</strong> {planetDetails.surfaceTemperature}</p>
        <p><strong>Atmosphere:</strong> {planetDetails.atmosphere}</p>
        <p><strong>Gravity:</strong> {planetDetails.gravity}</p>
      </div>

      <div className="rover-details">
        <h2>Rover Status</h2>
        <p><strong>Current Temperature:</strong> {roverDetails.currentTemperature}</p>
        <p><strong>Required Temperature:</strong> {roverDetails.requiredTemperature}</p>
        <p><strong>Status:</strong> {roverDetails.status}</p>
        <p><strong>Fix:</strong> {roverDetails.fix} </p>
      </div>
    </div>
  );
}

export default HelmetHUD;
