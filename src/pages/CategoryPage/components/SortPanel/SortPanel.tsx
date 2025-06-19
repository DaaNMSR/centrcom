import styles from './SortPanel.module.scss';
import { Button } from '../../../../UI/Button';
import { GridIcon } from './images/GridIcon';
import { LinesIcon } from './images/LinesIcon';
import React from 'react';

export type SortBy = 'asc' | 'desc' | 'popular' | 'new';

interface SortPanelProps {
  viewType: 'grid' | 'list';
  onViewChange: (type: 'grid' | 'list') => void;
  sortBy: SortBy;
  onSortChange: (type: SortBy) => void;
}

export const SortPanel: React.FC<SortPanelProps> = ({ viewType, onViewChange, sortBy, onSortChange }) => {
  return (
    <div className={styles.sorting}>
      <div className={styles.sortingButtons}>
        <Button
          variant={sortBy === 'popular' ? 'dark' : 'ghost'}
          size="md"
          onClick={() => onSortChange('popular')}
        >
          По популярности
        </Button>
        <Button variant={sortBy === 'new' ? 'dark' : 'ghost'} size="md" onClick={() => onSortChange('new')}>
          Новинки
        </Button>
        <Button variant={sortBy === 'asc' ? 'dark' : 'ghost'} size="md" onClick={() => onSortChange('asc')}>
          Дешевле
        </Button>
        <Button variant={sortBy === 'desc' ? 'dark' : 'ghost'} size="md" onClick={() => onSortChange('desc')}>
          Дороже
        </Button>
      </div>
      <div className={styles.sortingIcons}>
        <Button variant="ghost" size="md" onClick={() => onViewChange('grid')}>
          <GridIcon color={viewType === 'grid' ? '#101828' : '#667085'} />
        </Button>
        <Button variant="ghost" size="md" onClick={() => onViewChange('list')}>
          <LinesIcon color={viewType === 'list' ? '#101828' : '#667085'} />
        </Button>
      </div>
    </div>
  );
};
