import React, { useState } from "react";
import "./Carousel.css";

const Carousel = () => {
  const planets = [
    {
      name: "Kepler-186F",
      image: "images/kepler-186f.png",
    },
    {
      name: "Proxima Centauri-B",
      image: "images/proximacentaurib.png",
    },
    {
      name: "Trappist-1E",
      image: "images/trappist-1e.png",
    },
    {
      name: "LHS-1140 B",
      image: "images/Lhs-1140b.png",
    },
    {
      name: "K2-18B",
      image: "images/k2-18b.png",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % planets.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? planets.length - 1 : prevIndex - 1
    );
  };

  const getClassName = (index) => {
    if (index === currentIndex) {
      return "item active";
    } else if (index === (currentIndex + 1) % planets.length) {
      return "item next";
    } else if (index === (currentIndex - 1 + planets.length) % planets.length) {
      return "item prev";
    } else {
      return "item";
    }
  };

  return (
    <div className="carousel">
      <div className="list">
        {planets.map((planet, index) => (
          <div className={getClassName(index)} key={index}>
            <img src={planet.image} alt={planet.name} />
            <div className="intro">
              <div style={{fontFamily: 'Poppins', fontSize: '35px'}}>PLANETS</div>
              <div style={{fontFamily: 'Poppins', fontSize: '20px'}}>{planet.name}</div>
              <button style={{fontFamily: 'Poppins', fontSize: '15px'}}>Select Planet</button>
            </div>
          </div>
        ))}
      </div>
      <div className="arrows">
        <button id="prev" onClick={prevSlide}>
          &lt;
        </button>
        <button id="next" onClick={nextSlide}>
          &gt;
        </button>
      </div>
    </div>
  );
};

export default Carousel;
