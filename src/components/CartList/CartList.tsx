import styles from './CartList.module.scss';
import { CartItem } from './components/CartItem';
import { useAppSelector } from '../../redux/hooks.ts';
import type { CartVariant } from './components/CartItem/CartItem.tsx';
import React from 'react';

interface CartListProps {
  variant: CartVariant;
}

export const CartList: React.FC<CartListProps> = ({ variant }) => {
  const carts = useAppSelector(state => state.cart.items);
  const variantClass = styles[variant];

  return (
    <div className={`${styles.cartList} ${variantClass}`}>
      {carts.map(item => (
        <CartItem item={item} variant={variant} key={item.id} />
      ))}
    </div>
  );
};
