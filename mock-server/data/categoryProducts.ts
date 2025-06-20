import { faker } from '@faker-js/faker';
import { FullProduct } from './newProduct';

const categories = [
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

const singularCategoryNames = [
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

const generateProduct = (id: number, category: string): FullProduct => ({
  id,
  name: `${category} ${faker.commerce.productName()}`,
  article: faker.string.alphanumeric(10).toUpperCase(),
  hit: faker.datatype.boolean(),
  popularity: faker.number.int({ min: 0, max: 1000 }),
  new: faker.datatype.boolean(),
  price: faker.commerce.price({ min: 1000, max: 200000, dec: 0 }),
  description: faker.commerce.productDescription(),
  image: Array.from({ length: 5 }, () => `https://picsum.photos/seed/${faker.string.uuid()}/290/304`),
  specifications: [
    { title: faker.commerce.productMaterial(), value: faker.commerce.productAdjective() },
    { title: faker.commerce.productMaterial(), value: faker.commerce.productAdjective() },
    { title: faker.commerce.productMaterial(), value: faker.commerce.productAdjective() },
    { title: faker.commerce.productMaterial(), value: faker.commerce.productAdjective() },
    { title: faker.commerce.productMaterial(), value: faker.commerce.productAdjective() },
  ],
  availability: {
    pravda: faker.number.int({ min: 0, max: 20 }),
    kosorotova: faker.number.int({ min: 0, max: 20 }),
  },
  creditAvailable: faker.datatype.boolean(),
  createdAt: faker.date.recent({ days: 90 }).toISOString(),
});

export const categoryProducts: Record<string, FullProduct[]> = {};

let currentId = faker.number.int({ min: 1000, max: 10000 });
categories.forEach((category, index) => {
  const count = 210;
  const singular = singularCategoryNames[index];
  categoryProducts[category] = [];
  for (let i = 0; i < count; i++) {
    categoryProducts[category].push(generateProduct(currentId++, singular));
  }
});
