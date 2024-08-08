import React from "react";
import "./lightDarkThemeCard.css";

const LightDarkThemeCard = () => {
  return (
    <>
      <input id="switch" type="checkbox" />
      <div className="app">
        <div className="body">
          <div className="mobile">
            <div className="content">
              <div className="circle">
                <div className="crescent"></div>
              </div>

              <label for="switch">
                <div className="toggle"></div>
                <div className="names">
                  <p className="light">Light</p>
                  <p className="dark">Dark</p>
                </div>
              </label>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LightDarkThemeCard;
