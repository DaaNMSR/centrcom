import { faker } from '@faker-js/faker/locale/ru';
import type { FullProduct } from './newProducts';

export const categories = [
  'Телевизоры и аудиотехника',
  'Смартфоны и гаджеты',
  'Ноутбуки и компьютеры',
  'Игровые приставки и игры',
  'Аксессуары',
  'Принтеры и МФУ',
  'Инструменты',
  'Фототехника',
  'Товары для дома',
  'Мебель',
  'Климатическое оборудование',
  'Красота и здоровье',
  'Хобби и отдых',
  'Для автомобиля',
  'Разное',
];

export const singularCategoryNames = [
  'Телевизор',
  'Смартфон',
  'Ноутбук',
  'Игровая приставка',
  'Аксессуар',
  'Принтер',
  'Инструмент',
  'Фотоаппарат',
  'Товар для дома',
  'Предмет мебели',
  'Климатическая техника',
  'Товар для красоты',
  'Хобби-товар',
  'Автотовар',
  'Продукт',
];

export const categoriesPaths = {
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

const getShortCategory = (fullCategory: string): keyof typeof categoriesPaths | undefined => {
  return Object.entries(categoriesPaths).find(([, value]) => value === fullCategory)?.[0] as
    | keyof typeof categoriesPaths
    | undefined;
};

export const generateProduct = (
  id: number,
  categoryRu: string,
  singular: string,
  isNew: boolean,
): FullProduct => ({
  id,
  name: `${singular} ${faker.commerce.productName()}`, // singular для имени
  article: faker.string.alphanumeric(10).toUpperCase(),
  hit: faker.datatype.boolean(),
  popularity: faker.number.int({ min: 0, max: 1000 }),
  new: isNew,
  price: faker.commerce.price({ min: 1000, max: 200000, dec: 0 }),
  description: faker.commerce.productDescription(),
  image: Array.from({ length: 5 }, () => `https://picsum.photos/seed/${faker.string.uuid()}/290/304`),
  specifications: Array.from({ length: 5 }, () => ({
    title: faker.commerce.productMaterial(),
    value: faker.commerce.productAdjective(),
  })),
  availability: {
    pravda: faker.number.int({ min: 0, max: 20 }),
    kosorotova: faker.number.int({ min: 0, max: 20 }),
  },
  creditAvailable: faker.datatype.boolean(),
  createdAt: faker.date.recent({ days: 90 }).toISOString(),
  category: getShortCategory(categoryRu), // короткий ключ категории
});

export const categoryProducts: Record<string, FullProduct[]> = {};

let currentId = faker.number.int({ min: 1000, max: 10000 });

categories.forEach((category, index) => {
  const count = 210;
  const singular = singularCategoryNames[index];
  categoryProducts[category] = [];
  for (let i = 0; i < count; i++) {
    categoryProducts[category].push(
      generateProduct(currentId++, category, singular, faker.datatype.boolean()),
    );
  }
});
