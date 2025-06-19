import styles from './PaginationControls.module.scss';
import { Input } from '../../../../UI/Input';
import React from 'react';
import { getPaginationEdges } from '../../const.ts';

interface PaginationControlsProps {
  page: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  pageOptions: { value: string; label: string }[];
  totalItems: number;
  limit: number;
}

export const PaginationControls: React.FC<PaginationControlsProps> = ({
  page,
  totalPages,
  onPageChange,
  pageOptions,
  totalItems,
  limit,
}) => {
  const pagesToShow = getPaginationEdges(totalPages, 4);
  const startItem = (page - 1) * limit + 1;
  const endItem = Math.min(page * limit, totalItems);

  return (
    <div className={styles.controls}>
      <div className={styles.pagination}>
        <button onClick={() => onPageChange(1)} disabled={page === 1}>
          {'<<'}
        </button>
        <button onClick={() => onPageChange(page - 1)} disabled={page === 1}>
          {'<'}
        </button>
        {pagesToShow.map((currentPage, i) =>
          currentPage === '...' ? (
            <span key={`dots-${i}`} className={styles.dots}>
              ...
            </span>
          ) : (
            <button
              key={currentPage}
              onClick={() => onPageChange(currentPage as number)}
              className={page === currentPage ? styles.activePage : ''}
            >
              {currentPage}
            </button>
          ),
        )}
        <button onClick={() => onPageChange(page + 1)} disabled={page === totalPages}>
          {'>'}
        </button>
        <button onClick={() => onPageChange(totalPages)} disabled={page === totalPages}>
          {'>>'}
        </button>
      </div>
      <div className={styles.viewToggle}>
        <Input
          type="select"
          options={pageOptions}
          value={page.toString()}
          onChange={e => onPageChange(Number(e.target.value))}
          className={styles.viewToggleSelect}
        />
        <div>
          {startItem}-{endItem} из {totalItems}
        </div>
      </div>
    </div>
  );
};
