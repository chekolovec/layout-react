import React from "react";
import "./styles.scss";

export const Pagination = ({ itemsNumber, totalNumber, current, last }) => {
  return (
    <div className="pagination">
      <span className="pagination-text">
        Showing <b>{itemsNumber}</b> of <b>{totalNumber}</b> Results
      </span>
      <div className="pagination-items">
        {current - 1 && (
          <>
            <button className="pagination-item">←</button>
            <button className="pagination-item">1</button>
          </>
        )}
        <button className="pagination-item active">{current}</button>
        {current < last && (
          <>
            <button className="pagination-item">3</button>
            <button className="pagination-item">→</button>
          </>
        )}
      </div>
    </div>
  );
};
