import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import styles from "./AdminProducts.module.css";

export default function AdminProducts() {
  const { data, error, isLoading } = useQuery({
    queryKey: ["products"],
    queryFn: () =>
      axios
        .get("https://store-api-pi-dusky.vercel.app/products")
        .then((res) => res.data),
  });

  

  if (isLoading) return <div className={styles.loading}>Loading...</div>;
  if (error) return <div className={styles.error}>Error: {error.message}</div>;

  return (
    <div className={styles.container}>
      <div className={styles.productGrid}>
        {data?.map((product) => (
          <div key={product.id} className={styles.productCard}>
            <div className={styles.imageContainer}>
              <img src={product.productImage} alt={product.productName} className={styles.image} />
            </div>
            <div className={styles.productInfo}>
              <p className={styles.productName}>{product.productName}</p>
              <p className={styles.price}> تومان {product.price}</p>
            </div>
            <div className={styles.actions}>
              <input type="number" className={styles.input} placeholder="New price" value={product.price} />
              <button className={styles.button}>Change price</button>
              <button className={`${styles.button} ${styles.buttonOutline}`}>Set to Not Available</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}