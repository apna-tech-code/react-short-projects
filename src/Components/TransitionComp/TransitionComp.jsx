import React, { useEffect } from "react";
import "./transitionComp.css";
import { FaSpaceShuttle } from "react-icons/fa";

const TransitionComp = () => {
  useEffect(() => {
    setTimeout(() => {
      const items = document.getElementsByClassName("icn");

      for (let index = 0; index < items.length; index++) {
        const element = items[index];
        element.classList.add("trigger-transition");
      }
    }, 2000);
  }, []);

  return (
    <div className="transition-container">
      <div className="path-wrapper">
        <FaSpaceShuttle size={150} color="white" className="icn icn-linear" />
        <span className="title">Linear</span>
        <div className="t-main-content"></div>
      </div>
      <div className="path-wrapper">
        <FaSpaceShuttle size={150} color="white" className="icn icn-ease" />
        <span className="title">Ease</span>
        <div className="t-main-content"></div>
      </div>
      <div className="path-wrapper">
        <FaSpaceShuttle size={150} color="white" className="icn icn-ease-in" />
        <span className="title">Ease In</span>
        <div className="t-main-content"></div>
      </div>
      <div className="path-wrapper">
        <FaSpaceShuttle size={150} color="white" className="icn icn-ease-out" />
        <span className="title">Ease Out</span>
        <div className="t-main-content"></div>
      </div>
      <div className="path-wrapper">
        <FaSpaceShuttle
          size={150}
          color="white"
          className="icn icn-ease-in-out"
        />
        <span className="title">Ease In Out</span>
        <div className="t-main-content"></div>
      </div>
    </div>
  );
};

export default TransitionComp;
