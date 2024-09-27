import React from "react";
import { useCart } from "services/CartProvider";
import { LuTrash2 } from "react-icons/lu";

function CartProduct({ item }) {
  let { dispatch } = useCart();

  let { id, name, price, qty } = item;
  let dispatcher = (type) => {
    dispatch({ type, payload: { id, price } });
  };

  return (
    <div key={id}>
      <div key={id} className="cart-item">
        <div className="item-info">
          <h3>{name}</h3>
          <p>{price.toLocaleString()} تومان</p>
        </div>
        <div className="item-quantity">
          <button onClick={() => dispatcher("INCREASE")}>+</button>
          <span>{qty}</span>
          {qty > 1 && <button onClick={() => dispatcher("DECREASE")}>-</button>}
          {qty === 1 && (
            <button
              className="remove-item"
              onClick={() => dispatcher("REMOVE")}
            >
              <LuTrash2 />
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default CartProduct;
