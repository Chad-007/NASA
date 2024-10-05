// src/PlanetDetails.js
import React from "react";

const PlanetDetails = ({ planet, onMissionComplete, missionCompleted }) => {
  return (
    <div>
      <h2>Visiting: {planet["Planet Name"]}</h2>
      <p>
        <strong>Star:</strong> {planet["Star"]}
      </p>
      <p>
        <strong>Distance:</strong> {planet["Distance (light-years)"]}{" "}
        light-years
      </p>
      <p>
        <strong>Orbital Period:</strong> {planet["Orbital Period (days)"]} days
      </p>
      <p>
        <strong>Temperature:</strong> {planet["Temperature (K)"]} K
      </p>
      <p>
        <strong>Common Atmospheric Gases:</strong>{" "}
        {planet["Common Atmospheric Gases"]}
      </p>
      <p>
        <strong>Atmospheric Pressure:</strong>{" "}
        {planet["Atmospheric Pressure (atm)"]} atm
      </p>
      <p>
        <strong>Presence of Liquid Water:</strong>{" "}
        {planet["Presence of Liquid Water"]}
      </p>
      <p>
        <strong>Energy Source:</strong> {planet["Energy Source"]}
      </p>
      <p>
        <strong>Magnetic Field:</strong> {planet["Magnetic Field"]}
      </p>
      <p>
        <strong>Geological Activity:</strong> {planet["Geological Activity"]}
      </p>
      <p>
        <strong>Habitability Score:</strong> {planet["Habitability Score"]}
      </p>

      {missionCompleted ? (
        <h3>Mission Completed! You assessed the chances of supporting life.</h3>
      ) : (
        <button onClick={onMissionComplete}>Complete Mission</button>
      )}
    </div>
  );
};

export default PlanetDetails;
