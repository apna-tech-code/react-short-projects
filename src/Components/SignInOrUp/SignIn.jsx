import React from "react";
import { FaAngleDoubleRight, FaUserAlt } from "react-icons/fa";
import { toast } from "react-toastify";
import RenderPasswordField from "./RenderPasswordField";

const SignIn = () => {
  return (
    <>
      <h1 className="text-align-center">Sign In</h1>
      <div className="content">
        <div>
          <label htmlFor="email">Email</label>
          <div className="relative">
            <input
              type="text"
              id="userName"
              name="userName"
              placeholder="Enter Email"
              autoComplete="off"
            ></input>
            <FaUserAlt className="inpt-icn" size={18} />
          </div>
        </div>
        <br />
        <RenderPasswordField name="password" label={"Password"} />
        <button
          type="button"
          className="btn"
          onClick={() => {
            toast.success("Sign in successfully.");
          }}
        >
          Sign In <FaAngleDoubleRight />
        </button>
      </div>
    </>
  );
};

export default SignIn;
