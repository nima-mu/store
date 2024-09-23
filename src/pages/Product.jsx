import ProductTempleate from "components/templates/ProductTempleate";
import products from "constants/productsConstant";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Product() {
  let { id } = useParams();
  let [product,setProduct] = useState({});
  useEffect(() => {
    let product = products.find((item) => item.id === +id);
    setProduct(product)
  }, []);

  return <ProductTempleate product={product} />;
}

export default Product;
