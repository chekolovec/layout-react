import React from "react";
import styles from "./styles.module.scss";

export const IMG_VARIANTS = {
  rounded: "rounded",
  primary: "primary",
};

export const Img = ({ variant, src, alt }) => (
  <img className={styles[variant]} src={src} alt={alt} />
);
