import classNames from "classnames";
import React from "react";
import styles from "./styles.module.scss";

export const BACKGROUND_VARIANTS = {
  default: "default",
  secondary: "secondary",
  white: "white",
  content: "content",
};

export const BackgroundWrapper = ({
  children,
  variant = BACKGROUND_VARIANTS.default,
  flex1,
}) => (
  <div className={classNames(styles[variant], { [styles.flex1]: flex1 })}>
    {children}
  </div>
);
