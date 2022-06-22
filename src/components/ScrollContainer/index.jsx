import React from "react";
import styles from "./styles.module.scss";

export const ScrollContainer = ({ children, maxHeight }) => (
  <div className={styles.default} style={{ maxHeight }}>
    {children}
  </div>
);
