import React from "react";
import { Link } from "react-router-dom";

const DashboardLayout = ({ Children }) => {
  return (
    <>
      <div className="flex-grow text-gray-800">
        <header className="flex items-center h-20 px-6 sm:px-10 bg-[#f8ecd6]">
          <button className="block sm:hidden relative flex-shrink-0 p-2 mr-2 text-gray-600 hover:bg-gray-100 hover:text-gray-800 focus:bg-gray-100 focus:text-gray-800 rounded-full">
            <span className="sr-only">Menu</span>
            <svg
              aria-hidden="true"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h7"
              />
            </svg>
          </button>
          <div className="relative w-full max-w-md sm:-ml-2">
            <svg
              aria-hidden="true"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="absolute h-6 w-6 mt-2.5 ml-2 text-gray-400"
            >
              <path
                fillRule="evenodd"
                d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                clipRule="evenodd"
              />
            </svg>
            <input
              type="text"
              role="search"
              placeholder="Search..."
              className="py-2 pl-10 pr-4 w-full border-1 border-transparent placeholder-gray-400 focus:bg-gray-50 rounded-lg"
            />
          </div>
          <div className="flex flex-shrink-0 items-center ml-auto">
            <button className="inline-flex items-center p-2 hover:bg-gray-100 focus:bg-gray-100 rounded-lg">
              <span className="sr-only">User Menu</span>
              <div className="hidden md:flex md:flex-col md:items-end md:leading-tight">
                <span className="font-semibold">Grace Simmons</span>
                <span className="text-sm text-gray-600">Lecturer</span>
              </div>
              <span className="h-12 w-12 ml-2 sm:ml-3 mr-2 bg-gray-100 rounded-full overflow-hidden">
                <img
                  src="https://randomuser.me/api/portraits/women/68.jpg"
                  alt="user profile photo"
                  className="h-full w-full object-cover"
                />
              </span>
            </button>
          </div>
        </header>
        <main className="bg-[#fffbf2] p-6 sm:p-10 space-y-6">
          <div className="flex flex-col space-y-6 md:space-y-0 md:flex-row justify-between">
            <div className="mr-6">
              <h1 className="text-4xl font-semibold mb-2">DASHBOARD</h1>
            </div>
            <div className="flex flex-wrap items-start justify-end -mb-3">
              <Link to="/userDashboard">
                <button className="inline-flex px-5 py-3 text-white bg-[#e95827] hover:bg-[#852201] transition-colors ease-in rounded-md ml-6 mb-3">
                  Dashboard
                </button>
              </Link>
              <Link to="/orders">
                <button className="inline-flex px-5 py-3 text-white bg-[#e95827] hover:bg-[#852201] transition-colors ease-in rounded-md ml-6 mb-3">
                  My Orders
                </button>
              </Link>
              <Link to="/wishlist">
                <button className="inline-flex px-5 py-3 text-white bg-[#e95827] hover:bg-[#852201] transition-colors ease-in rounded-md ml-6 mb-3">
                  My Wishlist
                </button>
              </Link>
            </div>
          </div>
          {/*------------- Main content coming as a child -------------*/}
          <main>
            <div className="mx-auto pt-1">{Children}</div>
          </main>
        </main>
      </div>
    </>
  );
};

export default DashboardLayout;
