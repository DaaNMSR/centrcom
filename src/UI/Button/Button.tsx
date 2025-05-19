import React from 'react';
import styles from './Button.module.css';

type ButtonVariant = 'yellow' | 'gray' | 'dark' | 'ghost' | 'disabled';
type ButtonSize = 'sm' | 'md' | 'lg';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: string;
  iconLeft?: React.ReactNode | string;
  iconRight?: React.ReactNode | string;
  variant?: ButtonVariant;
  size?: ButtonSize;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  iconLeft,
  iconRight,
  variant = 'gray',
  size = 'lg',
  disabled = false,
  ...props
}) => {
  const buttonClass = [styles.button, styles[variant], styles[size], disabled && styles.disabled]
    .filter(Boolean)
    .join(' ');

  return (
    <button className={buttonClass} disabled={disabled} {...props}>
      {iconLeft &&
        (typeof iconLeft === 'string' ? (
          <img className={styles.iconLeft} src={iconLeft} />
        ) : (
          <div className={styles.iconLeft}>{iconLeft}</div>
        ))}
      <span className={styles.text}>{children}</span>
      {iconRight &&
        (typeof iconRight === 'string' ? (
          <img className={styles.iconRight} src={iconRight} />
        ) : (
          <div className={styles.iconRight}>{iconRight}</div>
        ))}
    </button>
  );
};
