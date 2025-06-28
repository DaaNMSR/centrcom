import { useNavigate } from 'react-router-dom';
import { Button } from '../../../../UI/Button';
import styles from './CartEmpty.module.scss';
import cardEmpty from './cart-empty.png';

export const CartEmpty = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className={styles.wrapper}>
        <img className={styles.image} src={cardEmpty} alt="cart empty" />
        <h2 className={styles.title}>Корзина пуста</h2>
        <p className={styles.description}>Посмотрите наши подборки товаров на главной</p>
        <p className={styles.description}>или воспользуйтесь нашим каталогом</p>
        <div className={styles.buttons}>
          <Button onClick={() => navigate('/')}>На главную</Button>
          <Button variant="yellow" onClick={() => navigate('/catalog')}>
            В каталог
          </Button>
        </div>
      </div>
    </>
  );
};
