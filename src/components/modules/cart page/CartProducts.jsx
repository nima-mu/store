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
    dispatch({ type: "REMOVE-ALL" });
    setIsComplete(true);
  };

  return (
    <div className="cart-wrapper">
      <div className="cart">
        {isComplete ? (
          <div className="cart-complete">
            <img src="/images/delivery.jpg" />
            <h3>خرید با موفقیت انجام شد</h3>
            <p>ممنون از اعتماد شما</p>
          </div>
        ) : totalItems === 0 ? (
          <div className="cart-empty">
            <img src="/images/empty-cart.svg" />
            <h3> سبد خرید شما خالی است!</h3>
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
