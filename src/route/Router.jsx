import React from "react";
import { Route, Routes } from "react-router-dom";

import Product from "pages/Product";
import Products from "pages/Products";
import HomePage from "pages/HomePage";
import AboutUs from "pages/AboutUs";
import Cart from "pages/Cart";
import Auth from "pages/Auth";

function Router() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/aboutUs" element={<AboutUs />} />
      <Route path="/products" element={<Products />} />
      <Route path="/product/:id" element={<Product />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/auth" element={<Auth />} />
    </Routes>
  );
}

export default Router;
