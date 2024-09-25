import React from "react";
import { useCart } from "services/CartProvider";
import CartProduct from "./CartProduct";

function CartProducts() {
  let { cartState, dispatch } = useCart();

  return (
    <div>
      {cartState?.items.map((item) => (
        <CartProduct item={item} />
      ))}
      {cartState.totalPrice} - {cartState.totalItems}
    </div>
  );
}

export default CartProducts;
