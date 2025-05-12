import { useState } from 'react';
import styles from './MyInput.module.css';
import searchIcon from './search.svg';
import MyButton from '../MyButton/MyButton';

interface MyInputProps {
  placeholder?: string;
  showButton?: boolean;
}

const MyInput: React.FC<MyInputProps> = ({ placeholder = 'Поиск...', showButton = true }) => {
  const [searchValue, setSearchValue] = useState<string>('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
  };

  return (
    <div className={styles.inputContainer}>
      <img src={searchIcon} alt="поиск" className={styles.icon} />
      <input
        type="text"
        value={searchValue}
        onChange={handleChange}
        placeholder={placeholder}
        className={styles.input}
      />

      {showButton && <MyButton text="Найти" />}
    </div>
  );
};

export default MyInput;
