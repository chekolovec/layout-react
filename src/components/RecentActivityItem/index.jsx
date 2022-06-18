import React from "react";
import "./styles.scss";

export const IMG_BACKGROUND_ENUM = {
  success: "success",
  failure: "failure",
  offer: "offer",
  report: "report",
};

export const RecentActivityItem = ({
  title,
  content,
  date,
  img,
  imgBackground,
  last,
}) => {
  return (
    <div className={`activity-item ${last ? "last" : ""}`}>
      <div className="activity-left">
        <div className="activity-line"></div>
        <div className={`activity-img ${imgBackground}`}>{img}</div>
      </div>
      <div className="activity-right">
        <h6 className="activity-title">{title}</h6>
        {content}
        <span className="activity-date">{date}</span>
      </div>
    </div>
  );
};
