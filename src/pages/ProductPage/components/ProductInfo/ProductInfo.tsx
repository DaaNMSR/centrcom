import styles from './ProductInfo.module.scss';
import { Button } from '../../../../UI/Button';
import { Link } from 'react-router-dom';
import type { FullProduct } from '../../../../../mock-server/data/newProducts.ts';
import React from 'react';

interface ProductInfoProps {
  product: FullProduct;
}

export const ProductInfo: React.FC<ProductInfoProps> = ({ product }) => {
  return (
    <div className={styles.productInfoContainer}>
      <h2 className={styles.productName}>{product.name}</h2>
      <p className={styles.productArticle}>Артикул: {product.article}</p>

      {(product.new || product.hit) && (
        <div className={styles.productTags}>
          {!!product.new && <p className={styles.productNewTag}>Новое</p>}
          {!!product.hit && <p className={styles.productHitTag}>Хит продаж</p>}
        </div>
      )}

      <div className={styles.productBlock}>
        <div>
          <p className={styles.productPrice}>{product.price} ₽</p>
          <p className={styles.productPriceCredit}>
            или {Math.round(+product.price.replace(/\s/g, '') / 10)} ₽/мес.
          </p>
        </div>

        <div className={styles.productButtons}>
          <Button disabled={!product.creditAvailable}>В кредит</Button>
          <Button variant="yellow">В корзину</Button>
        </div>
      </div>
      <div className={styles.availability}>
        <h3 className={styles.availabilityTitle}>Наличие сейчас:</h3>

        <Link
          to="/"
          className={`${styles.availabilityLink} ${product.availability.pravda === 0 ? styles.availabilityLinkDisable : ''}`}
        >
          Ул Газеты Правды, 59 — {product.availability.pravda} шт
        </Link>
        <Link
          to="/"
          className={`${styles.availabilityLink} ${product.availability.kosorotova === 0 ? styles.availabilityLinkDisable : ''}`}
        >
          Ул. Косоротова 11 — {product.availability.kosorotova} шт
        </Link>
      </div>

      <p className={styles.productDescription}>{product.description}</p>
      <p className={styles.productSpecificationsTitle}>Характеристики:</p>

      {product.specifications.map(({ title, value }) => (
        <div className={styles.productSpecifications} key={title}>
          <span className={styles.productSpecification}>{title}</span>
          <span className={styles.productSpecificationsDots}></span>
          <span className={styles.productSpecification}>{value}</span>
        </div>
      ))}
    </div>
  );
};
