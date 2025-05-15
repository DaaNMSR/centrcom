import { Link } from 'react-router-dom';
import styles from './HeaderTop.module.css';
import locationIcon from './images/location.svg';
import { useAppDispatch, useAppSelector } from '../../../../redux/hooks';
import { openPopup } from '../../../../redux/reducers/cityPopUpSlice';
import CityPopup from './components/CityPopup/CityPopup';
import { useEffect } from 'react';

const HeaderTop = () => {
  const dispatch = useAppDispatch();
  const isOpen = useAppSelector(state => state.cityPopup.isOpen);
  const handleOpenPopup = () => {
    dispatch(openPopup());
  };

  useEffect(() => {
    const timeout = setTimeout(() => dispatch(openPopup()), 1500);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className={styles.headerTop}>
      <nav className={styles.menu}>
        <ul className={styles.menuList}>
          <li
            className={styles.menuLink}
            onClick={e => {
              e.stopPropagation();
              handleOpenPopup();
            }}
          >
            <img src={locationIcon} alt="location" />
            <span>Магнитогорск</span>
          </li>
          {isOpen && <CityPopup />}
          <li className={styles.menuLink}>
            <Link to="/sell">Продать</Link>
          </li>
          <li className={styles.menuLink}>
            <Link to="/credit">Кредит</Link>
          </li>
          <li className={styles.menuLink}>
            <Link to="/repair">Ремонт</Link>
          </li>
          <li className={styles.menuLink}>
            <Link to="/jobs">Вакансии</Link>
          </li>
          <li className={styles.menuLink}>
            <Link to="/contacts">Контакты</Link>
          </li>
        </ul>
      </nav>
      <Link to="tel:83519583111" aria-label="Позвонить 8(3519)583-111" className={styles.headerContacts}>
        8 (3519) 583-111 (c 10:00 до 20:00)
      </Link>
    </div>
  );
};

export default HeaderTop;
