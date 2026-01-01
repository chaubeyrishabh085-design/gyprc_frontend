import React from "react";
import styles from "../styles/loader.module.css";

export const Loader = () => {
  return (
    <div className="flex items-center justify-start mt-48 ">
      <span className={styles.loader}>Loading</span>
    </div>
  );
};
