import { Router, Request, Response } from 'express';
import { newProducts, FullProduct } from '../data/newProduct';

const newProductsRouter = Router();

newProductsRouter.get('/', (req: Request, res: Response<FullProduct[]>): void => {
  res.json(newProducts);
});

newProductsRouter.get(
  '/:id',
  (req: Request<{ id: string }>, res: Response<FullProduct | { message: string }>): void => {
    const id = Number(req.params.id);

    const product = newProducts.find(p => p.id === id);

    if (!product) {
      res.status(404).json({ message: 'NewProduct not found' });
      return;
    }

    res.json(product);
  },
);

export default newProductsRouter;
