import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Papa from "papaparse";
import Proxima from "./components/Proxima";
import Trappist from "./components/Trappist";
import LHS from "./components/LHS";
import K2 from "./components/K2";
import Kepler from "./components/Kepler";
import "./App.css";
import KeplerMission from "./components/KeplerMission";
import Carousel from "./components/Carousel";
import K2Mission from "./components/K2Mission";
import TrappistMission from "./components/TrappistMission";

const App = () => {
  const [planetData, setPlanetData] = useState([]);
  const [isVideoPlayed, setIsVideoPlayed] = useState(false);

  // Fetching data from CSV
  useEffect(() => {
    Papa.parse("/exoplanets.csv", {
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

  // Function to handle video play
  const handlePlayVideo = () => {
    const videoElement = document.getElementById("intro-video");
    videoElement.play();
    videoElement.onended = () => {
      setIsVideoPlayed(true); // Hide the video after it finishes playing
    };
  };

  // Function to skip 5 seconds in the video
  const handleSkipForward = () => {
    const videoElement = document.getElementById("intro-video");
    videoElement.currentTime += 5; // Skip 5 seconds forward
  };

  if (!isVideoPlayed) {
    return (
      <div className="video-container">
        <video
          id="intro-video"
          src="/earth-og.mp4" // Ensure this video file exists in the public directory
          type="video/mp4"
          style={{ width: "100vw", height: "100vh", objectFit: "cover" }}
          controls={false} // Hides the video controls
        />
        <button
          onClick={handlePlayVideo}
          style={{
            position: "absolute",
            top: "95%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            backgroundColor: "rgba(255, 255, 255, 0.2)",
            padding: "10px 20px",
            fontSize: "18px",
            border: "none",
            cursor: "pointer",
            fontFamily: "Poppins",
            borderRadius: '25px'
          }}
        >
          Play Video
        </button>
        <button
          onClick={handleSkipForward}
          style={{
            position: "absolute",
            top: "5%",
            left: "95%",
            transform: "translate(-50%, -50%)",
            backgroundColor: "rgba(255, 255, 255, 0.2)",
            padding: "10px 20px",
            fontSize: "18px",
            border: "none",
            cursor: "pointer",
            fontFamily: "Poppins",
            borderRadius: '25px'
          }}
        >
          Skip
        </button>
      </div>
    );
  }

  return (
    <Router>
      <div className="App">
        <link
          href="https://fonts.googleapis.com/css?family=Poppins"
          rel="stylesheet"
        />
        <h1 style={{ color: "white", fontFamily: "Poppins" }}>
          Exoplanet Missions
        </h1>
        <Routes>
          <Route path="/" element={<Carousel />} />{" "}
          {/* Display Carousel after video */}
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
          <Route path="/kepler-mission" element={<KeplerMission />} />
          <Route path="/Carousel" element={<Carousel/>}/>
          <Route path="/TrappistMission" element={<TrappistMission/>}/>
          <Route path="/K2Mission" element={<K2Mission/>}/>
        </Routes>
      </div>
    </Router>
  );
};

export default App;
