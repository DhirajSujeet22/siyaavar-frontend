import React from "react";
import Navbar from "../features/Navbar/Navbar";
import Footer from "../features/common/Footer";
import ExchangePolicy from "../Home/ExchangePolicy";

const ExchangePolicyPage = () => {
  return (
    <>
      <Navbar Children={<ExchangePolicy />} />
      <Footer />
    </>
  );
};

export default ExchangePolicyPage;
