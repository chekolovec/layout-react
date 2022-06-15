import React from "react";
import "./styles.scss";

export const Calendar = () => {
  return (
    <div className="calendar">
      <div className="calendar-text-wrapper">
        <span className="calendar-text">01 Jan 2022 to 31 Jan 2022</span>
      </div>
      <div className="calendar-icon-wrapper">
        <i className="ri-calendar-2-line icon"></i>
      </div>
    </div>
  );
};
