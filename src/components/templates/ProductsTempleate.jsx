import ProductsTitle from "components/modules/products page/ProductsTitle";
import ProductsDisplay from "components/modules/products page/ProductsDisplay";
import ProductsFilter from "components/modules/products page/ProductsFilter";
import styles from "./products.module.css";
import products from "constants/productsConstant";
import { useState } from "react";


function ProductsTempleate() {
  let [displayed, setDisplayed] = useState(products);

  return (
    <div>
      <ProductsTitle />
      <div className={styles.productsLayout}>
        <ProductsFilter products={products} displayed={displayed} setDisplayed={setDisplayed} />
        <ProductsDisplay displayed={displayed} />
      </div>
    </div>
  );
}

export default ProductsTempleate;
