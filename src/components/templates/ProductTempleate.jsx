import { useContext, useEffect, useState } from "react";
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

  useEffect(() => {
    const countInCart = cartState.items.find((item) => item.id === id)?.qty || 0;
    setCount(countInCart);
  }, [cartState, id]); 
  
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
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
            استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در
            ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز،
            و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای
            زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و
            متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان
            رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد
            کرد، در این صورت می توان امید داشت که ...
          </p>
        </div>
        <div className={styles.buyProduct}>
          <span className={styles.productPrice}>
            {price?.toLocaleString()} تومان
          </span>
          {!!count ? (
            <div className={styles.productCount}>
              <button
                onClick={() => clickHandler("INCREASE")}
                className={styles.ProductCountPlus}
              >
                <span>+</span>
              </button>
              <p>{count}</p>
              {count > 1 ? (
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
