import { Fragment, useEffect, useState } from "react";
import { StarIcon } from "@heroicons/react/20/solid";
import { FaStarHalfStroke } from "react-icons/fa6";
import { Menu, Radio, RadioGroup, Transition } from "@headlessui/react";
import { BsCartCheckFill } from "react-icons/bs";
import { SlEnergy } from "react-icons/sl";
import {
  selectProductsById,
  FetchProductsByIdAsync,
  selectStatus,
} from "../productSlice";
import { useDispatch, useSelector } from "react-redux";
import { Link, NavLink, useLocation, useParams } from "react-router-dom";
import {
  AddToCartAsync,
  fetchCartByUserIdAsync,
  selectCartsStatus,
} from "../../Cart/CartSlice";

import LoadingSpinner from "../../common/LoadingSpinner";
import { TbLocationShare } from "react-icons/tb";
import { FaLink } from "react-icons/fa6";
import {
  EmailShareButton,
  EmailIcon,
  FacebookShareButton,
  FacebookIcon,
  LinkedinShareButton,
  LinkedinIcon,
  WhatsappShareButton,
  WhatsappIcon,
} from "react-share";
import {
  whiteColor,
  blackColor,
  bg_white,
  bg_black,
} from "../../../app/Constant";
import "../../../App.css";
// ==========================================================================

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import Accordion from "../../common/Accordion";
import { FaStar } from "react-icons/fa";
// ==========================================================================

const ProductsDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  // const ProductData = useSelector(selectProductsById);
  const status = useSelector(selectStatus);
  const cartStatus = useSelector(selectCartsStatus);

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

  const ProductData = Products.filter((item) => item.id === +id);
  console.log(ProductData);

  const sizesWithStock =
    ProductData && ProductData.sizes
      ? ProductData.sizes.map((size) => ({
          name: size,
          tag: "sizes",
          inStock: true,
        }))
      : [];

  // -------------------------------------

  const colorsWithStock =
    ProductData && ProductData.colors
      ? ProductData.colors.map((color) => ({
          name: color,
          tag: "colors",
          class: `bg-${color}-400`,
          selectedClass: `ring-${color}-400`,
        }))
      : [];

  // -------------------------------------
  const Pimages = [
    "https://teetimeshop.in/cdn/shop/files/c2c9955c-e890-4c8e-8a08-a6a444aa8fe3.jpg?v=1702644878&width=1445", // Image 1
    "https://contents.mediadecathlon.com/p2567760/06cf21e3f5a8a75af7ac0659729255e7/p2567760.jpg", // Image 2
    "https://nobero.com/cdn/shop/files/og.jpg?v=1722234051", // Image 3
    "https://chriscross.in/cdn/shop/files/ChrisCrossPlainBlackcottonT-Shirt.jpg?v=1695634950&width=2048", // Image 4
    "https://nobero.com/cdn/shop/files/black_e4d19185-c19d-4e7c-a14a-8d2a29c7bad3.jpg?v=1711976456",
  ];

  const product = {
    id: ProductData?.id,
    title: ProductData?.title || "",
    price: ProductData?.price || 0,
    stock: ProductData?.stock,
    rating: ProductData?.rating,
    breadcrumbs: [
      { id: 1, name: ProductData?.tag || "", href: "#" },
      { id: 2, name: ProductData?.category || "", href: "#" },
    ],
    thumbnail: ProductData?.thumbnail || "",
    images: Pimages,
    colors: colorsWithStock,
    sizes: sizesWithStock,
    description: ProductData?.description || "",

    highlights: [
      "Hand cut and sewn locally",
      "Dyed with our proprietary colors",
      "Pre-washed & pre-shrunk",
      "Ultra-soft 100% cotton",
    ],
    details: ProductData?.description || "",
  };

  console.log(product.images);

  const [mainImage, setMainImage] = useState(product.images);

  // ==========================================================================

  const [selectedColor, setSelectedColor] = useState(null);
  const [selectedSize, setSelectedSize] = useState(null);

  const handleSelectColor = (e) => {
    setSelectedColor(e.name);
  };

  const handleSelectSizes = (e) => {
    setSelectedSize(e.name);
  };

  const handleAddToCart = () => {
    dispatch(
      AddToCartAsync({
        quantity: 1,
        product: { ...ProductData, size: selectedSize, color: selectedColor },
      })
    );
  };

  // =============================================================================

  const darkMode = "red" || "";

  // =============================================================================

  const location = useLocation();
  const pathname = `${window.location.origin}${location.pathname}`;
  // ------------------------------------------
  const [copy, setCopy] = useState(false);
  const productShareOption = () => {
    navigator.clipboard
      .writeText(pathname)
      .then(() => {
        setCopy(true);
      })
      .catch((error) => {
        setCopy(false);
      });

    setTimeout(() => {
      setCopy(false);
    }, 1000);
  };

  // =============================================================================

  useEffect(() => {
    dispatch(FetchProductsByIdAsync(id));
    dispatch(fetchCartByUserIdAsync());
  }, [dispatch, id]);

  // =============================================================================

  return (
    <>
      {status ? (
        <LoadingSpinner />
      ) : (
        <div className={`bg-[#fffbf2] px-2 py-5 relative`}>
          <div className="p-3 sm:px-[2rem]">
            <nav aria-label="Breadcrumb">
              <ol role="list" className="mx-auto flex py-3">
                {product.breadcrumbs &&
                  product.breadcrumbs.map((breadcrumb) => (
                    <li key={breadcrumb.id}>
                      {status ? (
                        <LoadingSpinner />
                      ) : (
                        <div className="flex items-center">
                          <a
                            href={breadcrumb.href}
                            className={`${
                              darkMode ? blackColor : whiteColor
                            } mr-2 text-sm font-medium text-gray-900`}
                          >
                            {breadcrumb.name}
                          </a>
                          <svg
                            width={16}
                            height={20}
                            viewBox="0 0 16 20"
                            fill="currentColor"
                            aria-hidden="true"
                            className="h-5 w-4 text-gray-200"
                          >
                            <path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" />
                          </svg>
                        </div>
                      )}
                    </li>
                  ))}
              </ol>
            </nav>

            <Menu
              as="div"
              className="absolute z-10 right-4 sm:right-7  top-[5.5rem] sm:top-[1rem] ml-3"
            >
              <div>
                <Menu.Button
                  className={`sm:bg-white bg-gray-300 relative p-[0.3rem] flex max-w-xs items-center rounded-full text-sm outline-none ring-1 sm:ring-2 ring-white sm:ring-[#ffa587] ring-offset-2`}
                >
                  <span className="absolute -inset-1.5" />
                  <span className="sr-only">Open user menu</span>
                  <TbLocationShare
                    className={`${
                      darkMode ? whiteColor : blackColor
                    } text-[1.5rem] rounded-[0.5rem]`}
                  />
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
                <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-opacity-5 focus:outline-none">
                  <div className="flex flex-col gap-3 py-2">
                    <WhatsappShareButton
                      className="flex gap-4 ml-3"
                      url={pathname}
                      title={product.title}
                      separator=" - "
                    >
                      <WhatsappIcon size={22} round />
                      WhatsApp
                    </WhatsappShareButton>

                    <FacebookShareButton
                      className="flex gap-4 ml-3"
                      url={pathname}
                      title={product.title}
                      separator=" - "
                    >
                      <FacebookIcon size={22} round />
                      Facebook
                    </FacebookShareButton>

                    <EmailShareButton
                      className="flex gap-4 ml-3"
                      url={pathname}
                      title={product.title}
                      separator=" - "
                    >
                      <EmailIcon size={22} round />
                      Email
                    </EmailShareButton>

                    <LinkedinShareButton
                      className="flex gap-4 ml-3"
                      url={pathname}
                      title={product.title}
                      separator=" - "
                    >
                      <LinkedinIcon size={22} round />
                      Linkedin
                    </LinkedinShareButton>

                    <button
                      onClick={productShareOption}
                      className="flex gap-4 ml-3"
                    >
                      <FaLink />
                      {copy ? "Link Copied" : "Copy Link"}
                    </button>
                  </div>
                </Menu.Items>
              </Transition>
            </Menu>

            <div className="flex mt-6">
              {/* Image Gallery */}
              <div className="basis-[2%] mt-2  hidden  lg:flex flex-col">
                <div className="flex flex-col space-y-4 overflow-y-auto mt-2">
                  {product.images.map((image, index) => (
                    <div key={index} className="w-[4rem] h-[4rem] mr-2">
                      <img
                        src={image}
                        alt={`Gallery Image ${index + 1}`}
                        className="rounded-md w-full h-full object-cover cursor-pointer hover:opacity-75"
                        onMouseEnter={() => setMainImage(image)} // Set the hovered image as the main image
                      />
                    </div>
                  ))}
                </div>
              </div>

              {/* Left Side - Main Image */}
              <div className="flex-col lg:flex lg:flex-row hidden">
                <div className="basis-[50%] rounded-md mt-2  hidden  md:flex flex-col">
                  {/* Main Image */}
                  <div className="w-[40rem] h-[35rem] object-contain mx-5 overflow-hidden">
                    <img
                      src={mainImage}
                      alt="Main"
                      className="rounded-md w-full h-full object-contain"
                    />
                  </div>
                </div>

                {/* Right Side - Product Info */}
                <div className="my-10 md:w-full lg:w-auto">
                  <h1
                    className={`${
                      darkMode ? blackColor : whiteColor
                    } text-2xl font-bold tracking-tight sm:text-4xl`}
                  >
                    {product.title}
                  </h1>

                  <div className="mt-4 lg:row-span-3 lg:mt-2">
                    {product.stock <= 0 ? (
                      <p className="text-4xl font-bold tracking-tight text-red-500">
                        Out of Stock
                      </p>
                    ) : (
                      <p
                        className={`${
                          darkMode ? blackColor : whiteColor
                        } text-3xl tracking-tight`}
                      >
                        ₹{product.price}
                      </p>
                    )}

                    {/* Reviews */}
                    <div className="mt-6">
                      <h3 className="sr-only">Reviews</h3>
                      <div className="flex items-center">
                        <div className="flex items-center">
                          {[0, 1, 2, 3, 4].map((rating) => (
                            <span
                              key={rating}
                              className="h-5 w-5 flex-shrink-0"
                            >
                              {product.rating >= rating + 1 ? (
                                <FaStar
                                  className="text-yellow-500"
                                  aria-hidden="true"
                                />
                              ) : product.rating >= rating + 0.5 ? (
                                <FaStarHalfStroke
                                  className="text-yellow-500"
                                  aria-hidden="true"
                                />
                              ) : (
                                <FaStar
                                  className="text-gray-300"
                                  aria-hidden="true"
                                />
                              )}
                            </span>
                          ))}
                        </div>
                        <p className="sr-only">
                          {product.rating} out of 5 stars
                        </p>
                        <a
                          href="#reviews"
                          className="ml-3 text-sm font-medium text-indigo-600 hover:text-indigo-500"
                        >
                          {product.rating} reviews / {product.stock} in stock
                        </a>
                      </div>
                    </div>

                    <form className="mt-10">
                      {/* Colors */}
                      <div>
                        <h3 className="text-sm font-medium text-gray-900">
                          Color
                        </h3>

                        <fieldset aria-label="Choose a color" className="mt-4">
                          <RadioGroup
                            value={selectedColor}
                            onChange={setSelectedColor}
                            className="flex items-center space-x-3"
                          >
                            {product.colors.map((color) => (
                              <Radio
                                key={color.name}
                                value={color}
                                aria-label={color.name}
                                className={classNames(
                                  color.selectedClass,
                                  "relative -m-0.5 flex cursor-pointer items-center justify-center rounded-full p-0.5 focus:outline-none data-[checked]:ring-2 data-[focus]:data-[checked]:ring data-[focus]:data-[checked]:ring-offset-1"
                                )}
                              >
                                <span
                                  aria-hidden="true"
                                  className={classNames(
                                    color.class,
                                    "h-8 w-8 bg-red-800 rounded-full border-2 border-gray-700 border-opacity-10"
                                  )}
                                />
                              </Radio>
                            ))}
                          </RadioGroup>
                        </fieldset>
                      </div>

                      {/* Sizes */}
                      <div className="mt-10">
                        <div className="flex items-center justify-between">
                          <h3 className="text-sm font-medium text-gray-900">
                            Size
                          </h3>
                          <a
                            href="#"
                            className="text-sm font-medium text-indigo-600 hover:text-indigo-500"
                          >
                            Size guide
                          </a>
                        </div>

                        <fieldset aria-label="Choose a size" className="mt-4">
                          <RadioGroup
                            value={selectedSize}
                            onChange={setSelectedSize}
                            className="flex flex-wrap gap-5"
                          >
                            {product.sizes.map((size) => (
                              <Radio
                                key={size.name}
                                value={size}
                                disabled={!size.inStock}
                                className={classNames(
                                  size.inStock
                                    ? "cursor-pointer border-gray-500 bg-transparent text-gray-900 shadow-sm"
                                    : "cursor-not-allowed bg-gray-50 text-gray-200",
                                  "group relative flex items-center justify-center rounded-md border px-4 py-3 text-sm font-medium uppercase hover:bg-orange-100  focus:outline-none data-[focus]:ring-2 data-[focus]:ring-indigo-500 sm:px-8 sm:py-4"
                                )}
                              >
                                <span>{size.name}</span>
                                {size.inStock ? (
                                  <span
                                    aria-hidden="true"
                                    className="pointer-events-none absolute -inset-px rounded-md border-2 border-transparent group-data-[focus]:border group-data-[checked]:border-indigo-500"
                                  />
                                ) : (
                                  <span
                                    aria-hidden="true"
                                    className="pointer-events-none absolute -inset-px rounded-md border-2 border-gray-200"
                                  >
                                    <svg
                                      stroke="currentColor"
                                      viewBox="0 0 100 100"
                                      preserveAspectRatio="none"
                                      className="absolute inset-0 h-full w-full stroke-2 text-gray-200"
                                    >
                                      <line
                                        x1={0}
                                        x2={100}
                                        y1={100}
                                        y2={0}
                                        vectorEffect="non-scaling-stroke"
                                      />
                                    </svg>
                                  </span>
                                )}
                              </Radio>
                            ))}
                          </RadioGroup>
                        </fieldset>
                      </div>

                      <div className="mt-10 flex">
                        <button
                          onClick={() => addToCart(product)}
                          className={`${
                            darkMode ? whiteColor : blackColor
                          } w-[12rem] flex justify-center rounded-md border border-transparent bg-[#e95827] px-4 py-4 text-base font-medium text-white shadow-sm hover:bg-[#852201] transition-colors ease-out`}
                        >
                          <BsCartCheckFill className="text-[1.5rem] mr-2" /> ADD
                          TO CART
                        </button>
                        <Link to="/checkout">
                          <button
                            onClick={() => addToWishlist(product)}
                            className={`${
                              darkMode ? whiteColor : blackColor
                            } w-[12rem] ml-4 flex justify-center rounded-md border border-transparent px-4 py-4 text-base font-medium text-white shadow-sm bg-[#e95827] hover:bg-[#852201] transition-colors ease-out`}
                          >
                            <SlEnergy className="text-[1.5rem] mr-2 text-yellow-500" />{" "}
                            BUY NOW
                          </button>
                        </Link>
                        {/* {share button} */}
                      </div>
                    </form>
                  </div>
                  {/* {accordion} */}
                  <>
                    <div className="mt-10">
                      <div className="py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pb-16 lg:pr-8 lg:pt-6">
                        {/* Accordion for Product Highlights */}
                        <Accordion title="Product Highlights">
                          <ul className="list-disc space-y-2 pl-4 text-sm">
                            {product.highlights &&
                              product.highlights.map((highlight) => (
                                <li key={highlight} className="text-gray-900">
                                  {highlight}
                                </li>
                              ))}
                          </ul>
                        </Accordion>

                        {/* Add more accordions as needed */}
                        <div className="border-b border-gray-800">
                          <Accordion title="Additional Details">
                            <p className={`text-base text-gray-900`}>
                              Here you can add additional product details or
                              specifications.
                            </p>
                          </Accordion>
                        </div>
                      </div>
                    </div>
                  </>
                </div>
              </div>
            </div>
            {/* Mobile Swipeable Images */}
            <div className="flex-col">
              <div className="lg:hidden">
                <Swiper
                  pagination={{ clickable: true }}
                  loop={true}
                  spaceBetween={1}
                  slidesPerView={1}
                  modules={[Pagination]}
                  className="mySwiper"
                >
                  {product.images.map((image, index) => (
                    <SwiperSlide key={index}>
                      <img
                        src={image}
                        alt={`Swipe Image ${index + 1}`}
                        className="cursor-pointer hover:opacity-75 w-full sm:h-[50rem]  h-[25rem] object-cover rounded-md"
                      />
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
              {/* Product Description */}
              <div className="lg:hidden px-2 mt-5">
                <h1
                  className={`${
                    darkMode ? blackColor : whiteColor
                  } text-2xl font-bold tracking-tight sm:text-4xl`}
                >
                  {product.title}
                </h1>

                <div className="mt-4 lg:row-span-3 lg:mt-2">
                  {product.stock <= 0 ? (
                    <p className="text-4xl font-bold tracking-tight text-red-500">
                      Out of Stock
                    </p>
                  ) : (
                    <p
                      className={`${
                        darkMode ? blackColor : whiteColor
                      } text-3xl tracking-tight`}
                    >
                      ₹{product.price}
                    </p>
                  )}

                  {/* Reviews */}
                  <div className="mt-6">
                    <h3 className="sr-only">Reviews</h3>
                    <div className="flex items-center">
                      <div className="flex items-center">
                        {[0, 1, 2, 3, 4].map((rating) => (
                          <span key={rating} className="h-5 w-5 flex-shrink-0">
                            {product.rating >= rating + 1 ? (
                              <FaStar
                                className="text-yellow-500"
                                aria-hidden="true"
                              />
                            ) : product.rating >= rating + 0.5 ? (
                              <FaStarHalfStroke
                                className="text-yellow-500"
                                aria-hidden="true"
                              />
                            ) : (
                              <FaStar
                                className="text-gray-300"
                                aria-hidden="true"
                              />
                            )}
                          </span>
                        ))}
                      </div>
                      <p className="sr-only">{product.rating} out of 5 stars</p>
                      <a
                        href="#reviews"
                        className="ml-3 text-sm font-medium text-indigo-600 hover:text-indigo-500"
                      >
                        {product.rating} reviews / {product.stock} in stock
                      </a>
                    </div>
                  </div>

                  <form className="mt-10">
                    {/* Colors */}
                    <div>
                      <h3 className="text-sm font-medium text-gray-900">
                        Color
                      </h3>

                      <fieldset aria-label="Choose a color" className="mt-4">
                        <RadioGroup
                          value={selectedColor}
                          onChange={setSelectedColor}
                          className="flex items-center space-x-3"
                        >
                          {product.colors.map((color) => (
                            <Radio
                              key={color.name}
                              value={color}
                              aria-label={color.name}
                              className={classNames(
                                color.selectedClass,
                                "relative -m-0.5 flex cursor-pointer items-center justify-center rounded-full p-0.5 focus:outline-none data-[checked]:ring-2 data-[focus]:data-[checked]:ring data-[focus]:data-[checked]:ring-offset-1"
                              )}
                            >
                              <span
                                aria-hidden="true"
                                className={classNames(
                                  color.class,
                                  "h-8 w-8 bg-red-800 rounded-full border-2 border-gray-700 border-opacity-10"
                                )}
                              />
                            </Radio>
                          ))}
                        </RadioGroup>
                      </fieldset>
                    </div>

                    {/* Sizes */}
                    <div className="mt-10">
                      <div className="flex items-center justify-between">
                        <h3 className="text-sm font-medium text-gray-900">
                          Size
                        </h3>
                        <a
                          href="#"
                          className="text-sm font-medium text-indigo-600 hover:text-indigo-500"
                        >
                          Size guide
                        </a>
                      </div>

                      <fieldset aria-label="Choose a size" className="mt-4">
                        <RadioGroup
                          value={selectedSize}
                          onChange={setSelectedSize}
                          className="grid grid-cols-4 gap-4 sm:grid-cols-8 lg:grid-cols-4"
                        >
                          {product.sizes.map((size) => (
                            <Radio
                              key={size.name}
                              value={size}
                              disabled={!size.inStock}
                              className={classNames(
                                size.inStock
                                  ? "cursor-pointer border-gray-500 bg-transparent text-gray-900 shadow-sm"
                                  : "cursor-not-allowed bg-gray-50 text-gray-200",
                                "group relative flex items-center justify-center rounded-md border px-4 py-3 text-sm font-medium uppercase hover:bg-orange-100  focus:outline-none data-[focus]:ring-2 data-[focus]:ring-indigo-500 sm:flex-1 sm:py-6"
                              )}
                            >
                              <span>{size.name}</span>
                              {size.inStock ? (
                                <span
                                  aria-hidden="true"
                                  className="pointer-events-none absolute -inset-px rounded-md border-2 border-transparent group-data-[focus]:border group-data-[checked]:border-indigo-500"
                                />
                              ) : (
                                <span
                                  aria-hidden="true"
                                  className="pointer-events-none absolute -inset-px rounded-md border-2 border-gray-200"
                                >
                                  <svg
                                    stroke="currentColor"
                                    viewBox="0 0 100 100"
                                    preserveAspectRatio="none"
                                    className="absolute inset-0 h-full w-full stroke-2 text-gray-200"
                                  >
                                    <line
                                      x1={0}
                                      x2={100}
                                      y1={100}
                                      y2={0}
                                      vectorEffect="non-scaling-stroke"
                                    />
                                  </svg>
                                </span>
                              )}
                            </Radio>
                          ))}
                        </RadioGroup>
                      </fieldset>
                    </div>

                    <div className="mt-10 flex">
                      <button
                        onClick={() => addToCart(product)}
                        className={
                          "flex justify-center rounded-md border border-transparent bg-[#e95827] px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-[#852201] transition-colors ease-out"
                        }
                      >
                        <BsCartCheckFill className="text-[1.5rem] mr-2" /> ADD
                        TO CART
                      </button>
                      <button
                        onClick={() => addToWishlist(product)}
                        className={`ml-4 flex justify-center rounded-md border border-transparent px-4 py-2 text-base font-medium text-white shadow-sm bg-[#e95827] hover:bg-[#852201] transition-colors ease-out`}
                      >
                        <SlEnergy className="text-[1.5rem] mr-2 text-yellow-500" />{" "}
                        BUY NOW
                      </button>

                      {/* {share button} */}
                    </div>
                  </form>
                </div>
                {/* {accordion} */}
                <>
                  <div className="mt-10">
                    <div className="py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pb-16 lg:pr-8 lg:pt-6">
                      {/* Accordion for Product Highlights */}
                      <Accordion title="Product Highlights">
                        <ul className="list-disc space-y-2 pl-4 text-sm">
                          {product.highlights &&
                            product.highlights.map((highlight) => (
                              <li key={highlight} className="text-gray-900">
                                {highlight}
                              </li>
                            ))}
                        </ul>
                      </Accordion>

                      {/* Add more accordions as needed */}
                      <div className="border-b border-gray-800">
                        <Accordion title="Additional Details">
                          <p className={`text-base text-gray-900`}>
                            Here you can add additional product details or
                            specifications.
                          </p>
                        </Accordion>
                      </div>
                    </div>
                  </div>
                </>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ProductsDetails;
