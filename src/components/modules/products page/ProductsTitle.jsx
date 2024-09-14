import styles from "./productsTitle.module.css";
function ProductsTitle() {
  return (
    <div className={styles.productsTempleate}>
      <span>خانه {"<"} محصولات</span>
      <h1>محصولات</h1>
    </div>
  );
}

export default ProductsTitle;
