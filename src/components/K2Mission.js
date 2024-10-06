import React, { useState } from "react";
import HUD from "./HUD";
import SolarPanelTask from "./SolarPanelTask";
import EnergyDistributionTask from "./EnergyDistributionTask";
import "./K2Mission.css";

const K2Mission = () => {
  const [missionStage, setMissionStage] = useState(1);

  const handleMissionComplete = () => {
    setMissionStage(missionStage + 1);
  };

  const planetDetails = {
    name: "K2-18 b",

    atmosphere: "Water Vapor Clouds",
    lightLevel: 30,
    temperature: -73,
  };

  const roverDetails = {
    solarEfficiency: 20,
    powerLevel: 40,
    mobility: 50,
  };

  return (
    <div className="app">
      <HUD planetDetails={planetDetails} roverDetails={roverDetails} />

      {missionStage === 1 && (
        <SolarPanelTask onComplete={handleMissionComplete} />
      )}

      {missionStage === 2 && (
        <EnergyDistributionTask onComplete={handleMissionComplete} />
      )}

      {missionStage === 3 && <h2>Mission Complete!</h2>}
    </div>
  );
};

export default K2Mission;
