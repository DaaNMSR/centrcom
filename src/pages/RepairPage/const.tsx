import tvImg from './images/tv.png';
import pcImg from './images/pc.png';
import laptopImg from './images/laptop.png';
import monoblockImg from './images/monoblock.png';
import thermalPasteImg from './images/thermalpaste.png';
import xboxImg from './images/xbox.png';
import psImg from './images/ps.png';
import ps2Img from './images/ps2.png';
import xbox2Img from './images/xbox2.png';
import gamepadImg from './images/gamepad.png';
import diskImg from './images/disk.png';
import type { Card, FormCardsInterface } from '../SellPage/const';

export const repairCards: Card[] = [
  {
    title: 'Телевизоры',
    path: 'tv',
    button: false,
    backGroundImagePath: tvImg,
    backgroundColorBlur: '#DA3289',
  },
  {
    title: 'Системные блоки',
    path: 'pc',
    button: false,
    backGroundImagePath: pcImg,
    backgroundColorBlur: '#FAD12E',
  },

  {
    title: 'Ноутбуки',
    path: 'laptop',
    button: false,
    backGroundImagePath: laptopImg,
    backgroundColorBlur: '#2AB8EB',
  },
  {
    title: 'Моноблоки',
    path: 'monoblock',
    button: false,
    backGroundImagePath: monoblockImg,
    backgroundColorBlur: '#DA3289',
  },

  {
    title: 'Чистка игровых приставок и замена термопасты',
    path: 'cleaningps',
    button: false,
    backGroundImagePath: thermalPasteImg,
    backgroundColorBlur: '#FAD12E',
  },
  {
    title: 'Оформление подписки на PS и XBOX',
    path: 'subscription',
    button: false,
    backGroundImagePath: xboxImg,
    backgroundColorBlur: '#2AB8EB',
  },
  {
    title: 'Ремонт консолей',
    path: 'repairps',
    button: false,
    backGroundImagePath: psImg,
    backgroundColorBlur: '#DA3289',
  },
  {
    title: 'Восстановление заводского ПО на консолях',
    path: 'softwarerestoration',
    button: false,
    backGroundImagePath: ps2Img,
    backgroundColorBlur: '#FAD12E',
  },
  {
    title: 'Прошивка консолей (PS/PS4/XBOX360)',
    path: 'firmwareconsoles',
    button: false,
    backGroundImagePath: xbox2Img,
    backgroundColorBlur: '#2AB8EB',
  },
  {
    title: 'Ремонт геймпадов и замена стиков',
    path: 'repairgamepads',
    button: false,
    backGroundImagePath: gamepadImg,
    backgroundColorBlur: '#DA3289',
  },
  {
    title: 'Закачка игр',
    path: 'gamedownolads',
    button: false,
    backGroundImagePath: diskImg,
    backgroundColorBlur: '#FAD12E',
  },
];

export const formCards: FormCardsInterface = {
  cards: [
    {
      step: '1',
      description: 'Сначала проводится диагностика стоимостью 500 ₽',
    },
    {
      step: '2',
      description: 'После диагностики мастер собщает вам проблему и стоимость ремонта',
    },
    {
      step: '3',
      description: 'Если клиент согласен на ремонт, то диагностика - бесплатно',
    },
  ],
};
