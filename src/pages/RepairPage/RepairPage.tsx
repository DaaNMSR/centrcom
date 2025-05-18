import { useAppSelector } from '../../redux/hooks';
import type { RootState } from '../../redux/store';
import Slide from '../MainPage/components/Slider/components/Slide/Slide';
import styles from './RepairPage.module.css';

const RepairPage = () => {
  const { slides, backgroundImages } = useAppSelector((state: RootState) => state.slider);
  return (
    <div className={styles.container}>
      <main>
        <div className={styles.banner}>
          <Slide slide={slides[2]} backgroundImages={backgroundImages} />
        </div>
      </main>
    </div>
  );
};

export default RepairPage;
