import React from "react";

function CartProduct({ item }) {
  return <p key={item.id}>{item.productName}</p>;
}

export default CartProduct;
