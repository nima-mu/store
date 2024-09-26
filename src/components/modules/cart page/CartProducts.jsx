import React from "react";
import { useCart } from "services/CartProvider";
import CartProduct from "./CartProduct";
import "./cart.css";

function CartProducts() {
  let { cartState } = useCart();
  let { items, totalItems, totalPrice } = cartState;


  return (
    <div className="cart-wrapper">
      <div className="cart">
        <h2>Shopping Cart</h2>
        {items.map((item) => (
          <CartProduct key={item.id} item={item}/>
        ))}
        <div className="cart-total">
          <strong>Total:</strong>
          <strong>{totalPrice.toLocaleString()} تومان</strong>
        </div>
      </div>
    </div>
  );
}

export default CartProducts;
