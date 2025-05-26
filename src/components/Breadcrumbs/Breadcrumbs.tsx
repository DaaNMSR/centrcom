import { Link, useLocation } from 'react-router-dom';
import styles from './Breadcrumbs.module.css';
import chevron from './chevron-right.svg';

const PATH_NAMES: Record<string, string> = {
  '': 'Главная',
  sell: 'Продать',
  credit: 'Кредит',
  repair: 'Ремонт',
  jobs: 'Вакансии',
  contacts: 'Контакты',
};

export const Breadcrumbs = () => {
  const location = useLocation();
  const pathParts = location.pathname.split('/').filter(Boolean);

  const crumbs = pathParts.map((part, index) => {
    const to = '/' + pathParts.slice(0, index + 1).join('/');
    const isLast = index === pathParts.length - 1;

    return (
      <span key={to}>
        {!isLast ? (
          <>
            <Link to={to}>{PATH_NAMES[part] || part}</Link>
            <span className={styles.separator}>›</span>
          </>
        ) : (
          <span className={styles.current}>{PATH_NAMES[part] || part}</span>
        )}
      </span>
    );
  });

  return (
    <nav className={styles.breadcrumbs}>
      <Link to="/" className={styles.link}>
        Главная
      </Link>
      {pathParts.length > 0 && <img src={chevron} className={styles.separator} />}
      {crumbs}
    </nav>
  );
};
