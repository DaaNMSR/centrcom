import styles from './Header.module.scss';
import { HeaderBottom } from './components/HeaderBottom';
import { HeaderTop } from './components/HeaderTop';

export const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <HeaderTop />
        <HeaderBottom />
      </div>
    </header>
  );
};
