import { Link } from 'react-router-dom';
import styles from './HeaderTop.module.css';
import locationIcon from './images/location.svg';

const HeaderTop = () => {
  return (
    <div className={styles.header__top}>
      <nav className={styles.menu}>
        <ul className={styles.menu__list}>
          <li className={styles.menu__link}>
            <img src={locationIcon} alt="location" />
            <span>Магнитогорск</span>
          </li>
          <li className={styles.menu__link}>
            <Link to="/sell">Продать</Link>
          </li>
          <li className={styles.menu__link}>
            <Link to="/credit">Кредит</Link>
          </li>
          <li className={styles.menu__link}>
            <Link to="/repair">Ремонт</Link>
          </li>
          <li className={styles.menu__link}>
            <Link to="/jobs">Вакансии</Link>
          </li>
          <li className={styles.menu__link}>
            <Link to="/contacts">Контакты</Link>
          </li>
        </ul>
      </nav>
      <a href="tel:83519583111" aria-label="Позвонить 8(3519)583-111" className={styles.header__contacts}>
        8 (3519) 583-111 (c 10:00 до 20:00)
      </a>
    </div>
  );
};

export default HeaderTop;
