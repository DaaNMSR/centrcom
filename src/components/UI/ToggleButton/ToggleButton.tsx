import React, { useState } from 'react';
import styles from './ToggleButton.module.css';

const ToggleButton: React.FC = () => {
  const [isToggled, setIsToggled] = useState(false);

  const handleClick = () => {
    setIsToggled(!isToggled);
  };

  return (
    <button
      className={styles.button}
      onClick={handleClick}
      aria-label={isToggled ? 'Закрыть каталог' : 'Открыть каталог'}
    >
      <span className={styles.text}>Каталог</span>
      <span className={styles.icon}>
        {isToggled ? (
          <svg className={styles.closeIcon} width="24" height="24" viewBox="0 0 24 24">
            <path d="M6 18L18 6M6 6l12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
        ) : (
          <svg className={styles.burgerIcon} viewBox="0 0 24 24" width="24" height="24">
            <rect width="18" height="2" x="3" y="6" rx="2" />
            <rect width="18" height="2" x="3" y="12" rx="2" />
            <rect width="18" height="2" x="3" y="18" rx="2" />
          </svg>
        )}
      </span>
    </button>
  );
};

export default ToggleButton;
