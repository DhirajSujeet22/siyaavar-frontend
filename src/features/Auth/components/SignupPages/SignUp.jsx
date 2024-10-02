// import React, { useState } from "react";
// import { Link, Navigate } from "react-router-dom";
// import { useForm } from "react-hook-form";
// import { FaEye, FaEyeSlash } from "react-icons/fa";
// import {
//   CreateUserAsync,
//   selectLoggedInUserToken,
//   selectStatus,
// } from "../AuthSlice";
// import { useDispatch, useSelector } from "react-redux";

// const SignUp = () => {
//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//   } = useForm();

//   const [showPassword, setShowPassword] = useState(false);
//   const Status = useSelector(selectStatus);
//   const UserKey = useSelector(selectLoggedInUserToken);
//   const dispatch = useDispatch();

//   return (
//     <>
//       {!!UserKey && <Navigate to="/" replace={true} />}
//       <div className="min-h-screen flex flex-col lg:flex-row justify-center items-center bg-ghostWhite px-6 py-12">
//         <div className="w-full lg:w-1/2 px-1 py-10 sm:px-[5rem]">
//           <h2 className="text-center text-3xl font-bold text-gray-900 mb-6">
//             Create Your Account
//           </h2>
//           <form
//             className="mt-8 space-y-6"
//             onSubmit={handleSubmit((data) => {
//               dispatch(
//                 CreateUserAsync({
//                   name: data.name,
//                   email: data.email,
//                   password: data.password,
//                   addresses: [],
//                   role: "user",
//                 })
//               );
//             })}
//           >
//             <div>
//               <label
//                 htmlFor="name"
//                 className="block text-sm font-medium text-gray-700"
//               >
//                 Name
//               </label>
//               <input
//                 id="name"
//                 {...register("name", {
//                   required: "Name is Required",
//                 })}
//                 type="text"
//                 className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-gray-500 focus:ring-gray-500 sm:text-sm"
//               />
//               <p className="text-red-500 text-xs mt-1">
//                 {errors.name && errors.name.message}
//               </p>
//             </div>
//             <div>
//               <label
//                 htmlFor="email"
//                 className="block text-sm font-medium text-gray-700"
//               >
//                 Email Address
//               </label>
//               <input
//                 id="email"
//                 {...register("email", {
//                   required: "Email is Required",
//                   pattern: {
//                     value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
//                     message: "Email is not valid",
//                   },
//                 })}
//                 type="email"
//                 className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-gray-500 focus:ring-gray-500 sm:text-sm"
//               />
//               <p className="text-red-500 text-xs mt-1">
//                 {errors.email && errors.email.message}
//               </p>
//             </div>
//             <div>
//               <label
//                 htmlFor="password"
//                 className="block text-sm font-medium text-gray-700"
//               >
//                 Password
//               </label>
//               <div className="relative">
//                 <input
//                   id="password"
//                   {...register("password", {
//                     required: "Password is Required",
//                     pattern: {
//                       value:
//                         /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm,
//                       message:
//                         "Password must be at least 8 characters, contain 1 uppercase, 1 lowercase, and 1 number",
//                     },
//                   })}
//                   type={showPassword ? "text" : "password"}
//                   className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-gray-500 focus:ring-gray-500 sm:text-sm"
//                 />
//                 <div
//                   className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer"
//                   onClick={() => setShowPassword(!showPassword)}
//                 >
//                   {showPassword ? <FaEye /> : <FaEyeSlash />}
//                 </div>
//               </div>
//               <p className="text-red-500 text-xs mt-1">
//                 {errors.password && errors.password.message}
//               </p>
//             </div>
//             <div>
//               <label
//                 htmlFor="confirm-password"
//                 className="block text-sm font-medium text-gray-700"
//               >
//                 Confirm Password
//               </label>
//               <div className="relative">
//                 <input
//                   id="confirm_password"
//                   {...register("confirm_password", {
//                     required: "Confirm password is required",
//                     validate: (value, formValues) =>
//                       value === formValues.password || "Passwords do not match",
//                   })}
//                   type={showPassword ? "text" : "password"}
//                   className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-gray-500 focus:ring-gray-500 sm:text-sm"
//                 />
//                 <div
//                   className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer"
//                   onClick={() => setShowPassword(!showPassword)}
//                 >
//                   {showPassword ? <FaEye /> : <FaEyeSlash />}
//                 </div>
//               </div>
//               <p className="text-red-500 text-xs mt-1">
//                 {errors.confirm_password && errors.confirm_password.message}
//               </p>
//             </div>
//             <div>
//               <button
//                 type="submit"
//                 className="w-full rounded-md bg-yellow-400 py-2 px-4 text-sm font-semibold text-black shadow-sm  focus-visible:ring-2 "
//                 disabled={Status}
//               >
//                 {Status ? (
//                   <div className="inline-block text-black h-6 w-6 mr-2 animate-spin rounded-full border-2 border-solid border-current border-r-transparent" />
//                 ) : (
//                   "Sign Up"
//                 )}
//               </button>
//             </div>
//           </form>

