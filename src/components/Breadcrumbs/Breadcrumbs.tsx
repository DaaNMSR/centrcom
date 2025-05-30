import { Link, useLocation } from 'react-router-dom';
import styles from './Breadcrumbs.module.css';
import chevronActive from './images/chevron-right-active.svg';
import chevron from './images/chevron-right.svg';
import { vacancies } from '../../pages/JobsPage/const';
import { products } from '../../../mock-server/data/product.ts';

const PATH_NAMES: Record<string, string> = {
  '': 'Главная',
  sell: 'Продать',
  credit: 'Кредит',
  repair: 'Ремонт',
  jobs: 'Вакансии',
  contacts: 'Контакты',
  catalog: 'Каталог',
  products: 'Продукт',
  cartempty: 'Корзина',
  laptop: 'Ноутбук',
  tv: 'Телевизор',
  phone: 'Телефон',
  pc: 'Компьютер',
  playstation: 'Приставка',
  tablet: 'Планшет',
  camera: 'Фотоаппарат',
  refrigerator: 'Холодильник',
  washingmachine: 'Стиральная машина',
  bicycle: 'Велосипед',
  monoblock: 'Моноблок',
  cleaningps: 'Чистка игровых приставок и замена термопасты',
  subscription: 'Оформление подписки на PS и XBOX',
  repairps: 'Ремонт консолей',
  softwarerestoration: 'Восстановление заводского ПО на консолях',
  firmwareconsoles: 'Прошивка консолей (PS/PS4/XBOX360)',
  repairgamepads: 'Ремонт геймпадов и замена стиков',
  gamedownolads: 'Закачка игр',
};

const getVacancyTitleById = (id: number) => {
  const vacancy = vacancies.find(v => v.id === id);
  return vacancy?.title;
};

const getProductTitleById = (id: number) => {
  const product = products.find(p => p.id === id);
  return product?.name;
};

export const Breadcrumbs = () => {
  const location = useLocation();
  const pathParts = location.pathname.split('/').filter(Boolean);

  const crumbs = pathParts.map((part, index) => {
    const to = '/' + pathParts.slice(0, index + 1).join('/');
    const isLast = index === pathParts.length - 1;
    let label = PATH_NAMES[part];

    if (!label) {
      const prevPart = pathParts[index - 1];

      if (prevPart === 'jobs') {
        label = getVacancyTitleById(+part) || part;
      }
      if (prevPart === 'products') {
        label = getProductTitleById(+part) || part;
      }
    }

    const separatorImg = isLast ? chevronActive : chevron;

    return (
      <span key={to} className={styles.crumb}>
        <img src={separatorImg} className={styles.separator} alt=">" />
        {isLast ? (
          <span className={styles.current}>{label}</span>
        ) : (
          <Link to={to} className={styles.link}>
            {label}
          </Link>
        )}
      </span>
    );
  });

  return (
    <nav className={styles.breadcrumbs}>
      <Link to="/" className={styles.link}>
        Главная
      </Link>
      {crumbs}
    </nav>
  );
};
