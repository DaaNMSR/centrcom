import { useNavigate } from 'react-router-dom';
import { FormCards } from '../../components/FormCards';
import { MyForm } from '../../components/MyForm';
import { ServiceCard } from '../../components/ServiceCard/ServiceCard';
import { useAppSelector } from '../../redux/hooks';
import type { RootState } from '../../redux/store';
import Slide from '../MainPage/components/Slider/components/Slide/Slide';
import { formCards, sellCards } from './const';
import styles from './SellPage.module.scss';

export const SellPage = () => {
  const { slides, backgroundImages } = useAppSelector((state: RootState) => state.slider);

  const navigate = useNavigate();
  const handleCardClick = (category: string) => {
    scroll(0, 0);
    navigate(`/sell/${category}`);
  };
  return (
    <div className={styles.container}>
      <div className={styles.banner}>
        <Slide slide={slides[1]} backgroundImages={backgroundImages} />
      </div>
      <h2 className={styles.mainTitle}>Вы можете продать нам</h2>
      <div className={styles.cardsWrapper}>
        {sellCards.map(card => (
          <ServiceCard card={card} key={card.title} onButtonClick={handleCardClick} />
        ))}
      </div>
      <FormCards formCards={formCards} />
      <div className={styles.formWrapper}>
        <MyForm fileUpload={true} header="sellPage" />
      </div>
    </div>
  );
};
