import React, { useState } from 'react';
import styles from './ToggleButton.module.css';
import CloseIcon from '../svg/closeIcon';
import BurgerIcon from '../svg/BurgerIcon';

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
      {isToggled ? <CloseIcon /> : <BurgerIcon />}
    </button>
  );
};

export default ToggleButton;
