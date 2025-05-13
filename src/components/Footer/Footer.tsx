import styles from './Footer.module.css';
import logo from '../Header/components/HeaderBottom/images/logo.svg';
import visa from './images/visa.svg';
import masterCard from './images/MasterCard.svg';
import mir from './images/mir.svg';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <img src={logo} alt="логотип" />
        </div>
        <div className={styles.columns}>
          <div className={styles.column}>
            <h4>Каталог</h4>
            <Link to="/" className={styles.link}>
              Телевизоры и аудиотехника
            </Link>
            <Link to="/" className={styles.link}>
              Ноутбуки и компьютеры
            </Link>
            <Link to="/" className={styles.link}>
              Смартфоны и гаджеты
            </Link>
            <Link to="/" className={styles.link}>
              Фототехника
            </Link>
            <Link to="/" className={styles.link}>
              Аксессуары
            </Link>
            <Link to="/" className={styles.link}>
              Принтеры и МФУ
            </Link>
            <Link to="/" className={styles.link}>
              Инструменты
            </Link>
            <Link to="/" className={styles.link}>
              Товары для дома
            </Link>
            <Link to="/" className={styles.link}>
              Климатическое оборудование
            </Link>
            <Link to="/" className={styles.link}>
              Красота и здоровье
            </Link>
            <Link to="/" className={styles.link}>
              Хобби и отдых
            </Link>
            <Link to="/" className={styles.link}>
              Для автомобиля
            </Link>
            <Link to="/" className={styles.link}>
              Игровые приставки и игры
            </Link>
          </div>

          <div className={styles.column}>
            <h4>Навигация</h4>
            <Link to="/" className={styles.link}>
              Каталог
            </Link>
            <Link to="/jobs" className={styles.link}>
              Вакансии
            </Link>
            <Link to="/sell" className={styles.link}>
              Продать
            </Link>
            <Link to="/contacts" className={styles.link}>
              Контакты
            </Link>
            <Link to="/credit" className={styles.link}>
              Кредит
            </Link>
            <Link to="/repair" className={styles.link}>
              Ремонт
            </Link>
          </div>

          <div className={styles.column}>
            <h4>Контакты</h4>
            <div className={styles.link}>8 (3519) 51-00-25</div>
            <div className={styles.link}>8 (906) 899-99-89</div>
            <Link to="/" className={styles.link}>
              Вконтакте
            </Link>
            <Link to="/" className={styles.link}>
              Авито
            </Link>
          </div>
        </div>
        <div className={styles.bottom}>
          <div>©2017 – 2023. ЦентрКОМ все права защищены</div>
          <div className={styles.paymentIcons}>
            <img src={visa} alt="VISA" />
            <img src={masterCard} alt="MasterCard" />
            <img src={mir} alt="МИР" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
