import { Router, Request, Response } from 'express';
import { generateFiltersForCategory } from '../data/filtersSideBar';

const filtersSideBarRouter = Router();

filtersSideBarRouter.get('/:category', (req: Request<{ category: string }>, res: Response): void => {
  const categoryName = req.params.category;

  const filters = generateFiltersForCategory(categoryName);

  res.json(filters);
});

export default filtersSideBarRouter;
