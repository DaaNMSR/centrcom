import { Link } from 'react-router-dom';
import arrowIcon from './images/arrowUp-right.svg';
import styles from './NewProducts.module.scss';
import { products } from '../../../../../mock-server/data/product.ts';
import { ProductCard } from '../../../../components/ProductCard';
import { featureFlags } from '../../../../../featureFlags.ts';

export const NewProducts = () => {
  return (
    <section className={styles.newProductsSection}>
      <div className={styles.mainTitle}>
        <h3 className={styles.mainTitleText}>Новинки</h3>
        <Link to="/" className={styles.mainTitleLinkWrapper}>
          {featureFlags.newProductsArrow && (
            <>
              <span className={styles.mainTitleLink}>Смотреть все ({products.length})</span>
              <img src={arrowIcon} alt="Еще" className={styles.mainTitleImg} />
            </>
          )}
        </Link>
      </div>
      <div className={styles.newProducts}>
        {products.map(product => (
          <ProductCard product={product} key={product.id} />
        ))}
      </div>
    </section>
  );
};
