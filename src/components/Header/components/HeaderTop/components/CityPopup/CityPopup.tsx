import { useEffect, useRef, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../../../../../redux/hooks';
import { closePopup, changeCurrentCity, setCity } from '../../../../../../redux/reducers/cityPopupSlice';
import CloseIcon from './images/CloseIcon';
import styles from './CityPopup.module.css';
import { Button } from '../../../../../../UI/Button';
import { Input } from '../../../../../../UI/Input';

export const CITIES = [
  { value: 'Магнитогорск', label: 'Магнитогорск' },
  { value: 'Белорецк', label: 'Белорецк' },
];

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
            <Button
              onClick={e => {
                e.stopPropagation();
                handleChangeCurrentCity();
              }}
            >
              Нет
            </Button>
            <Button onClick={() => handleClosePopup()} variant="yellow">
              Да, я тут
            </Button>
          </div>
        ) : (
          <>
            <div className={styles.selectWrapper}>
              <Input
                label="Выберите город"
                type="select"
                options={CITIES}
                inputSize="md"
                value={selectedCity}
                onChange={e => setSelectedCity(e.target.value)}
              />
            </div>
            <div className={styles.buttons}>
              <Button onClick={() => handleClosePopup()}>Закрыть</Button>
              <Button onClick={() => handleConfirmCity()} variant="yellow">
                Подтвердить
              </Button>
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
