import React, { useState } from "react";
import "./signInOrUp.css";
import SignIn from "./SignIn";
import SignUp from "./SignUp";

const SignInOrSignUpWrapper = () => {
  const [isSignIn, setIsSignIn] = useState(true);

  return (
    <div className="sign-in-main-card">
      <div>
        <div className="btn-grp">
          <button
            type="button"
            className={isSignIn ? "btn-capsule-filled" : "btn-capsule"}
            onClick={() => setIsSignIn(!isSignIn)}
          >
            Sign In
          </button>
          <button
            type="button"
            className={!isSignIn ? "btn-capsule-filled" : "btn-capsule"}
            onClick={() => setIsSignIn(!isSignIn)}
          >
            Sign Up
          </button>
        </div>
        <br />
        <div className={`flip-card`}>
          <div className={`flip-card-inner ${isSignIn ? "up" : "down"}`}>
            <div className="flip-card-front">
              <SignIn />
            </div>
            <div className="flip-card-back">
              <SignUp />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignInOrSignUpWrapper;
