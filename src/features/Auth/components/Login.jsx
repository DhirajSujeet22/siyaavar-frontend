import React, { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import {
  loginUserAsync,
  selectError,
  selectLoggedInUserToken,
  selectLoginStatus,
  selectStatus,
} from "../AuthSlice";
import { useDispatch, useSelector } from "react-redux";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [showPassword, setShowPassword] = useState(false);
  const Status = useSelector(selectStatus);
  const LoginStatus = useSelector(selectLoginStatus);
  const error = useSelector(selectError);
  const UserKey = useSelector(selectLoggedInUserToken);

  const dispatch = useDispatch();

  // Social login functionality
  // const LoginWithGoogle = () => {
  //   window.open(
  //     "https://mern-commerce-backend-64fw.onrender.com/auth/google/callback",
  //     "_self"
  //   );
  // };

  return (
    <>
      {!!UserKey && <Navigate to="/" replace={true} />}
      <div className="min-h-screen flex flex-col lg:flex-row justify-center items-center bg-ghostWhite px-6 py-12">
        <div className="w-full lg:w-1/2 px-1 py-10 sm:px-[5rem]">
          <h2 className="text-center text-3xl font-bold text-gray-900 mb-10">
            Login to Your Account
          </h2>

          <form
            className="space-y-6"
            onSubmit={handleSubmit((data) => {
              dispatch(
                loginUserAsync({
                  name: data.name,
                  email: data.email,
                  password: data.password,
                })
              );
            })}
          >
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-900"
              >
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  {...register("email", {
                    required: "Email is Required",
                    pattern: {
                      value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                      message: "Email is not valid",
                    },
                  })}
                  type="email"
                  className="block w-full rounded-md py-2 px-4 text-gray-900 shadow-sm ring-1 ring-gray-300 focus:ring-indigo-600 focus:ring-2 sm:text-sm"
                />
                <p className="text-red-600 text-xs font-semibold mt-1">
                  {errors.email && errors.email.message}
                </p>
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-900"
                >
                  Password
                </label>
                <div className="text-sm">
                  <Link
                    to="/Forgot_Password"
                    className="font-semibold text-indigo-600 hover:text-indigo-500"
                  >
                    Forgot password?
                  </Link>
                </div>
              </div>
              <div className="mt-2 relative">
                <input
                  id="password"
                  {...register("password", {
                    required: "Password is Required",
                  })}
                  type={showPassword ? "text" : "password"}
                  className="block w-full rounded-md py-2 px-4 text-gray-900 shadow-sm ring-1 ring-gray-300 focus:ring-indigo-600 focus:ring-2 sm:text-sm"
                />
                <div
                  className="absolute inset-y-0 right-4 flex items-center cursor-pointer"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <FaEye /> : <FaEyeSlash />}
                </div>
                <p className="text-red-600 text-xs font-semibold mt-1">
                  {errors.password && errors.password.message}
                  {error && LoginStatus ? error.message : null}
                </p>
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="w-full rounded-md bg-yellow-400 py-2 px-4 text-sm font-semibold text-black shadow-sm  focus-visible:ring-2"
                disabled={Status}
              >
                {Status ? (
                  <div className="h-6 w-6 text-black m-auto border-2 border-current border-t-transparent animate-spin rounded-full" />
                ) : (
                  "Login"
                )}
              </button>
            </div>
          </form>

          <span className="block mt-6 text-center font-medium text-gray-700">
            or
          </span>

          <div className="flex flex-col sm:flex-row mt-4 gap-4 sm:gap-2">
            <button
              // onClick={LoginWithGoogle}
              className="group w-full h-12 px-3 border-2 border-gray-300 rounded-full transition duration-300 flex items-center justify-center hover:bg-gray-50"
            >
              <img
                src="https://www.svgrepo.com/show/475656/google-color.svg"
                className="w-6 mr-2"
                alt="Google Logo"
              />
              <span className="font-semibold text-gray-700">
                Login with Google
              </span>
            </button>
          </div>

          <div className="flex flex-col sm:flex-row mt-4 gap-4 sm:gap-2">
            <button
              // onClick={LoginWithGoogle}
              className="group w-full h-12 px-3 border-2 border-gray-300 rounded-full transition duration-300 flex items-center justify-center hover:bg-gray-50"
            >
              <img
                src="https://cdn2.iconfinder.com/data/icons/social-icons-33/128/Instagram-256.png"
                className="w-6 mr-2"
                alt="Google Logo"
              />
              <span className="font-semibold text-gray-700">
                Login with Instagram
              </span>
            </button>
          </div>

          <p className="mt-10 text-center text-sm text-gray-600">
            Not a member?{" "}
            <Link
              to="/signup"
              className="font-semibold text-indigo-600 hover:text-indigo-500"
            >
              Create an Account
            </Link>
          </p>

          <p className="mt-3 text-center text-sm text-gray-600">
            <Link
              to="/"
              className="font-semibold text-red-600 hover:text-indigo-500"
            >
              Back to Home
            </Link>
          </p>
        </div>
        {/* Left Side: Image */}
        <div className="w-full lg:w-1/3 flex justify-center items-center">
          <img
            src="https://i.imgur.com/WzVRbsc.png"
            alt="Sign Up Illustration"
            className="w-full"
          />
        </div>
      </div>
    </>
  );
};

export default Login;
