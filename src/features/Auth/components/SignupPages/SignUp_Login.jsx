import React, { useState } from "react";
import { signUpModel, signUp_Login_Model } from "../../AuthSlice";
import { useDispatch, useSelector } from "react-redux";
import { FaGoogle, FaInstagram } from "react-icons/fa";
import SignUp from "./SignUp";
const SignUp_Login = () => {
  const modalIsOpen = useSelector((state) => state.auth.signUpLoginPopUp);
  const modalIsClose = useSelector((state) => state.auth.signUpPop);
  console.log(modalIsOpen);
  console.log(modalIsClose);
  const dispatch = useDispatch();

  // const [open, setOpen] = useState(false);

  return (
    <div className="flex relative z-10 justify-center items-center h-screen">
      {modalIsOpen && (
        <div className="fixed  inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-[#f8ecd6] rounded-lg p-6 relative w-full max-w-md sm:max-w-lg md:max-w-xl mx-4 shadow-lg">
            <div className="flex justify-between items-center mb-10">
              <img
                src="https://i.imgur.com/HfWWL7R.png"
                alt="Company Logo"
                className="w-[10rem] sm:w-[15rem] md:w-[18rem]"
              />
              <button
                onClick={() => dispatch(signUp_Login_Model(false))}
                className="bg-gray-500 text-white px-3 py-1 rounded-full focus:outline-none transition duration-300 hover:bg-gray-600"
              >
                X
              </button>
            </div>
            <h2 className="text-2xl font-bold text-center mb-6">
              Sign In / Sign Up
            </h2>

            <form className="space-y-10">
              <input
                type="tel"
                placeholder="Enter Mobile Number"
                className="w-full p-3 border border-gray-300 rounded-lg"
              />
              <div className="flex items-center">
                <input type="checkbox" id="rememberMe" className="mr-2" />
                <label htmlFor="rememberMe" className="text-sm">
                  Remember Me
                </label>
              </div>
            </form>

            <p className="text-center text-sm my-4">
              By Signing In, I agree to the{" "}
              <span className="text-blue-500 cursor-pointer">Terms of Use</span>{" "}
              and{" "}
              <span className="text-blue-500 cursor-pointer">
                Privacy Policy
              </span>
              .
            </p>

            <div className="text-center mt-6">
              <button
                onClick={() => {
                  // dispatch(signUp_Login_Model(false));
                  dispatch(signUpModel(true));
                }}
                type="button"
                className="bg-orange-500 w-full sm:w-[20rem] text-white px-6 py-3 rounded-lg shadow-lg transition duration-300 hover:bg-orange-600"
              >
                Continue
              </button>
            </div>

            {modalIsClose && <SignUp />}

            <div className="text-center mt-6">
              <p className="text-sm">Or continue with social accounts</p>
              <div className="flex justify-center space-x-4 mt-6">
                <a
                  href="#"
                  className="text-pink-600 hover:text-pink-800 flex items-center"
                >
                  <FaGoogle className="mr-1" />
                </a>
                <a
                  href="#"
                  className="text-pink-600 hover:text-pink-800 flex items-center"
                >
                  <FaInstagram className="mr-1" />
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SignUp_Login;
