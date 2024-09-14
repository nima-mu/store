import { Link } from "react-router-dom";
import styles from "./productsDisplay.module.css";

function ProductsDisplay({ displayed }) {
  return (
    <div className={styles.productsDisplay}>
      {displayed.map((product) => (
        <div key={product.id}>
          <img src={product.productImage} />
          <h4>{product.productName}</h4>
          <p>{product.price.toLocaleString()} تومان</p>
          <Link to={`/product/${product.id}`}>
            <button>مشاهده</button>
          </Link>
        </div>
      ))}
    </div>
  );
}

export default ProductsDisplay;
