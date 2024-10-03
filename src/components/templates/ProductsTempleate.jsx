import ProductsTitle from "components/modules/products page/ProductsTitle";
import ProductsDisplay from "components/modules/products page/ProductsDisplay";
import ProductsFilter from "components/modules/products page/ProductsFilter";
import styles from "./products.module.css";
import { useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

function ProductsTemplate() {
  const [displayed, setDisplayed] = useState([]);

  const { data, error, isLoading } = useQuery({
    queryKey: ["products"], 
    queryFn: () =>
      axios.get("https://store-api-pi-dusky.vercel.app/products").then((res) => res.data),
  });

  useEffect(() => {
    console.log(data);
    if (data) {
      setDisplayed(data);
    }
  }, [data]);

  if (isLoading) return <div>Loading products...</div>;
  if (error) return <div>Error loading products: {error.message}</div>;

  return (
    <div>
      <ProductsTitle />
      <div className={styles.productsLayout}>
        <ProductsFilter
          products={data}
          displayed={displayed}
          setDisplayed={setDisplayed}
        />
        <ProductsDisplay displayed={displayed} />
      </div>
    </div>
  );
}

export default ProductsTemplate;
