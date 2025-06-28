import React from 'react';
import styles from './CartItem.module.scss';
import { Button } from '../../../../UI/Button';
import deleteIconPopup from './images/delete.svg';
import deleteIconCartPage from './images/deleteCartPage.svg';
import plusIcon from './images/plus.svg';
import minusIcon from './images/minus.svg';
import { decreaseQuantity, increaseQuantity, removeFromCart } from '../../../../redux/reducers/cartSlice.ts';
import { useAppDispatch } from '../../../../redux/hooks.ts';
import type { CartItem as Cart } from '../../../../redux/reducers/cartSlice.ts';

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
      <div className={styles.cartItemTitleBlock}>
        <img src={item.image[0]} alt={item.name} className={`${styles.cartItemImage} ${variantClass}`} />

        {variant === 'popup' ? (
          <p className={styles.cartItemTitle}>{item.name}</p>
        ) : (
          <div className={styles.cartItemTitleWrapper}>
            <p className={styles.cartItemTitle}>{item.name}</p>
            <p className={styles.cartItemArticle}>{item.article}</p>
          </div>
        )}
      </div>
      {variant === 'cartPage' && (
        <div className={styles.cartItemQuantity}>
          <Button variant="gray" className={styles.quantityButton} size="md" onClick={handleDecrease}>
            <img src={minusIcon} alt="-" />
          </Button>
          {item.quantity} шт
          <Button variant="gray" className={styles.quantityButton} size="md" onClick={handleIncrease}>
            <img src={plusIcon} alt="+" />
          </Button>
        </div>
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
