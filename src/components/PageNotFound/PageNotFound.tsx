import { Link } from 'react-router-dom';
import { Button } from '../../UI/Button';
import styles from './PageNotFound.module.css';
import notFound from './not-found.png';

export const PageNotFound = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <img className={styles.image} src={notFound} alt="not found" />
        <h2 className={styles.title}>404, страница не найдена</h2>
        <p className={styles.description}>Посмотрите наши подборки товаров на главной</p>
        <p className={styles.description}>или воспользуйтесь нашим каталогом</p>
        <div className={styles.buttons}>
          <Button>
            <Link to="/">На главную</Link>
          </Button>
          <Button variant="yellow">В каталог</Button>
        </div>
      </div>
    </div>
  );
};
