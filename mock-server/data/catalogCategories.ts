import { faker } from '@faker-js/faker/locale/ru';

interface SubSubcategory {
  name: string;
  quantity: number;
}

interface Subcategory {
  name: string;
  subSubcategories: SubSubcategory[];
}

export interface CatalogCategory {
  image: string;
  name: string;
  subcategories: Subcategory[];
}

const generateSubSubcategories = (count: number): SubSubcategory[] =>
  Array.from({ length: count }, () => ({
    name: faker.commerce.productName(),
    quantity: faker.number.int({ min: 1, max: 100 }),
  }));

const generateSubcategories = (count: number, subSubCount: number): Subcategory[] =>
  Array.from({ length: count }, () => ({
    name: faker.commerce.productName(),
    subSubcategories: generateSubSubcategories(subSubCount),
  }));

export const catalogCategories: CatalogCategory[] = [
  {
    image: 'http://localhost:3001/public/images/tv.svg',
    name: 'Телевизоры и аудиотехника',
    subcategories: generateSubcategories(5, 4),
  },
  {
    image: 'http://localhost:3001/public/images/pc.svg',
    name: 'Ноутбуки и компьютеры',
    subcategories: generateSubcategories(5, 4),
  },
  {
    image: 'http://localhost:3001/public/images/phone.svg',
    name: 'Смартфоны и гаджеты',
    subcategories: generateSubcategories(5, 4),
  },
  {
    image: 'http://localhost:3001/public/images/ps.svg',
    name: 'Игровые приставки и игры',
    subcategories: generateSubcategories(5, 4),
  },
  {
    image: 'http://localhost:3001/public/images/accessories.svg',
    name: 'Аксессуары',
    subcategories: generateSubcategories(5, 4),
  },
  {
    image: 'http://localhost:3001/public/images/printer.svg',
    name: 'Принтеры и МФУ',
    subcategories: generateSubcategories(5, 4),
  },
  {
    image: 'http://localhost:3001/public/images/tools.svg',
    name: 'Инструменты',
    subcategories: generateSubcategories(5, 4),
  },
  {
    image: 'http://localhost:3001/public/images/camera.svg',
    name: 'Фототехника',
    subcategories: generateSubcategories(5, 4),
  },
  {
    image: 'http://localhost:3001/public/images/home.svg',
    name: 'Товары для дома',
    subcategories: generateSubcategories(5, 4),
  },
  {
    image: 'http://localhost:3001/public/images/climat.svg',
    name: 'Климатическое оборудование',
    subcategories: generateSubcategories(5, 4),
  },
  {
    image: 'http://localhost:3001/public/images/beauty.svg',
    name: 'Красота и здоровье',
    subcategories: generateSubcategories(5, 4),
  },
  {
    image: 'http://localhost:3001/public/images/hobby.svg',
    name: 'Хобби и отдых',
    subcategories: generateSubcategories(5, 4),
  },
  {
    image: 'http://localhost:3001/public/images/car.svg',
    name: 'Для автомобиля',
    subcategories: generateSubcategories(5, 4),
  },
];
