// src/App.js
import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Papa from "papaparse";
import Home from "./components/Home";
import Proxima from "./components/Proxima";
import Trappist from "./components/Trappist";
import LHS from "./components/LHS";
import K2 from "./components/K2";
import Kepler from "./components/Kepler";
import "./App.css";

const App = () => {
  const [planetData, setPlanetData] = useState([]);

  // Fetching data from CSV
  useEffect(() => {
    Papa.parse("/exoplanets.csv", {
      // Ensure the CSV path is correct
      download: true,
      header: true,
      complete: (results) => {
        setPlanetData(results.data);
      },
    });
  }, []);

  // Function to get planet details by name
  const getPlanetDetails = (planetName) => {
    return planetData.find((planet) => planet["Planet Name"] === planetName);
  };

  return (
    <Router>
      <div className="App">
        {<link href='https://fonts.googleapis.com/css?family=Poppins' rel='stylesheet'></link>}
        <h1 style={{color: 'white', fontFamily: 'Poppins'}}>Exoplanet Missions</h1>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/proxima"
            element={<Proxima data={getPlanetDetails("Proxima Centauri b")} />}
          />
          <Route
            path="/trappist"
            element={<Trappist data={getPlanetDetails("TRAPPIST-1e")} />}
          />
          <Route
            path="/lhs"
            element={<LHS data={getPlanetDetails("LHS 1140 b")} />}
          />
          <Route
            path="/k2"
            element={<K2 data={getPlanetDetails("K2-18 b")} />}
          />
          <Route
            path="/kepler"
            element={<Kepler data={getPlanetDetails("Kepler-186f")} />}
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
