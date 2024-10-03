import styles from "./homeProducts.module.css";
import truncateStr from "services/truncateStr";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import Spinner from "components/spinner/Spinner";

function HomeProducts() {
  let [products, setProducts] = useState([]);

  // get data from json server
  const { data, isLoading, error } = useQuery({
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

  // Error handling
  if (isLoading) return <div>Loading products...</div>; // Loading state
  if (error) return <div>Error loading products: {error.message}</div>; // Error state

  return (
    <>
      <div className={styles.productsTitle}>
        <h4>پرفروش ترین محصولات ما</h4>
        <p>برترین کالاهای دیجیتال دستچین شده با پایین ترین قیمت</p>
      </div>
      <div className={styles.products}>
        {shuffledProducts.map((product) => (
          <div className={styles.product} key={product.id}>
            <div className={styles.productImageContainer}>
              {isLoading ? (
                <Spinner />
              ) : (
                <img src={product.productImage} alt={product.productName} />
              )}
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
