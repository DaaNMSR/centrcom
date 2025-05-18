import { useAppSelector } from '../../redux/hooks';
import type { RootState } from '../../redux/store';
import Slide from '../MainPage/components/Slider/components/Slide/Slide';
import styles from './SellPage.module.css';

const SellPage = () => {
  const { slides, backgroundImages } = useAppSelector((state: RootState) => state.slider);
  return (
    <div className={styles.container}>
      <div className={styles.banner}>
        <Slide slide={slides[1]} backgroundImages={backgroundImages} />
      </div>
    </div>
  );
};

export default SellPage;
