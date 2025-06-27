// components/Pagination.tsx
import React from 'react';
import type { PaginationTypes } from './eventTypes';
import styles from './EventsNews.module.css';

const Pagination: React.FC<PaginationTypes> = ({ currentPage, totalPages, onPageChange }) => {
  const pageNumbers = [];
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  return (
    <div className={styles.pagination}>
      <button
        onClick={() => onPageChange(Math.max(1, currentPage - 1))}
        disabled={currentPage === 1}
        className={styles.paginationArrow}
      >
        &lt;
      </button>
      {pageNumbers.map((number) => (
        <button
          key={number}
          onClick={() => onPageChange(number)}
          className={`${styles.paginationNumber} ${
            currentPage === number ? styles.active : ''
          }`}
        >
          {number}
        </button>
      ))}
      <button
        onClick={() => onPageChange(Math.min(totalPages, currentPage + 1))}
        disabled={currentPage === totalPages}
        className={styles.paginationArrow}
      >
        &gt;
      </button>
    </div>
  );
};

export default Pagination;