import React from 'react';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.newsletter}>
          <h2 className={styles.title}>مشترک خبرنامه ما شوید</h2>
          <p>برای دریافت جدیدترین آپدیت‌ها</p>
          <form className={styles.form}>
            <input type="email" placeholder="ایمیل خود را وارد کنید" className={styles.input} />
            <button type="submit" className={styles.button}>اشتراک</button>
          </form>
        </div>
        <div className={styles.contact}>
          <h3>ارتباط ما</h3>
          <p>۰۲۱ ۶۷ ۰۲۷۳ ۹۸۳۴</p>
          <p>تهران، الهیه، خیابان اندرزگو، فرعی</p>
          <p>کوچه پنجم، ساختمان هیربدی</p>
          <p>فردوس، واحد ۵۳۴، پلاک ۲۲۹</p>
        </div>
        <div className={styles.links}>
          <h3>دسترسی سریع</h3>
          <ul>
            <li><a href="#">خانه</a></li>
            <li><a href="#">درباره</a></li>
            <li><a href="#">فروشگاه</a></li>
            <li><a href="#">تماس</a></li>
          </ul>
        </div>
        <div className={styles.about}>
          <h3>شیوه‌های پردازش</h3>
          <p>طراح گرافیک از این متن به عنوان عنصری از ترکیب بندی برای پر کردن صفحه استفاده می نماید</p>
          <div className={styles.social}>
            <a href="#" aria-label="Twitter"><i className="icon-twitter"></i></a>
            <a href="#" aria-label="Facebook"><i className="icon-facebook"></i></a>
            <a href="#" aria-label="Telegram"><i className="icon-telegram"></i></a>
            <a href="#" aria-label="Instagram"><i className="icon-instagram"></i></a>
          </div>
        </div>
      </div>
    </footer>
  );
}