//           <p className="mt-10 text-center text-sm text-gray-600">
//             Already a member?{" "}
//             <Link
//               to="/login"
//               className="font-semibold text-indigo-600 hover:text-indigo-500"
//             >
//               Login
//             </Link>
//           </p>
//         </div>

//         <div className="w-full lg:w-1/3 flex justify-center items-center">
//           <img
//             src="https://i.imgur.com/WzVRbsc.png"
//             alt="Sign Up Illustration"
//             className="w-full"
//           />
//         </div>
//       </div>
//     </>
//   );
// };

// export default SignUp;

import React from "react";
import { signUpModel } from "../../AuthSlice";
import { useDispatch, useSelector } from "react-redux";
const SignUp = () => {
  const modalIsOpen = useSelector((state) => state.auth.signUpPop);
  const dispatch = useDispatch();

  return (
    <div className="flex relative z-50 justify-center items-center h-screen">
      {/* Modal */}
      {modalIsOpen && (
        <div
          style={{ scrollbarWidth: "none" }}
          className="fixed inset-0 s  overflow-y-auto bg-black bg-opacity-50 flex justify-center items-center"
        >
          <div className="bg-[#f8ecd6] mt-[0%] rounded-lg p-6 relative w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl mx-4 shadow-lg">
            {/* Modal Header */}
            <div className="flex justify-between items-center mb-10">
              <button
                onClick={() => dispatch(signUpModel(false))} // Back button functionality
                className="text-gray-500 px-3 py-1 rounded-full focus:outline-none transition duration-300 hover:bg-gray-300"
              >
                Back
              </button>
              <img
                src="https://i.imgur.com/HfWWL7R.png" // Replace with your logo's path
                alt="Company Logo"
                className="w-[10rem] sm:w-[15rem] md:w-[18rem]"
              />
              <button
                onClick={() => dispatch(signUpModel(false))}
                className="bg-gray-500 text-white px-3 py-1 rounded-full focus:outline-none transition duration-300 hover:bg-gray-600"
              >
                X
              </button>
            </div>
            <h2 className="text-2xl font-bold text-center mb-6">Sign Up</h2>
            <p className="text-[1rem] text-center mb-6">
              You are creating an account using{" "}
              <span className="text-gray-500">7428723247</span>{" "}
              <span
                onClick={() => dispatch(signUpModel(false))}
                className="text-red-500 cursor-pointer"
              >
                Edit
              </span>
              <br /> OTP will be sent to your mobile number for verification
            </p>

            {/* Sign-up Form */}
            <form className="space-y-10">
              <input
                type="text"
                placeholder="Full Name"
                className="w-full p-3 border border-gray-300 rounded-lg"
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full p-3 border border-gray-300 rounded-lg"
              />

              {/* Gender Selection */}
              <div className="flex flex-col">
                <label htmlFor="gender" className="text-sm mb-2">
                  Gender
                </label>
                <select
                  id="gender"
                  className="w-full p-3 border border-gray-300 rounded-lg"
                >
                  <option value="">Select Gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                </select>
              </div>

              <div className="flex items-center">
                <input type="checkbox" id="rememberMe" className="mr-2" />
                <label htmlFor="rememberMe" className="text-sm">
                  By Signing Up, I agree to the Terms of Use and Privacy Policy
                </label>
              </div>
            </form>

            {/* Request OTP Button */}
            <div className="text-center mt-6">
              <button
                type="button"
                className="bg-orange-500 w-full sm:w-[20rem] text-white px-6 py-3 rounded-lg shadow-lg transition duration-300 hover:bg-orange-600"
              >
                REQUEST OTP
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SignUp;
