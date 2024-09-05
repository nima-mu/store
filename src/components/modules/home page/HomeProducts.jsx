import products from "constants/productsConstant";
import styles from "./homeProducts.module.css";
import truncateStr from "services/truncateStr";
import { Link } from "react-router-dom";
import useScrollReveal from "hook/useScrollReveal";

function HomeProducts() {
  let { ref, isVisible } = useScrollReveal();

  // Shuffle the products array randomly
  const shuffleArray = (array) => {
    return array.sort(() => Math.random() - 0.5);
  };

  const shuffledProducts = shuffleArray(products).slice(0, 8); // Only keep the first 8 products after shuffling

  return (
    <>
      <div
        ref={ref}
        className={`${styles.productsTitle} scroll-element ${
          isVisible ? "visible" : "hedden"
        }`}
      >
        <h4>پرفروش ترین محصولات ما</h4>
        <p>برترین کالاهای دیجیتال دستچین شده با پایین ترین قیمت</p>
      </div>
      <div className={styles.products}>
        {shuffledProducts.map((product, index) => (
          <div className={styles.product} key={index}>
            <div className={styles.productImageContainer}>
              <img src={product.productImage} alt={product.productName} />
            </div>
            <p className={styles.product__name}>
              {truncateStr(product.productName, 35)}
            </p>
            <p className={styles.product__price}>
              {product.price.toLocaleString()} تومان
            </p>
            <button>مشاهده</button>
          </div>
        ))}
      </div>
      <div className={styles.products__link}>
        <Link to="/products">مشاهده تمامی محصولات</Link>
      </div>
    </>
  );
}

export default HomeProducts;
