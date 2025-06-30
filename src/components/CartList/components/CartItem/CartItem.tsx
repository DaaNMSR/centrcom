import React from 'react';
import styles from './CartItem.module.scss';
import { Button } from '../../../../UI/Button';
import deleteIconPopup from './images/delete.svg';
import deleteIconCartPage from './images/deleteCartPage.svg';
import { decreaseQuantity, increaseQuantity, removeFromCart } from '../../../../redux/reducers/cartSlice.ts';
import { useAppDispatch } from '../../../../redux/hooks.ts';
import type { CartItem as Cart } from '../../../../redux/reducers/cartSlice.ts';
import { Link } from 'react-router-dom';
import { QuantityCounter } from '../../../QuantityCounter';

export type CartVariant = 'popup' | 'cartPage';

interface CartItemProps {
  item: Cart;
  variant: CartVariant;
}

export const CartItem: React.FC<CartItemProps> = ({ item, variant }) => {
  const dispatch = useAppDispatch();

  const handleDeleteCart = (id: number) => {
    dispatch(removeFromCart(id));
  };

  const handleIncrease = () => {
    dispatch(increaseQuantity(item.id));
  };

  const handleDecrease = () => {
    dispatch(decreaseQuantity(item.id));
  };

  const variantClass = styles[variant];

  return (
    <div className={`${styles.cartItem} ${variantClass}`}>
      <Link to={`/catalog/${item.category}/id/${item.id}`}>
        <div className={styles.cartItemTitleBlock}>
          <img src={item.image[0]} alt={item.name} className={`${styles.cartItemImage} ${variantClass}`} />

          {variant === 'popup' ? (
            <p className={`${styles.cartItemTitle} ${variantClass}`}>{item.name}</p>
          ) : (
            <div>
              <p className={`${styles.cartItemTitle} ${variantClass}`}>{item.name}</p>
              <p className={styles.cartItemArticle}>{item.article}</p>
            </div>
          )}
        </div>
      </Link>

      {variant === 'cartPage' && (
        <QuantityCounter
          itemQuantity={item.quantity}
          handleIncrease={handleIncrease}
          handleDecrease={handleDecrease}
        />
      )}

      <div className={styles.cartItemPriceBlock}>
        <p className={`${styles.cartItemPrice} ${variantClass}`}>
          {variant === 'popup'
            ? `${item.quantity} x ${(item.quantity * +item.price).toLocaleString('ru-RU')} ₽`
            : `${(item.quantity * +item.price).toLocaleString('ru-RU')} ₽`}
        </p>
        <Button variant="ghost" size="sm" onClick={() => handleDeleteCart(item.id)}>
          <img src={variant === 'popup' ? deleteIconPopup : deleteIconCartPage} alt="Удалить" />
        </Button>
      </div>
    </div>
  );
};
