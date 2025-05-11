import React from 'react';
import styles from './HeaderButton.module.css';
import basketIcon from './basket.svg';

interface HeaderButtonProps {
  text: string;
  icon?: boolean;
  alt?: string;
}

const HeaderButton: React.FC<HeaderButtonProps> = ({ text, icon = false, alt = '' }) => {
  return (
    <button className={icon ? styles.buttonWithIcon : styles.button}>
      {text}
      {icon && <img src={basketIcon} alt={alt} className={styles.icon} />}
    </button>
  );
};

export default HeaderButton;
