import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Top from "./Top";

function Layout({ children }) {
  return (
    <>
      <Header />
      {children}
      <Top />
      <Footer />
    </>
  );
}

export default Layout;
