import styles from './Footer.module.css';
import logo from '../Header/components/HeaderBottom/images/logo.svg';
import visa from './images/visa.svg';
import masterCard from './images/MasterCard.svg';
import mir from './images/mir.svg';
import { Link } from 'react-router-dom';
import { footerCatalog, footerContacts, footerNavigation } from './const';

export const Footer = () => {
  const handleClickToList = () => {
    scroll(0, 0);
  };

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
                {footerCatalog.map(link => (
                  <Link key={link.text} to={link.to} className={styles.link} onClick={handleClickToList}>
                    {link.text}
                  </Link>
                ))}
              </div>
              <h4 className={styles.title}>Навигация</h4>
              <div className={styles.column}>
                {footerNavigation.map(link => (
                  <Link key={link.text} to={link.to} className={styles.link} onClick={handleClickToList}>
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
