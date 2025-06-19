import { Category } from '../../components/Category';
import styles from './CatalogPage.module.scss';
import { useGetMainCategoryNamesQuery } from '../../redux/api/mainCategoriesApi.ts';

export const CatalogPage = () => {
  const { data: mainCategories, isLoading, error } = useGetMainCategoryNamesQuery();

  if (isLoading) return <div>Загрузка...</div>;
  if (error) return <div>Произошла ошибка при загрузке категорий</div>;

  return (
    <div className={styles.container}>
      <h3 className={styles.mainTitle}>Каталог</h3>
      <div className={styles.categories}>
        {mainCategories?.map(category => <Category category={category} key={category.description} />)}
      </div>
    </div>
  );
};
