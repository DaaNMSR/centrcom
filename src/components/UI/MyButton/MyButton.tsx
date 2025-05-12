import React from 'react';
import styles from './MyButton.module.css';
import basketIcon from './basket.svg';

interface MyButtonProps {
  text: string;
  icon?: boolean;
  alt?: string;
  minWidth?: string | number;
}

const MyButton: React.FC<MyButtonProps> = ({ text, icon = false, alt = '', minWidth }) => {
  return (
    <button className={`${icon ? styles.buttonWithIcon : styles.button}`} style={{ minWidth: minWidth }}>
      {text}
      {icon && <img src={basketIcon} alt={alt} className={styles.icon} />}
    </button>
  );
};

export default MyButton;
