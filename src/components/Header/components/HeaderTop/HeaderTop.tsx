import { Link } from 'react-router-dom';
import styles from './HeaderTop.module.scss';
import locationIcon from './images/location.svg';
import { useAppDispatch, useAppSelector } from '../../../../redux/hooks';
import { openPopup } from '../../../../redux/reducers/cityPopupSlice';
import CityPopup from './components/CityPopup/CityPopup';
import { useEffect } from 'react';
import { menu } from './const';

export const HeaderTop = () => {
  const dispatch = useAppDispatch();
  const isOpen = useAppSelector(state => state.cityPopup.isOpen);
  const currentCity = useAppSelector(state => state.cityPopup.currentCity);

  const handleOpenPopup = () => {
    dispatch(openPopup());
  };

  useEffect(() => {
    const timeout = setTimeout(() => dispatch(openPopup()), 1500);
    return () => clearTimeout(timeout);
  }, [dispatch]);

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
            <span>{currentCity}</span>
          </li>
          {isOpen && <CityPopup />}
          {menu.map(item => (
            <li className={styles.menuLink} key={item.to}>
              <Link to={item.to}>{item.text}</Link>
            </li>
          ))}
        </ul>
      </nav>
      <Link to="tel:83519583111" aria-label="Позвонить 8(3519)583-111" className={styles.headerContacts}>
        8 (3519) 583-111 (c 10:00 до 20:00)
      </Link>
    </div>
  );
};
