import React, { useEffect, useRef, useState } from "react";
import styles from "./laptopsBanner.module.css";
import useScrollReveal from "hook/useScrollReveal";
import { Link } from "react-router-dom";

function LaptopsBanner() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <div
      ref={ref}
      className={`${styles.laptopsBanner} scroll-element ${
        isVisible ? "visible" : "hidden"
      }`}
    >
      <h3>به روز ترین لپ تاپ ها</h3>
      <p>
        با لپ تاپ های مدرن ما، محیط کار خود را به‌روز کنید و به سرعت و به راحتی
        به هدف‌های خود برسید. با طراحی‌های منحصر به فرد و قدرت فوق العاده،
        تجربه‌ی کاری خود را بهبود دهید.
      </p>
      <img src="/src/assets/images/mackbook.webp" alt="لپ تاپ" />
      <Link to="/products?search=&category=لپ+تاپ&brand=All">
        <button>مشاهده</button>
      </Link>
    </div>
  );
}

export default LaptopsBanner;
