import React, { useEffect, useState } from "react";
import * as THREE from "three";
import "./LHS.css";

const LHS = ({ data }) => {
  const [distance, setDistance] = useState(0);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false); // State to manage video playing

  useEffect(() => {
    // Fetch the distance from the data and set it
    setDistance(data["Distance (light-years)"]);

    // Create a scene
    const scene = new THREE.Scene();

    // Create a camera with a narrower FOV to show the horizon of the planet
    const camera = new THREE.PerspectiveCamera(
      50, // Reduced FOV
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    const renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);

    // Attach renderer to specific div instead of body
    const container = document.getElementById("planet-container");
    container.appendChild(renderer.domElement);

    // Add starry background
    const starGeometry = new THREE.BufferGeometry();
    const starMaterial = new THREE.PointsMaterial({ color: 0xffffff });

    const starVertices = [];
    for (let i = 0; i < 10000; i++) {
      const x = (Math.random() - 0.5) * 2000;
      const y = (Math.random() - 0.5) * 2000;
      const z = -Math.random() * 2000;
      starVertices.push(x, y, z);
    }
    starGeometry.setAttribute(
      "position",
      new THREE.Float32BufferAttribute(starVertices, 3)
    );

    const stars = new THREE.Points(starGeometry, starMaterial);
    scene.add(stars);

    // Create a larger sphere to represent the planet
    const geometry = new THREE.SphereGeometry(2.5, 64, 64); // Large planet
    const texture = new THREE.TextureLoader().load("/lhs.jpg");
    const material = new THREE.MeshBasicMaterial({ map: texture });
    const planet = new THREE.Mesh(geometry, material);

    scene.add(planet);

    // Adjust camera to zoom out a bit
    camera.position.set(0, 1.8, 4); // Zoom out by increasing z-position
    camera.lookAt(new THREE.Vector3(0, 1, 0)); // Look slightly upward

    const animate = function () {
      requestAnimationFrame(animate);

      planet.rotation.y += 0.0005; // Rotate the planet slowly
      stars.rotation.y += 0.0005; // Rotate the stars
      renderer.render(scene, camera);
    };

    animate();

    return () => {
      container.removeChild(renderer.domElement); // Cleanup on unmount
    };
  }, [data]);

  // Function to handle video play and navigate after it ends
  const handleStartMission = () => {
    setIsVideoPlaying(true); // Show video when button is clicked
  };

  // Function to navigate after video ends
  const handleVideoEnd = () => {
    // Replace this with your navigation logic, e.g., using React Router
    // navigate("/lhs-mission");
    alert("Video has ended. Redirect to mission page here."); // Placeholder for navigation
  };

  return (
    <div className="mission-page">
      {/* Distance Bar */}
      <div className="distance-bar">
        <div className="distance-info">
          Distance from Earth: {distance} light-years
        </div>
      </div>

      {/* Start Mission Button */}
      <div className="start-mission-container">
        <button
          className="start-mission-button"
          onClick={handleStartMission}
          disabled={isVideoPlaying} // Disable button while video is playing
        >
          Start Mission
        </button>
      </div>

      {/* Show video overlay if video is playing */}
      {isVideoPlaying && (
        <div className="video-overlay">
          <video
            src="/takeoff.mp4" // Add the path to your video file here
            autoPlay
            muted
            onEnded={handleVideoEnd} // Trigger navigation after video ends
            className="fullscreen-video"
          />
        </div>
      )}

      {/* Planet and Info */}
      <div className="LHS-container">
        {/* This div will hold the 3D planet */}
        <div id="planet-container" className="planet-container"></div>

        <div className="info-container">
          <h2 className="mission-hey">Mission to {data["Planet Name"]}</h2>
          <p>
            <strong>Star:</strong> {data["Star"]}
          </p>
          <p>
            <strong>Distance:</strong> {data["Distance (light-years)"]}{" "}
            light-years
          </p>
          <p>
            <strong>Orbital Period:</strong> {data["Orbital Period (days)"]}{" "}
            days
          </p>
          <p>
            <strong>Temperature:</strong> {data["Temperature (K)"]} K
          </p>
        </div>
      </div>
    </div>
  );
};

export default LHS;
