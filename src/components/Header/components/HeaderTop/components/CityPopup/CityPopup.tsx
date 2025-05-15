import { useEffect, useRef, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../../../../../redux/hooks';
import { closePopup, changeCurrentCity, setCity } from '../../../../../../redux/reducers/cityPopUpSlice';
import CloseIcon from '../../../../../UI/svg/closeIcon';
import styles from './CityPopup.module.css';

const CITIES = ['Магнитогорск', 'Белорецк'];

const CityPopup = () => {
  const dispatch = useAppDispatch();
  const isCorrectCity = useAppSelector(state => state.cityPopup.isCorrectCity);
  const currentCity = useAppSelector(state => state.cityPopup.currentCity);
  const [selectedCity, setSelectedCity] = useState(currentCity);

  const handleClosePopup = () => dispatch(closePopup());
  const handleChangeCurrentCity = () => dispatch(changeCurrentCity());
  const handleConfirmCity = () => dispatch(setCity(selectedCity));

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
        <p className={styles.title}>{isCorrectCity ? `Ваш город ${currentCity}?` : 'Откуда вы?'}</p>
        <p className={styles.text}>
          Это нам поможет подобрать товары в первую очередь находящиеся в вашем городе
        </p>
        {isCorrectCity ? (
          <div className={styles.buttons}>
            <button
              onClick={e => {
                e.stopPropagation();
                handleChangeCurrentCity();
              }}
            >
              Нет
            </button>
            <button onClick={() => handleClosePopup()}>Да, я тут</button>
          </div>
        ) : (
          <>
            <div className={styles.selectWrapper}>
              <label htmlFor="citySelect" className={styles.label}>
                Выберите город
              </label>
              <select
                id="citySelect"
                className={styles.select}
                value={selectedCity}
                onChange={e => setSelectedCity(e.target.value)}
              >
                {CITIES.map(city => (
                  <option key={city} value={city}>
                    {city}
                  </option>
                ))}
              </select>
            </div>
            <div className={styles.buttons}>
              <button onClick={() => handleClosePopup()}>Закрыть</button>
              <button onClick={() => handleConfirmCity()}>Подтвердить</button>
            </div>
          </>
        )}
        <div className={styles.IconWrapper} onClick={() => handleClosePopup()}>
          <CloseIcon color="#667085" width="20" height="20" />
        </div>
      </div>
    </div>
  );
};

export default CityPopup;
