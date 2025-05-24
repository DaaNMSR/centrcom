import { Breadcrumbs } from '../../components/Breadcrumbs';
import styles from './CreditPage.module.css';

export const CreditPage = () => {
  return (
    <div className={styles.container}>
      <Breadcrumbs />
      <h2 className={styles.title}>Рассрочка через ОТП банк</h2>
      <p className={styles.description}>
        Условия 0-0-6 на пол года, без процентов, без первого взноса, из документов нужен только паспорт.
        Кредит предоставляют ОТП Банк, Тинькофф Банк, Почта Банк, Ренессанс, Альфа, Хоум, МТС и т.д. Условия
        кредитования зависят от банка, который одобрит кредит
      </p>
      <ul className={styles.list}>
        <li className={styles.listItem}>
          <div className={styles.listMarker}></div>Оформляется только в магазине и с 21 года
        </li>
        <li className={styles.listItem}>
          <div className={styles.listMarker}></div>Идёт с первоначальным взносом
        </li>
        <li className={styles.listItem}>
          <div className={styles.listMarker}></div>Из документов нужен только паспорт
        </li>
        <li className={styles.listItem}>
          <div className={styles.listMarker}></div>Оформляется либо в магазине, либо на сайте
        </li>
      </ul>
    </div>
  );
};
