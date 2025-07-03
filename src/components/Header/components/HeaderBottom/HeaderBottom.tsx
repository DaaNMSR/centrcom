import { Link } from 'react-router-dom';
import logo from './images/logo.svg';
import styles from './HeaderBottom.module.scss';
import { Button } from '../../../../UI/Button';
import IconBasket from './images/basket.svg';
import IconBurger from './images/mySvg/BurgerIcon';
import IconClose from './images/mySvg/CloseIcon';
import { useState, useRef } from 'react';
import { Input } from '../../../../UI/Input';
import { CatalogPopup } from '../../../CatalogPopup';
import { featureFlags } from '../../../../../featureFlags.ts';
import { useAppDispatch, useAppSelector } from '../../../../redux/hooks.ts';
import { toggleCartPopup } from '../../../../redux/reducers/cartSlice.ts';
import { CartPopup } from '../../../CartPopup';

export const HeaderBottom = () => {
  const [isToggled, setIsToggled] = useState(false);
  const dispatch = useAppDispatch();
  const totalPrice = useAppSelector(state => state.cart.totalPrice);
  const cartButtonRef = useRef<HTMLButtonElement>(null);
  const totalCount = useAppSelector(state => state.cart.totalCount);

  const handleToggleCatalogPopup = () => {
    setIsToggled(!isToggled);
  };

  const handeToggleCartPopup = () => {
    dispatch(toggleCartPopup());
  };

  return (
    <div className={styles.headerBottom}>
      <Link to="/">
        <img src={logo} alt="логотип" className={styles.logo} />
      </Link>
      <Button
        variant="yellow"
        iconRight={isToggled ? <IconClose /> : <IconBurger />}
        onClick={handleToggleCatalogPopup}
      >
        Каталог
      </Button>

      {featureFlags.mainSearchInput && (
        <Input iconLeft={true} placeholder="Поиск..." buttonRight={<Button size="md">Найти</Button>} />
      )}

      <Button
        variant="gray"
        iconRight={IconBasket}
        onClick={handeToggleCartPopup}
        ref={cartButtonRef}
        className={styles.basketButton}
      >
        {totalPrice ? `${totalPrice.toLocaleString()} ₽` : 'Корзина'}
        {totalCount ? <div className={styles.totalCount}>{totalCount.toLocaleString()}</div> : null}
      </Button>

      {isToggled && <CatalogPopup />}
      <CartPopup triggerRef={cartButtonRef} />
    </div>
  );
};
