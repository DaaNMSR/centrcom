import { useState } from 'react';
import styles from './SearchInput.module.css';
import searchIcon from './search.svg';
import HeaderButton from '../HeaderButton/HeaderButton';

interface SearchInputProps {
  placeholder?: string;
  showButton?: boolean;
}

const SearchInput: React.FC<SearchInputProps> = ({ placeholder = 'Поиск...', showButton = true }) => {
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

      {showButton && <HeaderButton text="Найти" />}
    </div>
  );
};

export default SearchInput;
