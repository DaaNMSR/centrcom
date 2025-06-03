import React from 'react';
import styles from './Button.module.scss';

type ButtonVariant = 'yellow' | 'gray' | 'dark' | 'ghost' | 'disabled';
type ButtonSize = 'sm' | 'md' | 'lg';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode | string;
  iconLeft?: React.ReactNode | string;
  iconRight?: React.ReactNode | string;
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  iconLeft,
  iconRight,
  variant = 'gray',
  size = 'lg',
  disabled = false,
  className = '',
  ...props
}) => {
  const buttonClass = [styles.button, styles[variant], styles[size], disabled && styles.disabled, className]
    .filter(Boolean)
    .join(' ');

  return (
    <button className={buttonClass} disabled={disabled} {...props}>
      {iconLeft &&
        (typeof iconLeft === 'string' ? (
          <img className={styles.iconLeft} src={iconLeft} alt="icon" />
        ) : (
          <div className={styles.iconLeft}>{iconLeft}</div>
        ))}
      <span className={styles.text}>{children}</span>
      {iconRight &&
        (typeof iconRight === 'string' ? (
          <img className={styles.iconRight} src={iconRight} alt="icon" />
        ) : (
          <div className={styles.iconRight}>{iconRight}</div>
        ))}
    </button>
  );
};
