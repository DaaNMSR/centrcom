import styles from './FiltersSideBar.module.scss';
import { useGetCategoryFiltersQuery } from '../../../../redux/api/filtersApi';
import { useParams } from 'react-router-dom';
import { Input } from '../../../../UI/Input';
import { Button } from '../../../../UI/Button';
import { filterNamesMap } from './const.ts';

interface FilterValue {
  name: string;
  count: number;
}

export const FiltersSideBar = () => {
  const { shortCategory } = useParams<{ shortCategory: string }>();
  const { data: filters, error, isLoading } = useGetCategoryFiltersQuery(shortCategory);

  if (isLoading) return <aside className={styles.sidebar}>Загрузка фильтров...</aside>;
  if (error || !filters) return <aside className={styles.sidebar}>Ошибка загрузки фильтров</aside>;

  const { availability, ...otherFilters } = filters;

  return (
    <aside className={styles.sidebar}>
      <div className={styles.filtersContent}>
        <div className={styles.filterSection}>
          <h3 className={styles.sectionTitle}>Наличие в магазине</h3>
          <Input type="select" options={availability} />
        </div>

        <div className={styles.filterSection}>
          <h3 className={styles.sectionTitle}>Диапазон цен, ₽</h3>
          <div className={styles.priceRange}>
            <Input name="priceMin" placeholder="0" />
            <Input name="priceMax" placeholder="1000" />
            <Button variant="yellow" size="md">
              Ок
            </Button>
          </div>
        </div>

        {Object.entries(otherFilters).map(([filterName, filterValues]) => (
          <div key={filterName} className={styles.filterSection}>
            <h3 className={styles.sectionTitle}>{filterNamesMap[filterName]}</h3>
            <div>
              {(filterValues as FilterValue[]).map(option => (
                <label key={option.name} className={styles.optionLabel}>
                  <input type="checkbox" className={styles.optionCheckbox} onChange={() => {}} />
                  <span className={styles.customCheckbox} />
                  <span>
                    {option.name} <span className={styles.optionCount}>{option.count}</span>
                  </span>
                </label>
              ))}
            </div>
          </div>
        ))}
      </div>

      <Button className={styles.stickyButton} variant="yellow" size="md">
        Показать
      </Button>
    </aside>
  );
};
