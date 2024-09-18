import React from "react";
import Navbar from "../features/Navbar/Navbar";
import Footer from "../features/common/Footer";
import Products from "../features/Products/components/Products";
const ProductsPage = () => {
  return (
    <>
      <Navbar Children={<Products />} />
      <Footer />
    </>
  );
};

export default ProductsPage;
