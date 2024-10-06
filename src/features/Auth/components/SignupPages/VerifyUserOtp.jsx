import React, { useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { signUpModel, verify_otp } from "../../AuthSlice";

const VerifyOTP = () => {
  const modalIsOpen = useSelector((state) => state.auth.verifyOtp);
  const dispatch = useDispatch();

  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const inputRefs = useRef([]);

  // Handle OTP input change
  const handleOtpInput = (e, index) => {
    const value = e.target.value;

    // Only allow digits and ensure the input is one character long
    if (!isNaN(value) && value.length === 1) {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);

      // Move focus to the next input field
      if (index < inputRefs.current.length - 1) {
        inputRefs.current[index + 1].focus();
      }
    }
  };

  // Handle backspace key press to move backward and clear value
  const handleBackspace = (e, index) => {
    if (e.keyCode === 8) {
      const newOtp = [...otp];

      // Clear the current input value
      newOtp[index] = "";
      setOtp(newOtp);

      // Move focus to the previous input field if the current input is empty
      if (index > 0) {
        inputRefs.current[index - 1].focus();
      }
    }
  };

  // Handle input click to ensure focus
  const handleFocus = (index) => {
    inputRefs.current[index].focus();
  };

  return (
    <>
      <div className="flex relative z-10 justify-center items-center min-h-screen">
        {modalIsOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
            <div className="bg-[#f8ecd6] rounded-lg p-6 relative w-full max-w-md mx-4 shadow-lg">
              <div className="flex justify-between items-center mb-10">
                <img
                  src="https://i.imgur.com/HfWWL7R.png"
                  alt="Company Logo"
                  className="w-32 sm:w-40 md:w-48"
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

              <p className="text-center text-sm mb-4">
                OTP sent to your mobile number:{" "}
                <span className="font-bold">7428730894</span>
              </p>
              <p className="text-center text-sm mb-6">
                Please enter the four-digit OTP
              </p>

              <form className="space-y-6">
                <div className="grid grid-cols-6 gap-3 sm:gap-4">
                  {otp.map((digit, index) => (
                    <input
                      key={index}
                      type="text"
                      maxLength="1"
                      className="w-full px-2 py-1 sm:px-3 sm:py-3 border border-gray-300 text-center text-lg rounded-lg"
                      value={digit}
                      onChange={(e) => handleOtpInput(e, index)}
                      onKeyDown={(e) => handleBackspace(e, index)}
                      onFocus={() => handleFocus(index)}
                      ref={(el) => (inputRefs.current[index] = el)}
                    />
                  ))}
                </div>

                <button
                  type="button"
                  className="bg-orange-500 w-full text-white px-6 py-3 rounded-lg shadow-lg transition duration-300 hover:bg-orange-600"
                >
                  Verify OTP
                </button>
              </form>

              <div className="flex justify-between items-center mt-4 text-sm">
                <button type="button" className="text-blue-500 cursor-pointer">
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
