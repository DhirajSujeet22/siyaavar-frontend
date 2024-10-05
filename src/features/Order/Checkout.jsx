import React, { useState } from "react";
import {
  FaRegUserCircle,
  FaPhoneAlt,
  FaHome,
  FaMapMarkedAlt,
  FaEnvelope,
} from "react-icons/fa";

const Checkout = () => {
  //   const addresses = [
  //     {
  //       id: "address1",
  //       fullName: "John Doe",
  //       email: "john.doe@email.com",
  //       mobile: "+1 123 456 7890",
  //       address: "123 Elm Street",
  //       city: "Los Angeles",
  //       state: "CA",
  //       pincode: "90001",
  //     },
  //     {
  //       id: "address2",
  //       fullName: "Jane Smith",
  //       email: "jane.smith@email.com",
  //       mobile: "+1 987 654 3210",
  //       address: "456 Oak Avenue",
  //       city: "San Francisco",
  //       state: "CA",
  //       pincode: "94103",
  //     },
  //   ];

  const products = [
    {
      id: 1,
      name: "Nike Air Max Pro 8888 - Super Light",
      size: "42EU - 8.5US",
      price: 138.99,
      imgSrc:
        "https://images.unsplash.com/flagged/photo-1556637640-2c80d3201be8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8c25lYWtlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    },
    {
      id: 2,
      name: "Nike Air Max Pro 9999 - Super Light",
      size: "42EU - 8.5US",
      price: 238.99,
      imgSrc:
        "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8c25lYWtlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    },
    {
      id: 3,
      name: "Nike Air Max Pro 8888 - Super Light",
      size: "42EU - 8.5US",
      price: 138.99,
      imgSrc:
        "https://images.unsplash.com/flagged/photo-1556637640-2c80d3201be8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8c25lYWtlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    },
    // You can add more products here
  ];

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
    <>
      <div className="grid sm:px-10 lg:grid-cols-2 gap-10 lg:px-20 xl:px-25 py-10 bg-[#fffbf2]">
        <div className="px-4 pt-8">
          <p className="text-xl font-medium">Order Summary</p>
          <p className="text-gray-400">
            Check your items. And select a suitable shipping method.
          </p>
          <div className="mt-8 space-y-3 rounded-lg border bg-[#fffbf2] px-2 py-4 sm:px-6">
            {products.map((product) => (
              <div
                key={product.id}
                className="flex flex-col rounded-lg bg-[#fffbf2]  sm:flex-row"
              >
                <img
                  className="m-2 h-24 w-28 rounded-md border object-cover object-center"
                  src={product.imgSrc}
                  alt={product.name}
                />
                <div className="flex w-full flex-col px-4 py-4">
                  <span className="font-semibold">{product.name}</span>
                  <span className="float-right text-gray-400">
                    {product.size}
                  </span>
                  <p className="mt-auto text-lg font-bold">
                    ${product.price.toFixed(2)}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <p className="mt-8 text-lg font-medium">Shipping Methods</p>
          <form className="mt-5 grid gap-6">
            <div className="relative">
              <input
                className="peer hidden"
                id="cash"
                type="radio"
                name="paymentMethod"
                defaultChecked={true}
              />
              <span className="peer-checked:border-gray-700 absolute right-4 top-1/2 box-content block h-3 w-3 -translate-y-1/2 rounded-full border-8 border-gray-300 bg-white" />
              <label
                className="peer-checked:border-2 peer-checked:border-gray-700 peer-checked:bg-gray-50 flex cursor-pointer select-none rounded-lg border border-gray-300 p-4"
                htmlFor="cash"
              >
                <img
                  className="w-14 object-contain"
                  src="https://cdn2.iconfinder.com/data/icons/basic-flat-icon-set/128/wallet-256.png"
                  alt=""
                />
                <div className="ml-5">
                  <span className="mt-2 font-semibold">Cash on Delivery</span>
                  <p className="text-slate-500 text-sm leading-6">
                    Delivery: All Days
                  </p>
                </div>
              </label>
            </div>
            <div className="relative">
              <input
                className="peer hidden"
                id="onlinePayment"
                type="radio"
                name="paymentMethod"
              />
              <span className="peer-checked:border-gray-700 absolute right-4 top-1/2 box-content block h-3 w-3 -translate-y-1/2 rounded-full border-8 border-gray-300 bg-white" />
              <label
                className="peer-checked:border-2 peer-checked:border-gray-700 peer-checked:bg-gray-50 flex cursor-pointer select-none rounded-lg border border-gray-300 p-4"
                htmlFor="onlinePayment"
              >
                <img
                  className="w-14 object-contain"
                  src="https://cdn0.iconfinder.com/data/icons/untact-economy-1/32/ecommerce_card_mobile_finance_payment_online_online_payment-256.png"
                  alt=""
                />
                <div className="ml-5">
                  <span className="mt-2 font-semibold">Online Payment</span>
                  <p className="text-slate-500 text-sm leading-6">
                    Delivery: All Days
                  </p>
                </div>
              </label>
            </div>
          </form>
        </div>
        <div className="mt-10 bg-[#fffbf2] px-4 pt-8 lg:mt-0">
          <p className="mt-8 text-lg font-medium">Addresses</p>
          <h1
            className={`${!!addresses.length ? "hidden" : "block"}
              text-2xl mt-3 text-red-600 font-bold mb-1`}
          >
            {" "}
            ! Add Address
          </h1>
          <button
            className={`mt-5 text-white bg-blue-500 hover:bg-blue-600 rounded-lg py-3 px-10 font-semibold`}
            onClick={handleAddNewAddress}
          >
            Add Address
          </button>
          <div className="p-6">
            <form className="my-1 grid gap-6">
              {addresses.map((address) => (
                <div
                  key={address.id}
                  className="relative flex flex-col justify-between border border-gray-300 rounded-lg p-4 pb-10 transition-colors duration-200 peer-checked:border-2 peer-checked:border-gray-700 peer-checked:bg-gray-50  cursor-pointer select-none"
                >
                  {/* Radio Input */}
                  <input
                    className="peer absolute opacity-0"
                    id={address.id}
                    type="radio"
                    name="address"
                    defaultChecked={address.id === "address1"} // Default first address checked
                  />
                  {/* Visual Radio Button */}
                  <span
                    className="absolute right-4 top-1/2 box-content block h-3 w-3 -translate-y-1/2 rounded-full border-8
                  
                  peer-checked:border-gray-700 peer-checked:bg-gray-50  cursor-pointer select-none"
                  />
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
                  <button
                    type="button"
                    onClick={() => handleEditClick(address)}
                    className="absolute bottom-2 right-1 bg-blue-500 text-white font-semibold py-2 px-4 rounded shadow hover:bg-blue-600 transition duration-200"
                  >
                    Edit
                  </button>
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
                      <div>
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
                          className="rounded-md border border-gray-300 p-2"
                          placeholder="Enter your address"
                          required
                        />
                      </div>

                      {/* Pincode */}
                      <div>
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
                          className="rounded-md border border-gray-300 p-2"
                          placeholder="Enter your pincode"
                          required
                        />
                      </div>

                      {/* City */}
                      <div>
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
                          className="rounded-md border border-gray-300 p-2"
                          placeholder="Enter your city"
                          required
                        />
                      </div>

                      {/* State */}
                      <div>
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
                          className="rounded-md border border-gray-300 p-2"
                          placeholder="Enter your state"
                          required
                        />
                      </div>
                    </div>

                    {/* Save and Cancel Buttons */}
                    <div className="flex justify-between mt-4">
                      <button
                        type="submit"
                        className="bg-blue-500 text-white rounded-md py-2 px-4"
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
          <p className="text-xl font-medium">Payment Details</p>
          <p className="text-gray-400">
            Complete your order by providing your payment details.
          </p>

          <div className={addresses.length ? "hidden" : "block"}>
            {/* Full Name */}
            <label
              htmlFor="name"
              className="mt-4 mb-2 block text-sm font-medium"
            >
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
                <label
                  htmlFor="city"
                  className="mb-2 block text-sm font-medium"
                >
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
                <label
                  htmlFor="state"
                  className="mb-2 block text-sm font-medium"
                >
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
          <>
            <div className="mt-6 border-t border-b py-2">
              <div className="flex items-center justify-between">
                <p className="text-sm font-medium text-gray-900">Subtotal</p>
                <p className="font-semibold text-gray-900">$399.00</p>
              </div>
              <div className="flex items-center justify-between">
                <p className="text-sm font-medium text-gray-900">Shipping</p>
                <p className="font-semibold text-gray-900">$8.00</p>
              </div>
            </div>
            <div className="mt-6 flex items-center justify-between">
              <p className="text-sm font-medium text-gray-900">Total</p>
              <p className="text-2xl font-semibold text-gray-900">$408.00</p>
            </div>
            <button className="mt-4 mb-8 w-full rounded-md bg-gray-900 px-6 py-3 font-medium text-white">
              Place Order
            </button>
          </>
        </div>
      </div>
    </>
  );
};

export default Checkout;
