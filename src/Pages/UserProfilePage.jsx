import React from "react";
import UserProfile from "../features/User/components/UserProfile";
import Navbar from "../features/Navbar/Navbar";
import Footer from "../features/common/Footer";
const UserProfilePage = () => {
  return (
    <>
      <Navbar Children={<UserProfile />} />
      <Footer />
    </>
  );
};

export default UserProfilePage;
