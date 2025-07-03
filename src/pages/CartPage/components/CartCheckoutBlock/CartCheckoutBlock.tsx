import styles from './CartCheckoutBlock.module.scss';
import { Button } from '../../../../UI/Button';
import { deliveryAt } from '../../const.ts';
import { useAppSelector } from '../../../../redux/hooks.ts';

export const CartCheckoutBlock = () => {
  const totalCount = useAppSelector(state => state.cart.totalCount);
  const totalPrice = useAppSelector(state => state.cart.totalPrice);

  return (
    <div className={styles.cartCheckout}>
      <div>
        <span className={styles.cartCheckoutLabel}>Итого:</span>
        <div className={styles.cartCheckoutInfo}>
          <span>
            {totalCount} {totalCount > 1 ? 'Товара' : 'Товар'}
          </span>
          <span>{totalPrice.toLocaleString()} ₽</span>
        </div>
      </div>

      <Button variant="yellow">Перейти к оформлению</Button>
      <div className={styles.cartCheckoutBlock}>
        <p className={styles.cartCheckoutDelivery}>
          Доставим до:
          <span className={styles.cartCheckoutBlockInfo}>{deliveryAt}</span>
        </p>
        <p className={styles.cartCheckoutShops}>
          В магазинах:
          <span className={styles.cartCheckoutBlockInfo}>10:00–18:00</span>
        </p>
      </div>
    </div>
  );
};
