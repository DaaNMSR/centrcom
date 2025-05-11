import { Link } from 'react-router-dom';
import HeaderToggleButton from '../../../UI/HeaderToggleButton/HeaderToggleButton';
import HeaderButton from '../../../UI/HeaderButton/HeaderButton';
import SearchInput from '../../../UI/SearchInput/SearchInput';
import logo from './images/logo.svg';
import styles from './HeaderBottom.module.css';

const HeaderBottom = () => {
  return (
    <div className={styles.header__bottom}>
      <Link to="/">
        <img src={logo} alt="логотип" />
      </Link>
      <HeaderToggleButton />
      <SearchInput />
      <HeaderButton text="Корзина" alt="корзина" icon={true} />
    </div>
  );
};

export default HeaderBottom;
