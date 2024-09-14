import { useEffect, useState } from "react";
import styles from "./productsFilter.module.css";
import { BiSearch } from "react-icons/bi";
import { useSearchParams } from "react-router-dom";

function ProductsFilter({ products, displayed, setDisplayed }) {
  let [search, setSearch] = useState("");
  let [category, setCategory] = useState("همه دسته ها");
  let [brand, setBrand] = useState("همه برند ها");

  let [serachParams, setSearchParams] = useSearchParams();

  const categories = [
    "همه دسته ها",
    ...new Set(products.map((product) => product.category)),
  ];
  const brands = [
    "همه برند ها",
    ...new Set(products.map((product) => product.brand)),
  ];

  useEffect(() => {
    let data = products.filter((product) => {
      let matchesSearch = product.productName
        .toLowerCase()
        .includes(search.toLowerCase());

      let matchesCategory =
        category === "همه دسته ها" || product.category === category;

      let matchesBrand = brand === "همه برند ها" || product.brand === brand;

      return matchesSearch && matchesCategory && matchesBrand;
    });
    setDisplayed(data);
    setSearchParams({
      search,
      category: category === "همه دسته ها" ? "All" : category,
      brand: brand === "همه برند ها" ? "All" : brand,
    });
  }, [search, category, brand]);

  useEffect(() => {
    setSearch(() => serachParams.get("search"));
    let queryCategory = serachParams.get("category");
    setCategory(queryCategory === "All" ? "همه دسته ها" : queryCategory);
    let queryBrand = serachParams.get("brand");
    setBrand(queryBrand === "All" ? "همه برند ها" : queryBrand);
  }, []);

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
            className={item === category ? styles.active : null}
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
            className={item === brand ? styles.active : null}
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProductsFilter;
