import { Link, useLocation } from 'react-router-dom';
import styles from './Breadcrumbs.module.scss';
import { useGetVacanciesShortQuery } from '../../redux/api/vacanciesShortApi.ts';
import { useGetProductByIdQuery } from '../../redux/api/categoryProductsApi.ts';
import { skipToken } from '@reduxjs/toolkit/query';
import { getVacancyTitleById, PATH_NAMES } from './const.ts';
import { Crumb } from './components/Crumb/Crumb.tsx';

export const Breadcrumbs = () => {
  const pathParts = useLocation().pathname.split('/').filter(Boolean);
  const shortCategory = pathParts[1];
  const productId = pathParts[3];

  const isProductPage =
    pathParts[0] === 'catalog' && pathParts[2] === 'id' && !!pathParts[1] && !!pathParts[3];

  const { data: product } = useGetProductByIdQuery(
    isProductPage ? { shortCategory, id: productId } : skipToken,
  );

  const { data: vacanciesShort } = useGetVacanciesShortQuery();

  const crumbs = pathParts
    .map((part, index) => {
      if (part === 'id') return null;

      const to = '/' + pathParts.slice(0, index + 1).join('/');
      const isLast = index === pathParts.length - 1;
      const prevPart = pathParts[index - 1];

      let label = PATH_NAMES[part];

      if (!label) {
        if (prevPart === 'jobs') {
          label = getVacancyTitleById(+part, vacanciesShort) || part;
        } else if (prevPart === 'id' && part === productId) {
          label = product?.name || 'Загрузка...';
        } else {
          label = part;
        }
      }

      return <Crumb isLast={isLast} to={to} label={label} key={to} />;
    })
    .filter(Boolean);

  return (
    <nav className={styles.breadcrumbs}>
      <Link to="/" className={styles.link}>
        Главная
      </Link>
      {crumbs}
    </nav>
  );
};
