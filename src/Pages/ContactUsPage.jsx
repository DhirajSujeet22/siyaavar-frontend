import React from "react";
import ContactUs from "../Home/ContactUs";
import Navbar from "../features/Navbar/Navbar";
import Footer from "../features/common/Footer";

const ContactUsPage = () => {
  return (
    <>
      <Navbar Children={<ContactUs />} />
      <Footer />
    </>
  );
};

export default ContactUsPage;
