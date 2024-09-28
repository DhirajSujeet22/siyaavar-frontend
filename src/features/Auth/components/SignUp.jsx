import React, { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import {
  CreateUserAsync,
  selectLoggedInUserToken,
  selectStatus,
} from "../AuthSlice";
import { useDispatch, useSelector } from "react-redux";

const SignUp = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [showPassword, setShowPassword] = useState(false);
  const Status = useSelector(selectStatus);
  const UserKey = useSelector(selectLoggedInUserToken);
  const dispatch = useDispatch();

  return (
    <>
      {!!UserKey && <Navigate to="/" replace={true} />}
      <div className="min-h-screen flex flex-col lg:flex-row justify-center items-center bg-ghostWhite px-6 py-12">
        <div className="w-full lg:w-1/2 px-1 py-10 sm:px-[5rem]">
          <h2 className="text-center text-3xl font-bold text-gray-900 mb-6">
            Create Your Account
          </h2>
          <form
            className="mt-8 space-y-6"
            onSubmit={handleSubmit((data) => {
              dispatch(
                CreateUserAsync({
                  name: data.name,
                  email: data.email,
                  password: data.password,
                  addresses: [],
                  role: "user",
                })
              );
            })}
          >
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                Name
              </label>
              <input
                id="name"
                {...register("name", {
                  required: "Name is Required",
                })}
                type="text"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-gray-500 focus:ring-gray-500 sm:text-sm"
              />
              <p className="text-red-500 text-xs mt-1">
                {errors.name && errors.name.message}
              </p>
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email Address
              </label>
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
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-gray-500 focus:ring-gray-500 sm:text-sm"
              />
              <p className="text-red-500 text-xs mt-1">
                {errors.email && errors.email.message}
              </p>
            </div>
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                Password
              </label>
              <div className="relative">
                <input
                  id="password"
                  {...register("password", {
                    required: "Password is Required",
                    pattern: {
                      value:
                        /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm,
                      message:
                        "Password must be at least 8 characters, contain 1 uppercase, 1 lowercase, and 1 number",
                    },
                  })}
                  type={showPassword ? "text" : "password"}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-gray-500 focus:ring-gray-500 sm:text-sm"
                />
                <div
                  className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <FaEye /> : <FaEyeSlash />}
                </div>
              </div>
              <p className="text-red-500 text-xs mt-1">
                {errors.password && errors.password.message}
              </p>
            </div>
            <div>
              <label
                htmlFor="confirm-password"
                className="block text-sm font-medium text-gray-700"
              >
                Confirm Password
              </label>
              <div className="relative">
                <input
                  id="confirm_password"
                  {...register("confirm_password", {
                    required: "Confirm password is required",
                    validate: (value, formValues) =>
                      value === formValues.password || "Passwords do not match",
                  })}
                  type={showPassword ? "text" : "password"}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-gray-500 focus:ring-gray-500 sm:text-sm"
                />
                <div
                  className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <FaEye /> : <FaEyeSlash />}
                </div>
              </div>
              <p className="text-red-500 text-xs mt-1">
                {errors.confirm_password && errors.confirm_password.message}
              </p>
            </div>
            <div>
              <button
                type="submit"
                className="w-full rounded-md bg-indigo-600 py-2 px-4 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:ring-2 focus-visible:ring-indigo-600"
                disabled={Status}
              >
                {Status ? (
                  <div className="inline-block h-6 w-6 mr-2 animate-spin rounded-full border-2 border-solid border-current border-r-transparent" />
                ) : (
                  "Sign Up"
                )}
              </button>
            </div>
          </form>

          <p className="mt-10 text-center text-sm text-gray-600">
            Already a member?{" "}
            <Link
              to="/login"
              className="font-semibold text-indigo-600 hover:text-indigo-500"
            >
              Login
            </Link>
          </p>
        </div>

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

export default SignUp;
