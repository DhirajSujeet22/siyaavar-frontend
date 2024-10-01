import React from "react";
import { Link } from "react-router-dom";

const Dashboard = () => {
  // Dummy data for order and wishlist
  const orderData = {
    orderId: "#12345",
    date: "01 Oct 2024",
    status: "Shipped",
    items: [
      {
        id: 1,
        name: "Smartphone",
        quantity: 1,
        image: "https://via.placeholder.com/60",
      },
      {
        id: 2,
        name: "Wireless Headphones",
        quantity: 2,
        image: "https://via.placeholder.com/60",
      },
    ],
  };

  const wishlistData = [
    {
      id: 1,
      name: "Leather Jacket",
      price: "$120.00",
      image: "https://via.placeholder.com/60",
    },
    {
      id: 2,
      name: "Sneakers",
      price: "$80.00",
      image: "https://via.placeholder.com/60",
    },
    {
      id: 3,
      name: "Backpack",
      price: "$45.00",
      image: "https://via.placeholder.com/60",
    },
  ];

  return (
    <>
      <>
        {/* <aside className="hidden sm:flex sm:flex-col">
          <a
            href="#"
            className="inline-flex items-center justify-center h-20 w-20 bg-purple-600 hover:bg-purple-500 focus:bg-purple-500"
          >
            <svg fill="none" viewBox="0 0 64 64" className="h-12 w-12">
              <title>Company logo</title>
              <path
                d="M32 14.2c-8 0-12.9 4-14.9 11.9 3-4 6.4-5.6 10.4-4.5 2.3.6 4 2.3 5.7 4 2.9 3 6.3 6.4 13.7 6.4 7.9 0 12.9-4 14.8-11.9-3 4-6.4 5.5-10.3 4.4-2.3-.5-4-2.2-5.7-4-3-3-6.3-6.3-13.7-6.3zM17.1 32C9.2 32 4.2 36 2.3 43.9c3-4 6.4-5.5 10.3-4.4 2.3.5 4 2.2 5.7 4 3 3 6.3 6.3 13.7 6.3 8 0 12.9-4 14.9-11.9-3 4-6.4 5.6-10.4 4.5-2.3-.6-4-2.3-5.7-4-2.9-3-6.3-6.4-13.7-6.4z"
                fill="#fff"
              />
            </svg>
          </a>
          <div className="flex-grow flex flex-col justify-between text-gray-500 bg-gray-800">
            <nav className="flex flex-col mx-4 my-6 space-y-4">
              <a
                href="#"
                className="inline-flex items-center justify-center py-3 hover:text-gray-400 hover:bg-gray-700 focus:text-gray-400 focus:bg-gray-700 rounded-lg"
              >
                <span className="sr-only">Folders</span>
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
                    d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
                  />
                </svg>
              </a>
              <a
                href="#"
                className="inline-flex items-center justify-center py-3 text-purple-600 bg-white rounded-lg"
              >
                <span className="sr-only">Dashboard</span>
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
                    d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                  />
                </svg>
              </a>
              <a
                href="#"
                className="inline-flex items-center justify-center py-3 hover:text-gray-400 hover:bg-gray-700 focus:text-gray-400 focus:bg-gray-700 rounded-lg"
              >
                <span className="sr-only">Messages</span>
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
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </a>
              <a
                href="#"
                className="inline-flex items-center justify-center py-3 hover:text-gray-400 hover:bg-gray-700 focus:text-gray-400 focus:bg-gray-700 rounded-lg"
              >
                <span className="sr-only">Documents</span>
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
                    d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"
                  />
                </svg>
              </a>
            </nav>
            <div className="inline-flex items-center justify-center h-20 w-20 border-t border-gray-700">
              <button className="p-3 hover:text-gray-400 hover:bg-gray-700 focus:text-gray-400 focus:bg-gray-700 rounded-lg">
                <span className="sr-only">Settings</span>
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
                    d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </button>
            </div>
          </div>
        </aside> */}
        <div className="flex-grow text-gray-800">
          <header className="flex items-center h-20 px-6 sm:px-10 bg-white">
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
          <main className="p-6 sm:p-10 space-y-6">
            <div className="flex flex-col space-y-6 md:space-y-0 md:flex-row justify-between">
              <div className="mr-6">
                <h1 className="text-4xl font-semibold mb-2">Dashboard</h1>
                <h2 className="text-gray-600 ml-0.5">
                  Mobile UX/UI Design course
                </h2>
              </div>
              <div className="flex flex-wrap items-start justify-end -mb-3">
                <Link to="/orders">
                  <button className="inline-flex px-5 py-3 text-white bg-purple-600 hover:bg-purple-700 focus:bg-purple-700 rounded-md ml-6 mb-3">
                    My Orders
                  </button>
                </Link>
                <button className="inline-flex px-5 py-3 text-white bg-purple-600 hover:bg-purple-700 focus:bg-purple-700 rounded-md ml-6 mb-3">
                  My Wishlist
                </button>

                <button className="inline-flex px-5 py-3 text-white bg-purple-600 hover:bg-purple-700 focus:bg-purple-700 rounded-md ml-6 mb-3">
                  My Coupons
                </button>
              </div>
            </div>
            {/* --------------------------------- */}

            <div className="flex flex-col p-6 bg-gray-100 min-h-screen space-y-8">
              {/* User Info Section */}
              <div className="flex items-center space-x-4 bg-white p-6 rounded-lg shadow-lg">
                <img
                  src="https://via.placeholder.com/100"
                  alt="User Logo"
                  className="w-24 h-24 md:w-32 md:h-32 rounded-full shadow-md"
                />
                <div>
                  <h2 className="text-2xl font-bold text-gray-800">John Doe</h2>
                  <p className="text-gray-600">john.doe@example.com</p>
                </div>
              </div>

              {/* Continue Shopping Button */}
              <div className="flex justify-end">
                <button className="px-8 py-3 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-lg shadow-lg transition duration-300 ease-in-out">
                  Continue Shopping
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Order Info Section */}
                <div className="bg-white p-6 rounded-lg shadow-lg">
                  <h3 className="text-xl font-bold text-gray-800 mb-4">
                    Order Information
                  </h3>
                  <div className="space-y-4">
                    <p className="text-gray-600">
                      Order ID:{" "}
                      <span className="font-semibold">{orderData.orderId}</span>
                    </p>
                    <p className="text-gray-600">
                      Date:{" "}
                      <span className="font-semibold">{orderData.date}</span>
                    </p>
                    <p className="text-gray-600">
                      Status:{" "}
                      <span className="text-green-500 font-semibold">
                        {orderData.status}
                      </span>
                    </p>
                    <ul className="mt-4 space-y-2">
                      {orderData.items.map((item) => (
                        <li
                          key={item.id}
                          className="flex items-center space-x-4"
                        >
                          <img
                            src={item.image}
                            alt={item.name}
                            className="w-16 h-16 rounded-md shadow-md"
                          />
                          <div>
                            <h4 className="font-semibold text-gray-800">
                              {item.name}
                            </h4>
                            <p className="text-gray-600">
                              Quantity: {item.quantity}
                            </p>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Wishlist Details Section */}
                <div className="bg-white p-6 rounded-lg shadow-lg">
                  <h3 className="text-xl font-bold text-gray-800 mb-4">
                    Wishlist
                  </h3>
                  <ul className="space-y-4">
                    {wishlistData.map((item) => (
                      <li key={item.id} className="flex items-center space-x-4">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-16 h-16 rounded-md shadow-md"
                        />
                        <div>
                          <h4 className="font-semibold text-gray-800">
                            {item.name}
                          </h4>
                          <p className="text-gray-600">{item.price}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* --------------------------------- */}
          </main>
        </div>
      </>
    </>
  );
};

export default Dashboard;
