import React from "react";
import { Link } from "react-router-dom";
const EmptyCart = ({ title }) => {
  return (
    <>
      <main className="grid min-h-full place-items-center h-screen bg-[#fffbf2] px-2 py-2 sm:py-5 lg:px-8">
        <div className="text-center bg-blend-multiply bg-[#fffbf2]">
          <img
            className="m-[auto] w-[18rem] bg-[#fffbf2]"
            src="https://i.imgur.com/aiDubfe.png"
            alt="Cart_img"
          />

          <h1 className="mt-4 text-[2rem] font-bold tracking-tight text-gray-900 sm:text-[4rem]">
            {title && title}
          </h1>
          <p className="mt-6 text-[1.3rem] font-[600] leading-7 text-gray-600">
            Sorry, we couldn’t find any items you’re looking for.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link
              to="/"
              className="rounded-md bg-[#e95827] hover:bg-[#852201] px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 transition-colors ease-in"
            >
              Go back home
            </Link>
          </div>
        </div>
      </main>
    </>
  );
};

export default EmptyCart;
