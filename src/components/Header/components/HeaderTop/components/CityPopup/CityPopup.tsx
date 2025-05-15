import { useEffect, useRef } from 'react';
import { useAppDispatch } from '../../../../../../redux/hooks';
import { closePopup } from '../../../../../../redux/reducers/cityPopUpSlice';
import CloseIcon from '../../../../../UI/svg/closeIcon';
import styles from './CityPopup.module.css';

const CityPopup = () => {
  const dispatch = useAppDispatch();

  const handleClosePopup = () => {
    dispatch(closePopup());
  };

  const popupRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (popupRef.current && !popupRef.current.contains(event.target as Node)) {
        handleClosePopup();
      }
    };
    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return (
    <div className={styles.popup} ref={popupRef}>
      <div className={styles.popupWrapper}>
        <p className={styles.title}>Ваш город Магнитогорск?</p>
        <p className={styles.text}>
          Это нам поможет подобрать товары в первую очередь находящиеся в вашем городе
        </p>
        <div className={styles.buttons}>
          <button>Нет</button>
          <button onClick={() => handleClosePopup()}>Да, я тут</button>
        </div>
        <div className={styles.IconWrapper} onClick={() => handleClosePopup()}>
          <CloseIcon color="#667085" width="20" height="20" />
        </div>
      </div>
    </div>
  );
};

export default CityPopup;
