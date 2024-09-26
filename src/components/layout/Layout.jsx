import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Top from "./Top";
import "./layout.css";

function Layout({ children }) {
  return (
    <>
      <Header />
      <div className="layout__children">{children}</div>
      <Top />
      <Footer />
    </>
  );
}

export default Layout;
