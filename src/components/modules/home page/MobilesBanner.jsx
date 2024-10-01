import useScrollReveal from "hook/useScrollReveal";
import styles from "./mobilesBanner.module.css";
import { Link } from "react-router-dom";
function MobilesBanner() {
  let { ref, isVisible } = useScrollReveal();

  return (
    <div
      ref={ref}
      className={`scroll-element ${isVisible ? "visible" : "hidden"} ${
        styles.mobilesBanner
      }`}
    >
      <div className={styles.mobilesBanner__text}>
        <span>خرید</span>
        <br />
        <h4>محبوب ترین</h4>
        <br />
        <h3>گوشی ها</h3>
        <br />
        <button>
          <Link to="/products?search=&category=گوشی&brand=All">مشاهده</Link>
        </button>
      </div>
      <div className={styles.mobilesBanner__imageContainer}>
        <div></div>
        <img src="src/assets/images/iphone15.png" draggable={false} />
      </div>
    </div>
  );
}

export default MobilesBanner;
