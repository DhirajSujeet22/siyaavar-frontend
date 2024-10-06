import React from "react";
import { MdOutlineEmail } from "react-icons/md";
import {
  IoChatboxOutline,
  IoCallOutline,
  IoLogoWhatsapp,
  IoLocationOutline,
  IoLogoInstagram,
  IoLogoTwitter,
  IoLogoFacebook,
} from "react-icons/io5";
const ContactUs = () => {
  return (
    <>
      <div className="min-h-screen bg-[#faf8f2] py-10 px-4 md:px-0">
        {/* Container with Flexbox */}
        <div className="flex flex-col md:flex-row items-start justify-center mx-auto max-w-5xl w-full gap-10 md:gap-20">
          {/* Left Side - Get in Touch */}
          <div className="md:w-1/2 mt-10">
            <h1 className="text-3xl md:text-5xl text-center font-bold text-gray-900 mb-6 md:mb-8">
              Contact Us
            </h1>

            <h2 className="text-lg text-center mb-[3rem] font-medium text-gray-900">
              Our friendly team is always here to chat.
            </h2>

            {/* Row with two pairs of columns */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {/* Customer Service */}
              <div className="flex flex-col items-center text-center p-4 border border-gray-200 rounded-lg">
                <div className="flex justify-center mb-3">
                  <IoCallOutline className="text-teal-600 text-3xl" />
                </div>
                <h2 className="text-xl font-semibold text-gray-800 mb-2">
                  Customer Service
                </h2>
                <p className="text-gray-700 mb-1">
                  <span className="font-bold text-gray-900">8825135770</span>
                </p>
                <p className="text-gray-700 mb-1">
                  <span className="font-bold text-gray-900">9708100677</span>
                </p>
                <p className="text-gray-700">Call us from 9am to 9 pm.</p>
              </div>

              {/* Chat with Us */}
              <div className="flex flex-col items-center text-center p-4 border border-gray-200 rounded-lg">
                <div className="flex justify-center mb-3">
                  <IoChatboxOutline className="text-teal-600 text-3xl" />
                </div>
                <h2 className="text-xl font-semibold text-gray-800 mb-2">
                  Chat with Us
                </h2>
                <p className="text-gray-700">Daily: 9 am to 10 pm</p>
                <p className="text-teal-600 font-semibold cursor-pointer">
                  Chat Now
                </p>
              </div>
            </div>

            <h2 className="text-3xl md:text-3xl text-center font-[400] text-gray-800 mb-6 md:mb-8">
              Contact Information
            </h2>

            <h3 className="text-md text-center mb-[3rem] font-medium text-gray-700">
              Sakhi Saheli Wholeselar Bazar Bikramganj, Rohtas, <hr /> Bihar
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {/* Contact Information */}
              <div className="flex flex-col items-center text-center p-4 border border-gray-200 rounded-lg">
                <div className="flex justify-center mb-3">
                  <IoLocationOutline className="text-teal-600 text-3xl" />
                </div>
                <h2 className="text-xl font-semibold text-gray-800 mb-2">
                  Contact Information
                </h2>
                <p className="text-gray-700">Sakhi Saheli Wholesaler Bazar</p>
                <p className="text-gray-700">Bikramganj, Rohtas, Bihar</p>
              </div>

              {/* Email Us */}
              <div className="flex flex-col items-center text-center p-4 border border-gray-200 rounded-lg">
                <div className="flex justify-center mb-3">
                  <MdOutlineEmail className="text-teal-600 text-3xl" />
                </div>
                <h2 className="text-xl font-semibold text-gray-800 mb-2">
                  Email Us
                </h2>
                <p className="text-gray-700">nitinkumarankit95@gmail.com</p>
                <p className="text-gray-700">info@flipzoan.com</p>
              </div>
            </div>

            {/* Social Icons */}
            <div className="flex justify-center gap-10 mt-10">
              <a href="#" className="text-gray-700 hover:text-teal-600">
                <IoLogoWhatsapp className="text-2xl" />
              </a>
              <a href="#" className="text-gray-700 hover:text-teal-600">
                <IoLogoInstagram className="text-2xl" />
              </a>
              <a href="#" className="text-gray-700 hover:text-teal-600">
                <IoLogoTwitter className="text-2xl" />
              </a>
              <a href="#" className="text-gray-700 hover:text-teal-600">
                <IoLogoFacebook className="text-2xl" />
              </a>
            </div>
          </div>

          {/* Right Side - Form */}
          <div className="md:w-1/2 bg-[#faf8f2] p-6 rounded-lg">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">
              Drop us a line
            </h2>
            <form className="space-y-6">
              <div>
                <label
                  className="block text-gray-700 font-semibold mb-2"
                  htmlFor="subject"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  placeholder="Enter Subject"
                  className="border border-gray-300 p-3 rounded-lg w-full focus:ring-teal-500 focus:border-teal-500"
                />
              </div>
              <div>
                <label
                  className="block text-gray-700 font-semibold mb-2"
                  htmlFor="fullName"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  id="fullName"
                  placeholder="Enter Your Name"
                  className="border border-gray-300 p-3 rounded-lg w-full focus:ring-teal-500 focus:border-teal-500"
                />
              </div>
              <div>
                <label
                  className="block text-gray-700 font-semibold mb-2"
                  htmlFor="email"
                >
                  Email ID
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="Enter Your Email"
                  className="border border-gray-300 p-3 rounded-lg w-full focus:ring-teal-500 focus:border-teal-500"
                />
              </div>
              <div className="flex gap-4">
                <div className="w-1/2">
                  <label
                    className="block text-gray-700 font-semibold mb-2"
                    htmlFor="country"
                  >
                    Country
                  </label>
                  <input
                    type="text"
                    id="country"
                    placeholder="Enter Country"
                    className="border border-gray-300 p-3 rounded-lg w-full focus:ring-teal-500 focus:border-teal-500"
                  />
                </div>
                <div className="w-1/2">
                  <label
                    className="block text-gray-700 font-semibold mb-2"
                    htmlFor="city"
                  >
                    City
                  </label>
                  <input
                    type="text"
                    id="city"
                    placeholder="Enter City"
                    className="border border-gray-300 p-3 rounded-lg w-full focus:ring-teal-500 focus:border-teal-500"
                  />
                </div>
              </div>
              <div>
                <label
                  className="block text-gray-700 font-semibold mb-2"
                  htmlFor="mobile"
                >
                  Mobile Number
                </label>
                <input
                  type="tel"
                  id="mobile"
                  placeholder="Enter Mobile Number"
                  className="border border-gray-300 p-3 rounded-lg w-full focus:ring-teal-500 focus:border-teal-500"
                />
              </div>
              <div>
                <label
                  className="block text-gray-700 font-semibold mb-2"
                  htmlFor="orderNumber"
                >
                  Order Number
                </label>
                <input
                  type="text"
                  id="orderNumber"
                  placeholder="Enter Order Number"
                  className="border border-gray-300 p-3 rounded-lg w-full focus:ring-teal-500 focus:border-teal-500"
                />
              </div>
              <div>
                <label
                  className="block text-gray-700 font-semibold mb-2"
                  htmlFor="feedback"
                >
                  Feedback
                </label>
                <textarea
                  id="feedback"
                  placeholder="Enter Your Feedback"
                  rows="4"
                  className="border border-gray-300 p-3 rounded-lg w-full focus:ring-teal-500 focus:border-teal-500"
                ></textarea>
              </div>
              <button className="bg-teal-500 text-white font-semibold p-3 rounded-lg w-full hover:bg-teal-600 transition duration-200">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactUs;
