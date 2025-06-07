import { Router, Request, Response } from 'express';
import { catalogCategories, CatalogCategory } from '../data/catalogCategories';

const catalogCategoriesRouter = Router();

catalogCategoriesRouter.get('/', (_req: Request, res: Response<CatalogCategory[]>): void => {
  res.json(catalogCategories);
});

catalogCategoriesRouter.get('/names', (_req, res) => {
  const names = catalogCategories.map(category => ({ name: category.name }));
  res.json(names);
});

catalogCategoriesRouter.get('/names-images', (_req, res) => {
  const simplified = catalogCategories.map(({ name, image }) => ({ name, image }));
  res.json(simplified);
});

catalogCategoriesRouter.get(
  '/:name',
  (req: Request<{ name: string }>, res: Response<CatalogCategory | { message: string }>): void => {
    const categoryName = req.params.name;

    const category = catalogCategories.find(c => c.name === categoryName);

    if (!category) {
      res.status(404).json({ message: 'Категория не найдена' });
      return;
    }

    res.json(category);
  },
);

export default catalogCategoriesRouter;
