import Cards from './components/Cards/Cards';
import Slider from './components/Slider/Slider';
import styles from './MainPage.module.css';

const MainPage = () => {
  return (
    <div className={styles.container}>
      <main>
        <Slider />
        <Cards />
      </main>
    </div>
  );
};

export default MainPage;
