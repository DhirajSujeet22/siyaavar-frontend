import React, { useState } from "react";
import {
  FaHome,
  FaMapMarkedAlt,
  FaPhoneAlt,
  FaRegUserCircle,
} from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa6";
import { FaRegEdit } from "react-icons/fa";
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

  const [addresses, setAddresses] = useState([
    {
      id: "address1",
      fullName: "John Doe",
      email: "john@example.com",
      mobile: "1234567890",
      address: "123 Main St",
      city: "Metropolis",
      state: "NY",
      pincode: "12345",
    },
    {
      id: "address2",
      fullName: "Jane Smith",
      email: "jane@example.com",
      mobile: "0987654321",
      address: "456 Elm St",
      city: "Gotham",
      state: "NY",
      pincode: "67890",
    },
  ]);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentAddress, setCurrentAddress] = useState(null);

  const handleEditClick = (address) => {
    setCurrentAddress(address);
    setIsModalOpen(true);
  };

  const handleSave = (updatedAddress) => {
    setAddresses((prev) =>
      prev.map((addr) =>
        addr.id === updatedAddress.id ? updatedAddress : addr
      )
    );
    setIsModalOpen(false);
  };

  const handleAddNewAddress = () => {
    setCurrentAddress({
      id: Date.now().toString(),
      fullName: "",
      email: "",
      mobile: "",
      address: "",
      city: "",
      state: "",
      pincode: "",
    });
    setIsModalOpen(true);
  };

  return (
    <div className="max-w-5xl mx-auto p-6 space-y-8">
      <div className="bg-gray-100 shadow-lg rounded-lg overflow-hidden">
        <div className="flex flex-col md:flex-row items-center p-6 bg-gradient-to-r from-orange-400 to-orange-400 text-white">
          <img
            src={userData.profileImage}
            alt="Profile"
            className="w-48 h-48 rounded-full object-cover mb-4 md:mb-0 md:mr-6 border-4 border-white"
          />
          <div className="flex-1">
            <div className="flex justify-between items-center">
              <h2 className="text-3xl font-bold mb-2">{userData.name}</h2>
              <button className="bg-[#e95827] hover:bg-[#852201] transition ease-in px-4 py-2 rounded">
                Edit Profile
              </button>
            </div>
            <p className="text-lg">Email: {userData.email}</p>
            <p className="text-lg">Phone: {userData.phone}</p>
            <p className="text-lg">Gender: {userData.gender}</p>
          </div>
        </div>
      </div>

      <div className="bg-[#fffbf2] px-4 lg:mt-0">
        <p className="mt-8 text-lg font-medium">Addresses</p>
        <h1
          className={`${!!addresses.length ? "hidden" : "block"}
              text-2xl mt-3 text-red-600 font-bold mb-1`}
        >
          {" "}
          ! Add Address
        </h1>
        <button
          className={`mt-5 text-white bg-[#e95827] hover:bg-[#852201] rounded-lg py-3 px-10 font-semibold`}
          onClick={handleAddNewAddress}
        >
          Add Address
        </button>
        <div className="py-6">
          <form className="my-1 flex flex-wrap gap-5">
            {addresses.map((address) => (
              <div
                key={address.id}
                className="relative flex flex-col justify-between border border-gray-300 rounded-lg p-4 transition-colors duration-200 peer-checked:border-2 peer-checked:border-gray-700 peer-checked:bg-gray-50  cursor-pointer select-none"
              >
                {/* Radio Input */}
                <input className="peer absolute opacity-0" name="address" />

                {/* Address Information */}
                <label
                  htmlFor={address.id}
                  className="cursor-pointer select-none"
                >
                  <div className="ml-5">
                    {/* Highlighted Field Names */}
                    <span className="font-semibold text-gray-600">
                      Name :
                    </span>{" "}
                    <span>{address.fullName}</span>
                    <p className="text-slate-500 text-sm leading-6">
                      <span className="font-semibold text-gray-600">
                        Email :
                      </span>{" "}
                      {address.email}
                    </p>
                    <p className="text-slate-500 text-sm leading-6">
                      <span className="font-semibold text-gray-600">
                        Mobile :
                      </span>{" "}
                      {address.mobile}
                    </p>
                    <p className="text-slate-500 text-sm leading-6">
                      <span className="font-semibold text-gray-600">
                        Address :
                      </span>{" "}
                      {`${address.address}, ${address.city}, ${address.state}, ${address.pincode}`}
                    </p>
                  </div>
                </label>
                {/* Edit Button */}

                <FaRegEdit
                  onClick={() => handleEditClick(address)}
                  className="absolute top-1 right-1 text-orange-400 text-2xl"
                />
              </div>
            ))}
          </form>
          {/* Address Form Modal */}
          {isModalOpen && (
            <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
              <div className="bg-white rounded-lg p-6 shadow-lg w-full max-w-lg">
                <h2 className="text-lg font-semibold mb-4">
                  {currentAddress ? "Edit Address" : "Add Address"}
                </h2>
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    handleSave(currentAddress);
                  }}
                  className="grid gap-4"
                >
                  {/* Full Name */}
                  <label className="block text-sm font-medium text-gray-700">
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    value={currentAddress ? currentAddress.fullName : ""}
                    onChange={(e) =>
                      setCurrentAddress({
                        ...currentAddress,
                        fullName: e.target.value,
                      })
                    }
                    className="rounded-md border border-gray-300 p-2"
                    placeholder="Enter your full name"
                    required
                  />

                  {/* Email */}
                  <label className="block text-sm font-medium text-gray-700">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={currentAddress ? currentAddress.email : ""}
                    onChange={(e) =>
                      setCurrentAddress({
                        ...currentAddress,
                        email: e.target.value,
                      })
                    }
                    className="rounded-md border border-gray-300 p-2"
                    placeholder="Enter your email"
                    required
                  />

                  {/* Mobile Number */}
                  <label className="block text-sm font-medium text-gray-700">
                    Mobile Number
                  </label>
                  <input
                    type="tel"
                    name="mobile"
                    value={currentAddress ? currentAddress.mobile : ""}
                    onChange={(e) =>
                      setCurrentAddress({
                        ...currentAddress,
                        mobile: e.target.value,
                      })
                    }
                    className="rounded-md border border-gray-300 p-2"
                    placeholder="Enter your mobile number"
                    required
                  />

                  {/* Address, Pincode, City, State in one line */}
                  <div className="grid grid-cols-2 gap-5">
                    {/* Address */}
                    <div className="col-span-1">
                      <label className="block text-sm font-medium text-gray-700">
                        Address
                      </label>
                      <input
                        type="text"
                        name="address"
                        value={currentAddress ? currentAddress.address : ""}
                        onChange={(e) =>
                          setCurrentAddress({
                            ...currentAddress,
                            address: e.target.value,
                          })
                        }
                        className="rounded-md border border-gray-300 p-2 w-full"
                        placeholder="Enter your address"
                        required
                      />
                    </div>

                    {/* Pincode */}
                    <div className="col-span-1">
                      <label className="block text-sm font-medium text-gray-700">
                        Pincode
                      </label>
                      <input
                        type="text"
                        name="pincode"
                        value={currentAddress ? currentAddress.pincode : ""}
                        onChange={(e) =>
                          setCurrentAddress({
                            ...currentAddress,
                            pincode: e.target.value,
                          })
                        }
                        className="rounded-md border border-gray-300 p-2 w-full"
                        placeholder="Enter your pincode"
                        required
                      />
                    </div>

                    {/* City */}
                    <div className="col-span-1">
                      <label className="block text-sm font-medium text-gray-700">
                        City
                      </label>
                      <input
                        type="text"
                        name="city"
                        value={currentAddress ? currentAddress.city : ""}
                        onChange={(e) =>
                          setCurrentAddress({
                            ...currentAddress,
                            city: e.target.value,
                          })
                        }
                        className="rounded-md border border-gray-300 p-2 w-full"
                        placeholder="Enter your city"
                        required
                      />
                    </div>

                    {/* State */}
                    <div className="col-span-1">
                      <label className="block text-sm font-medium text-gray-700">
                        State
                      </label>
                      <input
                        type="text"
                        name="state"
                        value={currentAddress ? currentAddress.state : ""}
                        onChange={(e) =>
                          setCurrentAddress({
                            ...currentAddress,
                            state: e.target.value,
                          })
                        }
                        className="rounded-md border border-gray-300 p-2 w-full"
                        placeholder="Enter your state"
                        required
                      />
                    </div>
                  </div>

                  {/* Save and Cancel Buttons */}
                  <div className="flex justify-between mt-4">
                    <button
                      type="submit"
                      className="bg-[#e95827] hover:bg-[#852201] transition-colors ease-in text-white rounded-md py-2 px-4"
                    >
                      Save Address
                    </button>
                    <button
                      type="button"
                      onClick={() => setIsModalOpen(false)}
                      className="bg-gray-300 rounded-md py-2 px-4"
                    >
                      Cancel
                    </button>
                  </div>
                </form>
              </div>
            </div>
          )}
        </div>

        <div className={addresses.length ? "hidden" : "block"}>
          {/* Full Name */}
          <label htmlFor="name" className="mt-4 mb-2 block text-sm font-medium">
            Full Name
          </label>
          <div className="relative">
            <input
              type="text"
              id="name"
              name="name"
              className="w-full rounded-md border border-gray-200 px-4 py-3 pl-11 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500"
              placeholder="Your Name"
            />
            <div className="pointer-events-none absolute inset-y-0 left-0 inline-flex items-center px-3">
              <FaRegUserCircle className="text-gray-400" />
            </div>
          </div>

          {/* Email */}
          <label
            htmlFor="email"
            className="mt-4 mb-2 block text-sm font-medium"
          >
            Email
          </label>
          <div className="relative">
            <input
              type="email"
              id="email"
              name="email"
              className="w-full rounded-md border border-gray-200 px-4 py-3 pl-11 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500"
              placeholder="Your Email"
            />
            <div className="pointer-events-none absolute inset-y-0 left-0 inline-flex items-center px-3">
              <FaEnvelope className="text-gray-400" />
            </div>
          </div>

          {/* Mobile Number */}
          <label
            htmlFor="mobile"
            className="mt-4 mb-2 block text-sm font-medium"
          >
            Mobile Number
          </label>
          <div className="relative">
            <input
              type="tel"
              id="mobile"
              name="mobile"
              className="w-full rounded-md border border-gray-200 px-4 py-3 pl-11 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500"
              placeholder="Your Mobile Number"
            />
            <div className="pointer-events-none absolute inset-y-0 left-0 inline-flex items-center px-3">
              <FaPhoneAlt className="text-gray-400" />
            </div>
          </div>

          {/* Address and Pincode in One Line */}
          <div className="flex space-x-4 mt-4">
            <div className="w-1/2">
              <label
                htmlFor="address"
                className="mb-2 block text-sm font-medium"
              >
                Address
              </label>
              <div className="relative">
                <input
                  type="text"
                  id="address"
                  name="address"
                  className="w-full rounded-md border border-gray-200 px-4 py-3 pl-11 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500"
                  placeholder="Street Address"
                />
                <div className="pointer-events-none absolute inset-y-0 left-0 inline-flex items-center px-3">
                  <FaHome className="text-gray-400" />
                </div>
              </div>
            </div>

            <div className="w-1/2">
              <label
                htmlFor="pincode"
                className="mb-2 block text-sm font-medium"
              >
                Pincode
              </label>
              <div className="relative">
                <input
                  type="text"
                  id="pincode"
                  name="pincode"
                  className="w-full rounded-md border border-gray-200 px-4 py-3 pl-11 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500"
                  placeholder="Your Pincode"
                />
                <div className="pointer-events-none absolute inset-y-0 left-0 inline-flex items-center px-3">
                  <FaMapMarkedAlt className="text-gray-400" />
                </div>
              </div>
            </div>
          </div>

          {/* City and State in One Line */}
          <div className="flex space-x-4 mt-4">
            <div className="w-1/2">
              <label htmlFor="city" className="mb-2 block text-sm font-medium">
                City
              </label>
              <div className="relative">
                <input
                  type="text"
                  id="city"
                  name="city"
                  className="w-full rounded-md border border-gray-200 px-4 py-3 pl-11 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500"
                  placeholder="Your City"
                />
                <div className="pointer-events-none absolute inset-y-0 left-0 inline-flex items-center px-3">
                  <FaHome className="text-gray-400" />
                </div>
              </div>
            </div>

            <div className="w-1/2">
              <label htmlFor="state" className="mb-2 block text-sm font-medium">
                State
              </label>
              <div className="relative">
                <input
                  type="text"
                  id="state"
                  name="state"
                  className="w-full rounded-md border border-gray-200 px-4 py-3 pl-11 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500"
                  placeholder="Your State"
                />
                <div className="pointer-events-none absolute inset-y-0 left-0 inline-flex items-center px-3">
                  <FaHome className="text-gray-400" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
