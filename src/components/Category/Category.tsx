import classes from './Category.module.scss';
import React from 'react';
import { Link } from 'react-router-dom';

interface CategoryProps {
  category: { imagePath: string; description: string; shortCategory: string };
}

export const Category: React.FC<CategoryProps> = ({ category }) => {
  return (
    <Link to={`/category/${category.shortCategory}`}>
      <div key={category.imagePath} className={classes.category}>
        <img
          src={category.imagePath}
          className={classes.categoryImage}
          alt={`Категория: ${category.description}`}
        />
        <p className={classes.categoryDescription}>{category.description}</p>
      </div>
    </Link>
  );
};
