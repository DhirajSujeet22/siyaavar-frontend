import React from "react";
import Navbar from "../features/Navbar/Navbar";
import Footer from "../features/common/Footer";
import Size_Guide from "../Home/Size_Guide";

const Size_GuidePage = () => {
  return (
    <>
      <Navbar Children={<Size_Guide />} />
      <Footer />
    </>
  );
};

export default Size_GuidePage;
