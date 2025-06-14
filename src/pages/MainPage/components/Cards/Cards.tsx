import { Link } from 'react-router-dom';
import styles from './Cards.module.scss';
import { cards } from './const';

const Cards = () => {
  return (
    <section className={styles.cards}>
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
    </section>
  );
};

export default Cards;
