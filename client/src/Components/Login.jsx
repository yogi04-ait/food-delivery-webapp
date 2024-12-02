import React, { useState } from "react";
import Footer from "./Footer";
import Logo from "../assets/LOGO1.png";
import SignupForm from "./Signup";
import SigninForm from "./Signin";

const Login = () => {
  const [isSignup, setIsSignup] = useState(true); // true for Signup, false for Signin

  const toggleForm = () => {
    setIsSignup((prev) => !prev);
  };

  return (
    <div className="flex flex-col w-full">
      <div className="flex p-2 justify-between">
        <div className="m-auto">
          <img
            src={Logo}
            width="130px"
            className="mb-5 mt-5 ml-16"
            alt="logo"
          />
          {isSignup ? <SignupForm /> : <SigninForm />}
          <p className="text-sm text-[#313957] text-center mt-5 mb-12 self-center">
            {isSignup ? (
              <>
                Already have an account?{" "}
                <a
                  className="text-[#FC8A06] no-underline cursor-pointer"
                  onClick={toggleForm}
                >
                  Sign in
                </a>
              </>
            ) : (
              <>
                Don't have an account?{" "}
                <a
                  className="text-[#FC8A06] no-underline cursor-pointer"
                  onClick={toggleForm}
                >
                  Sign up
                </a>
              </>
            )}
          </p>
        </div>
        <div className="">
          <img
            src="../src/assets/burger.png"
            width="440px"
            alt="burger image"
          />
        </div>
      </div>
      <div className=" bg-[#D9D9D9] w-full">
        <Footer />
      </div>
    </div>
  );
};

export default Login;
