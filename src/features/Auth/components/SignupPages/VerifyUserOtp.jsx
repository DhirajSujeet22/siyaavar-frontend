import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { signUpModel, verify_otp } from "../../AuthSlice";

const VerifyOTP = () => {
  const modalIsOpen = useSelector((state) => state.auth.verifyOtp);
  const dispatch = useDispatch();

  return (
    <>
      <div className="flex relative z-10 justify-center items-center h-screen">
        {modalIsOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
            <div className="bg-[#f8ecd6] rounded-lg p-6 relative w-full max-w-md sm:max-w-lg md:max-w-xl mx-4 shadow-lg">
              <div className="flex justify-between items-center mb-10">
                <img
                  src="https://i.imgur.com/HfWWL7R.png"
                  alt="Company Logo"
                  className="w-[10rem] sm:w-[15rem] md:w-[18rem]"
                />
                <button
                  onClick={() => dispatch(verify_otp(false))}
                  className="bg-gray-500 text-white px-3 py-1 rounded-full focus:outline-none transition duration-300 hover:bg-gray-600"
                >
                  X
                </button>
              </div>

              <h2 className="text-2xl font-bold text-center mb-6">
                Verify OTP
              </h2>

              {/* Error message for incorrect OTP */}
              {/* {otpError && (
                <p className="text-center text-red-500 mb-4">
                  Incorrect OTP entered.
                </p>
              )} */}

              <p className="text-center text-sm mb-4">
                OTP sent to your mobile number:{" "}
                <span className="font-bold">7428730894</span>
              </p>
              <p className="text-center text-sm mb-6">
                Please enter the four-digit OTP
              </p>

              <form className="space-y-6">
                <div className="grid grid-cols-4 gap-4">
                  <input
                    type="text"
                    maxLength="1"
                    className="w-full p-3 border border-gray-300 text-center text-lg rounded-lg"
                    // Handle OTP input logic
                    // onChange={(e) => handleOtpInput(e, 0)}
                  />
                  <input
                    type="text"
                    maxLength="1"
                    className="w-full p-3 border border-gray-300 text-center text-lg rounded-lg"
                    // onChange={(e) => handleOtpInput(e, 1)}
                  />
                  <input
                    type="text"
                    maxLength="1"
                    className="w-full p-3 border border-gray-300 text-center text-lg rounded-lg"
                    // onChange={(e) => handleOtpInput(e, 2)}
                  />
                  <input
                    type="text"
                    maxLength="1"
                    className="w-full p-3 border border-gray-300 text-center text-lg rounded-lg"
                    // onChange={(e) => handleOtpInput(e, 3)}
                  />
                </div>

                <button
                  type="button"
                  className="bg-orange-500 w-full text-white px-6 py-3 rounded-lg shadow-lg transition duration-300 hover:bg-orange-600"
                  // onClick={handleVerifyOtp}
                >
                  Verify OTP
                </button>
              </form>

              <div className="flex justify-between items-center mt-4 text-sm">
                <button
                  type="button"
                  className="text-blue-500 cursor-pointer"
                  // onClick={handleResendOtp}
                >
                  Resend OTP
                </button>
                <button
                  type="button"
                  className="text-blue-500 cursor-pointer"
                  onClick={() => {
                    dispatch(signUpModel(true));
                    dispatch(verify_otp(false));
                  }}
                >
                  back?
                </button>
              </div>

              <p className="text-center text-xs mt-4 text-gray-600">
                Make sure you entered the correct mobile number or email.
              </p>
              <p className="text-center text-xs text-gray-600">
                Check your spam folder and mark us as 'Not Spam' to ensure
                future emails reach your inbox.
              </p>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default VerifyOTP;
