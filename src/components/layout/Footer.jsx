import React from "react";
import styles from "./Footer.module.css";
import { BiSearchAlt2 } from "react-icons/bi";
import { Link } from "react-router-dom";
import { FaRetweet } from "react-icons/fa";
import {
  FaFacebook,
  FaInstagram,
  FaTelegram,
  FaTwitter,
} from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.newsletter}>
          <p>برای دریافت جدیدترین آپدیت‌ها</p>
          <h2 className={styles.title}>مشترک خبرنامه ما شوید</h2>
          <form className={styles.form}>
            <button type="submit" className={styles.button}>
              <BiSearchAlt2 />
            </button>
            <input
              type="email"
              placeholder="ایمیل خود را وارد کنید"
              className={styles.input}
            />
          </form>
        </div>
        <div className={styles.contact}>
          <h4>ارتباط ما</h4>
          <a href="callto:0213333333">021 3333 33 33</a>
          <p>تهران خیابان لورم ایپسوم</p>
          <p>کوچه پنجم، ساختمان لورم ایپسوم</p>
          <p> واحد 10, پلاک 315</p>
        </div>
        <div className={styles.links}>
          <h4>دسترسی سریع</h4>
          <ul>
            <li>
              <Link to="/">خانه</Link>
            </li>
            <li>
              <Link to="/aboutUs">درباره</Link>
            </li>
            <li>
              <Link to="/products">فروشگاه</Link>
            </li>
            <li>
              <a href="callto:02133333333">تماس</a>
            </li>
          </ul>
        </div>
        <div className={styles.about}>
          <h3>لورم ایپسوم</h3>
          <p>
            طراح گرافیک از این متن به عنوان عنصری از ترکیب بندی برای پر کردن
            صفحه استفاده می نماید
          </p>
          <div className={styles.social}>
            <a href="#" aria-label="Twitter">
              <FaTwitter />
            </a>
            <a href="#" aria-label="Facebook">
              <FaFacebook />
            </a>
            <a href="#" aria-label="Telegram">
              <FaTelegram />
            </a>
            <a href="#" aria-label="Instagram">
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
