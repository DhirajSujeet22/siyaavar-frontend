import { Fragment, useEffect, useState } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import {
  Bars3Icon,
  ShoppingCartIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { IoSearchOutline, IoNotifications } from "react-icons/io5";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectCarts } from "../Cart/CartSlice";
import { selectUserInfo } from "../User/UserSlice";
// import DarkMode from "../Common/colorMode/DarkMode";
// ============================================================================

const userNavigation = [
  { name: "My Profile", link: "/userProfile" },
  { name: "My Orders", link: "/orders" },
  { name: "Sign out", link: "/logout" },
];

// ============================================================================

// const navigation = [
//   // { name: "userProfile", link: "/userProfile", current: false, user: true },
//   // {
//   //   name: "ProductDetails",
//   //   link: "/ProductsDetails/5",
//   //   current: false,
//   //   user: true,
//   // },
//   { name: "Products", link: "/Products", current: false, user: true },

//   // { name: "Products", link: "/admin", current: false, admin: true },
//   // { name: "Orders", link: "/admin/orders", current: false, admin: true },
// ];

const navigation = [
  {
    name: "Products",
    link: "/Products",
    // current: true,
  },
  {
    name: "Men",
    link: "#",
    current: false,
    children: [
      { name: "All Collections (Men)", link: "#" },
      { name: "Sherwanni", link: "#" },
      { name: "Kurta Pajama", link: "#" },
      { name: "Nehru jacket", link: "#" },
      { name: "Suit (Coat Pant)", link: "#" },
    ],
  },

  {
    name: "Women",
    link: "#",
    current: false,
    children: [
      { name: "All Collections (Women)", link: "#" },
      { name: "Designer Saaree", link: "#" },
      { name: "Lahenga", link: "#" },
      { name: "Indo Western", link: "#" },
    ],
  },

  {
    name: "Kids",
    link: "#",
    current: false,
    children: [
      { name: "Mini Sherwani", link: "#" },
      { name: "Kurta Pajama Set", link: "#" },
      { name: "Junior", link: "#" },
      { name: "Kids'Suit (Coat Pant)", link: "#" },
      { name: "Dhoti Kurta Set", link: "#" },
      { name: "Ethnic Waistcoat Set", link: "#" },
    ],
  },
  {
    name: "About Us",
    link: "/",
    current: false,
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

// ============================================================================

const Navbar = ({ Children }) => {
  const [openDropdown, setOpenDropdown] = useState(null);

  const handleDropdownToggle = (index) => {
    if (openDropdown === index) {
      setOpenDropdown(null); // Close the dropdown if it's already open
    } else {
      setOpenDropdown(index); // Open the clicked dropdown
    }
  };

  const handleClickOutside = (event) => {
    if (!event.target.closest(".dropdown-container")) {
      setOpenDropdown(null); // Close dropdown when clicking outside
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);
  // const user = useSelector(selectUserInfo);
  const GetAddToCart = useSelector(selectCarts);
  const user = useSelector(selectUserInfo);
  const [isOpen, setIsOpen] = useState(false);
  // ============================================================================

  return (
    <>
      <div className="min-h-full">
        <Disclosure as="nav" className="bg-[#F8F9FA]">
          {({ open }) => (
            <>
              <div className="mx-auto max-w-7xl px-4 sm:px-0 lg:px-0">
                <div className="flex h-[5rem] items-center justify-between">
                  <div className="flex items-center justify-between">
                    <div className="flex-shrink-0">
                      <Link to="/">
                        <img
                          className="h-auto w-[15rem]"
                          src="https://i.imgur.com/HfWWL7R.png"
                          alt="Our Company"
                        />
                      </Link>
                    </div>
                    <div className="hidden md:block">
                      <div className="ml-10 flex items-baseline space-x-4 relative">
                        {navigation.map((item) => (
                          <div key={item.name} className="relative group">
                            <Link
                              to={item.link}
                              className={classNames(
                                item.current
                                  ? "bg-blue-900 text-white"
                                  : "text-[#9a9d9f] hover:bg-gray-700 hover:text-white",
                                "rounded-md px-3 py-2 text-sm font-medium"
                              )}
                              aria-current={item.current ? "page" : undefined}
                            >
                              {item.name}
                            </Link>

                            {/* Check if the item has children (dropdown) */}
                            {item.children && (
                              <div className="absolute w-[12rem] z-50 left-0 mt-2 hidden group-hover:block bg-gray-700 rounded-lg shadow-lg">
                                <div className="py-2">
                                  {item.children.map((child) => (
                                    <Link
                                      key={child.name}
                                      to={child.link}
                                      className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-600 hover:text-white"
                                    >
                                      {child.name}
                                    </Link>
                                  ))}
                                </div>
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="hidden md:block">
                    <div className="flex items-center gap-3">
                      {/* serach*/}
                      <div className="relative">
                        <button
                          type="button"
                          className="relative mt-2 rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                          onClick={() => setIsOpen(true)}
                        >
                          <span className="absolute -inset-1.5" />
                          <IoSearchOutline
                            className="h-6 w-6"
                            aria-hidden="true"
                          />
                        </button>

                        {/* Dialog Box */}
                        {isOpen && (
                          <div className="fixed inset-0 flex items-center justify-center z-50">
                            <div className="absolute inset-0 bg-black opacity-50"></div>

                            <div className="bg-white rounded-lg shadow-lg max-w-md w-full p-6 z-10">
                              <div className="flex justify-between items-center">
                                <h2 className="text-lg font-semibold text-gray-700">
                                  Search
                                </h2>
                                <button
                                  className="text-gray-500 hover:text-gray-800"
                                  onClick={() => setIsOpen(false)}
                                >
                                  <svg
                                    className="w-6 h-6"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      strokeWidth="2"
                                      d="M6 18L18 6M6 6l12 12"
                                    ></path>
                                  </svg>
                                </button>
                              </div>

                              <div className="mt-4">
                                <input
                                  type="text"
                                  placeholder="Type to search..."
                                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                                />
                              </div>

                              <div className="mt-4 flex justify-end">
                                <button
                                  className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
                                  onClick={() => setIsOpen(false)}
                                >
                                  Search
                                </button>
                              </div>
                            </div>
                          </div>
                        )}
                      </div>
                      {/* cart*/}
                      <Link to="/cart">
                        <button
                          type="button"
                          className="relative mt-2 rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                        >
                          <span className="absolute -inset-1.5" />
                          <ShoppingCartIcon
                            className="h-6 w-6"
                            aria-hidden="true"
                          />
                        </button>
                        {GetAddToCart && GetAddToCart.length > 0 && (
                          <span className="inline-flex bottom-4 right-2 relative items-center rounded-md bg-yellow-50 px-1 py-1 text-xs font-bold text-yellow-800 ring-1 ring-inset ring-yellow-600/20">
                            {GetAddToCart.length}
                          </span>
                        )}
                      </Link>
                      {/* notification*/}
                      <Link to="#">
                        <button
                          type="button"
                          className="relative mt-2 rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                        >
                          <span className="absolute -inset-1.5" />
                          <IoNotifications
                            className="h-6 w-6"
                            aria-hidden="true"
                          />
                        </button>
                        {GetAddToCart && GetAddToCart.length > 0 && (
                          <span className="inline-flex bottom-4 right-2 relative items-center rounded-md bg-yellow-50 px-1 py-1 text-xs font-bold text-yellow-800 ring-1 ring-inset ring-yellow-600/20">
                            {GetAddToCart.length}
                          </span>
                        )}
                      </Link>
                      {/* Profile dropdown */}
                      <Menu as="div" className="relative">
                        <div>
                          <Menu.Button className="relative flex max-w-xs items-center rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                            <span className="absolute -inset-1.5" />
                            <span className="sr-only">Open user menu</span>
                            {/* <img
                              className="h-8 w-8 rounded-full"
                              src={
                                user.image
                                  ? user.image
                                  : `https://cdn2.iconfinder.com/data/icons/avatars-60/5985/13-Captain-512.png`
                              }
                              alt="profile_img"
                            /> */}
                          </Menu.Button>
                        </div>
                        <Transition
                          as={Fragment}
                          enter="transition ease-out duration-100"
                          enterFrom="transform opacity-0 scale-95"
                          enterTo="transform opacity-100 scale-100"
                          leave="transition ease-in duration-75"
                          leaveFrom="transform opacity-100 scale-100"
                          leaveTo="transform opacity-0 scale-95"
                        >
                          <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                            {userNavigation.map((item) => (
                              <Menu.Item key={item.name}>
                                {({ active }) => (
                                  <Link
                                    to={item.link}
                                    className={classNames(
                                      active ? "bg-gray-100" : "",
                                      "block px-4 py-2 text-sm text-gray-700"
                                    )}
                                  >
                                    {item.name}
                                  </Link>
                                )}
                              </Menu.Item>
                            ))}
                          </Menu.Items>
                        </Transition>
                      </Menu>
                      {/* <DarkMode /> */}
                    </div>
                  </div>
                  <div className="-mr-2 flex md:hidden">
                    {/* Mobile menu button */}
                    <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md bg-gray-800 p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                      <span className="absolute -inset-0.5" />
                      <span className="sr-only">Open main menu</span>
                      {open ? (
                        <XMarkIcon
                          className="block h-6 w-6"
                          aria-hidden="true"
                        />
                      ) : (
                        <Bars3Icon
                          className="block h-6 w-6"
                          aria-hidden="true"
                        />
                      )}
                    </Disclosure.Button>
                  </div>
                </div>
              </div>
              <Disclosure.Panel className="md:hidden">
                <div className="space-y-1 px-2 pb-3 pt-2 sm:px-3">
                  <div className="inline-flex  flex-col gap-[1.5rem] sm:gap-0">
                    {navigation.map((item, index) => (
                      <div
                        key={item.name}
                        className="relative group dropdown-container"
                        onClick={() => handleDropdownToggle(index)}
                      >
                        <Link
                          to={item.link}
                          className={
                            item.current
                              ? "bg-blue-900 text-white rounded-md px-3 py-2 text-sm font-medium"
                              : "text-[#9a9d9f] hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
                          }
                          aria-current={item.current ? "page" : undefined}
                        >
                          {item.name}
                        </Link>

                        {/* Dropdown */}
                        {item.children && openDropdown === index && (
                          <div className="absolute w-[12rem] z-50 left-0 mt-2 bg-gray-700 rounded-lg shadow-lg">
                            <div className="py-2">
                              {item.children.map((child) => (
                                <Link
                                  key={child.name}
                                  to={child.link}
                                  className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-600 hover:text-white"
                                >
                                  {child.name}
                                </Link>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="border-t border-gray-700 pb-3 pt-4">
                  <div className="flex items-center px-5 gap-3">
                    {/* serach*/}
                    <div className="relative">
                      <button
                        type="button"
                        className="relative mt-2 rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                        onClick={() => setIsOpen(true)}
                      >
                        <span className="absolute -inset-1.5" />
                        <IoSearchOutline
                          className="h-6 w-6"
                          aria-hidden="true"
                        />
                      </button>

                      {/* Dialog Box */}
                      {isOpen && (
                        <div className="fixed inset-0 flex items-center justify-center z-50">
                          <div className="absolute inset-0 bg-black opacity-50"></div>

                          <div className="bg-white rounded-lg shadow-lg max-w-md w-full p-6 z-10">
                            <div className="flex justify-between items-center">
                              <h2 className="text-lg font-semibold text-gray-700">
                                Search
                              </h2>
                              <button
                                className="text-gray-500 hover:text-gray-800"
                                onClick={() => setIsOpen(false)}
                              >
                                <svg
                                  className="w-6 h-6"
                                  fill="none"
                                  stroke="currentColor"
                                  viewBox="0 0 24 24"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M6 18L18 6M6 6l12 12"
                                  ></path>
                                </svg>
                              </button>
                            </div>

                            <div className="mt-4">
                              <input
                                type="text"
                                placeholder="Type to search..."
                                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                              />
                            </div>

                            <div className="mt-4 flex justify-end">
                              <button
                                className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
                                onClick={() => setIsOpen(false)}
                              >
                                Search
                              </button>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                    {/* cart*/}
                    <Link to="/cart">
                      <button
                        type="button"
                        className="relative mt-2 rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                      >
                        <span className="absolute -inset-1.5" />
                        <ShoppingCartIcon
                          className="h-6 w-6"
                          aria-hidden="true"
                        />
                        {GetAddToCart && GetAddToCart.length > 0 && (
                          <span className="inline-flex bottom-4 left-5  absolute items-center rounded-md bg-yellow-50 px-1 py-1 text-xs font-bold text-yellow-800 ring-1 ring-inset ring-yellow-600/20">
                            {GetAddToCart.length}
                          </span>
                        )}
                      </button>
                    </Link>
                    {/* notification*/}
                    <Link to="#">
                      <button
                        type="button"
                        className="relative mt-2 rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                      >
                        <span className="absolute -inset-1.5" />
                        <IoNotifications
                          className="h-6 w-6"
                          aria-hidden="true"
                        />
                      </button>
                      {GetAddToCart && GetAddToCart.length > 0 && (
                        <span className="inline-flex bottom-4 right-2 relative items-center rounded-md bg-yellow-50 px-1 py-1 text-xs font-bold text-yellow-800 ring-1 ring-inset ring-yellow-600/20">
                          {GetAddToCart.length}
                        </span>
                      )}
                    </Link>

                    <div className="flex-shrink-0">
                      {/* <img
                        className="h-10 w-10 rounded-full"
                        src={
                          user.image
                            ? user.image
                            : `https://cdn2.iconfinder.com/data/icons/avatars-60/5985/13-Captain-512.png`
                        }
                        alt="profile_img"
                      /> */}
                    </div>

                    {/* <DarkMode /> */}
                  </div>
                  <div className="mt-3 space-y-1 px-2">
                    {userNavigation.map((item) => (
                      <div key={item.name}>
                        <Link
                          to={item.link}
                          className="block rounded-md px-3 py-2 text-base
                          font-medium text-gray-400 hover:bg-gray-700
                          hover:text-white"
                        >
                          {item.name}
                        </Link>
                      </div>
                    ))}
                  </div>
                </div>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>

        <header className="bg-white shadow">
          {/* <div className="mx-auto max-w-7xl px-4 py-3 sm:px-6 lg:px-8">
            <h1 className="text-[1.9rem]  font-[900]  tracking-tight text-violet-700"></h1>
          </div> */}
        </header>
        <main>
          <div className="mx-auto max-w-7xl py-3 px-3 sm:px-0 sm:py-3 lg:px-0">
            {Children}
          </div>
        </main>
      </div>
    </>
  );
};

export default Navbar;
