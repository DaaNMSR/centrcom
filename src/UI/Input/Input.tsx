import React from 'react';
import styles from './Input.module.css';
import searchIcon from './images/searchIcon.svg';
import arrowIcon from './images/arrowdown.svg';

export type InputStatus = 'default' | 'disabled' | 'error';
export type InputType = 'text' | 'select' | 'textarea' | React.HTMLInputTypeAttribute;

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  helperText?: string;
  status?: InputStatus;
  iconLeft?: React.ReactNode;
  buttonRight?: React.ReactNode;
  type?: InputType;
  options?: { value: string; label: string }[];
}

export const Input: React.FC<InputProps> = ({
  label,
  helperText,
  status = 'default',
  iconLeft,
  buttonRight,
  disabled,
  type = 'text',
  options = [],
  ...props
}) => {
  const wrapperClass = [styles.wrapper, status === 'error' && styles.error, disabled && styles.disabled]
    .filter(Boolean)
    .join(' ');

  const inputId = React.useId();

  return (
    <div className={styles.container}>
      {label && (
        <label className={styles.label} htmlFor={inputId}>
          {label}
        </label>
      )}
      <div className={`${wrapperClass} ${!buttonRight ? styles.wrapperWithPadding : ''}`}>
        {iconLeft && <img src={searchIcon} alt="search" className={styles.img} />}
        {type === 'select' ? (
          <>
            <select
              id={inputId}
              disabled={disabled}
              className={`${styles.input} ${styles.select} ${!buttonRight ? styles.inputWithPadding : ''}`}
              {...(props as React.SelectHTMLAttributes<HTMLSelectElement>)}
            >
              {options.map(option => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
            <img src={arrowIcon} alt="arrow" className={styles.selectArrow} />
          </>
        ) : type === 'textarea' ? (
          <textarea
            id={inputId}
            disabled={disabled}
            className={styles.textarea}
            {...(props as React.TextareaHTMLAttributes<HTMLTextAreaElement>)}
          />
        ) : (
          <input
            id={inputId}
            type={type}
            disabled={disabled}
            className={`${styles.input} ${!buttonRight ? styles.inputWithPadding : ''} ${disabled && styles.disabled}`}
            {...props}
          />
        )}

        {buttonRight && <div className={styles.buttonRight}>{buttonRight}</div>}
      </div>
      {helperText && (
        <span
          className={status === 'error' ? `${styles.helperText} ${styles.helperError}` : styles.helperText}
        >
          {helperText}
        </span>
      )}
    </div>
  );
};
