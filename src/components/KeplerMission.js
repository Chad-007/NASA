import React, { useState, useEffect } from "react";

const puzzles = [
  {
    question: "Which planet in the solar system resembles Kepler-186f?",
    answer: "Earth",
    hint: "Habitable",
  },
  {
    question: "Is water present on Kepler-186f(Yes/No)?",
    answer: "Yes",
    hint: "Kepler-186f is located in the habitable zone of its star.",
  },
  {
    question: "Distance from Earth in Lightyears?",
    answer: "500",
    hint: "Between 495 & 505.",
  },
  {
    question: "Are you excited to explore Kepler-186f in future?",
    answer: "Yes",
    hint: "You know the answer!",
  },
];

const KeplerMission = () => {
  const [currentPuzzle, setCurrentPuzzle] = useState(0);
  const [userAnswer, setUserAnswer] = useState("");
  const [score, setScore] = useState(0);
  const [showHint, setShowHint] = useState(false);
  const [gameOver, setGameOver] = useState(false);
  const [feedbackMessage, setFeedbackMessage] = useState("");

  const handleSubmit = () => {
    if (
      userAnswer.toLowerCase() === puzzles[currentPuzzle].answer.toLowerCase()
    ) {
      const newScore = score + 1;
      setScore(newScore);
      setFeedbackMessage("Correct!");
      setTimeout(() => {
        setFeedbackMessage("");
        if (newScore === puzzles.length) {
          setGameOver(true);
        } else if (currentPuzzle < puzzles.length - 1) {
          setCurrentPuzzle(currentPuzzle + 1);
          setUserAnswer("");
          setShowHint(false);
        }
      }, 1500);
    } else {
      setFeedbackMessage("Incorrect");
      setTimeout(() => {
        setFeedbackMessage("");
      }, 1500);
    }
  };

  const handleHint = () => {
    setShowHint(true);
  };

  useEffect(() => {
    const stars = document.querySelectorAll(".star");
    stars.forEach((star) => {
      star.style.animationDuration = `${Math.random() * 3 + 2}s`;
      star.style.animationDelay = `${Math.random() * 3}s`;
    });
  }, []);

  return (
    <div className="game-container">
      <div className="stars">
        {[...Array(100)].map((_, i) => (
          <div key={i} className="star" />
        ))}
      </div>

      <svg className="planet" viewBox="0 0 100 100">
        <circle cx="50" cy="50" r="48" fill="url(#planetGradient)" />
        <ellipse cx="30" cy="40" rx="20" ry="10" fill="rgba(255,255,255,0.2)" />
        <ellipse cx="70" cy="60" rx="15" ry="8" fill="rgba(255,255,255,0.2)" />
        <defs>
          <radialGradient
            id="planetGradient"
            cx="50%"
            cy="50%"
            r="50%"
            fx="50%"
            fy="50%"
          >
            <stop offset="0%" stopColor="#3498db" />
            <stop offset="100%" stopColor="#2980b9" />
          </radialGradient>
        </defs>
      </svg>

      <div className="game-card">
        <h2 className="game-title">Kepler-186f Rover Puzzle</h2>
        <p className="game-score">
          Score: {score}/{puzzles.length}
        </p>
        {!gameOver ? (
          <>
            <p className="game-question">{puzzles[currentPuzzle].question}</p>
            <input
              type="text"
              value={userAnswer}
              onChange={(e) => setUserAnswer(e.target.value)}
              className="game-input"
              placeholder="Your answer"
            />
            <div className="game-buttons">
              <button
                onClick={handleSubmit}
                className="game-button submit-button"
              >
                Submit
              </button>
              <button onClick={handleHint} className="game-button hint-button">
                Hint
              </button>
            </div>
            {showHint && (
              <p className="game-hint">Hint: {puzzles[currentPuzzle].hint}</p>
            )}
            {feedbackMessage && (
              <div className={`feedback ${feedbackMessage.toLowerCase()}`}>
                {feedbackMessage}
              </div>
            )}
          </>
        ) : (
          <p className="game-over">
            Congratulations! You've completed all puzzles.
          </p>
        )}
      </div>

      <style jsx>{`
        .game-container {
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          background: linear-gradient(to bottom, #0f0c29, #302b63, #24243e);
          overflow: hidden;
          position: relative;
          font-size: 18px;
          font-family: "Arial", sans-serif;
        }
        .stars {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
        }
        .star {
          position: absolute;
          width: 2px;
          height: 2px;
          background-color: white;
          border-radius: 50%;
          animation: twinkle linear infinite;
        }
        @keyframes twinkle {
          0%,
          100% {
            opacity: 0;
          }
          50% {
            opacity: 1;
          }
        }
        .planet {
          position: absolute;
          top: 20px;
          right: 20px;
          width: 150px;
          height: 150px;
          animation: rotate 30s linear infinite;
        }
        @keyframes rotate {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        .game-card {
          width: 90%;
          max-width: 600px;
          padding: 40px;
          background-color: rgba(255, 255, 255, 0.1);
          border-radius: 20px;
          color: white;
          box-shadow: 0 0 20px rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(10px);
          transition: all 0.3s ease;
          position: relative;
        }
        .game-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 5px 30px rgba(255, 255, 255, 0.2);
        }
        .game-title {
          font-size: 36px;
          font-weight: bold;
          text-align: center;
          margin-bottom: 20px;
          color: #7ed6df;
          text-shadow: 0 0 10px rgba(126, 214, 223, 0.5);
        }
        .game-score {
          text-align: center;
          margin-bottom: 30px;
          font-size: 24px;
          color: #ff9ff3;
        }
        .game-question {
          margin-bottom: 25px;
          font-size: 22px;
          line-height: 1.4;
          color: #dff9fb;
        }
        .game-input {
          width: 100%;
          padding: 15px;
          margin-bottom: 25px;
          border: none;
          border-radius: 10px;
          font-size: 20px;
          background-color: rgba(255, 255, 255, 0.1);
          color: white;
          transition: all 0.3s ease;
        }
        .game-input:focus {
          outline: none;
          box-shadow: 0 0 0 2px #7ed6df;
        }
        .game-buttons {
          display: flex;
          justify-content: space-between;
          margin-bottom: 20px;
        }
        .game-button {
          padding: 15px 30px;
          border: none;
          border-radius: 10px;
          cursor: pointer;
          font-weight: bold;
          font-size: 20px;
          transition: all 0.3s ease;
          text-transform: uppercase;
        }
        .submit-button {
          background-color: #7ed6df;
          color: white;
        }
        .submit-button:hover {
          background-color: #55efc4;
        }
        .hint-button {
          background-color: #ff9ff3;
          color: white;
        }
        .hint-button:hover {
          background-color: #fd79a8;
        }
        .game-hint {
          font-size: 18px;
          color: #ffcc00;
          margin-top: 15px;
        }
        .feedback {
          text-align: center;
          margin-top: 15px;
          font-size: 18px;
          font-weight: bold;
        }
        .feedback.correct {
          color: #00b894;
        }
        .feedback.incorrect {
          color: #d63031;
        }
        .game-over {
          text-align: center;
          font-size: 24px;
          color: #00b894;
        }
      `}</style>
    </div>
  );
};

export default KeplerMission;
