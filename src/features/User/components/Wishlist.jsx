import React from "react";

const Wishlist = () => {
  const wishlist = [
    {
      id: 1,
      title: "Stylish Jacket",
      description: "A warm and stylish jacket for all occasions.",
      price: "$99.99",
      availability: "In Stock",
      image: "https://i.imgur.com/G2lh4im.jpg",
    },
    {
      id: 2,
      title: "Casual Sneakers",
      description: "Comfortable and trendy sneakers for everyday wear.",
      price: "$59.99",
      availability: "In Stock",
      image: "https://fakestoreapi.com/img/71HblAHs5xL._AC_UY879_-2.jpg",
    },
    {
      id: 3,
      title: "Classic White T-Shirt",
      description: "A versatile white t-shirt that goes with everything.",
      price: "$19.99",
      availability: "In Stock",
      image: "https://fakestoreapi.com/img/51y6BKLm6-L._AC_UL640_QL65_ML3_.jpg",
    },
    {
      id: 4,
      title: "Blue Denim Jeans",
      description: "Stylish blue denim jeans for a casual look.",
      price: "$49.99",
      availability: "In Stock",
      image: "https://fakestoreapi.com/img/71G2hFPRv2L._AC_UL640_QL65_ML3_.jpg",
    },
    {
      id: 5,
      title: "Elegant Dress",
      description: "An elegant dress suitable for parties and formal events.",
      price: "$79.99",
      availability: "In Stock",
      image: "https://fakestoreapi.com/img/71nK65sY2zL._AC_UL640_QL65_ML3_.jpg",
    },
    {
      id: 6,
      title: "Sports Watch",
      description: "A stylish sports watch for the active lifestyle.",
      price: "$199.99",
      availability: "In Stock",
      image: "https://fakestoreapi.com/img/71W18EdJl3L._AC_UL640_QL65_ML3_.jpg",
    },
    {
      id: 7,
      title: "Leather Backpack",
      description: "A premium leather backpack for work or travel.",
      price: "$129.99",
      availability: "In Stock",
      image: "https://fakestoreapi.com/img/71kXJXbWL4L._AC_UL640_QL65_ML3_.jpg",
    },
    {
      id: 8,
      title: "Wireless Headphones",
      description: "Noise-cancelling wireless headphones for immersive sound.",
      price: "$89.99",
      availability: "In Stock",
      image: "https://fakestoreapi.com/img/61Hd21wns0L._AC_UL640_QL65_ML3_.jpg",
    },
    {
      id: 9,
      title: "Stylish Sunglasses",
      description: "Fashionable sunglasses to protect your eyes.",
      price: "$39.99",
      availability: "In Stock",
      image: "https://fakestoreapi.com/img/71U0j9bEl2L._AC_UL640_QL65_ML3_.jpg",
    },
    {
      id: 10,
      title: "Comfortable Hoodie",
      description: "A cozy hoodie for chilly days.",
      price: "$59.99",
      availability: "In Stock",
      image: "https://fakestoreapi.com/img/81qfktgB5yL._AC_UL640_QL65_ML3_.jpg",
    },
    {
      id: 11,
      title: "Trendy Beanie",
      description: "A trendy beanie for winter fashion.",
      price: "$25.99",
      availability: "In Stock",
      image: "https://fakestoreapi.com/img/61HzX4DLoSL._AC_UL640_QL65_ML3_.jpg",
    },
    {
      id: 12,
      title: "Stylish Skirt",
      description: "A fashionable skirt that pairs well with any top.",
      price: "$49.99",
      availability: "In Stock",
      image: "https://fakestoreapi.com/img/61Y18wwFx4L._AC_UL640_QL65_ML3_.jpg",
    },
  ];

  return (
    <>
      <div className="bg-transparent p-1 sm:p-8 min-h-screen">
        <h1 className="text-4xl font-[500] text-center mb-12 text-gray-700">
          Your Wishlist
        </h1>
        <div className="grid grid-cols-1 gap-10">
          {wishlist.map((product) => (
            <div
              key={product.id}
              className="bg-transparent border-[1px] rounded-md border-gray-400 flex flex-col md:flex-row p-6 items-center transition-transform duration-300"
            >
              {/* Image on Left */}
              <div className="w-full md:w-1/3 pr-0 md:pr-6 mb-6 md:mb-0">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-56 object-contain rounded-lg"
                />
              </div>

              {/* Product Details on Right */}
              <div className="w-full md:w-2/3 text-center md:text-left">
                <div className="flex flex-col md:flex-row justify-between mb-4 items-center md:items-start">
                  <h2 className="text-2xl font-bold text-gray-800">
                    {product.title}
                  </h2>
                  <span className="bg-green-600 text-white text-xs px-4 py-2 rounded-full shadow-md mt-2 md:mt-0">
                    {product.availability === "In Stock"
                      ? "In Stock"
                      : "Out of Stock"}
                  </span>
                </div>
                <p className="text-gray-600 mb-4">{product.description}</p>
                <p className="text-xl font-semibold text-gray-900 mb-6">
                  {product.price}
                </p>

                {/* Buttons */}
                <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                  <button className="bg-orange-500 text-white py-2 px-4 rounded-lg shadow-md hover:bg-orange-600 transition-colors duration-300">
                    Add to Cart
                  </button>
                  <button className="bg-red-500 text-white py-2 px-4 rounded-lg shadow-md hover:bg-red-600 transition-colors duration-300">
                    Remove
                  </button>
                  <button className="bg-blue-500 text-white py-2 px-4 rounded-lg shadow-md hover:bg-blue-600 transition-colors duration-300">
                    Buy Now
                  </button>
                  <button className="bg-gray-500 text-white py-2 px-4 rounded-lg shadow-md hover:bg-gray-600 transition-colors duration-300">
                    View
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Wishlist;
