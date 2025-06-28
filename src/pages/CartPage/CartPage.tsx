import styles from './CartPage.module.scss';
import { Button } from '../../UI/Button';
import { CartEmpty } from './components/CartEmpty';
import { useAppDispatch, useAppSelector } from '../../redux/hooks.ts';
import { clearCart } from '../../redux/reducers/cartSlice.ts';
import { CartList } from '../../components/CartList';
import { CartCheckoutBlock } from './components/CartCheckoutBlock';

export const CartPage = () => {
  const carts = useAppSelector(state => state.cart.items);
  const totalCount = useAppSelector(state => state.cart.totalCount);
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
      {!carts.length ? (
        <CartEmpty />
      ) : (
        <div className={styles.cartListWrapper}>
          <CartList variant="cartPage" />
          <CartCheckoutBlock />
        </div>
      )}
    </div>
  );
};
