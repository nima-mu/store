import { Link, NavLink } from "react-router-dom";
import { CiShoppingBasket } from "react-icons/ci";
import styles from "./header.module.css";
import { CartContext, useCart } from "services/CartProvider";
import { RxDashboard } from "react-icons/rx";

function Header() {
  let { cartState } = useCart()
  let userName = localStorage.getItem("userName");
  let userEmail = localStorage.getItem("userEmail");
  let isLogedIn = !!userName && !!userEmail;

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
          {!isLogedIn ? (
            <Link to="/auth">ورود/ثبت نام</Link>
            ) : (
              <Link to="/dashboard">
              <RxDashboard className={styles.dashboardIcon} />
              </Link>
              )}
        </p>
        <Link to="/cart">
          <CiShoppingBasket className={styles.cartIcon} />
          <span>{cartState.totalItems}</span>
        </Link>
      </div>
    </header>
  );
}

export default Header;
