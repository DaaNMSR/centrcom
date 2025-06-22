import { Link } from 'react-router-dom';
import arrowIcon from './images/arrowUp-right.svg';
import styles from './ProductSection.module.scss';
import { ProductCard } from '../ProductCard';
import { featureFlags } from '../../../featureFlags.ts';
import type { FullProduct } from '../../../mock-server/data/newProducts.ts';
import React from 'react';

interface ProductSectionProps {
  products: FullProduct[];
}

export const ProductSection: React.FC<ProductSectionProps> = ({ products }) => {
  return (
    <section>
      <div className={styles.mainTitle}>
        <h3 className={styles.mainTitleText}>Новинки</h3>
        <Link to="/" className={styles.mainTitleLinkWrapper}>
          {featureFlags.productSectionArrow && (
            <>
              <span className={styles.mainTitleLink}>Смотреть все ({products?.length})</span>
              <img src={arrowIcon} alt="Еще" className={styles.mainTitleImg} />
            </>
          )}
        </Link>
      </div>
      <div className={styles.productSection}>
        {products?.map(product => (
          <ProductCard product={product} key={product.id} shortCategory={product.category ?? ''} />
        ))}
      </div>
    </section>
  );
};
