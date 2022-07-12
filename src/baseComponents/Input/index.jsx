import classNames from "classnames";
import React from "react";
import "./styles.scss";

export const Input = ({ className, placeholder }) => (
  <input
    className={classNames("custom-input", className)}
    placeholder={placeholder}
  />
);
