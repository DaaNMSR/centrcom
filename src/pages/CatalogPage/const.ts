import tvCategories from './images/tv-categories.png';
import accessoriesCategories from './images/accessories-categories.png';
import laptopCategories from './images/laptop-categories.png';
import phoneCategories from './images/phone-categories.png';
import printerCategories from './images/printer-categories.png';
import playstationCategories from './images/playstation-categories.png';
import toolsCategories from './images/tools-categories.png';
import fotoCategories from './images/foto-categories.png';
import homeCategories from './images/home-categories.png';
import furnitureCategories from './images/furniture-categories.png';
import heatingCategories from './images/heating-categories.png';
import beautyCategories from './images/beauty-categories.png';
import hobbyCategories from './images/hobby-categories.png';
import carCategories from './images/car-categories.png';
import otherCategories from './images/other-categories.png';

interface Categories {
  imagePath: string;
  description: string;
}

export const categories: Categories[] = [
  { imagePath: tvCategories, description: 'Телевизоры и аудиотехника' },
  { imagePath: laptopCategories, description: 'Ноутбуки и компьютеры' },
  { imagePath: phoneCategories, description: 'Смартфоны и гаджеты' },
  { imagePath: playstationCategories, description: 'Игровые приставки и игры' },
  { imagePath: accessoriesCategories, description: 'Акссесуары' },
  { imagePath: printerCategories, description: 'Принтеры и МФУ' },
  { imagePath: toolsCategories, description: 'Инструменты' },
  { imagePath: fotoCategories, description: 'Фототехника' },
  { imagePath: homeCategories, description: 'Товары для дома' },
  { imagePath: furnitureCategories, description: 'Мебель' },
  { imagePath: heatingCategories, description: 'Климатическое оборудование' },
  { imagePath: beautyCategories, description: 'Красота и здоровье' },
  { imagePath: hobbyCategories, description: 'Хобби и отдых' },
  { imagePath: carCategories, description: 'Для автомобиля' },
  { imagePath: otherCategories, description: 'Разное' },
];
