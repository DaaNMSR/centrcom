import { Router, Request, Response } from 'express';
import { Categories, mainCategories } from '../data/mainCategories';

const mainCategoriesRouter = Router();

mainCategoriesRouter.get('/', (_req: Request, res: Response<Categories[]>): void => {
  res.json(mainCategories);
});

mainCategoriesRouter.get(
  '/:category',
  (req: Request<{ category: string }>, res: Response<Categories | { message: string }>): void => {
    const categoryParam = req.params.category.toLowerCase();

    const category = mainCategories.find(c => c.description.toLowerCase() === categoryParam);

    if (!category) {
      res.status(404).json({ message: 'Category not found' });
      return;
    }

    res.json(category);
  },
);

export default mainCategoriesRouter;
