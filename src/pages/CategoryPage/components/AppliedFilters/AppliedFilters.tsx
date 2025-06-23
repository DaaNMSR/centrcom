import styles from './AppliedFilters.module.scss';
import React from 'react';
import { filterNamesMap } from '../FiltersSideBar/const.ts';
import CloseIcon from '../../../../components/Header/components/HeaderBottom/images/mySvg/CloseIcon.tsx';
import { Button } from '../../../../UI/Button';

interface AppliedFiltersProps {
  selectedFilters: { [key: string]: string[] };
  resetFilters: () => void;
  removeFilter: (filterName: string, value: string) => void;
}

export const AppliedFilters: React.FC<AppliedFiltersProps> = ({
  selectedFilters,
  resetFilters,
  removeFilter,
}) => {
  return (
    <div className={styles.currentFilters}>
      {Object.entries(selectedFilters).map(([key, values]) =>
        values.map(value => (
          <Button
            className={styles.deleteFilterButton}
            onClick={() => removeFilter(key, value)}
            variant="gray"
            iconRight={<CloseIcon width="16" height="16" />}
            size="md"
            key={key}
          >
            {filterNamesMap[key] || key}: {value}
          </Button>
        )),
      )}

      <Button
        className={styles.deleteFilterButton}
        onClick={resetFilters}
        variant="gray"
        iconRight={<CloseIcon width="16" height="16" />}
        size="md"
      >
        Сбросить все
      </Button>
    </div>
  );
};
