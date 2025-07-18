import type { Vacancy } from '../../../mock-server/data/vacanciesShort';

export const PATH_NAMES: Record<string, string> = {
  '': 'Главная',
  sell: 'Продать',
  credit: 'Кредит',
  repair: 'Ремонт',
  jobs: 'Вакансии',
  contacts: 'Контакты',
  catalog: 'Каталог',
  products: 'Продукт',
  cartempty: 'Корзина',
  laptop: 'Ноутбук',
  tv: 'Телевизор',
  phone: 'Телефон',
  pc: 'Компьютер',
  playstation: 'Приставка',
  tablet: 'Планшет',
  camera: 'Фотоаппарат',
  refrigerator: 'Холодильник',
  washingmachine: 'Стиральная машина',
  bicycle: 'Велосипед',
  monoblock: 'Моноблок',
  cleaningps: 'Чистка игровых приставок и замена термопасты',
  subscription: 'Оформление подписки на PS и XBOX',
  repairps: 'Ремонт консолей',
  softwarerestoration: 'Восстановление заводского ПО на консолях',
  firmwareconsoles: 'Прошивка консолей (PS/PS4/XBOX360)',
  repairgamepads: 'Ремонт геймпадов и замена стиков',
  gamedownolads: 'Закачка игр',
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

export const getVacancyTitleById = (id: number, vacanciesShort: Vacancy[] | undefined) => {
  const vacancy = vacanciesShort?.find(v => v.id === id);
  return vacancy?.title;
};
