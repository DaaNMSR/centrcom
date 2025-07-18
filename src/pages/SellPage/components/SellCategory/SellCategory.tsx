import { useParams } from 'react-router-dom';
import { FormCards } from '../../../../components/FormCards';
import { MyForm } from '../../../../components/MyForm';
import { formCards, sellCards } from '../../const';
import styles from './SellCategory.module.scss';

export const SellCategory = () => {
  const { category } = useParams<{ category: string }>();
  const selectedCard = sellCards.find(card => card.path === category);
  const initialSelect = selectedCard ? selectedCard.title : '';

  return (
    <div className={styles.container}>
      <div className={styles.formWrapper}>
        <MyForm fileUpload={true} header="sellPage" initialSelect={initialSelect} />
      </div>
      <div className={styles.formCardsWrapper}>
        <FormCards formCards={formCards} />
      </div>
    </div>
  );
};
