import { Link } from "react-router-dom";
import styles from "./productsDisplay.module.css";

function ProductsDisplay({ displayed = [] }) {
  return (
    <>
      {displayed.length === 0 || !Array.isArray(displayed) ? (
        <h2>loading...</h2>
      ) : (
        <div className={styles.productsDisplay}>
          {displayed.map(
            (product) =>
              product.isAvailable && (
                <div key={product.id} className={styles.product}>
                  <div className={styles.productImageContainer}>
                    <img src={product.productImage} alt={product.productName} />
                  </div>
                  <h4>{product.productName}</h4>
                  <p>{product.price.toLocaleString()} تومان</p>
                  <Link to={`/product/${product.id}`}>
                    <button>مشاهده</button>
                  </Link>
                </div>
              )
          )}
        </div>
      )}
    </>
  );
}

export default ProductsDisplay;
