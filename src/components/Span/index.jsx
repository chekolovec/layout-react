import classNames from "classnames";
import React from "react";
import "./styles.scss";

export const SPAN_VARIANTS = {
  primary: "primary",
};

export const Span = ({ children, variant }) => (
  <span className={classNames("custom-span", variant)}>{children}</span>
);
