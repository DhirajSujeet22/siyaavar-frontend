import React, { useEffect } from "react";
import { useState } from "react";
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
} from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import {
  ChevronDownIcon,
  FunnelIcon,
  MinusIcon,
  PlusIcon,
  Squares2X2Icon,
} from "@heroicons/react/20/solid";
import { useDispatch, useSelector } from "react-redux";
import {
  FetchProductsByFilterAsync,
  selectProducts,
  selectStatus,
  selectTotalProductsLength,
} from "../productSlice";
import InfiniteScroll from "react-infinite-scroll-component";
import LoadingSpinner from "../../common/LoadingSpinner";
import { ITEMS_PER_PAGE } from "../../../app/Constant";
import { Link, useSearchParams } from "react-router-dom";
import Pagination from "../../common/Pagination";
const sortOptions = [
  { name: "Most Popular", href: "#", current: true },
  { name: "Best Rating", href: "#", current: false },
  { name: "Newest", href: "#", current: false },
  { name: "Price: Low to High", href: "#", current: false },
  { name: "Price: High to Low", href: "#", current: false },
];
// const subCategories = [
//   { name: "Totes", href: "#" },
//   { name: "Backpacks", href: "#" },
//   { name: "Travel Bags", href: "#" },
//   { name: "Hip Bags", href: "#" },
//   { name: "Laptop Sleeves", href: "#" },
// ];
const filters = [
  {
    id: "color",
    name: "Color",
    options: [
      { value: "white", label: "White", checked: false },
      { value: "beige", label: "Beige", checked: false },
      { value: "blue", label: "Blue", checked: true },
      { value: "brown", label: "Brown", checked: false },
      { value: "green", label: "Green", checked: false },
      { value: "purple", label: "Purple", checked: false },
    ],
  },
  {
    id: "category",
    name: "Category",
    options: [
      { value: "new-arrivals", label: "New Arrivals", checked: false },
      { value: "sale", label: "Sale", checked: false },
      { value: "travel", label: "Travel", checked: true },
      { value: "organization", label: "Organization", checked: false },
      { value: "accessories", label: "Accessories", checked: false },
    ],
  },
  {
    id: "size",
    name: "Size",
    options: [
      { value: "2l", label: "2L", checked: false },
      { value: "6l", label: "6L", checked: false },
      { value: "12l", label: "12L", checked: false },
      { value: "18l", label: "18L", checked: false },
      { value: "20l", label: "20L", checked: false },
      { value: "40l", label: "40L", checked: true },
    ],
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
const Products = () => {
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  const dispatch = useDispatch();
  // const Products = useSelector(selectProducts);
  const ProductsStatus = useSelector(selectStatus);
  const TotalProductsLength = useSelector(selectTotalProductsLength);
  const [Page, setPage] = useState(1);

  // -----------------------------------------
  const [searchParams] = useSearchParams();
  const Men_category = searchParams.get("category");

  // -----------------------------------------

  const Products = [
    {
      id: 1,
      title: "Men's Elegant Blue Kurta Pajama",
      description:
        "Celebrate in style with our Blue Festive Charm Kurta Pajama. This intricate Chikankari and sequin-embellished viscose set is perfect for engagements or weddings. Stand out during festivities with this elegant pairing.",
      tag: "men's clothing",
      category: "kurta pajama",
      price: 19.99,
      rating: 4.94,
      stock: 55,
      sizes: ["All Size", "S", "M", "L", "XL", "XXL", "XXXL"],
      colors: ["blue"],
      images: ["https://i.imgur.com/SP1VHjX.jpeg"],
      thumbnail: "https://i.imgur.com/SP1VHjX.jpeg",
    },
    {
      id: 2,
      title: "Men's Classic Black Sherwani",
      description:
        "A timeless black sherwani with golden embroidery for the modern groom. Crafted in premium fabric for special occasions.",
      tag: "men's clothing",
      category: "sherwani",
      price: 59.99,
      rating: 4.85,
      stock: 25,
      sizes: ["S", "M", "L", "XL"],
      colors: ["black"],
      images: ["https://i.imgur.com/bRQPhXu.jpeg"],
      thumbnail: "https://i.imgur.com/bRQPhXu.jpeg",
    },
    {
      id: 3,
      title: "Women's Red Embellished Anarkali",
      description:
        "This Anarkali features intricate threadwork and stone embellishments. The red colors complements every festive occasion.",
      tag: "women's clothing",
      category: "anarkali",
      price: 49.99,
      rating: 4.72,
      stock: 40,
      sizes: ["S", "M", "L", "XL"],
      colors: ["red"],
      images: ["https://i.imgur.com/G2lh4im.jpeg"],
      thumbnail: "https://i.imgur.com/G2lh4im.jpeg",
    },
    {
      id: 4,
      title: "Men's Traditional White Kurta",
      description:
        "Classic white kurta in soft cotton for traditional events. Comfortable and stylish for all-day wear.",
      tag: "men's clothing",
      category: "kurta",
      price: 15.99,
      rating: 4.65,
      stock: 70,
      sizes: ["S", "M", "L", "XL"],
      colors: ["white"],
      images: ["https://i.imgur.com/VcTSTzm.jpeg"],
      thumbnail: "https://i.imgur.com/VcTSTzm.jpeg",
    },
    {
      id: 5,
      title: "Women's Peach Lehenga Choli",
      description:
        "Embrace tradition with our peach-colorsed lehenga choli. Perfect for weddings and grand celebrations.",
      tag: "women's clothing",
      category: "lehenga",
      price: 99.99,
      rating: 4.89,
      stock: 15,
      sizes: ["S", "M", "L"],
      colors: ["peach"],
      images: [
        "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
      ],
      thumbnail:
        "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
    },
    {
      id: 6,
      title: "Men's Gray Casual Suit",
      description:
        "This modern gray casual suit is perfect for semi-formal events. It pairs well with both dress shirts and casual tees.",
      tag: "men's clothing",
      category: "suit",
      price: 79.99,
      rating: 4.91,
      stock: 35,
      sizes: ["M", "L", "XL"],
      colors: ["gray"],
      images: [
        "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
      ],
      thumbnail:
        "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
    },
    {
      id: 7,
      title: "Women's Green Silk Saree",
      description:
        "This silk saree in a striking green hue is perfect for weddings and traditional ceremonies.",
      tag: "women's clothing",
      category: "saree",
      price: 39.99,
      rating: 4.77,
      stock: 60,
      sizes: ["Free Size"],
      colors: ["green"],
      images: [
        "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
      ],
      thumbnail:
        "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
    },
    {
      id: 8,
      title: "Men's Royal Blue Bandhgala",
      description:
        "A royal blue bandhgala with silver detailing. Perfect for formal occasions and events.",
      tag: "men's clothing",
      category: "bandhgala",
      price: 89.99,
      rating: 4.83,
      stock: 20,
      sizes: ["M", "L", "XL"],
      colors: ["blue"],
      images: [
        "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
      ],
      thumbnail:
        "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
    },
    {
      id: 9,
      title: "Women's Maroon Sharara Set",
      description:
        "Elegant maroon sharara set with golden embroidery, perfect for festive celebrations.",
      tag: "women's clothing",
      category: "sharara",
      price: 59.99,
      rating: 4.68,
      stock: 30,
      sizes: ["S", "M", "L"],
      colors: ["maroon"],
      images: [
        "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
      ],
      thumbnail:
        "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
    },
    {
      id: 10,
      title: "Men's Olive Green Nehru Jacket",
      description:
        "A stylish olive green Nehru jacket to pair with traditional kurta or western attire.",
      tag: "men's clothing",
      category: "nehru jacket",
      price: 29.99,
      rating: 4.58,
      stock: 45,
      sizes: ["M", "L", "XL"],
      colors: ["olive green"],
      images: [
        "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
      ],
      thumbnail:
        "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
    },
    {
      id: 11,
      title: "Women's Light Blue Denim Kurti",
      description:
        "A casual yet chic light blue denim kurti. Perfect for everyday wear or casual outings.",
      tag: "women's clothing",
      category: "kurti",
      price: 24.99,
      rating: 4.72,
      stock: 50,
      sizes: ["S", "M", "L", "XL"],
      colors: ["light blue"],
      images: [
        "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
      ],
      thumbnail:
        "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
    },
    {
      id: 12,
      title: "Men's Charcoal Grey Waistcoat",
      description:
        "A classic charcoal grey waistcoat to add sophistication to any formal outfit.",
      tag: "men's clothing",
      category: "waistcoat",
      price: 39.99,
      rating: 4.8,
      stock: 30,
      sizes: ["M", "L", "XL"],
      colors: ["charcoal grey"],
      images: [
        "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
      ],
      thumbnail:
        "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
    },
  ];

  console.log(Products);

  // -----------------------------------------

  useEffect(() => {
    const filterProducts = { category: Men_category };
    const pagination = { _page: Page, _limit: ITEMS_PER_PAGE };
    dispatch(FetchProductsByFilterAsync({ pagination, filterProducts }));
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [dispatch, Men_category, Page]);

  // ----------------------------------------

  return (
    <>
      <div className="bg-[#fffbf2]">
        <div>
          {/* Mobile filter dialog */}
          <Dialog
            open={mobileFiltersOpen}
            onClose={setMobileFiltersOpen}
            className="relative z-40 lg:hidden"
          >
            <DialogBackdrop
              transition
              className="fixed inset-0 bg-black bg-opacity-25 transition-opacity duration-300 ease-linear data-[closed]:opacity-0"
            />

            <div className="fixed inset-0 z-40 flex">
              <DialogPanel
                transition
                className="relative ml-auto flex h-full w-full max-w-xs transform flex-col overflow-y-auto bg-white py-4 pb-12 shadow-xl transition duration-300 ease-in-out data-[closed]:translate-x-full"
              >
                <div className="flex items-center justify-between px-4">
                  <h2 className="text-lg font-medium text-gray-900">Filters</h2>
                  <button
                    type="button"
                    onClick={() => setMobileFiltersOpen(false)}
                    className="-mr-2 flex h-10 w-10 items-center justify-center rounded-md bg-white p-2 text-gray-400"
                  >
                    <span className="sr-only">Close menu</span>
                    <XMarkIcon aria-hidden="true" className="h-6 w-6" />
                  </button>
                </div>

                {/* Filters */}
                <form className="mt-4 border-t border-gray-200">
                  <h3 className="sr-only">Categories</h3>
                  {/* <ul
                    role="list"
                    className="px-2 py-3 font-medium text-gray-900"
                  >
                    {subCategories.map((category) => (
                      <li key={category.name}>
                        <a href={category.href} className="block px-2 py-3">
                          {category.name}
                        </a>
                      </li>
                    ))}
                  </ul> */}

                  {filters.map((section) => (
                    <Disclosure
                      key={section.id}
                      as="div"
                      className="border-t border-gray-200 px-4 py-6"
                    >
                      <h3 className="-mx-2 -my-3 flow-root">
                        <DisclosureButton className="group flex w-full items-center justify-between bg-[#fffbf2] px-2 py-3 text-gray-400 hover:text-gray-500">
                          <span className="font-medium text-gray-900">
                            {section.name}
                          </span>
                          <span className="ml-6 flex items-center">
                            <PlusIcon
                              aria-hidden="true"
                              className="h-5 w-5 group-data-[open]:hidden"
                            />
                            <MinusIcon
                              aria-hidden="true"
                              className="h-5 w-5 [.group:not([data-open])_&]:hidden"
                            />
                          </span>
                        </DisclosureButton>
                      </h3>
                      <DisclosurePanel className="pt-6">
                        <div className="space-y-6">
                          {section.options.map((option, optionIdx) => (
                            <div
                              key={option.value}
                              className="flex items-center"
                            >
                              <input
                                defaultValue={option.value}
                                defaultChecked={option.checked}
                                id={`filter-mobile-${section.id}-${optionIdx}`}
                                name={`${section.id}[]`}
                                type="checkbox"
                                className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                              />
                              <label
                                htmlFor={`filter-mobile-${section.id}-${optionIdx}`}
                                className="ml-3 min-w-0 flex-1 text-gray-500"
                              >
                                {option.label}
                              </label>
                            </div>
                          ))}
                        </div>
                      </DisclosurePanel>
                    </Disclosure>
                  ))}
                </form>
              </DialogPanel>
            </div>
          </Dialog>

          <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex items-baseline justify-between border-b border-gray-200 pb-6 pt-24">
              <h1 className="text-2xl sm:text-4xl font-bold tracking-tight text-gray-900">
                New Arrivals
              </h1>

              <div className="flex items-center">
                <Menu as="div" className="relative inline-block text-left">
                  <div>
                    <MenuButton className="group inline-flex justify-center text-sm font-medium text-gray-700 hover:text-gray-900">
                      Sort
                      <ChevronDownIcon
                        aria-hidden="true"
                        className="-mr-1 ml-1 h-5 w-5 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
                      />
                    </MenuButton>
                  </div>

                  <MenuItems
                    transition
                    className="absolute right-0 z-10 mt-2 w-40 origin-top-right rounded-md bg-white shadow-2xl ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
                  >
                    <div className="py-1">
                      {sortOptions.map((option) => (
                        <MenuItem key={option.name}>
                          <a
                            href={option.href}
                            className={classNames(
                              option.current
                                ? "font-medium text-gray-900"
                                : "text-gray-500",
                              "block px-4 py-2 text-sm data-[focus]:bg-gray-100"
                            )}
                          >
                            {option.name}
                          </a>
                        </MenuItem>
                      ))}
                    </div>
                  </MenuItems>
                </Menu>

                <button
                  type="button"
                  className="-m-2 ml-5 p-2 text-gray-400 hover:text-gray-500 sm:ml-7"
                >
                  <span className="sr-only">View grid</span>
                  <Squares2X2Icon aria-hidden="true" className="h-5 w-5" />
                </button>
                <button
                  type="button"
                  onClick={() => setMobileFiltersOpen(true)}
                  className="-m-2 ml-4 p-2 text-gray-400 hover:text-gray-500 sm:ml-6 lg:hidden"
                >
                  <span className="sr-only">Filters</span>
                  <FunnelIcon aria-hidden="true" className="h-5 w-5" />
                </button>
              </div>
            </div>

            <section aria-labelledby="products-heading" className="pb-24 pt-6">
              <h2 id="products-heading" className="sr-only">
                Products
              </h2>

              <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-4">
                {/* Filters */}
                <form className="hidden lg:block">
                  <h3 className="sr-only">Categories</h3>
                  {/* <ul
                    role="list"
                    className="space-y-4 border-b border-gray-200 pb-6 text-sm font-medium text-gray-900"
                  >
                    {subCategories.map((category) => (
                      <li key={category.name}>
                        <a href={category.href}>{category.name}</a>
                      </li>
                    ))}
                  </ul> */}

                  {filters.map((section) => (
                    <Disclosure
                      key={section.id}
                      as="div"
                      className="border-b border-gray-200 py-6"
                    >
                      <h3 className="-my-3 flow-root">
                        <DisclosureButton className="group flex w-full items-center justify-between bg-[#fffbf2] py-3 text-sm text-gray-400 hover:text-gray-500">
                          <span className="font-medium text-gray-900">
                            {section.name}
                          </span>
                          <span className="ml-6 flex items-center">
                            <PlusIcon
                              aria-hidden="true"
                              className="h-5 w-5 group-data-[open]:hidden"
                            />
                            <MinusIcon
                              aria-hidden="true"
                              className="h-5 w-5 [.group:not([data-open])_&]:hidden"
                            />
                          </span>
                        </DisclosureButton>
                      </h3>
                      <DisclosurePanel className="pt-6">
                        <div className="space-y-4">
                          {section.options.map((option, optionIdx) => (
                            <div
                              key={option.value}
                              className="flex items-center"
                            >
                              <input
                                defaultValue={option.value}
                                defaultChecked={option.checked}
                                id={`filter-${section.id}-${optionIdx}`}
                                name={`${section.id}[]`}
                                type="checkbox"
                                className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                              />
                              <label
                                htmlFor={`filter-${section.id}-${optionIdx}`}
                                className="ml-3 text-sm text-gray-600"
                              >
                                {option.label}
                              </label>
                            </div>
                          ))}
                        </div>
                      </DisclosurePanel>
                    </Disclosure>
                  ))}
                </form>

                {/* Product grid products list */}

                <div className="lg:col-span-3">
                  <div className="bg-[#fffbf2]">
                    <div className="mx-auto h-full max-w-2xl px-4 py-16 sm:px-6 sm:py-0 lg:max-w-7xl lg:px-8">
                      <h2 className="text-2xl font-bold tracking-tight text-gray-900">
                        products
                      </h2>

                      <div className="mt-6  grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
                        {Products &&
                          Products.map((product, index) => (
                            <Link
                              key={index}
                              to={`/ProductsDetails/${product.id}`}
                            >
                              <div className="group relative">
                                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md lg:aspect-none">
                                  <img
                                    alt={product.title}
                                    src={product.images}
                                    className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                                  />
                                </div>
                                <div className="mt-4 flex justify-between">
                                  <div>
                                    <h3 className="text-sm text-gray-700">
                                      <span
                                        aria-hidden="true"
                                        className="absolute inset-0"
                                      />
                                      {product.title}
                                    </h3>
                                    <p className="mt-3 text-sm text-gray-500">
                                      {product.category}
                                    </p>
                                  </div>
                                  <p className="text-sm font-medium text-gray-900">
                                    {product.price}
                                  </p>
                                </div>
                              </div>
                            </Link>
                          ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            {
              // =========== This is Pagination Layout start ================

              <Pagination
                Page={Page}
                setPage={setPage}
                totalItems={TotalProductsLength}
              />

              // =========== This is Pagination Layout end ================
            }
          </main>
        </div>
      </div>
    </>
  );
};

export default Products;
