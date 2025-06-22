import { Router, Request, Response } from 'express';
import { categoryProducts } from '../data/categoryProducts';
import { FullProduct } from '../data/newProducts';

const categoryProductsRouter = Router();

const categoryMap: Record<string, string> = {
  tv: 'Телевизоры и аудиотехника',
  phones: 'Смартфоны и гаджеты',
  laptops: 'Ноутбуки и компьютеры',
  games: 'Игровые приставки и игры',
  accessories: 'Аксессуары',
  printers: 'Принтеры и МФУ',
  tools: 'Инструменты',
  photo: 'Фототехника',
  home: 'Товары для дома',
  furniture: 'Мебель',
  climate: 'Климатическое оборудование',
  beauty: 'Красота и здоровье',
  hobby: 'Хобби и отдых',
  car: 'Для автомобиля',
  other: 'Разное',
};

categoryProductsRouter.get(
  '/:shortCategory',
  (req: Request<{ shortCategory: string }>, res: Response<FullProduct[] | { message: string }>) => {
    const { shortCategory } = req.params;
    const category = categoryMap[shortCategory.toLowerCase()];
    if (!category) {
      res.status(404).json({ message: 'Категория не найдена' });
      return;
    }

    const page = parseInt(req.query.page as string) || 1;
    const limit = parseInt(req.query.limit as string) || 15;
    const sortBy = req.query.sortBy as 'asc' | 'desc' | 'popular' | 'new';

    const products = categoryProducts[category];
    if (!products) {
      res.status(404).json({ message: 'Товары в категории не найдены' });
      return;
    }

    const sortedProducts = [...products];

    if (sortBy) {
      switch (sortBy) {
        case 'asc':
          sortedProducts.sort((a, b) => Number(a.price) - Number(b.price));
          break;
        case 'desc':
          sortedProducts.sort((a, b) => Number(b.price) - Number(a.price));
          break;
        case 'popular':
          sortedProducts.sort((a, b) => {
            const popularityA = a.popularity ?? 0;
            const popularityB = b.popularity ?? 0;
            return popularityB - popularityA;
          });
          break;
        case 'new':
          sortedProducts.sort((a, b) => {
            const dateA = a.createdAt ? new Date(a.createdAt).getTime() : 0;
            const dateB = b.createdAt ? new Date(b.createdAt).getTime() : 0;
            return dateB - dateA;
          });
          break;
      }
    }

    const start = (page - 1) * limit;
    const paginatedProducts = sortedProducts.slice(start, start + limit);

    res.setHeader('X-Total-Count', sortedProducts.length.toString());
    res.json(paginatedProducts);
  },
);

categoryProductsRouter.get(
  '/:shortCategory/id/:id',
  (req: Request<{ shortCategory: string; id: string }>, res: Response<FullProduct | { message: string }>) => {
    const { shortCategory, id } = req.params;
    const category = categoryMap[shortCategory.toLowerCase()];
    if (!category) {
      res.status(404).json({ message: 'Категория не найдена' });
      return;
    }

    const products = categoryProducts[category];
    if (!products) {
      res.status(404).json({ message: 'Товары в категории не найдены' });
      return;
    }

    const product = products.find(p => String(p.id) === id);
    if (!product) {
      res.status(404).json({ message: 'Товар не найден' });
      return;
    }

    res.json(product);
  },
);

export default categoryProductsRouter;
