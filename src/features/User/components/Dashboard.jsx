import React from "react";
import { FaHome } from "react-icons/fa";

const Dashboard = () => {
  const userData = {
    name: "John Doe",
    email: "john.doe@example.com",
    phone: "+1 234 567 890",
    gender: "Male",
    profileImage:
      "https://cdn2.iconfinder.com/data/icons/avatars-60/5985/4-Writer-256.png",
    addresses: [
      {
        type: "Home",
        street: "123 Main St",
        city: "Delhi",
        state: "Delhi",
        zip: "11345",
      },
    ],
  };

  return (
    <div className="max-w-5xl mx-auto p-6 space-y-8">
      <div className="bg-gray-100 shadow-lg rounded-lg overflow-hidden">
        <div className="flex flex-col md:flex-row items-center p-6 bg-gradient-to-r from-blue-500 to-blue-700 text-white">
          <img
            src={userData.profileImage}
            alt="Profile"
            className="w-48 h-48 rounded-full object-cover mb-4 md:mb-0 md:mr-6 border-4 border-white"
          />
          <div className="flex-1">
            <div className="flex justify-between items-center">
              <h2 className="text-3xl font-bold mb-2">{userData.name}</h2>
              <button className="bg-white text-blue-700 px-4 py-2 rounded hover:bg-gray-200 transition">
                Edit Profile
              </button>
            </div>
            <p className="text-lg">Email: {userData.email}</p>
            <p className="text-lg">Phone: {userData.phone}</p>
            <p className="text-lg">Gender: {userData.gender}</p>
          </div>
        </div>
      </div>

      <div className="bg-white shadow-lg rounded-lg overflow-hidden">
        <h3 className="text-2xl font-semibold p-6 border-b bg-blue-100">
          Saved Addresses
        </h3>
        <div className="p-6 space-y-4">
          {userData.addresses.map((address, index) => (
            <div
              key={index}
              className="flex items-start space-x-4 bg-gray-50 p-4 rounded-lg shadow-md"
            >
              <div className="flex-shrink-0 mt-1">
                <FaHome className="text-blue-500 w-6 h-6" />
              </div>
              <div>
                <p className="font-semibold text-lg">{address.type}</p>
                <p className="text-gray-600">
                  <span className="font-semibold">Street:</span>{" "}
                  {address.street}
                </p>
                <p className="text-gray-600">
                  <span className="font-semibold">City:</span> {address.city}
                </p>
                <p className="text-gray-600">
                  <span className="font-semibold">State:</span> {address.state}
                </p>
                <p className="text-gray-600">
                  <span className="font-semibold">ZIP:</span> {address.zip}
                </p>
              </div>
            </div>
          ))}
          <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition">
            Edit Addresses
          </button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
