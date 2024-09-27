import { useEffect, useState } from "react";
import styles from "./productsFilter.module.css";
import { BiSearch } from "react-icons/bi";
import { useSearchParams } from "react-router-dom";

function ProductsFilter({ products, setDisplayed }) {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("همه دسته ها");
  const [brand, setBrand] = useState("همه برند ها");

  const [searchParams, setSearchParams] = useSearchParams();

  const categories = [
    "همه دسته ها",
    ...new Set(products?.map((product) => product.category)),
  ];
  const brands = [
    "همه برند ها",
    ...new Set(products?.map((product) => product.brand)),
  ];

  useEffect(() => {
    const data = products?.filter((product) => {
      const matchesSearch = product.productName
        .toLowerCase()
        .includes(search.toLowerCase());

      const matchesCategory =
        category === "همه دسته ها" || product.category === category;

      const matchesBrand = brand === "همه برند ها" || product.brand === brand;

      return matchesSearch && matchesCategory && matchesBrand;
    });
    setDisplayed(data);
    setSearchParams({
      search,
      category: category === "همه دسته ها" ? "All" : category,
      brand: brand === "همه برند ها" ? "All" : brand,
    });
  }, [search, category, brand, products, setDisplayed, setSearchParams]);

  useEffect(() => {
    setSearch(searchParams.get("search") || "");
    const queryCategory = searchParams.get("category");
    setCategory(queryCategory === "All" ? "همه دسته ها" : queryCategory || "همه دسته ها");
    const queryBrand = searchParams.get("brand");
    setBrand(queryBrand === "All" ? "همه برند ها" : queryBrand || "همه برند ها");
  }, [searchParams]);

  return (
    <div className={styles.productsFilter}>
      <div>
        <input
          type="text"
          placeholder="جستجو"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button>
          <BiSearch />
        </button>
      </div>
      <h3>دسته بندی محصولات</h3>
      <ul>
        {categories.map((item, index) => (
          <li
            key={index}
            onClick={() => setCategory(item)}
            className={item === category ? styles.active : ""}
          >
            {item}
          </li>
        ))}
      </ul>
      <h3>برند های محصولات</h3>
      <ul>
        {brands.map((item, index) => (
          <li
            key={index}
            onClick={() => setBrand(item)}
            className={item === brand ? styles.active : ""}
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProductsFilter;