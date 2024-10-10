import { useEffect, useState, useCallback } from "react";
import styles from "./productsFilter.module.css";
import { BiSearch } from "react-icons/bi";
import { useSearchParams } from "react-router-dom";
import { debounce } from "lodash";

const ProductsFilter = ({ products, setDisplayed }) => {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("همه دسته ها");
  const [brand, setBrand] = useState("همه برند ها");
  const [searchParams, setSearchParams] = useSearchParams();

  const handleDebouncedSetSearch = useCallback(
    debounce((value) => {
      setSearch(value);
    }, 300),
    [] // Memoizing the function to avoid creating a new debounced function on every render
  );

  const categories = getUniqueCategories(products);
  const brands = getUniqueBrands(products);

  useEffect(() => {
    const filteredProducts = filterProducts(products, search, category, brand);
    setDisplayed(filteredProducts);
    updateSearchParams(search, category, brand);
  }, [search, category, brand, products, setDisplayed]);

  useEffect(() => {
    updateStateFromSearchParams();
  }, [searchParams]);

  const filterProducts = (products, search, category, brand) => {
    return products.filter((product) => {
      const matchesSearch =
        product.productName?.toLowerCase().includes(search.toLowerCase());
      const matchesCategory =
        category === "همه دسته ها" || product.category === category;
      const matchesBrand = brand === "همه برند ها" || product.brand === brand;

      return matchesSearch && matchesCategory && matchesBrand;
    });
  };

  const updateSearchParams = (search, category, brand) => {
    setSearchParams({
      search,
      category: category === "همه دسته ها" ? "All" : category,
      brand: brand === "همه برند ها" ? "All" : brand,
    });
  };

  const updateStateFromSearchParams = () => {
    const newSearch = searchParams.get("search") || "";
    const newCategory = getUpdatedCategory(searchParams.get("category"));
    const newBrand = getUpdatedBrand(searchParams.get("brand"));

    if (search !== newSearch) {
      setSearch(newSearch);
    }
    if (category !== newCategory) {
      setCategory(newCategory);
    }
    if (brand !== newBrand) {
      setBrand(newBrand);
    }
  };

  const getUpdatedCategory = (queryCategory) => {
    return queryCategory === "All" ? "همه دسته ها" : queryCategory || "همه دسته ها";
  };

  const getUpdatedBrand = (queryBrand) => {
    return queryBrand === "All" ? "همه برند ها" : queryBrand || "همه برند ها";
  };

  const handleChangeSearch = (event) => {
    handleDebouncedSetSearch(event.target.value);
  };

  return (
    <div className={styles.productsFilter}>
      <div>
        <input
          type="text"
          placeholder="جستجو"
          onChange={handleChangeSearch}
          value={search}
        />
        <button>
          <BiSearch />
        </button>
      </div>
      <FilterSection
        title="دسته بندی محصولات"
        items={categories}
        selected={category}
        onSelect={setCategory}
      />
      <FilterSection
        title="برند های محصولات"
        items={brands}
        selected={brand}
        onSelect={setBrand}
      />
    </div>
  );
};

const FilterSection = ({ title, items, selected, onSelect }) => (
  <>
    <h3>{title}</h3>
    <ul>
      {items.map((item) => (
        <li
          key={item}
          onClick={() => onSelect(item)}
          className={item === selected ? styles.active : ""}
        >
          {item}
        </li>
      ))}
    </ul>
  </>
);

const getUniqueCategories = (products) => {
  if (!products) return [];
  return ["همه دسته ها", ...new Set(products.map((product) => product.category))];
};

const getUniqueBrands = (products) => {
  if (!products) return [];
  return ["همه برند ها", ...new Set(products.map((product) => product.brand))];
};

export default ProductsFilter;