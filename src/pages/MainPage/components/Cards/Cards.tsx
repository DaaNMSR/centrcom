import { Link } from 'react-router-dom';
import styles from './Cards.module.css';
import { cards } from './const';

const Cards = () => {
  return (
    <div className={styles.cards}>
      {cards.map(card => (
        <div className={styles.card} key={card.title}>
          <h3 className={styles.cardTitle}>{card.title}</h3>
          <p className={styles.cardDescription}>{card.description}</p>
          <button className={styles.cardButton}>
            <Link to={card.linkPath}>Подробнее</Link>
          </button>
          <img src={card.backgroundPath} className={styles.background} />
        </div>
      ))}
    </div>
  );
};

export default Cards;
