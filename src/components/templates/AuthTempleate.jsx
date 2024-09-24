import React, { useState } from "react";
import styles from "./auth.module.css";

const AuthTempleate = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !email) {
      alert("Please fill in all fields");
      return;
    }

    // Store in local storage
    localStorage.setItem("userName", name);
    localStorage.setItem("userEmail", email);

    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <div className={styles.loginContainer}>
        <div className={styles.loginCard}>
          <h2>خوش اومدی {name}!</h2>
          <p>ثبت نام با موفقیت انجام شد</p>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.loginContainer}>
      <div className={styles.loginCard}>
        <h2>ورود به اکانت</h2>
        <form onSubmit={handleSubmit}>
          <div className={styles.formGroup}>
            <label htmlFor="name">نام</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="نام خود را وارد کنید"
              required
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="email">ایمیل</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="ایمیل خود را وارد کنید"
              required
            />
          </div>
          <button type="submit" className={styles.submitBtn}>
            ورود
          </button>
        </form>
      </div>
    </div>
  );
};

export default AuthTempleate;
