import React, { useState } from "react";
import styles from "./auth.module.css";

const AuthTemplate = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !email) {
      alert("Please fill in all fields");
      return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      alert("Please enter a valid email address");
      return;
    }

    setIsLoading(true); 

    localStorage.setItem("userName", name);
    localStorage.setItem("userEmail", email);

    setTimeout(() => {
      setIsLoading(false);
      setIsSubmitted(true);
    }, 500);

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
          <button type="submit" className={styles.submitBtn} disabled={isLoading}>
            {isLoading ? 'در حال ثبت...' : 'ورود'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default AuthTemplate;