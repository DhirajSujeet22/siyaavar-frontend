import React from "react";
import Navbar from "../features/Navbar/Navbar";
import Footer from "../features/common/Footer";
import Checkout from "../features/Order/Checkout";

const CheckoutPage = () => {
  return (
    <>
      <Navbar Children={<Checkout />} />
      <Footer />
    </>
  );
};

export default CheckoutPage;
