import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import { Autoplay, EffectFade, FreeMode } from "swiper/modules";
import WhatsAppIcon from "../../common/WhatsAppIcon";

const images = {
  men: [
    "https://i.imgur.com/SP1VHjX.jpg",
    "https://i.imgur.com/bRQPhXu.jpg",
    "https://i.imgur.com/G2lh4im.jpg",
    "https://i.imgur.com/VcTSTzm.jpg",
  ],
  women: [
    "https://i.imgur.com/2z2YFJB.jpeg",
    "https://i.imgur.com/czcLcgo.jpeg",
    "https://i.imgur.com/3bG8AL2.jpeg",
    "https://i.imgur.com/eX31xtl.jpeg",
    "https://i.imgur.com/2z2YFJB.jpeg",
    "https://i.imgur.com/czcLcgo.jpeg",
    "https://i.imgur.com/3bG8AL2.jpeg",
    "https://i.imgur.com/eX31xtl.jpeg",
  ],
  kids: [
    "https://i.imgur.com/ZjhDo6S.jpeg",
    "https://i.imgur.com/ZjhDo6S.jpeg",
    "https://i.imgur.com/ZjhDo6S.jpeg",
    "https://i.imgur.com/ZjhDo6S.jpeg",
  ],
};

const GrooveImage = [
  "https://i.imgur.com/jkN2Ob4.jpg",
  "https://i.imgur.com/t0mQGN2.jpg",
  "https://i.imgur.com/KwPNGFc.jpg",
  "https://i.imgur.com/pUOEV7B.jpg",
];

const WeddingImage = [
  "https://i.imgur.com/2lGDtqo.jpg",
  "https://i.imgur.com/2lGDtqo.jpg",
  "https://i.imgur.com/2lGDtqo.jpg",
  "https://i.imgur.com/2lGDtqo.jpg",
];

// const Look

