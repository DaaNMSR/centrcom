import { Button } from '../../UI/Button';
import styles from './ProductCard.module.scss';
import basketIcon from './images/basket-icon.svg';
import { useNavigate } from 'react-router-dom';
import type { Product } from '../../../mock-server/data/product.ts';

export interface ProductCardProps {
  product: Product;
}

export const ProductCard = ({ product }: ProductCardProps) => {
  const navigate = useNavigate();

  const handleProductCardClick = () => {
    navigate(`/products/${product.id}`);
  };

  return (
    <div className={styles.productCard} onClick={handleProductCardClick}>
      <div className={styles.productImageWrapper}>
        <img src={product.image[0]} alt={product.name} className={styles.productImage} />
      </div>
      <div className={styles.content}>
        <h4 className={styles.title}>{product.name}</h4>
        <p className={styles.price}>{product.price} ₽</p>
        <Button
          iconLeft={basketIcon}
          size="md"
          variant="dark"
          className={styles.buttonTop}
          onClick={e => e.stopPropagation()}
        >
          В корзину
        </Button>
        <Button size="md" className={styles.buttonBottom} onClick={e => e.stopPropagation()}>
          Купить в кредит
        </Button>
      </div>
    </div>
  );
};
