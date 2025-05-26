import { Category } from '../../../../components/Category';
import { popularCategories } from './const';
import styles from './PopularCategories.module.css';

export const PopularCategories = () => {
  return (
    <section>
      <h3 className={styles.mainTitle}>Популярные категории</h3>
      <div className={styles.popularCategories}>
        {popularCategories.map(category => (
          <Category category={category} />
        ))}
      </div>
    </section>
  );
};
