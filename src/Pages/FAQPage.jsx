import React from "react";
import FAQ from "../Home/FAQ";
import Navbar from "../features/Navbar/Navbar";
import Footer from "../features/common/Footer";

const FAQPage = () => {
  return (
    <>
      <Navbar Children={<FAQ />} />
      <Footer />
    </>
  );
};

export default FAQPage;
