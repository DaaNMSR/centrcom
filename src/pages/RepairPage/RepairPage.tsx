import { FormCards } from '../../components/FormCards';
import { MyForm } from '../../components/MyForm';
import { ServiceCard } from '../../components/ServiceCard/ServiceCard';
import { useAppSelector } from '../../redux/hooks';
import type { RootState } from '../../redux/store';
import Slide from '../MainPage/components/Slider/components/Slide/Slide';
import { formCards, repairCards } from './const';
import styles from './RepairPage.module.scss';

export const RepairPage = () => {
  const { slides, backgroundImages } = useAppSelector((state: RootState) => state.slider);

  return (
    <div className={styles.container}>
      <div className={styles.banner}>
        <Slide slide={slides[2]} backgroundImages={backgroundImages} />
      </div>
      <h2 className={styles.mainTitle}>Что мы ремонтируем?</h2>
      <div className={styles.cardsWrapper}>
        {repairCards.map(card => (
          <ServiceCard card={card} key={card.title} />
        ))}
      </div>
      <FormCards formCards={formCards} />
      <div className={styles.formWrapper}>
        <MyForm header="repairPage" />
      </div>
    </div>
  );
};
