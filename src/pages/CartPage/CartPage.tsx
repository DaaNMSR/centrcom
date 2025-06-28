import styles from './CartPage.module.scss';
import { Button } from '../../UI/Button';
import { CartEmpty } from './components/CartEmpty';
import { useAppDispatch, useAppSelector } from '../../redux/hooks.ts';
import { clearCart } from '../../redux/reducers/cartSlice.ts';
import { CartList } from '../../components/CartList';
import { deliveryAt } from './const.ts';

export const CartPage = () => {
  const carts = useAppSelector(state => state.cart.items);
  const totalCount = useAppSelector(state => state.cart.totalCount);
  const totalPrice = useAppSelector(state => state.cart.totalPrice);
  const dispatch = useAppDispatch();

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <div className={styles.container}>
      <div className={styles.cartHeader}>
        <h1 className={styles.cartTitle}>Корзина</h1>
        <Button variant="ghost" onClick={handleClearCart} disabled={totalCount === 0}>
          Очистить корзину
        </Button>
      </div>
      {!carts.length && <CartEmpty />}
      <div className={styles.cartListWrapper}>
        <CartList variant="cartPage" />
        <div className={styles.cartConfirm}>
          <div className={styles.cartConfirmHeader}>
            <span className={styles.cartConfirmLabel}>Итого:</span>
            <div className={styles.cartConfirmInfo}>
              <span>
                {totalCount} {totalCount > 1 ? 'Товара' : 'Товар'}
              </span>
              <span>{totalPrice.toLocaleString()} ₽</span>
            </div>
          </div>

          <Button variant="yellow">Перейти к оформлению</Button>
          <div className={styles.cartConfirmBlock}>
            <p className={styles.cartConfirmDelivery}>
              Доставим до:
              <span className={styles.cartConfirmBlockInfo}>{deliveryAt}</span>
            </p>
            <p className={styles.cartConfirmShops}>
              В магазинах:
              <span className={styles.cartConfirmBlockInfo}>10:00–18:00</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
