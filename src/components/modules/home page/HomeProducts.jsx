import styles from "./homeProducts.module.css";
import truncateStr from "services/truncateStr";
import { Link } from "react-router-dom";
import useScrollReveal from "hook/useScrollReveal";
import { useEffect, useState } from "react";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";

function HomeProducts() {
  let [products, setProducts] = useState([]);
  let { ref, isVisible } = useScrollReveal();

  const { data } = useQuery({
    queryKey: ["products"], 
    queryFn: () =>
      axios.get("http://localhost:8000/products").then((res) => res.data), 
  });

  useEffect(() => {
    data && setProducts(data);
  }, [data]);

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
              {truncateStr(product.productName, 30)}
            </p>
            <h4 className={styles.product__price}>
              {product.price.toLocaleString()} تومان
            </h4>
            <Link to={`/product/${product.id}`}>
              <button>مشاهده</button>
            </Link>
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
