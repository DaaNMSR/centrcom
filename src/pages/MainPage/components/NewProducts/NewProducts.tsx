import { Link } from 'react-router-dom';
import { newProducts } from './const';
import arrowIcon from './images/arrowUp-right.svg';
import basketIcon from './images/basket-icon.svg';
import styles from './NewProducts.module.css';

const NewProducts = () => {
  return (
    <section className={styles.newProductsSection}>
      <div className={styles.mainTitle}>
        <h3 className={styles.mainTitleText}>Новинки</h3>
        <Link to="/" className={styles.mainTitleLinkWrapper}>
          <span className={styles.mainTitleLink}>Смотреть все ({newProducts.length})</span>
          <img src={arrowIcon} alt="Еще" className={styles.mainTitleImg} />
        </Link>
      </div>
      <div className={styles.newProducts}>
        {newProducts.map(product => (
          <div key={product.title} className={styles.productCard}>
            <img src={product.imagePath} alt={product.title} className={styles.newProductImage} />
            <div className={styles.newProductContent}>
              <h4 className={styles.newProductTitle}>{product.title}</h4>
              <p className={styles.newProductPrice}>{product.price}</p>
              <button className={styles.basketButton}>
                <img className={styles.basketButtonImage} src={basketIcon} alt="Корзина" />
                <span className={styles.basketButtonText}>В корзину</span>
              </button>
              <button className={styles.creditButton}>Купить в кредит</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default NewProducts;
