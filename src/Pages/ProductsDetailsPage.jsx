import React from "react";
import Navbar from "../features/Navbar/Navbar";
import ProductsDetails from "../features/Products/components/ProductsDetails";
import Footer from "../features/common/Footer";
const ProductsDetailsPage = () => {
  return (
    <>
      <Navbar Children={<ProductsDetails />} />
      <Footer />
    </>
  );
};

export default ProductsDetailsPage;
