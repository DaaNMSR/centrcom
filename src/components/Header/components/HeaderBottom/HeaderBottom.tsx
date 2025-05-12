import { Link } from 'react-router-dom';
import ToggleButton from '../../../UI/ToggleButton/ToggleButton';
import MyButton from '../../../UI/MyButton/MyButton';
import MyInput from '../../../UI/MyInput/MyInput';
import logo from './images/logo.svg';
import styles from './HeaderBottom.module.css';

const HeaderBottom = () => {
  return (
    <div className={styles.headerBottom}>
      <Link to="/">
        <img src={logo} alt="логотип" className={styles.logo} />
      </Link>
      <ToggleButton />
      <MyInput />
      <MyButton text="Корзина" alt="корзина" icon={true} minWidth="130px" />
    </div>
  );
};

export default HeaderBottom;
