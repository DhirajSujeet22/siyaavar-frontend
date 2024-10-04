import React from "react";
import Navbar from "../features/Navbar/Navbar";
import Footer from "../features/common/Footer";
import Careers from "../Home/Careers";

const CareersPage = () => {
  return (
    <>
      <Navbar Children={<Careers />} />
      <Footer />
    </>
  );
};

export default CareersPage;
