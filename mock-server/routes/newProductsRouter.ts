import { Router, Request, Response } from 'express';
import { newProducts, FullProduct } from '../data/newProducts';

const newProductsRouter = Router();

newProductsRouter.get('/', (req: Request, res: Response<FullProduct[]>): void => {
  const allProducts = Object.values(newProducts).flat();
  res.json(allProducts);
});

newProductsRouter.get(
  '/:id',
  (req: Request<{ id: string }>, res: Response<FullProduct | { message: string }>): void => {
    const id = Number(req.params.id);

    const allProducts = Object.values(newProducts).flat();

    const product = allProducts.find(p => p.id === id);

    if (!product) {
      res.status(404).json({ message: 'NewProduct not found' });
      return;
    }

    res.json(product);
  },
);

export default newProductsRouter;
