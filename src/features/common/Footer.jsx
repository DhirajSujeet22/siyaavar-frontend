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
          <div className="sm:flex  justify-between pb-12 border-b-2 border-gray-500">
            <div className="flex  sm:my-0 my-5 justify-center sm:justify-start col-span-12 lg:col-span-7">
              <img src="https://i.imgur.com/pSKtH5i.png" className="w-[16rem] sm:w-[20rem]" alt="siyaavar_logo" />
            </div>
            <div className="col-span-12 lg:col-span-5 flex flex-col gap-4 items-center">
              <div className="flex items-center gap-[2rem] bg-transparent w-[auto] max-w-md mx-auto lg:mr-0 rounded-full md:p-1 p-1 min-[470px]:p-1.5 pl-5 min-[470px]:pl-7 border border-gray-700 transition-all duration-300 hover:border-gray-400 focus-within:border-gray-400 focus:outline-none">
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
          <div className="grid px-[0rem] sm:px-[5rem] md:sm:px-[2rem] grid-cols-1 min-[400px]:grid-cols-2 md:grid-cols-4  py-14 border-b-2 border-gray-500">
            <div className="my-5">
              <h6 className="text-sm md:text-md lg:text-lg font-bold text-gray-500 mb-7">About Us</h6>
              <ul className="flex flex-col gap-6">
                <li className="text-black">
                  <a
                    href="javascript:;"
                    className="text-sm sm:text-lg md:text-sm font-normal text-black focus-within:outline-0"
                  >
                    Our Story
                  </a>
                </li>
                <li className="text-black">
                  <a
                    href="javascript:;"
                    className="text-sm sm:text-lg md:text-sm  font-normal text-black focus-within:outline-0"
                  >
                    Sustainability
                  </a>
                </li>
                <li className="text-black">
                  <Link
                    to="/careers"
                    className="text-sm sm:text-lg md:text-sm  font-normal text-black focus-within:outline-0"
                  >
                    Careers
                  </Link>
                </li>
                <li className="text-black">
                  <a
                    href="javascript:;"
                    className="text-sm sm:text-lg md:text-sm  font-normal text-black focus-within:outline-0"
                  >
                    Press
                  </a>
                </li>
                <li className="text-black">
                  <Link
                    to="/aboutUs"
                    className="text-sm sm:text-lg font-normal md:text-sm  text-black focus-within:outline-0"
                  >
                    About Us
                  </Link>
                </li>
              </ul>
            </div>
            <div className="my-5">
              <h6 className="text-sm md:text-md lg:text-lg font-bold text-gray-500 mb-7">
                Customer Services
              </h6>
              <ul className="flex flex-col gap-6">
                <li className="text-black">
                  <Link
                    to="/ContactUs"
                    className="text-sm sm:text-lg md:text-sm  font-normal text-black focus-within:outline-0"
                  >
                    Contact Us
                  </Link>
                </li>
                <li className="text-black">
                  <Link
                    to="/ShippingPolicy"
                    className="text-sm sm:text-lg md:text-sm  font-normal text-black focus-within:outline-0"
                  >
                    Shipping Information
                  </Link>
                </li>
                <li className="text-black">
                  <Link
                    to="/exchangePolicy"
                    className="text-sm sm:text-lg md:text-sm  font-normal text-black focus-within:outline-0"
                  >
                    Return and Exchanges
                  </Link>
                </li>
                <li className="text-black">
                  <Link
                    to="/FAQ"
                    className="text-sm sm:text-lg md:text-sm  font-normal text-black focus-within:outline-0"
                  >
                    FAQs
                  </Link>
                </li>
                <li className="text-black">
                  <a
                    href="javascript:;"
                    className="text-sm sm:text-lg md:text-sm  font-normal text-black focus-within:outline-0"
                  >
                    Size Guide
                  </a>
                </li>
              </ul>
            </div>
            <div className="my-5">
              <h6 className="text-sm md:text-md lg:text-lg font-bold text-gray-500 mb-7">Shop</h6>
              <ul className="flex flex-col gap-6">
                <li className="text-black">
                  <a
                    href="javascript:;"
                    className="text-sm sm:text-lg md:text-sm  font-normal text-black focus-within:outline-0"
                  >
                    New Arrivals
                  </a>
                </li>
                <li className="text-black">
                  <a
                    href="javascript:;"
                    className="text-sm sm:text-lg md:text-sm  font-normal text-black focus-within:outline-0"
                  >
                    Men's Clothing
                  </a>
                </li>
                <li className="text-black">
                  <a
                    href="javascript:;"
                    className="text-sm sm:text-lg md:text-sm  font-normal text-black focus-within:outline-0"
                  >
                    Women's Clothing
                  </a>
                </li>
                <li className="text-black">
                  <a
                    href="javascript:;"
                    className="text-sm sm:text-lg md:text-sm  font-normal text-black focus-within:outline-0"
                  >
                    Accessories
                  </a>
                </li>
                <li className="text-black">
                  <a
                    href="javascript:;"
                    className="text-sm sm:text-lg md:text-sm  font-normal text-black focus-within:outline-0"
                  >
                    Sale
                  </a>
                </li>
              </ul>
            </div>
            <div className="my-5">
              <h6 className="text-sm md:text-md lg:text-lg font-bold text-gray-500 mb-7">
                Get In Touch
              </h6>
              <ul className="flex flex-col gap-6">
                <li className="text-black">
                  <Link
                    to="https://maps.app.goo.gl/2y54eya4tEMKcz4k9"
                    target="_blank"
                    className="text-sm sm:text-lg md:text-sm  flex gap-5 font-normal text-black focus-within:outline-0"
                  >
                    <IoLocationOutline className="text-[1.5rem] sm:text-[3rem]" />
                    Shop No : 97, Anupam Textile Market Ring Road, SURAT -
                    395002
                  </Link>
                </li>
                <li className="text-black">
                  <a
                    href="tel:+918825135770"
                    className="text-sm sm:text-lg md:text-sm  flex gap-5 items-center font-normal text-black focus-within:outline-0"
                  >
                    <FaPhoneAlt className="sm:text-[1.5rem] md:sm:text-[1.2rem]" />
                    +91 8825135770
                  </a>
                </li>
                <li className="text-black">
                  <a
                    href="mailto:nitinkumarankit95@gmail.com"
                    className="text-sm sm:text-[0.8rem] flex text-wrap gap-5 items-center font-normal text-black focus-within:outline-0"
                  >
                    <MdOutlineMail className="sm:text-[1.5rem]" />
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
                  className="text-sm sm:text-md font-normal text-black focus-within:outline-0"
                >
                  Terms of Use
                </a>
              </li>
              <li className="list-none text-black">
                <Link
                  to="/privacypolicy"
                  className="text-sm sm:text-md  font-normal text-black focus-within:outline-0"
                >
                  Privacy Policy
                </Link>
              </li>
              <li className="list-none text-black">
                <a
                  href="javascript:;"
                  className="text-sm sm:text-md  font-normal text-black focus-within:outline-0"
                >
                  Help
                </a>
              </li>
            </div>
            <p className="text-[0.8rem] sm:text-md   font-normal text-center text-gray-800">
              ©, All Rights Reserved. Developed & Maintained By BigDesign.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Footer;
