import type { Card } from '../../pages/SellPage/const';
import { Button } from '../../UI/Button';
import styles from './ServiceCard.module.css';

interface ServiceCardProps {
  card: Card;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({ card }) => {
  return (
    <div
      className={styles.card}
      style={
        card.backgroundColorBlur
          ? ({
              '--bg-color': card.backgroundColorBlur,
            } as React.CSSProperties)
          : {}
      }
    >
      <h2 className={styles.title}>{card.title}</h2>
      <img src={card.backGroundImagePath} alt={card.title} className={styles.bgImage} />
      {card.button && (
        <Button variant="yellow" className={styles.button}>
          Продать
        </Button>
      )}
    </div>
  );
};
