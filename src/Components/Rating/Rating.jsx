import React, { useState } from "react";
import "./rating.css";

const RATE_ARRAY = [
  {
    msg: "Very Poor",
    emoji: "😖",
  },
  {
    msg: "Poor",
    emoji: "😞",
  },
  {
    msg: "Average",
    emoji: "😊",
  },
  {
    msg: "Good",
    emoji: "😍",
  },
  {
    msg: "Excellent",
    emoji: "🥰",
  },
];
const Rating = () => {
  const [hoverCount, setHoverCount] = useState();

  const handleSelectRate = () => {
    // Handle Your logic here
  };

  return (
    <div className="rating-container">
      <div className="card">
        <h2>
          Hey<span className="shake">👋🏼</span>, Rate Here.
        </h2>
        <div className="card-content">
          <div className="card-desc">
            <h2 className="abcd">
              {hoverCount >= 0
                ? RATE_ARRAY[hoverCount].msg + RATE_ARRAY[hoverCount].emoji
                : "Select"}
            </h2>
            <div
              className="rate-star-wrapper"
              onMouseLeave={() => setHoverCount()}
            >
              {RATE_ARRAY.map((x, i) => (
                <span
                  className={`rate-star ${i <= hoverCount ? "active" : ""}`}
                  key={`rate-${i}`}
                  onMouseEnter={() => setHoverCount(i)}
                  onClick={handleSelectRate}
                >
                  ★{" "}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Rating;
