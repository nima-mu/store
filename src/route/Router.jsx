import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";

import Product from "pages/Product";
import Products from "pages/Products";
import HomePage from "pages/HomePage";
import AboutUs from "pages/AboutUs";
import Cart from "pages/Cart";
import Auth from "pages/Auth";
import { useUser } from "services/UserProvider";
import Admin from "pages/Admin";

function Router() {
  let name = localStorage.getItem("userName")
  let email = localStorage.getItem("userEmail")
  let isLogedIn = !!name && !!email;
  
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/aboutUs" element={<AboutUs />} />
      <Route path="/products" element={<Products />} />
      <Route path="/product/:id" element={<Product />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/auth" element={<Auth />} />
      <Route path="/admin" element={isLogedIn && name == "admin" ? <Admin /> : <Navigate to="/" replace />} />
      <Route path="/*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

export default Router;
