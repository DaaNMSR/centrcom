import styles from './CategorySummary.module.scss';
import React from 'react';

interface CategorySummaryProps {
  title: string;
  count: number;
}

export const CategorySummary: React.FC<CategorySummaryProps> = ({ title, count }) => {
  return (
    <div className={styles.categoryNameContent}>
      <h1 className={styles.categoryName}>{title}</h1>
      <span className={styles.categoryCount}>{count} товаров</span>
    </div>
  );
};
