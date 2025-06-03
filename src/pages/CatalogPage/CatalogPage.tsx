import { Category } from '../../components/Category';
import styles from './CatalogPage.module.scss';
import { categories } from './const';

export const CatalogPage = () => {
  return (
    <div className={styles.container}>
      <h3 className={styles.mainTitle}>Каталог</h3>
      <div className={styles.categories}>
        {categories.map(category => (
          <Category category={category} />
        ))}
      </div>
    </div>
  );
};
