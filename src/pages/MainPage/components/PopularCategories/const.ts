import tvCategories from './images/tv-categories.png';
import accessoriesCategories from './images/accessories-categories.png';
import laptopCategories from './images/laptop-categories.png';
import phoneCategories from './images/phone-categories.png';
import printerCategories from './images/printer-categories.png';
import playstationCategories from './images/playstation-categories.png';

interface popularCategories {
  imagePath: string;
  description: string;
}

export const popularCategories: popularCategories[] = [
  { imagePath: tvCategories, description: 'Телевизоры и аудиотехника' },
  { imagePath: laptopCategories, description: 'Ноутбуки и компьютеры' },
  { imagePath: phoneCategories, description: 'Смартфоны и гаджеты' },
  { imagePath: playstationCategories, description: 'Игровые приставки и игры' },
  { imagePath: accessoriesCategories, description: 'Акссесуары' },
  { imagePath: printerCategories, description: 'Принтеры и МФУ' },
];
