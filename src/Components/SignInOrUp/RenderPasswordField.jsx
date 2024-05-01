import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const RenderPasswordField = (props) => {
  const { name, label } = props;
  const [showPwd, setShowPwd] = useState(false);

  return (
    <div>
      <label htmlFor="password">{label}</label>
      <div className="relative">
        <input
          type={showPwd ? "text" : "password"}
          id={name}
          name={name}
          placeholder={`Enter ${label}`}
          autoComplete="off"
        ></input>
        <div onClick={() => setShowPwd(!showPwd)}>
          {!showPwd ? (
            <FaEye id="show-hide-icn" className="inpt-icn-pwd" size={20} />
          ) : (
            <FaEyeSlash id="show-hide-icn" className="inpt-icn-pwd" size={21} />
          )}
        </div>
      </div>
    </div>
  );
};

export default RenderPasswordField;
