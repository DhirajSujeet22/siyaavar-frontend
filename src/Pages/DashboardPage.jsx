import React from "react";
import Navbar from "../features/Navbar/Navbar";
import Dashboard from "../features/User/components/Dashboard";
import Footer from "../features/common/Footer";

const DashboardPage = () => {
  return (
    <>
      {/* <Navbar Children={<Dashboard />} /> */}
      <Navbar />
      <Dashboard />
      <Footer />
    </>
  );
};

export default DashboardPage;
