import { Router, Request, Response } from 'express';
import { products, Product } from '../data/product';

const productRouter = Router();

productRouter.get('/', (req: Request, res: Response<Product[]>): void => {
  res.json(products);
});

productRouter.get(
  '/:id',
  (req: Request<{ id: string }>, res: Response<Product | { message: string }>): void => {
    const id = Number(req.params.id);

    const product = products.find(p => p.id === id);

    if (!product) {
      res.status(404).json({ message: 'Product not found' });
      return;
    }

    res.json(product);
  },
);

export default productRouter;
