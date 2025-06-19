import tvCategories from './images/tv-categories.png';
import accessoriesCategories from './images/accessories-categories.png';
import laptopCategories from './images/laptop-categories.png';
import phoneCategories from './images/phone-categories.png';
import printerCategories from './images/printer-categories.png';
import playstationCategories from './images/playstation-categories.png';

interface popularCategories {
  imagePath: string;
  description: string;
  shortCategory: string;
}

export const popularCategories: popularCategories[] = [
  { imagePath: tvCategories, description: 'Телевизоры и аудиотехника', shortCategory: 'tv' },
  { imagePath: laptopCategories, description: 'Ноутбуки и компьютеры', shortCategory: 'laptops' },
  { imagePath: phoneCategories, description: 'Смартфоны и гаджеты', shortCategory: 'phones' },
  { imagePath: playstationCategories, description: 'Игровые приставки и игры', shortCategory: 'games' },
  { imagePath: accessoriesCategories, description: 'Акссесуары', shortCategory: 'accessories' },
  { imagePath: printerCategories, description: 'Принтеры и МФУ', shortCategory: 'printers' },
];
