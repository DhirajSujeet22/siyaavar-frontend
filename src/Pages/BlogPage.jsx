import React from "react";
import Navbar from "../features/Navbar/Navbar";
import Footer from "../features/common/Footer";
import Blog from "../Home/Blog";
const BlogPage = () => {
  return (
    <>
      <Navbar Children={<Blog />} />
      <Footer />
    </>
  );
};

export default BlogPage;
