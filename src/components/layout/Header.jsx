import React, { useEffect, useRef } from "react";
import { Link, NavLink } from "react-router-dom";
import { CiShoppingBasket } from "react-icons/ci";
import { FiMenu } from "react-icons/fi";
import { IoIosLogIn } from "react-icons/io";
import styles from "./header.module.css";
import { useCart } from "services/CartProvider";

function Header() {
  const { cartState } = useCart();
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  let menuRef = useRef();
  let menuIconRef = useRef();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  useEffect(() => {
    let handler = (e) => {
      if (
        !menuRef.current.contains(e.target) &&
        !menuIconRef.current.contains(e.target)
      ) {
        closeMenu();
      }
    };
    document.addEventListener("mousedown", handler);
  });

  return (
    <header className={styles.header}>
      <div className={styles.header__container}>
        <div className={styles.header__logo}>
          <h2>اسم فروشگاه</h2>
        </div>
        <button
          className={styles.header__menuToggle}
          onClick={toggleMenu}
          aria-label="Toggle menu"
          ref={menuIconRef}
        >
          <FiMenu />
        </button>
        <nav
          className={`${styles.header__nav} ${
            isMenuOpen ? styles.header__navOpen : ""
          }`}
          ref={menuRef}
        >
          <ul>
            <li onClick={closeMenu}>
              <NavLink to="/">خانه</NavLink>
            </li>
            <li onClick={closeMenu}>
              <NavLink to="/products">محصولات</NavLink>
            </li>
            <li onClick={closeMenu}>
              <NavLink to="/aboutUs">درباره ما</NavLink>
            </li>
          </ul>
        </nav>
        <div className={styles.header__actions}>
          <Link to="/cart" className={styles.header__cart}>
            <CiShoppingBasket />
            <span className={styles.header__cartCount}>
              {cartState.totalItems}
            </span>
          </Link>
          <Link to="/auth" className={styles.header__auth}>
            <IoIosLogIn />
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Header;
