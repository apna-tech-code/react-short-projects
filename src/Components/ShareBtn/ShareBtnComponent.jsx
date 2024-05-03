import React from "react";
import {
  BsFacebook,
  BsGithub,
  BsInstagram,
  BsLinkedin,
  BsTwitterX,
  BsWhatsapp,
  BsYoutube,
} from "react-icons/bs";
import { FaSnapchatGhost } from "react-icons/fa";
import { IoShareSocialSharp } from "react-icons/io5";
import "./shareBtnComp.css";

const ShareBtnComponent = () => {
  return (
    <div className="main-container">
      <div className="icn-wrapper">
        <IoShareSocialSharp
          className="icn"
          id="share-icn"
          onClick={() => {
            document
              .getElementsByClassName("icn-wrapper")[0]
              .classList.toggle("active");
          }}
        />
        <div
          className="item item1"
          style={{ "--iconIndex": 1, "--color": "#1877f2" }}
        >
          <BsFacebook size={30} />
        </div>
        <div
          className="item item2"
          style={{ "--iconIndex": 2, "--color": "#c32aa3" }}
        >
          <BsInstagram size={30} />
        </div>
        <div
          className="item item3"
          style={{ "--iconIndex": 3, "--color": "yellow" }}
        >
          <FaSnapchatGhost size={30} />
        </div>
        <div
          className="item item4"
          style={{ "--iconIndex": 4, "--color": "#1b1e21" }}
        >
          <BsGithub size={30} />
        </div>
        <div
          className="item item5"
          style={{ "--iconIndex": 5, "--color": "#ff0000" }}
        >
          <BsYoutube size={30} />
        </div>
        <div
          className="item item6"
          style={{ "--iconIndex": 6, "--color": "#0a66c2" }}
        >
          <BsLinkedin size={30} />
        </div>
        <div
          className="item item7"
          style={{ "--iconIndex": 7, "--color": "#25d366" }}
        >
          <BsWhatsapp size={30} />
        </div>
        <div
          className="item item8"
          style={{ "--iconIndex": 8, "--color": "black" }}
        >
          <BsTwitterX size={30} />
        </div>
      </div>
    </div>
  );
};

export default ShareBtnComponent;
