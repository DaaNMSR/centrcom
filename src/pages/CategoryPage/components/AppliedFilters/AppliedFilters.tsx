import styles from './AppliedFilters.module.scss';

export const AppliedFilters = () => {
  return (
    <div className={styles.currentFilters}>
      <div>Бренд: Blackton</div>
      <div>Разрешение: 1920x1080</div>
      <div>Сбросить все</div>
    </div>
  );
};
