import styles from './Footer.module.scss';
import logo from '../Header/components/HeaderBottom/images/logo.svg';
import visa from './images/visa.svg';
import masterCard from './images/MasterCard.svg';
import mir from './images/MIR.svg';
import { Link } from 'react-router-dom';
import { footerContacts, footerNavigation } from './const';
import { categoriesPaths } from '../../../mock-server/data/categoryProducts.ts';

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.footerWrapper}>
          <Link to="/">
            <img src={logo} alt="логотип" className={styles.logo} />
          </Link>

          <div>
            <div className={styles.columns}>
              <h4 className={styles.title}>Каталог</h4>
              <div className={styles.column}>
                {Object.entries(categoriesPaths).map(([key, value]) => (
                  <Link key={key} to={`catalog/${key}`} className={styles.link}>
                    {value}
                  </Link>
                ))}
              </div>

              <h4 className={styles.title}>Навигация</h4>
              <div className={styles.column}>
                {footerNavigation.map(link => (
                  <Link key={link.text} to={link.to} className={styles.link}>
                    {link.text}
                  </Link>
                ))}
              </div>

              <h4 className={styles.title}>Контакты</h4>
              <div className={styles.column}>
                {footerContacts.map(link => (
                  <Link key={link.text} to={link.to} className={styles.link}>
                    {link.text}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className={styles.bottom}>
          <span className={styles.copyright}>©2017 – 2025. ЦентрКОМ все права защищены</span>
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
