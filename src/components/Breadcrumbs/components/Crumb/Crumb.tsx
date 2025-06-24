import { Link } from 'react-router-dom';
import styles from './Crumb.module.scss';
import chevronActive from './images/chevron-right-active.svg';
import chevron from './images/chevron-right.svg';
import React from 'react';

interface CrumbProps {
  to: string;
  isLast: boolean;
  label: string;
}

export const Crumb: React.FC<CrumbProps> = ({ to, isLast, label }) => {
  return (
    <span key={to} className={styles.crumb}>
      <img src={isLast ? chevronActive : chevron} className={styles.separator} alt=">" />
      {isLast ? (
        <span className={styles.current}>{label}</span>
      ) : (
        <Link to={to} className={styles.link}>
          {label}
        </Link>
      )}
    </span>
  );
};
