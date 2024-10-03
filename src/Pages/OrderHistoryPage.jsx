import React from "react";
import Navbar from "../features/Navbar/Navbar";
import Footer from "../features/common/Footer";
import DashboardLayout from "../features/common/DashboardLayout";
import OrderHistory from "../features/User/components/OrderHistory";

const OrdersPage = () => {
  return (
    <>
      <Navbar />
      <DashboardLayout Children={<OrderHistory />} />
      <Footer />
    </>
  );
};

export default OrdersPage;
