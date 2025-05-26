import { Link } from 'react-router-dom';
import { newProducts } from './const';
import arrowIcon from './images/arrowUp-right.svg';
import styles from './NewProducts.module.scss';
import { ProductCard } from '../../../../components/ProductCard';

export const NewProducts = () => {
  return (
    <section className={styles.newProductsSection}>
      <div className={styles.mainTitle}>
        <h3 className={styles.mainTitleText}>Новинки</h3>
        <Link to="/" className={styles.mainTitleLinkWrapper}>
          <span className={styles.mainTitleLink}>Смотреть все ({newProducts.length})</span>
          <img src={arrowIcon} alt="Еще" className={styles.mainTitleImg} />
        </Link>
      </div>
      <div className={styles.newProducts}>
        {newProducts.map(product => (
          <ProductCard product={product} />
        ))}
      </div>
    </section>
  );
};
