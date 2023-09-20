import React from "react";
import "./pagination.style.css";

const Pagination = ({
  currentPage,
  totalPages,
  onPageChange,
  loading,
  error,
}) => {
  const maxPageNumbers = 5; // Number of page numbers to display

  const startPage = Math.max(1, currentPage - Math.floor(maxPageNumbers / 2));
  const endPage = Math.min(totalPages, startPage + maxPageNumbers - 1);

  const range = Array.from(
    { length: endPage - startPage + 1 },
    (_, i) => startPage + i
  );

  return (
    <div className="pagination">
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="pagination-button"
        hidden={loading || error ? true : false}
      >
        Previous
      </button>
      {range.map((page) => (
        <button
          key={page}
          onClick={() => onPageChange(page)}
          className="pagination-button"
          hidden={loading || error ? true : false}
        >
          {page}
        </button>
      ))}
      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="pagination-button"
        hidden={loading || error ? true : false}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
