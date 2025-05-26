import { Button } from '../../UI/Button';
import styles from './ProductCard.module.css';
import basketIcon from './images/basket-icon.svg';

interface ProductCardProps {
  product: {
    imagePath: string;
    title: string;
    price: string;
  };
}

export const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <div className={styles.productCard}>
      <img src={product.imagePath} alt={product.title} />
      <div className={styles.content}>
        <h4 className={styles.title}>{product.title}</h4>
        <p className={styles.price}>{product.price}</p>
        <Button iconLeft={basketIcon} size="md" variant="dark" className={styles.buttonTop}>
          В корзину
        </Button>
        <Button size="md" className={styles.buttonBottom}>
          Купить в кредит
        </Button>
      </div>
    </div>
  );
};
