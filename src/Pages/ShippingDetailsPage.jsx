import React from "react";
import Navbar from "../features/Navbar/Navbar";
import Footer from "../features/common/Footer";
import ShippingDetails from "../Home/ShippingDetails";

const ShippingDetailsPage = () => {
  return (
    <>
      <Navbar Children={<ShippingDetails />} />
      <Footer />
    </>
  );
};

export default ShippingDetailsPage;
