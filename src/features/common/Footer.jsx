import React from "react";
import { MdOutlineMail } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import WhatsAppIcon from "./WhatsAppIcon";
const Footer = () => {
  const LogoImage = [
    { src: "./icons/batchicon.svg", text: "MADE IN INDIA" },
    { src: "./icons/handsicon.svg", text: "ASSURED QUALITY" },
    { src: "./icons/newslettericon.svg", text: "SECURE PAYMENTS" },
    { src: "./icons/tigericon.svg", text: "EMPOWERING WEAVERS" },
  ];

  return (
    <>
      {/* {whatsApp icon} */}
      <WhatsAppIcon />
      <section className="pt-16 pb-7 bg-[#f8ecd6]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-12 pb-12 border-b-2 border-gray-700 max-lg:gap-7">
            <div className="col-span-12 lg:col-span-7">
              <img src="https://i.imgur.com/HfWWL7R.png" alt="siyaavar_logo" />
            </div>
            <div className="col-span-12 lg:col-span-5 flex flex-col gap-4 items-center">
              <div className="flex items-center gap-[2rem] bg-transparent w-[auto] max-w-md mx-auto lg:mr-0 rounded-full p-2.5 min-[470px]:p-1.5 pl-5 min-[470px]:pl-7 border border-gray-700 transition-all duration-300 hover:border-gray-400 focus-within:border-gray-400 focus:outline-none">
                <input
                  type="text"
                  className="bg-transparent text-base border-0 outline-none font-normal text-black placeholder:text-gray-400"
                  placeholder="Your email here..."
                />
                <button className="py-3 px-7 hidden min-[470px]:block rounded-full bg-orange-500 text-base font-semibold text-white shadow-sm shadow-transparent transition-all duration-500 focus-within:outline-0">
                  Submit
                </button>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 min-[400px]:grid-cols-2 md:grid-cols-4 gap-y-8 py-14 border-b-2 border-gray-700">
            <div className="">
              <h6 className="text-xl font-bold text-gray-500 mb-7">About Us</h6>
              <ul className="flex flex-col gap-6">
                <li className="text-black">
                  <a
                    href="javascript:;"
                    className="text-lg font-normal text-black focus-within:outline-0"
                  >
                    Our Story
                  </a>
                </li>
                <li className="text-black">
                  <a
                    href="javascript:;"
                    className="text-lg font-normal text-black focus-within:outline-0"
                  >
                    Sustainability
                  </a>
                </li>
                <li className="text-black">
                  <Link
                    to="/careers"
                    className="text-lg font-normal text-black focus-within:outline-0"
                  >
                    Careers
                  </Link>
                </li>
                <li className="text-black">
                  <a
                    href="javascript:;"
                    className="text-lg font-normal text-black focus-within:outline-0"
                  >
                    Press
                  </a>
                </li>
                <li className="text-black">
                  <Link
                    to="/aboutUs"
                    className="text-lg font-normal text-black focus-within:outline-0"
                  >
                    About Us
                  </Link>
                </li>
              </ul>
            </div>
            <div className="">
              <h6 className="text-xl font-bold text-gray-500 mb-7">
                Customer Services
              </h6>
              <ul className="flex flex-col gap-6">
                <li className="text-black">
                  <Link
                    to="/ContactUs"
                    className="text-lg font-normal text-black focus-within:outline-0"
                  >
                    Contact Us
                  </Link>
                </li>
                <li className="text-black">
                  <Link
                    to="/ShippingPolicy"
                    className="text-lg font-normal text-black focus-within:outline-0"
                  >
                    Shipping Information
                  </Link>
                </li>
                <li className="text-black">
                  <Link
                    to="/exchangePolicy"
                    className="text-lg font-normal text-black focus-within:outline-0"
                  >
                    Return and Exchanges
                  </Link>
                </li>
                <li className="text-black">
                  <Link
                    to="/FAQ"
                    className="text-lg font-normal text-black focus-within:outline-0"
                  >
                    FAQs
                  </Link>
                </li>
                <li className="text-black">
                  <a
                    href="javascript:;"
                    className="text-lg font-normal text-black focus-within:outline-0"
                  >
                    Size Guide
                  </a>
                </li>
              </ul>
            </div>
            <div className="">
              <h6 className="text-xl font-bold text-gray-500 mb-7">Shop</h6>
              <ul className="flex flex-col gap-6">
                <li className="text-black">
                  <a
                    href="javascript:;"
                    className="text-lg font-normal text-black focus-within:outline-0"
                  >
                    New Arrivals
                  </a>
                </li>
                <li className="text-black">
                  <a
                    href="javascript:;"
                    className="text-lg font-normal text-black focus-within:outline-0"
                  >
                    Men's Clothing
                  </a>
                </li>
                <li className="text-black">
                  <a
                    href="javascript:;"
                    className="text-lg font-normal text-black focus-within:outline-0"
                  >
                    Women's Clothing
                  </a>
                </li>
                <li className="text-black">
                  <a
                    href="javascript:;"
                    className="text-lg font-normal text-black focus-within:outline-0"
                  >
                    Accessories
                  </a>
                </li>
                <li className="text-black">
                  <a
                    href="javascript:;"
                    className="text-lg font-normal text-black focus-within:outline-0"
                  >
                    Sale
                  </a>
                </li>
              </ul>
            </div>
            <div className="">
              <h6 className="text-xl font-bold text-gray-500 mb-7">
                Get In Touch
              </h6>
              <ul className="flex flex-col gap-6">
                <li className="text-black">
                  <Link
                    to="https://maps.app.goo.gl/2y54eya4tEMKcz4k9"
                    target="_blank"
                    className="text-lg flex gap-5 font-normal text-black focus-within:outline-0"
                  >
                    <IoLocationOutline className="text-[3rem]" />
                    Shop No : 97, Anupam Textile Market Ring Road, SURAT -
                    395002
                  </Link>
                </li>
                <li className="text-black">
                  <a
                    href="tel:+918825135770"
                    className="text-lg flex gap-5 items-center font-normal text-black focus-within:outline-0"
                  >
                    <FaPhoneAlt />
                    +91 8825135770
                  </a>
                </li>
                <li className="text-black">
                  <a
                    href="mailto:nitinkumarankit95@gmail.com"
                    className="text-lg flex gap-5 items-center font-normal text-black focus-within:outline-0"
                  >
                    <MdOutlineMail className="text-[1.5rem]" />
                    nitinkumarankit95@gmail.com
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="pt-7 flex flex-wrap min-[500px]:flex-row items-center gap-5 justify-center sm:justify-around ">
            <div className="flex gap-5 flex-wrap">
              <li className="list-none text-black">
                <a
                  href="javascript:;"
                  className="text-md font-normal text-black focus-within:outline-0"
                >
                  Terms of Use
                </a>
              </li>
              <li className="list-none text-black">
                <Link
                  to="/privacypolicy"
                  className="text-md font-normal text-black focus-within:outline-0"
                >
                  Privacy Policy
                </Link>
              </li>
              <li className="list-none text-black">
                <a
                  href="javascript:;"
                  className="text-md font-normal text-black focus-within:outline-0"
                >
                  Help
                </a>
              </li>
            </div>
            <p className="text-base font-normal text-center text-gray-800">
              ©, All Rights Reserved. Developed & Maintained By reserved.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Footer;
