import React from "react";
import Navbar from "../features/Navbar/Navbar";
import Footer from "../features/common/Footer";
import About from "../Home/About";

const AboutPage = () => {
  return (
    <>
      <Navbar Children={<About />} />
      <Footer />
    </>
  );
};

export default AboutPage;
