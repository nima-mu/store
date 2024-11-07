import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Top from "./Top";
import "./layout.css";
import ScrollBar from "./ScrollBar";

function Layout({ children }) {
  return (
    <>
      <ScrollBar />
      <Header />
      <div className="layout__children">{children}</div>
      <Top />
      <Footer />
    </>
  );
}

export default Layout;
