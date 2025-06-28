import { Button } from '../../UI/Button';
import styles from './ProductCard.module.scss';
import basketIcon from './images/basket-icon.svg';
import { useNavigate } from 'react-router-dom';
import type { FullProduct } from '../../../mock-server/data/newProducts.ts';
import React from 'react';
import { useAppDispatch } from '../../redux/hooks.ts';
import { addToCart } from '../../redux/reducers/cartSlice.ts';

export interface ProductCardProps {
  product: FullProduct;
  variant?: 'grid' | 'list';
  shortCategory: string;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, variant = 'grid', shortCategory }) => {
  const navigate = useNavigate();
  const variantClass = styles[variant];
  const dispatch = useAppDispatch();

  const handleProductCardClick = () => {
    navigate(`/catalog/${shortCategory}/id/${product.id}`);
  };

  const handleAddToCart = (e: { stopPropagation: () => void }) => {
    e.stopPropagation();
    dispatch(addToCart(product));
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
              <p className={`${styles.price} ${variantClass}`}>{Number(product.price).toLocaleString()} ₽</p>
            </div>
            <div className={styles.buttonGroupList}>
              <Button size="md" onClick={e => e.stopPropagation()}>
                Купить в кредит
              </Button>
              <Button iconLeft={basketIcon} size="md" variant="dark" onClick={handleAddToCart}>
                В корзину
              </Button>
            </div>
          </>
        ) : (
          <>
            <h4 className={`${styles.title} ${variantClass}`}>{product.name}</h4>
            <p className={`${styles.price} ${variantClass}`}>{Number(product.price).toLocaleString()} ₽</p>
            <Button
              iconLeft={basketIcon}
              size="md"
              variant="dark"
              className={styles.buttonTop}
              onClick={handleAddToCart}
            >
              В корзину
            </Button>
            <Button size="md" className={styles.buttonBottom} onClick={e => e.stopPropagation()}>
              Купить в кредит
            </Button>
          </>
        )}
      </div>
    </div>
  );
};
