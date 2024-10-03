import React from "react";
import Navbar from "../features/Navbar/Navbar";
import Dashboard from "../features/User/components/Dashboard";
import Footer from "../features/common/Footer";
import DashboardLayout from "../features/common/DashboardLayout";

const DashboardPage = () => {
  return (
    <>
      {/* <Navbar Children={<Dashboard />} /> */}
      <Navbar />
      <DashboardLayout Children={<Dashboard />} />
      <Footer />
    </>
  );
};

export default DashboardPage;
