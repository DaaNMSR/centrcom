import Cards from './components/Cards/Cards';
import NewProducts from './components/NewProducts/NewProducts';
import PopularCategories from './components/PopularCategories/PopularCategories';
import Slider from './components/Slider/Slider';
import styles from './MainPage.module.css';

const MainPage = () => {
  return (
    <div className={styles.container}>
      <main>
        <Slider />
        <Cards />
        <PopularCategories />
        <NewProducts />
      </main>
    </div>
  );
};

export default MainPage;
