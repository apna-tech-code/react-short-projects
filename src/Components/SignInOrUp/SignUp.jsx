import React from "react";
import { FaAngleDoubleRight } from "react-icons/fa";
import { toast } from "react-toastify";
import RenderPasswordField from "./RenderPasswordField";

const SignUp = () => {
  return (
    <>
      <h1 className="text-align-center">Sign Up</h1>
      <div className="content">
        <div>
          <label htmlFor="email">Email</label>
          <input
            id="email"
            name="email"
            type="text"
            placeholder="Enter Email"
            autoComplete="off"
          ></input>
        </div>
        <br />
        <RenderPasswordField name="password" label={"Password"} />
        <br />
        <RenderPasswordField
          name="confirmPassword"
          label={"Confirm Password"}
        />
        <button
          type="button"
          className="btn"
          onClick={() => toast.error("Please fill the detail.")}
        >
          Sign Up
          <FaAngleDoubleRight />
        </button>
      </div>
    </>
  );
};

export default SignUp;
