import laptopImg from './images/laptop.png';
import tvImg from './images/tv.png';
import phoneImg from './images/phone.png';
import pcImg from './images/pc.png';
import psImg from './images/ps.png';
import tabletImg from './images/tablet.png';
import cameraImg from './images/camera.png';
import fridgeImg from './images/fridge.png';
import washmachineImg from './images/washamachine.png';
import bycicleImg from './images/bycicle.png';

export interface Card {
  title: string;
  path: string;
  backGroundImagePath: string;
  backgroundColorBlur: string;
  button?: boolean;
}

export const sellCards: Card[] = [
  {
    title: 'Ноутбуки',
    path: 'laptop',
    button: true,
    backGroundImagePath: laptopImg,
    backgroundColorBlur: '#DA3289',
  },
  {
    title: 'Телевизоры',
    path: 'tv',
    button: true,
    backGroundImagePath: tvImg,
    backgroundColorBlur: '#FAD12E',
  },
  {
    title: 'Телефоны',
    path: 'phone',
    button: true,
    backGroundImagePath: phoneImg,
    backgroundColorBlur: '#2AB8EB',
  },
  {
    title: 'Компьютеры',
    path: 'pc',
    button: true,
    backGroundImagePath: pcImg,
    backgroundColorBlur: '#DA3289',
  },
  {
    title: 'Приставки',
    path: 'playstation',
    button: true,
    backGroundImagePath: psImg,
    backgroundColorBlur: '#FAD12E',
  },
  {
    title: 'Планшеты',
    path: 'tablet',
    button: true,
    backGroundImagePath: tabletImg,
    backgroundColorBlur: '#2AB8EB',
  },
  {
    title: 'Фотоаппараты',
    path: 'camera',
    button: true,
    backGroundImagePath: cameraImg,
    backgroundColorBlur: '#DA3289',
  },
  {
    title: 'Холодильники',
    path: 'refrigerator',
    button: true,
    backGroundImagePath: fridgeImg,
    backgroundColorBlur: '#2AB8EB',
  },
  {
    title: 'Стиральные машинки',
    path: 'washingmachine',
    button: true,
    backGroundImagePath: washmachineImg,
    backgroundColorBlur: '#DA3289',
  },
  {
    title: 'Велосипеды',
    path: 'bicycle',
    button: true,
    backGroundImagePath: bycicleImg,
    backgroundColorBlur: '#FAD12E',
  },
];

type FormCard = { step: string; subTitle?: string; description: string };

export interface FormCardsInterface {
  mainTitle?: string;
  cards: FormCard[];
}

export const formCards: FormCardsInterface = {
  mainTitle: 'Как мы работаем',
  cards: [
    {
      step: '1',
      subTitle: 'Оставьте заявку',
      description: 'Сфотографируйте предмет, заполните форму и отправьте ее нам',
    },
    {
      step: '2',
      subTitle: 'Оценка',
      description: 'Проведем оценку вашей техники и свяжемся с вами',
    },
    {
      step: '3',
      subTitle: 'Продажа техники',
      description: 'Если вы заинтересованы, купим вашу технику по максимальной цену',
    },
  ],
};
