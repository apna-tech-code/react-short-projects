import React, { useEffect } from "react";
import "./shareBtn2.css";
import { IoShareSocialSharp } from "react-icons/io5";
import {
  BsFacebook,
  BsInstagram,
  BsTwitterX,
  BsWhatsapp,
} from "react-icons/bs";

const ShareBtn2 = () => {
  return (
    <div className="sharebtn2-main-container ">
      <div
        className="icn-wrapper"
        onClick={() => {
          document
            .getElementsByClassName("icn-wrapper")[0]
            .classList.toggle("active");
        }}
      >
        <IoShareSocialSharp
          className="share-icn"
          id="share-icn"
          fontSize={70}
        />
        <div className="top-container">
          <button
            type="button"
            className="btn-icn btn1"
            style={{ "--color": "#1877f2" }}
          >
            <BsFacebook size={30} className="icn" />
          </button>
          <button
            type="button"
            className="btn-icn btn2"
            style={{ "--color": "#c32aa3" }}
          >
            <BsInstagram size={30} className="icn" />
          </button>
        </div>
        <div className="bottom-container">
          <button
            type="button"
            className="btn-icn btn3"
            style={{ "--color": "#25d366" }}
          >
            <BsWhatsapp size={30} className="icn" />
          </button>
          <button
            type="button"
            className="btn-icn btn4"
            style={{ "--color": "black" }}
          >
            <BsTwitterX size={30} className="icn" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ShareBtn2;
