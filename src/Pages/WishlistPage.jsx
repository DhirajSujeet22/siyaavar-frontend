import React from "react";
import DashboardLayout from "../features/common/DashboardLayout";
import Footer from "../features/common/Footer";
import Wishlist from "../features/User/components/Wishlist";
import Navbar from "../features/Navbar/Navbar";
const WishlistPage = () => {
  return (
    <>
      <Navbar />
      <DashboardLayout Children={<Wishlist />} />
      <Footer />
    </>
  );
};

export default WishlistPage;
