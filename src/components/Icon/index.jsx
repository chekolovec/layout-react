import classNames from "classnames";
import React from "react";
import styles from "./styles.module.scss";

export const ICON_VARIANTS = {
  default: "default",
  primary: "primary",
  secondary: "secondary",
};

export const ICON_BACKGROUND = {
  reward: "reward",
  success: "success",
  earning: "earning",
  orders: "orders",
  customers: "customers",
  balance: "balance",
  offer: "offer",
  report: "report",
};

export const Icon = ({
  variant = ICON_VARIANTS.default,
  children,
  background,
}) => (
  <div className={classNames(styles[variant], styles[background])}>
    {variant === ICON_VARIANTS.default && children}
    {variant === ICON_VARIANTS.primary && (
      <span className="iconify " data-icon={children}></span>
    )}
    {variant === ICON_VARIANTS.secondary && children}
  </div>
);
