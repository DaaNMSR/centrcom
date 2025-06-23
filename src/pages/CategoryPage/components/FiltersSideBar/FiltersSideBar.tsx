import styles from './FiltersSideBar.module.scss';
import { useGetCategoryFiltersQuery } from '../../../../redux/api/filtersApi';
import { useParams } from 'react-router-dom';
import { Input } from '../../../../UI/Input';
import { Button } from '../../../../UI/Button';
import { createApplyHandler, createCheckboxChangeHandler, filterNamesMap } from './const.ts';
import React, { useEffect } from 'react';

interface FiltersSideBarProps {
  selectedFilters: { [key: string]: string[] };
  setSelectedFilters: React.Dispatch<React.SetStateAction<{ [key: string]: string[] }>>;
}

export const FiltersSideBar: React.FC<FiltersSideBarProps> = ({ selectedFilters, setSelectedFilters }) => {
  const [pendingFilters, setPendingFilters] = React.useState<{ [key: string]: string[] }>({});

  const { shortCategory } = useParams<{ shortCategory: string }>();
  const { data: filters, error, isLoading } = useGetCategoryFiltersQuery(shortCategory);

  const handleCheckboxChange = createCheckboxChangeHandler(setPendingFilters);
  const handleApply = createApplyHandler(setSelectedFilters, pendingFilters);

  useEffect(() => {
    setPendingFilters(selectedFilters);
  }, [selectedFilters]);

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
            <Input name="priceMin" placeholder="0" type="number" />
            <Input name="priceMax" placeholder="1000" type="number" />
            <Button variant="yellow" size="md">
              Ок
            </Button>
          </div>
        </div>

        {Object.entries(otherFilters).map(([filterName, filterValues]) => (
          <div key={filterName} className={styles.filterSection}>
            <h3 className={styles.sectionTitle}>{filterNamesMap[filterName]}</h3>
            <div>
              {(
                filterValues as {
                  name: string;
                  count: number;
                }[]
              ).map(option => (
                <label key={option.name} className={styles.optionLabel}>
                  <input
                    type="checkbox"
                    className={styles.optionCheckbox}
                    onChange={() => handleCheckboxChange(filterName, option.name)}
                    checked={pendingFilters[filterName]?.includes(option.name) || false}
                  />
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

      <Button className={styles.stickyButton} variant="yellow" size="md" onClick={handleApply}>
        Показать
      </Button>
    </aside>
  );
};
