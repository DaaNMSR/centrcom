import React from 'react';
import styles from './QuantityCounter.module.scss';
import { Button } from '../../UI/Button';
import minusIcon from './images/minus.svg';
import plusIcon from './images/plus.svg';

interface QuantityCounterProps {
  itemQuantity: number;
  handleDecrease: () => void;
  handleIncrease: () => void;
}

export const QuantityCounter: React.FC<QuantityCounterProps> = ({
  itemQuantity,
  handleDecrease,
  handleIncrease,
}) => {
  return (
    <div className={styles.cartItemQuantity}>
      <Button variant="gray" className={styles.quantityButton} size="md" onClick={handleDecrease}>
        <img src={minusIcon} alt="-" />
      </Button>
      {itemQuantity} шт
      <Button variant="gray" className={styles.quantityButton} size="md" onClick={handleIncrease}>
        <img src={plusIcon} alt="+" />
      </Button>
    </div>
  );
};
