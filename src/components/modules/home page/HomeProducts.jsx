import styles from "./homeProducts.module.css";
import truncateStr from "services/truncateStr";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";

function HomeProducts() {
  const [shuffledProducts, setShuffledProducts] = useState([]);

  // Get data from JSON server
  const { data, isLoading, error } = useQuery({
    queryKey: ["products"],
    queryFn: () =>
      axios
        .get("https://store-api-pi-dusky.vercel.app/products")
        .then((res) => res.data),
  });

  useEffect(() => {
    if (data && Array.isArray(data)) {
      // Shuffle the products array randomly
      const shuffleArray = (array) => {
        return array.sort(() => Math.random() - 0.5);
      };

      const shuffled = shuffleArray([...data]).slice(0, 8); // Shuffle and get the first 8 products
      setShuffledProducts(shuffled);
    }
  }, [data]);

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
        {shuffledProducts.length === 0 ? (
          <div>محصولی وجود ندارد</div>
        ) : (
          shuffledProducts.map((product) => (
            <div className={styles.product} key={product.id}>
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
          ))
        )}
      </div>
      <div className={styles.products__link}>
        <Link to="/products">مشاهده تمامی محصولات</Link>
      </div>
    </>
  );
}

export default HomeProducts;