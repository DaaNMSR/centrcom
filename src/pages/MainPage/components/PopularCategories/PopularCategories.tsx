import { popularCategories } from './const';
import classes from './PopularCategories.module.css';

const PopularCategories = () => {
  return (
    <section>
      <h3 className={classes.mainTitle}>Популярные категории</h3>
      <div className={classes.popularCategories}>
        {popularCategories.map(category => (
          <div key={category.imagePath} className={classes.category}>
            <img
              src={category.imagePath}
              className={classes.categoryImage}
              alt={`Категория: ${category.description}`}
            />
            <p className={classes.categoryDescription}>{category.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PopularCategories;
