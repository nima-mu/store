import React from "react";
import styles from "./Spinner.module.css";

export default function Spinner({ size = "medium", className = "" }) {
  const sizeClass = styles[size] || styles.medium;

  return (
    <div
      className={`${styles.spinner} ${sizeClass} ${className}`}
      role="status"
    >
      <span className={styles.visuallyHidden}>Loading...</span>
    </div>
  );
}
