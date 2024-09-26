import { useEffect, useState } from "react";
import { useCart } from "services/CartProvider";
import CartProduct from "./CartProduct";
import "./cart.css";

function CartProducts() {
  let [isComplete, setIsComplete] = useState(false);
  let { cartState, dispatch } = useCart();
  let { items, totalItems, totalPrice } = cartState;

  useEffect(() => setIsComplete(false), []);

  let clickHandler = () => {
    dispatch("REMOVE-ALL");
    setIsComplete(true);
  };

  return (
    <div className="cart-wrapper">
      <div className="cart">
        {isComplete ? (
          <div className="cart-complete">
            <h3>خرید با موفقیت انجام شد</h3>
            <p>ممنون از اعتماد شما</p>
          </div>
        ) : (
          <>
            <h2>سبد خرید</h2>
            {items.map((item) => (
              <CartProduct key={item.id} item={item} />
            ))}
            <div className="cart-total">
              <strong>جمع قیمت:</strong>
              <strong>{totalPrice.toLocaleString()} تومان</strong>
            </div>
            {totalItems >= 1 && (
              <button className="cart__button" onClick={clickHandler}>
                تکمیل خرید
              </button>
            )}
          </>
        )}
      </div>
    </div>
  );
}

export default CartProducts;
