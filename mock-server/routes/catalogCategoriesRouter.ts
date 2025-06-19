import { Router, Request, Response } from 'express';
import { popupCategories, CatalogCategory } from '../data/popupCategories';

const catalogCategoriesRouter = Router();

catalogCategoriesRouter.get('/', (_req: Request, res: Response<CatalogCategory[]>): void => {
  res.json(popupCategories);
});

catalogCategoriesRouter.get('/names', (_req, res) => {
  const names = popupCategories.map(category => ({ name: category.name }));
  res.json(names);
});

catalogCategoriesRouter.get('/names-images', (_req, res) => {
  const simplified = popupCategories.map(({ name, image }) => ({ name, image }));
  res.json(simplified);
});

catalogCategoriesRouter.get(
  '/:name',
  (req: Request<{ name: string }>, res: Response<CatalogCategory | { message: string }>): void => {
    const categoryName = req.params.name;

    const category = popupCategories.find(c => c.name === categoryName);

    if (!category) {
      res.status(404).json({ message: 'Категория не найдена' });
      return;
    }

    res.json(category);
  },
);

export default catalogCategoriesRouter;
