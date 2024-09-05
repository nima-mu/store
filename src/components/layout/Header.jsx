import { Link, NavLink } from "react-router-dom";
import { CiShoppingBasket } from "react-icons/ci";
import styles from "./header.module.css";

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.header__right}>
        <h2> اسم فروشگاه </h2>
        <ul>
          <li>
            <NavLink to="/">خانه</NavLink>
          </li>
          <li>
            <NavLink to="/products">محصولات</NavLink>
          </li>
          <li>
            <NavLink to="/aboutUs">درباره ما</NavLink>
          </li>
        </ul>
      </div>
      <div className={styles.header__left}>
        <p>
          <Link to="/auth">ورود/ثبت نام</Link>
        </p>
        <Link to="/cart">
          <CiShoppingBasket />
        </Link>
      </div>
    </header>
  );
}

export default Header;
