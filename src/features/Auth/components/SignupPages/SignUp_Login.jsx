import React, { useState } from "react";
import { signUp_Login_Model } from "../../AuthSlice";
import { useDispatch, useSelector } from "react-redux";
import { FaGoogle, FaInstagram, FaEye, FaEyeSlash } from "react-icons/fa";
import { MdCancel } from "react-icons/md";
import "./Signup.css";
const SignUp_Login = () => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const modalIsOpen = useSelector((state) => state.auth.signUpLoginPopUp);
  const dispatch = useDispatch();

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  return (
    <div className="flex relative z-10 justify-center items-center ">
      {modalIsOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-[#f8ecd6] rounded-lg p-5 relative w-full max-w-md sm:max-w-lg md:max-w-1xl mx-4 shadow-lg overflow-hidden">
            {/* Logo and Close Button */}
            <div className="flex justify-between items-center mb-6">
              <img
                src="https://i.imgur.com/HfWWL7R.png"
                alt="Company Logo"
                className="w-[10rem] sm:w-[15rem] md:w-[18rem]"
              />
              <button
                onClick={() => dispatch(signUp_Login_Model(false))}
                className=" text-gray-800 text-[2rem]"
              >
                <MdCancel />
              </button>
            </div>

            {/* Container for the sliding pages */}
            <div className="relative w-full h-[500px] sm:h-[500px] overflow-hidden">
              {/* Sign-Up Form */}
              <div
                className={`absolute w-full h-full transition-transform duration-500 ease-in-out ${
                  isSignUp ? "translate-x-0" : "translate-x-full"
                }`}
              >
                <h2 className="text-2xl font-bold text-center mb-4">Sign Up</h2>
                <form className="space-y-6">
                  <input
                    type="text"
                    placeholder="Enter Username"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-gray-500"
                  />

                  {/* Flex container for Username and Mobile Number */}
                  <div className="flex gap-5 sm:gap-0 sm:flex-row sm:space-x-4">
                    <input
                      type="text"
                      placeholder="Enter Name"
                      className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-gray-500"
                    />
                    <input
                      type="number"
                      pattern="[0-9]*"
                      placeholder="Enter Phone"
                      className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-gray-500"
                      style={{
                        appearance: "none",
                        MozAppearance: "textfield",
                        WebkitAppearance: "none",
                      }}
                    />
                  </div>

                  <input
                    type="email"
                    placeholder="Enter Email"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-gray-500"
                  />

                  <div className="relative">
                    <input
                      type={showPassword ? "text" : "password"}
                      placeholder="Enter Password"
                      className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-gray-500"
                    />
                    <button
                      type="button"
                      onClick={togglePasswordVisibility}
                      className="absolute right-3 top-4 text-gray-500"
                    >
                      {showPassword ? <FaEyeSlash /> : <FaEye />}
                    </button>
                  </div>

                  <div className="flex items-center">
                    <input type="checkbox" id="terms" className="mr-2" />
                    <label htmlFor="terms" className="text-sm">
                      I agree to the{" "}
                      <span className="text-blue-500 cursor-pointer">
                        Terms of Use
                      </span>{" "}
                      and{" "}
                      <span className="text-blue-500 cursor-pointer">
                        Privacy Policy
                      </span>
                      .
                    </label>
                  </div>
                </form>

                <div className="text-center mt-5">
                  <button
                    type="button"
                    className="bg-orange-500 w-full sm:w-[20rem] text-white px-6 py-3 rounded-lg shadow-lg transition duration-300 hover:bg-orange-600"
                  >
                    Sign Up
                  </button>
                </div>

                {/* Button to go to Login */}
                <div className="text-center mt-4">
                  <p>
                    Already have an account?{" "}
                    <button
                      onClick={() => setIsSignUp(false)}
                      className="text-blue-500 cursor-pointer"
                    >
                      Login
                    </button>
                  </p>
                </div>
              </div>

              {/* Login Form */}
              <div
                className={`absolute w-full h-full transition-transform duration-500 ease-in-out ${
                  isSignUp ? "-translate-x-full" : "translate-x-0"
                }`}
              >
                <h2 className="text-2xl font-bold text-center mb-6">Login</h2>
                <form className="space-y-6">
                  <input
                    type="email"
                    placeholder="Enter Email / Username"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-gray-500"
                  />
                  <div className="relative">
                    <input
                      type={showPassword ? "text" : "password"}
                      placeholder="Enter Password"
                      className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-gray-500"
                    />
                    <button
                      type="button"
                      onClick={togglePasswordVisibility}
                      className="absolute right-3 top-4 text-gray-500"
                    >
                      {showPassword ? <FaEyeSlash /> : <FaEye />}
                    </button>
                  </div>
                </form>

                <div className="text-center mt-6">
                  <button
                    type="button"
                    className="bg-blue-500 w-full sm:w-[20rem] text-white px-6 py-3 rounded-lg shadow-lg transition duration-300 hover:bg-blue-600"
                  >
                    Login
                  </button>
                </div>

                <div className="text-center mt-6">
                  <p className="text-sm mb-4">Or login with social accounts</p>
                  <div className="flex justify-center space-x-6">
                    <a
                      href="#"
                      className="text-red-600 hover:text-red-800 flex items-center text-2xl"
                    >
                      <FaGoogle />
                    </a>
                    <a
                      href="#"
                      className="text-pink-600 hover:text-pink-800 flex items-center text-2xl"
                    >
                      <FaInstagram />
                    </a>
                  </div>
                </div>

                {/* Button to go back to Sign Up */}
                <div className="text-center mt-4">
                  <p>
                    Don’t have an account?{" "}
                    <button
                      onClick={() => setIsSignUp(true)}
                      className="text-blue-500 cursor-pointer"
                    >
                      Sign Up
                    </button>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SignUp_Login;
