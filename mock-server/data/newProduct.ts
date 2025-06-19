export interface FullProduct {
  id: number;
  name: string;
  article: string;
  hit: boolean;
  new: boolean;
  price: string;
  description: string;
  image: string[];
  specifications: { title: string; value: string }[];
  availability: {
    pravda: number;
    kosorotova: number;
  };
  creditAvailable: boolean;
  createdAt?: string;
  popularity?: number;
}

export const newProducts: FullProduct[] = [
  {
    id: 1,
    name: 'Телевизор Smart 4K BQ 50SU03B',
    article: '00061517',
    hit: true,
    new: true,
    price: '89 990',
    description:
      'Данная модель могла быть активирована до продажи. Товар является новым и не проходил процедуру привязки к аккаунту Apple ID.Перечисленные выше пункты не влияют на потребительские характеристики, внешний вид товара, функциональность или какие-либо иные свойства продукта.',
    image: [
      'http://localhost:3001/public/images/tv.webp',
      'http://localhost:3001/public/images/tv-2.webp',
      'http://localhost:3001/public/images/tv-3.webp',
      'http://localhost:3001/public/images/tv-4.webp',
      'http://localhost:3001/public/images/tv-5.webp',
    ],
    specifications: [
      { title: 'Бренд', value: 'Blackton' },
      { title: 'Диагонъ экрана', value: '27 дюймов' },
      { title: 'Разрешение экрана', value: '4k' },
      { title: 'SmartTV', value: 'Есть' },
      { title: 'Цифровые тюнеры', value: 'Нет' },
    ],
    availability: {
      pravda: 1,
      kosorotova: 3,
    },
    creditAvailable: true,
  },
  {
    id: 2,
    name: 'Телефон Apple iPhone 15 128GB (черный)',
    article: '00066245',
    hit: true,
    new: false,
    price: '49 990',
    description:
      'Смартфон Apple iPhone 15 128GB (черный) – красивое сочетание передовой оптики, мощного процессора, долгоиграющей батареи и запоминающегося дизайна.',
    image: [
      'http://localhost:3001/public/images/iphone.webp',
      'http://localhost:3001/public/images/iphone-2.webp',
      'http://localhost:3001/public/images/iphone-3.webp',
      'http://localhost:3001/public/images/iphone-4.webp',
      'http://localhost:3001/public/images/iphone-5.webp',
    ],
    specifications: [
      { title: 'Бренд', value: 'Apple' },
      { title: 'Операционная система ', value: 'Apple iOS' },
      { title: 'Разрешение экрана', value: '1179x2556' },
      { title: 'Беспроводная зарядка', value: 'Есть' },
      { title: 'Поддержка карт памяти', value: 'Нет' },
    ],
    availability: {
      pravda: 2,
      kosorotova: 5,
    },
    creditAvailable: true,
  },
  {
    id: 3,
    name: 'Видеокарта Palit GeForce RTX 4070',
    article: '000612345',
    hit: false,
    new: true,
    price: '119 990',
    description:
      'Видеокарта Palit GeForce RTX 4070 Dual [NED4070019K9-1047D] с архитектурой Ada Lovelace обеспечивает скорость и производительность при обработке графических ресурсов. Она помогает раскрыть вычислительный потенциал системы при запуске игр и профессиональных программ. Платформа NVIDIA Reflex обеспечивает минимальные задержки и отзывчивость управления, что позволяет получить преимущество над соперником. Технология трассировки лучей повышает насыщенность отражений и глубину теней.',
    image: [
      'http://localhost:3001/public/images/gpu.webp',
      'http://localhost:3001/public/images/gpu-2.webp',
      'http://localhost:3001/public/images/gpu-3.webp',
      'http://localhost:3001/public/images/gpu-4.webp',
      'http://localhost:3001/public/images/gpu-5.webp',
    ],
    specifications: [
      { title: 'Бренд', value: 'Palit' },
      { title: 'Интерфейс ', value: 'PCI Express x16 4.0' },
      { title: 'Графический процессор ', value: 'GeForce RTX 4070 Super' },
      { title: 'SmartTV', value: 'Есть' },
      { title: 'Максимальная частота графического процессора ', value: '2 550 МГц' },
    ],
    availability: {
      pravda: 5,
      kosorotova: 8,
    },
    creditAvailable: true,
  },
  {
    id: 4,
    name: 'Игровой ноутбук Lenovo LOQ 15IAX9 83GS00R9RK',
    article: '00061222',
    hit: true,
    new: true,
    price: '289 990',
    description:
      'Игровой ноутбук Lenovo LOQ 15IAX9 83GS00R9RK — это мощное решение для геймеров, которые ценят производительность и качество. Оснащённый процессором Intel Core i5 12450HX, он обеспечивает отличную скорость работы и многозадачность благодаря 12 потокам и 8 ядрам',
    image: [
      'http://localhost:3001/public/images/laptop.webp',
      'http://localhost:3001/public/images/laptop-2.webp',
      'http://localhost:3001/public/images/laptop-3.webp',
      'http://localhost:3001/public/images/laptop-4.webp',
      'http://localhost:3001/public/images/laptop-5.webp',
    ],
    specifications: [
      { title: 'Бренд', value: 'Lenovo' },
      { title: 'Процессор', value: 'Intel Core i5' },
      { title: 'Разрешение экрана', value: '1920 x 1080' },
      { title: 'Камера', value: 'Есть' },
      { title: 'Оптический привод (ODD)', value: 'Нет' },
    ],
    availability: {
      pravda: 0,
      kosorotova: 1,
    },
    creditAvailable: false,
  },
];
