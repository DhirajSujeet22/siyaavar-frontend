import React from "react";
import Privacy_Policy from "../Home/Privacy";
import Navbar from "../features/Navbar/Navbar";
import Footer from "../features/common/Footer";

const PrivacyPage = () => {
  return (
    <>
      <Navbar Children={<Privacy_Policy />} />
      <Footer />
    </>
  );
};

export default PrivacyPage;
