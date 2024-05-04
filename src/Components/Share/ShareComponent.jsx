import React from "react";
import { FaTwitterSquare } from "react-icons/fa";
import { ImFacebook2, ImInstagram, ImLinkedin } from "react-icons/im";
import "./shareComp.css";

const ShareComponent = () => {
  const renderCustomComp = (icon, msg) => {
    return (
      <CustomTooltip msg={"Share on " + msg}>
        <div className="icn-wrapper">{icon}</div>
      </CustomTooltip>
    );
  };
  return (
    <>
      <div className="share-container">
        {renderCustomComp(
          <ImFacebook2 size={90} className="icon" />,
          "Facebook"
        )}
        {renderCustomComp(
          <ImInstagram size={90} className="icon" />,
          "Instagram"
        )}
        {renderCustomComp(
          <ImLinkedin size={90} className="icon" />,
          "LinkedIn"
        )}
        {renderCustomComp(
          <FaTwitterSquare size={105} className="icon" />,
          "Facebook"
        )}
      </div>
    </>
  );
};

const CustomTooltip = (props) => {
  const { children, msg } = props;
  return (
    <div className="tooltip-container">
      <div className="tooltip-trigger">{children}</div>
      <div className="tooltip-content">{msg}</div>
    </div>
  );
};

export default ShareComponent;
