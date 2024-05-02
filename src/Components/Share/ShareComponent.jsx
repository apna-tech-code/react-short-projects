import React from "react";
import { FaTwitterSquare } from "react-icons/fa";
import { ImFacebook2, ImInstagram, ImLinkedin } from "react-icons/im";
import "./shareComp.css";

const ShareComponent = () => {
  return (
    <>
      <div className="share-container">
        <CustomTooltip msg="Share on Facebook">
          <div className="icn-wrapper">
            <ImFacebook2 size={90} className="icon" />
          </div>
        </CustomTooltip>
        <CustomTooltip msg="Share on Instagram">
          <div className="icn-wrapper">
            <ImInstagram size={90} className="icon" />
          </div>
        </CustomTooltip>
        <CustomTooltip msg="Share on LinkedIn">
          <div className="icn-wrapper">
            <ImLinkedin size={90} className="icon" />
          </div>
        </CustomTooltip>
        <CustomTooltip msg="Share on Twitter">
          <div className="icn-wrapper">
            <div className="icn-wrapper">
              <FaTwitterSquare size={105} className="icon" />
            </div>
          </div>
        </CustomTooltip>
      </div>
    </>
  );
};

const CustomTooltip = (props) => {
  const { children, msg } = props;
  return (
    <div class="tooltip-container">
      <div class="tooltip-trigger">{children}</div>
      <div class="tooltip-content">{msg}</div>
    </div>
  );
};

export default ShareComponent;
