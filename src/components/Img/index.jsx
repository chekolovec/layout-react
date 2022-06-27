import classNames from "classnames";
import React from "react";
import styles from "./styles.module.scss";

export const IMG_VARIANTS = {
  primary: "primary",
  secondary: "secondary",
  secondaryTransparent: "secondaryTransparent",
  rounded: "rounded",
  small: "small",
};

export const Img = ({ variant, src, alt, width, height, className }) => (
  <img
    className={classNames(className, styles[variant])}
    src={src}
    alt={alt}
    width={width}
    height={height}
  />
);
