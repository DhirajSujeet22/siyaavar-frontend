import React from "react";
import Navbar from "../features/Navbar/Navbar";
import Footer from "../features/common/Footer";
import Product_home from "../features/Products/components/Product_home";
const HomePage = () => {
  return (
    <>
      <Navbar Children={<Product_home />} />
      <Footer />
    </>
  );
};

export default HomePage;
