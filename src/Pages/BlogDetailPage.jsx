import React from "react";
import Navbar from "../features/Navbar/Navbar";
import Footer from "../features/common/Footer";
import BlogDetail from "../Home/BlogDetail";

const BlogDetailPage = () => {
  return (
    <>
      <Navbar Children={<BlogDetail />} />
      <Footer />
    </>
  );
};

export default BlogDetailPage;
