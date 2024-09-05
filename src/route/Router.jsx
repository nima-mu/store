import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage";
import AboutUs from "../pages/AboutUs";
import Products from "../pages/Products";
import Cart from "../pages/Cart";
import Auth from "../pages/Auth";

function Router() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/aboutUs" element={<AboutUs />} />
      <Route path="/products" element={<Products />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/auth" element={<Auth />} />
    </Routes>
  );
}

export default Router;
