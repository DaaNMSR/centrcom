import { ListDescription } from '../../components/ListDescription';
import { creditList } from './const';
import styles from './CreditPage.module.css';

export const CreditPage = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Рассрочка через ОТП банк</h2>
      <p className={styles.description}>
        Условия 0-0-6 на пол года, без процентов, без первого взноса, из документов нужен только паспорт.
        Кредит предоставляют ОТП Банк, Тинькофф Банк, Почта Банк, Ренессанс, Альфа, Хоум, МТС и т.д. Условия
        кредитования зависят от банка, который одобрит кредит
      </p>
      <ListDescription listContent={creditList[0]} />
    </div>
  );
};
