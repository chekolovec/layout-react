import classNames from "classnames";
import React from "react";
import "./styles.scss";

export const SPAN_VARIANTS = {
  primary: "primary",
};

export const Span = ({ children, variant, className }) => (
  <span className={classNames("custom-span", className, variant)}>
    {children}
  </span>
);
