import React, { useEffect, useRef } from 'react';
import styles from './CartPopup.module.scss';
import { Button } from '../../UI/Button';
import { useAppDispatch, useAppSelector } from '../../redux/hooks.ts';
import { clearCart, toggleCartPopup } from '../../redux/reducers/cartSlice.ts';
import { Link } from 'react-router-dom';
import { CartList } from '../CartList';

export const CartPopup = ({ triggerRef }: { triggerRef: React.RefObject<HTMLElement> | null }) => {
  const dispatch = useAppDispatch();
  const totalPrice = useAppSelector(state => state.cart.totalPrice);
  const totalCount = useAppSelector(state => state.cart.totalCount);
  const isOpen = useAppSelector(state => state.cart.isCartPopupOpen);
  const popupRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isOpen) return;

    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Node;

      if (
        popupRef.current &&
        !popupRef.current.contains(target) &&
        triggerRef?.current &&
        !triggerRef?.current.contains(target)
      ) {
        dispatch(toggleCartPopup());
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [dispatch, isOpen, triggerRef]);

  const handleClearCart = () => {
    dispatch(clearCart());
  };
  if (!isOpen) return null;

  return (
    <div ref={popupRef} className={styles.cartPopup}>
      <div className={styles.cartPopupHeader}>
        <h3 className={styles.cartPopupTitle}>Товары ({totalCount} шт)</h3>
        <Button variant="ghost" onClick={handleClearCart} disabled={totalCount === 0}>
          Очистить корзину
        </Button>
      </div>
      <CartList variant="popup" />
      <div className={styles.cartPopupPrice}>
        <span>Итого:</span>
        <span>{totalPrice.toLocaleString()} ₽</span>
      </div>

      <div className={styles.cartPopupButtons}>
        <Link to="/cart" onClick={() => dispatch(toggleCartPopup())}>
          <Button variant="gray">В корзину</Button>
        </Link>
        <Button variant="yellow">Оформить заказ</Button>
      </div>
    </div>
  );
};
