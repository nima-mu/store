import { useQuery } from "@tanstack/react-query";
import ProductTempleate from "components/templates/ProductTempleate";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios"; // Import axios here

function Product() {
  let { id } = useParams();
  let [product, setProduct] = useState(null);

  const { data, error, isLoading } = useQuery({
    queryKey: ["products"],
    queryFn: () =>
      axios.get("https://store-api-pi-dusky.vercel.app/products").then((res) => res.data),
  });

  useEffect(() => {
    if (data) {
      const foundProduct = data.find((item) => item.id === id);
      setProduct(foundProduct || null);
    }
  }, [data, id]);

  if (isLoading) return <div>Loading product...</div>;
  if (error) return <div>Error loading product: {error.message}</div>;

  if (!product) return <div>Product not found</div>;

  return <ProductTempleate product={product} />;
}

export default Product;