const Product_home = () => {
  const [filter, setFilter] = useState("men");

  return (
    <>
      {/* ===================== Banner  ==================== */}

      <main>
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          navigation={true}
          effect="fade"
          modules={[Autoplay, EffectFade]}
          className="mySwiper"
        >
          <SwiperSlide>
            <img
              className="w-full  h-[12rem] object-cover sm:h-auto"
              src="https://i.imgur.com/fj5NLNu.jpeg"
              alt="banner_img"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="w-full  h-[12rem] object-cover sm:h-auto"
              src="https://i.imgur.com/OAopDgm.png"
              alt="banner_img"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="w-full  h-[12rem] object-cover sm:h-auto"
              src="https://i.imgur.com/24yt1S1.png"
              alt="banner_img"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="w-full  h-[12rem] object-cover sm:h-auto"
              src="https://i.imgur.com/TRjZmbp.png"
              alt="banner_img"
            />
          </SwiperSlide>
        </Swiper>
      </main>

      {/* ===================== Choose Your Groove ==================== */}

      <WhatsAppIcon />

      {/* ===================== Choose Your Groove ==================== */}
      <section className="p-3 bg-gray-100 mt-5">
        <div className="flex flex-col items-center">
          {/* Title Section */}
          <h2 className="font-baskervville text-[1.8rem] sm:text-3xl py-6 font-semibold text-gray-800 mb-8 text-center">
            "Choose Your Groove"
          </h2>

          {/* Image Grid Section */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-5 justify-center">
            {GrooveImage.map((src, index) => (
              <img
                key={index}
                src={src}
                alt={`Groove_img_${index}`}
                className="w-full object-cover rounded-lg shadow-md transition-transform duration-300 ease-in-out transform hover:scale-105"
              />
            ))}
          </div>
        </div>
      </section>
      {/* ===================== Trending Best Selling Products ==================== */}
      <section className="p-8 bg-gray-100">
        <div>
          {/* Title Section */}
          <h2 className="font-baskervville text-3xl py-6 font-semibold text-gray-800 mb-8 text-center">
            Trending Best Selling Products
          </h2>

          <Swiper
            slidesPerView={1}
            spaceBetween={30}
            autoplay={{
              delay: 1500,
              disableOnInteraction: false,
            }}
            freeMode={true}
            modules={[Autoplay, FreeMode]}
            breakpoints={{
              640: { slidesPerView: 2 },
              768: { slidesPerView: 3 },
              1024: { slidesPerView: 4 },
            }}
            className="mySwiper"
          >
            {images.women.map((src, index) => (
              <SwiperSlide key={index}>
                <div className="flex flex-col items-center">
                  <img
                    className="w-72 h-96 object-cover rounded-lg shadow-md"
                    src={src}
                    alt={`product_img_${index}`}
                  />
                  <h3 className="text-lg font-semibold text-gray-800 mt-4 text-left">
                    Frok Suit
                  </h3>
                  <p className="text-xl font-bold text-gray-600 mt-2 text-left">
                    ₹400
                  </p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
      {/* ===================== Latest Additions ==================== */}
      <section className="p-3 bg-gray-100">
        <div className="flex flex-col items-center">
          {/* Title Section */}
          <h2 className="font-baskervville text-3xl py-6 font-semibold text-gray-800 mb-8 text-center">
            Latest Additions
          </h2>

          {/* Filter Buttons */}
          <div className="flex space-x-4 mb-6">
            <button
              onClick={() => setFilter("men")}
              className={`px-4 py-2 rounded-lg transition-colors duration-300 ease-in-out ${
                filter === "men"
                  ? "bg-blue-600 text-white"
                  : "bg-blue-500 text-white hover:bg-blue-600"
              }`}
            >
              Men
            </button>
            <button
              onClick={() => setFilter("women")}
              className={`px-4 py-2 rounded-lg transition-colors duration-300 ease-in-out ${
                filter === "women"
                  ? "bg-blue-600 text-white"
                  : "bg-blue-500 text-white hover:bg-blue-600"
              }`}
            >
              Women
            </button>
            <button
              onClick={() => setFilter("kids")}
              className={`px-4 py-2 rounded-lg transition-colors duration-300 ease-in-out ${
                filter === "kids"
                  ? "bg-blue-600 text-white"
                  : "bg-blue-500 text-white hover:bg-blue-600"
              }`}
            >
              Kids
            </button>
          </div>

          {/* Image Grid Section */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-5 justify-center">
            {images[filter].map((src, index) => (
              <img
                key={index}
                src={src}
                alt={`Groove_img_${index}`}
                className="w-72 object-cover rounded-lg shadow-md transition-transform duration-300 ease-in-out transform hover:scale-105"
              />
            ))}
          </div>
        </div>
      </section>
      {/* ===================== See offers ==================== */}
      <section className="p-8 my-10 bg-gray-100">
        <div className="flex flex-col md:flex-row justify-between gap-6">
          {/* Box 1 */}
          <div className="flex flex-col justify-between border-yellow-400 border-2 bg-white p-6 rounded-lg shadow-md flex-grow">
            <h3 className="text-lg font-medium text-gray-800 mb-4">Siyaavar</h3>
            <p className="text-gray-500 text-base font-medium">
              "Explore Unmatched Style with Siyaavar: Exclusive Offers on Men's
              Fashion Collections Now Live!"
            </p>
            <div className="flex justify-end mt-4">
              <button className="px-4 py-2 text-white rounded-lg bg-blue-600 transition-colors duration-300 ease-in-out">
                See Offers
              </button>
            </div>
          </div>

          {/* Box 2 */}
          <div className="flex flex-col justify-between border-yellow-400 border-2 bg-white p-6 rounded-lg shadow-md flex-grow">
            <h3 className="text-lg font-medium text-gray-800 mb-4">Siyaa</h3>
            <p className="text-gray-500 text-base font-medium">
              "Explore Unmatched Style with Siyaa: Exclusive Offers on Women's
              Fashion Collections Now Live!"
            </p>
            <div className="flex justify-end mt-4">
              <button className="px-4 py-2 text-white rounded-lg bg-blue-600 transition-colors duration-300 ease-in-out">
                See Offers
              </button>
            </div>
          </div>
        </div>
      </section>
      {/* ===================== Videos ==================== */}
      <section className="p-3 mt-10 bg-gray-100">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-5 justify-center">
          <div className="flex-shrink-0 w-full sm:w-72 md:w-80 lg:w-[17rem]">
            <video
              className="w-full h-auto rounded-lg shadow-md"
              src="/videos/video 1.mp4"
              autoPlay
              loop
              muted
              playsInline
            >
              <source src="/videos/video 1.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>

          <div className="flex-shrink-0 w-full sm:w-72 md:w-80 lg:w-[17rem]">
            <video
              className="w-full h-auto rounded-lg shadow-md"
              src="/videos/video2.mp4"
              autoPlay
              loop
              muted
              playsInline
            >
              <source src="/videos/video2.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          <div className="flex-shrink-0 w-full sm:w-72 md:w-80 lg:w-[17rem]">
            <video
              className="w-full h-auto rounded-lg shadow-md"
              src="/videos/video 3.mp4"
              autoPlay
              loop
              muted
              playsInline
            >
              <source src="/videos/video 3.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          <div className="flex-shrink-0 w-full sm:w-72 md:w-80 lg:w-[17rem]">
            <video
              className="w-full h-auto rounded-lg shadow-md"
              src="/videos/video 4.mp4"
              autoPlay
              loop
              muted
              playsInline
            >
              <source src="/videos/video 4.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </section>
      {/* ===================== "Discover Your Look!" ==================== */}
      <section className="p-3 bg-gray-100">
        <div className="flex flex-col items-center">
          {/* Title Section */}
          <h2 className="font-baskervville text-3xl py-6 font-semibold text-gray-800 mb-8 text-center">
            "Discover Your Look!"
          </h2>

          {/* Image Grid Section */}
          <div className="flex flex-wrap justify-center gap-[3rem] mt-5">
            {/* Image 1 with Text */}
            <div className="flex flex-col items-start font-baskervville">
              <img
                src="https://i.imgur.com/2z2YFJB.jpeg"
                alt="Groove_img_1"
                className="w-[20rem] h-[25rem] object-cover rounded-lg shadow-md transition-transform duration-300 ease-in-out transform hover:scale-105"
              />
              <p className="text-xl font-semibold mt-4">Shop Kurtas</p>
              <p className="text-gray-600">Look Vibrant</p>
            </div>

            {/* Image 2 with Text */}
            <div className="flex flex-col items-start font-baskervville">
              <img
                src="https://i.imgur.com/eX31xtl.jpeg"
                alt="Groove_img_2"
                className="w-[20rem] h-[30rem] object-cover rounded-lg shadow-md transition-transform duration-300 ease-in-out transform hover:scale-105"
              />
              <p className="text-xl font-semibold mt-4">Shop Kurtas</p>
              <p className="text-gray-600">Look Vibrant</p>
            </div>

            {/* Image 3 with Text */}
            <div className="flex flex-col items-start font-baskervville">
              <img
                src="https://i.imgur.com/czcLcgo.jpeg"
                alt="Groove_img_3"
                className="w-[20rem] h-[25rem] object-cover rounded-lg shadow-md transition-transform duration-300 ease-in-out transform hover:scale-105"
              />
              <p className="text-xl font-semibold mt-4">Shop Kurtas</p>
              <p className="text-gray-600">Look Vibrant</p>
            </div>
          </div>
        </div>
      </section>
      {/* ===================== "Wedding Collections" ==================== */}

      <section className="p-3 my-10 bg-gray-100">
        <div className="flex flex-col items-center">
          {/* Title Section */}
          <h2 className="font-baskervville text-3xl py-6 font-semibold text-gray-800 mb-8 text-center">
            Wedding Collections
          </h2>

          {/* Image Grid Section */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-5 justify-center">
            {WeddingImage.map((item, index) => (
              <div
                key={index}
                className="flex flex-col items-start sm:items-center"
              >
                <img
                  src={item}
                  alt={`Groove_img_${index}`}
                  className="w-72 object-cover rounded-lg shadow-md transition-transform duration-300 ease-in-out transform hover:scale-105"
                />
                <p className="text-lg font-[600] mt-4 font-baskervville">
                  Peach Buta patterned sherwani set
                </p>
                <p className="text-gray-700 mt-5">₹ 99,999 /-</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== "Kids Collection" ==================== */}

      <section className="p-3 my-10 bg-gray-100">
        <div className="flex flex-col items-center">
          {/* Title Section */}
          <h2 className="font-baskervville text-3xl py-6 font-semibold text-gray-800 mb-8 text-center">
            Wedding Collections
          </h2>

          {/* Image Grid Section */}
          <div className="flex flex-wrap justify-center gap-6 mt-5">
            <img
              src="https://i.imgur.com/GgfLLJG.png"
              alt="kids"
              className="w-[100%] object-cover rounded-lg shadow-md transition-transform duration-300 ease-in-out transform hover:scale-105"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Product_home;
