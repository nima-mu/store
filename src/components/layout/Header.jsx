import { Link, NavLink } from "react-router-dom";
import { CiShoppingBasket } from "react-icons/ci";
import styles from "./header.module.css";
import { useCart } from "services/CartProvider";
import { RxDashboard } from "react-icons/rx";
import { useUser } from "services/UserProvider";

function Header() {
  let { cartState } = useCart();
  let { user } = useUser();
  let isLogedIn = !!user.name && !!user.email;

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
          {console.log(user)}
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
