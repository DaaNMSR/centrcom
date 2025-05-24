import { formCards } from './const';
import styles from './FormCards.module.css';

export const FormCards = () => {
  return (
    <>
      {formCards.mainTitle && <h2 className={styles.mainTitle}>{formCards.mainTitle}</h2>}
      <div className={styles.formCards}>
        {formCards.cards.map(formCard => (
          <div className={styles.cardWrapper} key={formCard.description}>
            <div className={styles.step}>{formCard.step}</div>
            {formCard.subTitle && <h3 className={styles.subTitle}>{formCard.subTitle}</h3>}
            <p className={styles.description}>{formCard.description}</p>
          </div>
        ))}
      </div>
    </>
  );
};
