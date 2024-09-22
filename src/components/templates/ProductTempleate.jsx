import { useContext, useState } from "react";
import styles from "./product.module.css";
import { CartContext } from "services/CartProvider";
import { FaRegTrashCan } from "react-icons/fa6";

function ProductTempleate({ product }) {
  let [count, setCount] = useState(0);
  let { id, productName, price, productImage, colors, category } = product;
  let { cartState, dispatch } = useContext(CartContext);

  let clickHandler = async (type) => {
    type === "ADD" || type === "INCREASE"
      ? setCount((prevCount) => prevCount + 1)
      : setCount((prevCount) => prevCount - 1);
    await dispatch({
      type,
      payload: { id, price },
    });
  };

  let countInCart = cartState.items.find((item) => item.id === id)?.qty;
  console.log(countInCart);

  return (
    <div className={styles.product}>
      <div className={styles.productImage}>
        <img src={productImage} alt={productName} />
      </div>
      <div className={styles.productDetails}>
        <h1 className={styles.ProductName}>{productName}</h1>
        <div className={styles.ProductDescription}>
          <h5>توضیحات</h5>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid
            sed distinctio iusto minima reprehenderit dolore explicabo eligendi,
            sapiente, nulla voluptatum quas adipisci pariatur facilis similique
            animi. Nihil quae officia laborum. Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Optio eos officiis distinctio sint
            consectetur provident est cupiditate dolore quae perspiciatis neque
            odio libero, nobis reprehenderit repudiandae enim sed modi iure.
          </p>
        </div>
        <div className={styles.buyProduct}>
          <span className={styles.productPrice}>
            {price?.toLocaleString()} تومان
          </span>
          {countInCart ? (
            <div className={styles.productCount}>
              <button
                onClick={() => clickHandler("INCREASE")}
                className={styles.ProductCountPlus}
              >
                <span>+</span>
              </button>
              <p>{count}</p>
              {countInCart > 1 ? (
                <button
                  onClick={() => clickHandler("DECREASE")}
                  className={`${styles.ProductCountMinus} ${
                    count <= 1 && styles.inactiveButton
                  }`}
                >
                  <span>-</span>
                </button>
              ) : (
                <button
                  onClick={() => clickHandler("REMOVE")}
                  className={`${styles.ProductCountMinus} ${
                    count <= 1 && styles.inactiveButton
                  }`}
                >
                  <span>
                    <FaRegTrashCan />
                  </span>
                </button>
              )}
            </div>
          ) : (
            <button
              onClick={() => clickHandler("ADD")}
              className={styles.buyProductButton}
            >
              افزودن به سبد خرید
            </button>
          )}
          <div className={styles.productColor}></div>
        </div>
        <hr color="#ed9a00" />
        <div className={styles.productFeatures}>
          <>
            <div className={styles.productFeatureNames}>
              <p>حافظه: </p>

              {category === "لپ تاپ" ? (
                <>
                  <p>گرافیک: </p>
                  <p>رم: </p>
                </>
              ) : (
                <>
                  <p> حافظه رام: </p>
                  <p>سایز صفحه نمایش: </p>
                </>
              )}
            </div>
            <div className={styles.productFeatureValue}>
              <p>{product?.memory} </p>
              <p>{product?.ram} </p>
              {category === "لپ تاپ" ? (
                <p>{product?.graphic} </p>
              ) : (
                <p>{product.size} inch</p>
              )}
            </div>
          </>
        </div>
      </div>
    </div>
  );
}

export default ProductTempleate;
