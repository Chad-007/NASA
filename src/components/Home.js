// src/components/Home.js
import React from "react";
import { Link } from "react-router-dom";
import "./Home.css"; // Import your CSS file for styling

const Home = () => {
  return (
    <div className="home-container">
      <h2>Select a Mission</h2>
      <ul>
        <li>
          <Link to="/proxima">Mission to Proxima Centauri b</Link>
        </li>
        <li>
          <Link to="/trappist">Mission to TRAPPIST-1e</Link>
        </li>
        <li>
          <Link to="/lhs">Mission to LHS 1140 b</Link>
        </li>
        <li>
          <Link to="/k2">Mission to K2-18 b</Link>
        </li>
        <li>
          <Link to="/kepler">Mission to Kepler-186f</Link>
        </li>
      </ul>
    </div>
  );
};

export default Home;
