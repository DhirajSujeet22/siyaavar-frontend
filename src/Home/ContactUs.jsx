import React from "react";
import { MdOutlineEmail } from "react-icons/md";
import {
  IoChatboxOutline,
  IoCallOutline,
  IoLogoWhatsapp,
} from "react-icons/io5";
const ContactUs = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen bg-[#fffbf2] p-6">
        {/* Title */}
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-6 md:mb-10 text-gray-800">
          Get in Touch
        </h1>

        {/* Call Us Section */}
        <div className="flex flex-col sm:flex-row items-center justify-center my-4 sm:my-8 space-x-0 sm:space-x-3 space-y-3 sm:space-y-0">
          <IoCallOutline className="text-teal-500 text-3xl md:text-4xl" />
          <h2 className="text-xl sm:text-2xl font-semibold text-gray-800">
            CALL US
          </h2>
        </div>
        <p className="text-gray-600 text-center sm:text-left mb-2">
          (India){" "}
          <span className="font-bold text-gray-800">1800 120 000 500</span> (Mon
          to Sat 10:00 am to 7:00 pm)
        </p>
        <p className="text-gray-600 text-center sm:text-left mb-6">
          (International){" "}
          <span className="font-bold text-gray-800">+91 9674373838</span>
        </p>

        {/* Contact Methods Section */}
        <div className="flex flex-col md:flex-row items-center md:items-start justify-center my-[5rem] w-full space-y-6 md:space-y-0 md:gap-[5rem]">
          {/* Email Us Section */}
          <div className="flex flex-col items-center mx-4 text-center">
            <MdOutlineEmail className="text-teal-500 text-2xl md:text-3xl mb-2" />
            <h3 className="text-lg md:text-xl font-semibold text-gray-800 mb-2">
              EMAIL US
            </h3>
            <p className="text-gray-600">care@vedantfashions.com</p>
          </div>

          {/* Chat with Us Section */}
          <div className="flex flex-col items-center mx-4 text-center">
            <IoChatboxOutline className="text-teal-500 text-2xl md:text-3xl mb-2" />
            <h3 className="text-lg md:text-xl font-semibold text-gray-800 mb-2">
              CHAT WITH US
            </h3>
            <p className="text-gray-600">Live Chat (10:00 am to 7:00 pm).</p>
          </div>

          {/* WhatsApp Section */}
          <div className="flex flex-col items-center mx-4 text-center">
            <IoLogoWhatsapp className="text-teal-500 text-2xl md:text-3xl mb-2" />
            <h3 className="text-lg md:text-xl font-semibold text-gray-800 mb-2">
              WHATSAPP
            </h3>
            <p className="text-gray-600">+91 90512 25122</p>
          </div>
        </div>

        {/* Next Phase Title */}
        <h2 className="text-2xl md:text-3xl font-[500] text-center mb-6 md:mb-10 text-gray-800">
          Drop us a line
        </h2>

        {/* Form Section */}
        <form className="max-w-lg md:max-w-2xl w-full">
          <div className="mb-4 md:mb-6">
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
              className="border bg-transparent border-yellow-500 p-3 rounded-lg w-full focus:ring-teal-500 focus:border-teal-500"
            />
          </div>
          <div className="mb-4 md:mb-6">
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
              className="border bg-transparent border-yellow-500 p-3 rounded-lg w-full focus:ring-teal-500 focus:border-teal-500"
            />
          </div>
          <div className="mb-4 md:mb-6">
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
              className="border bg-transparent border-yellow-500 p-3 rounded-lg w-full focus:ring-teal-500 focus:border-teal-500"
            />
          </div>

          {/* Country and City Inputs in one line */}
          <div className="flex flex-col md:flex-row gap-4 mb-4 md:mb-6">
            <div className="w-full md:w-1/2">
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
                className="border bg-transparent border-yellow-500 p-3 rounded-lg w-full focus:ring-teal-500 focus:border-teal-500"
              />
            </div>
            <div className="w-full md:w-1/2">
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
                className="border bg-transparent border-yellow-500 p-3 rounded-lg w-full focus:ring-teal-500 focus:border-teal-500"
              />
            </div>
          </div>

          <div className="mb-4 md:mb-6">
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
              className="border bg-transparent border-yellow-500 p-3 rounded-lg w-full focus:ring-teal-500 focus:border-teal-500"
            />
          </div>
          <div className="mb-4 md:mb-6">
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
              className="border bg-transparent border-yellow-500 p-3 rounded-lg w-full focus:ring-teal-500 focus:border-teal-500"
            />
          </div>
          <div className="mb-4 md:mb-6">
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
              className="border bg-transparent border-yellow-500 p-3 rounded-lg w-full focus:ring-teal-500 focus:border-teal-500"
            ></textarea>
          </div>
          <button className="bg-teal-500 text-white font-semibold p-3 rounded-lg w-full hover:bg-teal-600 transition duration-200">
            Submit
          </button>
        </form>

        {/* QUICK LINKS Section */}
        <div className="w-full mt-6 p-6">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
            QUICK LINKS
          </h2>
          <ul className="space-y-2 text-gray-700">
            <li>
              <a href="/track-orders" className="text-teal-500 hover:underline">
                TRACK ORDERS
              </a>{" "}
              to track your current order.
            </li>
            <li>
              <a
                href="/return-refunds"
                className="text-teal-500 hover:underline"
              >
                RETURN & REFUNDS
              </a>{" "}
              to check the status of your payments.
            </li>
            <li>
              For Quick help, see our{" "}
              <a href="/faq" className="text-teal-500 hover:underline">
                FAQ section
              </a>
              .
            </li>
          </ul>
        </div>

        {/* REGISTERED OFFICE Section */}
        <div className="w-full mt-6 p-6">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
            REGISTERED OFFICE
          </h2>
          <address className="not-italic text-gray-700">
            Vedant Fashions Limited
            <br />
            Paridhan Garment Park, SDF1, 4th Floor, A501-A502,
            <br />
            19, Canal South Road, Kolkata - 700015, West Bengal.
            <br />
            <br />
            Corporate Identity Number (CIN):{" "}
            <span className="font-bold">U51311WB2002PLC094677</span>
          </address>
        </div>
      </div>
    </>
  );
};

export default ContactUs;
