import Cards from './components/Cards/Cards';
import { ProductSection } from '../../components/ProductSection';
import { PopularCategories } from './components/PopularCategories/PopularCategories';
import Slider from './components/Slider/Slider';
import styles from './MainPage.module.scss';
import { useGetNewProductsQuery } from '../../redux/api/newProductsApi.ts';

export const MainPage = () => {
  const { data: newProducts } = useGetNewProductsQuery();
  return (
    <div className={styles.container}>
      <main>
        <Slider />
        <Cards />
        <PopularCategories />
        <ProductSection products={newProducts ?? []} />
      </main>
    </div>
  );
};
