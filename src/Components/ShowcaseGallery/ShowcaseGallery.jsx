import React from "react";
import "./showcaseGallery.css";

const ShowcaseGallery = () => {
  return (
    <div className="gallery-main-container">
      <div className="card">
        <img
          src={process.env.PUBLIC_URL + "dbz2.jpg"}
          className="img"
          height={"100%"}
          width={"100%"}
          alt="dbz img"
        />
      </div>
      <div className="card">
        <img
          src={process.env.PUBLIC_URL + "dbz5.jpg"}
          className="img"
          height={"100%"}
          width={"100%"}
          alt="dbz img"
        />
      </div>

      <div className="card">
        <img
          src={process.env.PUBLIC_URL + "dbz4.jpg"}
          className="img"
          height={"100%"}
          width={"100%"}
          alt="dbz img"
        />
      </div>
      <div className="card">
        <img
          src={process.env.PUBLIC_URL + "dbz1.jpg"}
          className="img"
          height={"100%"}
          width={"100%"}
          alt="dbz img"
        />
      </div>
      <div className="card">
        <img
          src={process.env.PUBLIC_URL + "dbz3.jpg"}
          className="img"
          height={"100%"}
          width={"100%"}
          alt="dbz img"
        />
      </div>
    </div>
  );
};

export default ShowcaseGallery;
