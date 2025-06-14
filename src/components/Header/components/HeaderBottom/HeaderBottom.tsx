import { Link } from 'react-router-dom';
import logo from './images/logo.svg';
import styles from './HeaderBottom.module.scss';
import { Button } from '../../../../UI/Button';
import IconBasket from './images/basket.svg';
import IconBurger from './images/mySvg/BurgerIcon';
import IconClose from './images/mySvg/CloseIcon';
import { useState } from 'react';
import { Input } from '../../../../UI/Input';
import { CatalogPopup } from '../../../CatalogPopup';
import { featureFlags } from '../../../../../featureFlags.ts';

const HeaderBottom = () => {
  const [isToggled, setIsToggled] = useState(false);

  const handleClick = () => {
    setIsToggled(!isToggled);
  };

  return (
    <div className={styles.headerBottom}>
      <Link to="/">
        <img src={logo} alt="логотип" className={styles.logo} />
      </Link>
      <Button variant="yellow" iconRight={isToggled ? <IconClose /> : <IconBurger />} onClick={handleClick}>
        Каталог
      </Button>

      {featureFlags.mainSearchInput && (
        <Input iconLeft={true} placeholder="Поиск..." buttonRight={<Button size="md">Найти</Button>} />
      )}

      {featureFlags.basketButton && (
        <Button variant="gray" iconRight={IconBasket}>
          Корзина
        </Button>
      )}
      {isToggled && <CatalogPopup />}
    </div>
  );
};

export default HeaderBottom;
