import classes from './Category.module.css';

interface CategoryProps {
  category: { imagePath: string; description: string };
}

export const Category: React.FC<CategoryProps> = ({ category }) => {
  return (
    <div key={category.imagePath} className={classes.category}>
      <img
        src={category.imagePath}
        className={classes.categoryImage}
        alt={`Категория: ${category.description}`}
      />
      <p className={classes.categoryDescription}>{category.description}</p>
    </div>
  );
};
