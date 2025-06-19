import { Button } from '../../UI/Button';
import styles from './ProductCard.module.scss';
import basketIcon from './images/basket-icon.svg';
import { useNavigate } from 'react-router-dom';
import type { FullProduct } from '../../../mock-server/data/newProduct.ts';
import React from 'react';

export interface ProductCardProps {
  product: FullProduct;
  variant?: 'grid' | 'list';
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, variant = 'grid' }) => {
  const navigate = useNavigate();
  const variantClass = styles[variant];
  const handleProductCardClick = () => {
    navigate(`/products/${product.id}`);
  };
  const stopPropagation = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  return (
    <div className={`${styles.productCard} ${variantClass}`} onClick={handleProductCardClick}>
      <div className={`${styles.productImageWrapper} ${variantClass}`}>
        <img src={product.image[0]} alt={product.name} className={`${styles.productImage} ${variantClass}`} />
      </div>

      <div className={`${styles.content} ${variantClass}`}>
        {variant === 'list' ? (
          <>
            <div className={styles.headerList}>
              <h4 className={styles.title}>{product.name}</h4>
              <p className={`${styles.price} ${variantClass}`}>{product.price} ₽</p>
            </div>
            <div className={styles.buttonGroupList}>
              <Button size="md" onClick={stopPropagation}>
                Купить в кредит
              </Button>
              <Button iconLeft={basketIcon} size="md" variant="dark" onClick={stopPropagation}>
                В корзину
              </Button>
            </div>
          </>
        ) : (
          <>
            <h4 className={`${styles.title} ${variantClass}`}>{product.name}</h4>
            <p className={`${styles.price} ${variantClass}`}>{product.price} ₽</p>
            <Button
              iconLeft={basketIcon}
              size="md"
              variant="dark"
              className={styles.buttonTop}
              onClick={stopPropagation}
            >
              В корзину
            </Button>
            <Button size="md" className={styles.buttonBottom} onClick={stopPropagation}>
              Купить в кредит
            </Button>
          </>
        )}
      </div>
    </div>
  );
};
