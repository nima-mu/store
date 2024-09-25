import { Link } from "react-router-dom";
import styles from "./productsTitle.module.css";
function ProductsTitle() {
  return (
    <div className={styles.productsTempleate}>
      <span>
        <Link to="/">
        خانه 
        </Link>
        {"<"}
         محصولات</span>
      <h1>محصولات</h1>
    </div>
  );
}

export default ProductsTitle;
