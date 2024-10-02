import React from "react";
import Navbar from "../features/Navbar/Navbar";
import Footer from "../features/common/Footer";
// import Orders from "../features/User/components/orders";
import DashboardLayout from "../features/common/DashboardLayout";

const OrdersPage = () => {
  return (
    <>
      <Navbar />
      {/* <DashboardLayout Children={<Orders />} /> */}
      <DashboardLayout />
      <Footer />
    </>
  );
};

export default OrdersPage;
