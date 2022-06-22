import React from "react";
import styles from "./styles.module.scss";

export const ModalContainer = ({ children, width, active }) => {
  return (
    <div
      className={styles.default}
      style={{ width, display: active ? "block" : "none" }}
    >
      {children}
    </div>
  );
};
