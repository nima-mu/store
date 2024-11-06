import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import styles from "./AdminProducts.module.css";
import { useEffect, useState } from "react";

export default function AdminProducts() {
  const { data, error, isLoading } = useQuery({
    queryKey: ["products"],
    queryFn: () =>
      axios
        .get("https://store-api-pi-dusky.vercel.app/products")
        .then((res) => res.data),
  });

  const [prices, setPrices] = useState([]);

  useEffect(() => {
    if (data) {
      setPrices(data.map((product) => product.price));
    }
  }, [data]);

  const handlePriceChange = (index, newPrice) => {
    const updatedPrices = [...prices];
    updatedPrices[index] = newPrice;
    setPrices(updatedPrices);
  };

  let submitPriceHandler = (index, productId) => {
    try {
      axios.patch(
        `https://store-api-pi-dusky.vercel.app/products/${productId}`,
        {
          price: prices[index],
        }
      );
    } catch (error) {
      console.log(error);
    }
  };

  let availableHandler = (productId, isAvailable) => {
    try {
      axios.patch(
        `https://store-api-pi-dusky.vercel.app/products/${productId}`,
        {
          isAvailable: !isAvailable,
        }
      );
    } catch (error) {
      console.log(error);
    }
  };

  if (isLoading) return <div className={styles.loading}>Loading...</div>;
  if (error) return <div className={styles.error}>Error: {error.message}</div>;

  return (
    <div className={styles.container}>
      <div className={styles.productGrid}>
        {data?.map((product, index) => (
          <div key={product.id} className={styles.productCard}>
            <div className={styles.imageContainer}>
              <img
                src={product.productImage}
                alt={product.productName}
                className={styles.image}
              />
            </div>
            <div className={styles.productInfo}>
              <p className={styles.productName}>{product.productName}</p>
              <p className={styles.price}>
                قیمت قبلی: <strong>{product.price.toLocaleString()}</strong>{" "}
                تومان
              </p>
            </div>
            <div className={styles.actions}>
              <input
                type="number"
                className={styles.input}
                placeholder="New price"
                value={prices[index] || ""}
                onChange={(e) => handlePriceChange(index, e.target.value)}
              />
              <button
                className={styles.button}
                onClick={() => submitPriceHandler(index, product.id)}
              >
                Change price
              </button>
              <button
                onChange={availableHandler(product.id, product.isAvailable)}
                className={`${styles.button} ${styles.buttonOutline}`}
              >
                Set to Not Available
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
