import React, { useEffect, useState } from "react";
import "./appleWatch.css";

const DigitalWatch = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (date, type) => {
    if (type === "hour") {
      let hours = date.getHours();
      hours = hours % 12;
      hours = hours ? hours : 12;
      hours = String(hours).padStart(2, "0");
      return hours;
    } else if (type === "min")
      return String(date.getMinutes()).padStart(2, "0");
    else if (type === "sec") return String(date.getSeconds()).padStart(2, "0");
  };

  return (
    <div className="watch">
      <div className="frame">
        <div className="date">{new Date().toDateString()}</div>
        <div className="text">
          <div>{formatTime(time, "hour")}</div>
          <div>{formatTime(time, "min")}</div>
          <div>{formatTime(time, "sec")}</div>
        </div>
      </div>
      <div className="sideBtn"></div>
      <div className="powerBtn"></div>
      <div className="dots">
        <span className="dot"></span>
        <span className="dot"></span>
        <span className="dot"></span>
      </div>
    </div>
  );
};

export default DigitalWatch;
