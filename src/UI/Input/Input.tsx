import React from 'react';
import styles from './Input.module.scss';
import searchIcon from './images/searchIcon.svg';
import arrowIcon from './images/arrowdown.svg';

export type InputStatus = 'default' | 'disabled' | 'error';
export type InputType = 'text' | 'select' | 'textarea' | React.HTMLInputTypeAttribute;
export type InputSize = 'lg' | 'md';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  inputSize?: InputSize;
  helperText?: string;
  status?: InputStatus;
  iconLeft?: React.ReactNode;
  buttonRight?: React.ReactNode;
  type?: InputType;
  options?: { value: string; label: string }[];
  error?: string;
  touched?: boolean;
}

export const Input: React.FC<InputProps> = ({
  label,
  inputSize = 'lg',
  helperText,
  status = 'default',
  iconLeft,
  buttonRight,
  disabled,
  type = 'text',
  options = [],
  error,
  touched,
  ...props
}) => {
  const inputId = React.useId();

  const showError = touched && !!error;
  const currentStatus: InputStatus = showError ? 'error' : status;

  const wrapperClass = [
    styles.wrapper,
    currentStatus === 'error' && styles.error,
    disabled && styles.disabled,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <div className={styles.container}>
      {label && (
        <label className={styles.label} htmlFor={inputId}>
          {label}
        </label>
      )}

      <div
        className={`${wrapperClass} ${!buttonRight && type !== 'textarea' ? styles.wrapperWithPadding : ''}`}
      >
        {iconLeft && <img src={searchIcon} alt="search" className={styles.img} />}

        {type === 'select' ? (
          <>
            <select
              id={inputId}
              disabled={disabled}
              className={`
                ${styles.input} 
                ${styles.select} 
                ${!buttonRight ? styles.inputWithPadding : ''} 
                ${inputSize === 'md' ? styles.inputWithPaddingMd : ''} 
                ${props.value ? styles.active : ''}
              `}
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
            className={`
              ${styles.input} 
              ${!buttonRight ? styles.inputWithPadding : ''} 
              ${disabled && styles.disabled} 
              ${inputSize === 'md' ? styles.inputMedium : ''} 
            `}
            {...props}
          />
        )}

        {buttonRight && <div className={styles.buttonRight}>{buttonRight}</div>}
      </div>

      {showError ? (
        <span className={`${styles.helperText} ${styles.helperError}`}>{error}</span>
      ) : (
        helperText && <span className={styles.helperText}>{helperText}</span>
      )}
    </div>
  );
};
