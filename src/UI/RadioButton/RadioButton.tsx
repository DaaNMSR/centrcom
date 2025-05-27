import styles from './RadioButton.module.scss';

interface RadioButtonProps {
  label: string;
  name?: string;
  value?: string;
  checked?: boolean;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const RadioButton: React.FC<RadioButtonProps> = ({
  label,
  name = label,
  value = label,
  checked = false,
  onChange,
}) => {
  return (
    <label className={styles.radioLabel}>
      <input
        type="radio"
        name={name}
        value={value}
        checked={checked}
        onChange={onChange}
        className={styles.radioInput}
      />
      <span className={styles.customRadio}></span>
      <span className={styles.label}>{label}</span>
    </label>
  );
};
