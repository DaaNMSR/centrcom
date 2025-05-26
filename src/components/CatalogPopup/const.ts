import tvImg from './images/tv.svg';
import pcImg from './images/pc.svg';
import phoneImg from './images/phone.svg';
import psImg from './images/ps.svg';
import accessoriesImg from './images/accessories.svg';
import printerImg from './images/printer.svg';
import toolsImg from './images/tools.svg';
import cameraImg from './images/camera.svg';
import homeImg from './images/home.svg';
import climatImg from './images/climat.svg';
import beautyImg from './images/beauty.svg';
import hobbyImg from './images/hobby.svg';
import carImg from './images/car.svg';

interface CategoriesPopupProps {
  imgPath: string;
  title: string;
  subTitles: { subTitle: string; subDescription: string[] }[];
}

export const categoriesPopup: CategoriesPopupProps[] = [
  {
    imgPath: tvImg,
    title: 'Телевизоры и аудиотехника',
    subTitles: [
      {
        subTitle: 'Телевизоры',
        subDescription: [
          'Sub-sub-category (10)',
          'Sub-sub-category (10)',
          'Sub-sub-category (10)',
          'Sub-sub-category (10)',
        ],
      },
      {
        subTitle: 'Музыкальный центр',
        subDescription: [
          'Sub-sub-category (10)',
          'Sub-sub-category (10)',
          'Sub-sub-category (10)',
          'Sub-sub-category (10)',
        ],
      },
      {
        subTitle: 'Домашний кинотеатр',
        subDescription: [
          'Sub-sub-category (10)',
          'Sub-sub-category (10)',
          'Sub-sub-category (10)',
          'Sub-sub-category (10)',
        ],
      },
      {
        subTitle: 'Комплекты акустики',
        subDescription: [
          'Sub-sub-category (10)',
          'Sub-sub-category (10)',
          'Sub-sub-category (10)',
          'Sub-sub-category (10)',
        ],
      },
      {
        subTitle: 'Акссесуары для аудио- и видео-техники',
        subDescription: [
          'Sub-sub-category (10)',
          'Sub-sub-category (10)',
          'Sub-sub-category (10)',
          'Sub-sub-category (10)',
        ],
      },
    ],
  },
  {
    imgPath: pcImg,
    title: 'Ноутбуки и компьютеры',
    subTitles: [
      {
        subTitle: 'ПК',
        subDescription: [
          'Sub-sub-category (10)',
          'Sub-sub-category (10)',
          'Sub-sub-category (10)',
          'Sub-sub-category (10)',
        ],
      },
      {
        subTitle: 'Видеокарты',
        subDescription: [
          'Sub-sub-category (10)',
          'Sub-sub-category (10)',
          'Sub-sub-category (10)',
          'Sub-sub-category (10)',
        ],
      },
      {
        subTitle: 'Материнские платы',
        subDescription: [
          'Sub-sub-category (10)',
          'Sub-sub-category (10)',
          'Sub-sub-category (10)',
          'Sub-sub-category (10)',
        ],
      },
      {
        subTitle: 'Оперативная память',
        subDescription: [
          'Sub-sub-category (10)',
          'Sub-sub-category (10)',
          'Sub-sub-category (10)',
          'Sub-sub-category (10)',
        ],
      },
      {
        subTitle: 'Процессоры',
        subDescription: [
          'Sub-sub-category (10)',
          'Sub-sub-category (10)',
          'Sub-sub-category (10)',
          'Sub-sub-category (10)',
        ],
      },
    ],
  },
  {
    imgPath: phoneImg,
    title: 'Смартфоны и гаджеты',
    subTitles: [
      {
        subTitle: 'Смартфоны',
        subDescription: [
          'Sub-sub-category (10)',
          'Sub-sub-category (10)',
          'Sub-sub-category (10)',
          'Sub-sub-category (10)',
        ],
      },
      {
        subTitle: 'Наушники',
        subDescription: [
          'Sub-sub-category (10)',
          'Sub-sub-category (10)',
          'Sub-sub-category (10)',
          'Sub-sub-category (10)',
        ],
      },
      {
        subTitle: 'Зарядные устройства',
        subDescription: [
          'Sub-sub-category (10)',
          'Sub-sub-category (10)',
          'Sub-sub-category (10)',
          'Sub-sub-category (10)',
        ],
      },
      {
        subTitle: 'Чехлы',
        subDescription: [
          'Sub-sub-category (10)',
          'Sub-sub-category (10)',
          'Sub-sub-category (10)',
          'Sub-sub-category (10)',
        ],
      },
      {
        subTitle: 'Защитные стекла',
        subDescription: [
          'Sub-sub-category (10)',
          'Sub-sub-category (10)',
          'Sub-sub-category (10)',
          'Sub-sub-category (10)',
        ],
      },
    ],
  },
  {
    imgPath: psImg,
    title: 'Игровые приставки и игры',
    subTitles: [
      {
        subTitle: 'Приставки',
        subDescription: [
          'Sub-sub-category (10)',
          'Sub-sub-category (10)',
          'Sub-sub-category (10)',
          'Sub-sub-category (10)',
        ],
      },
      {
        subTitle: 'Музыкальный центр',
        subDescription: [
          'Sub-sub-category (10)',
          'Sub-sub-category (10)',
          'Sub-sub-category (10)',
          'Sub-sub-category (10)',
        ],
      },
      {
        subTitle: 'Домашний кинотеатр',
        subDescription: [
          'Sub-sub-category (10)',
          'Sub-sub-category (10)',
          'Sub-sub-category (10)',
          'Sub-sub-category (10)',
        ],
      },
      {
        subTitle: 'Комплекты акустики',
        subDescription: [
          'Sub-sub-category (10)',
          'Sub-sub-category (10)',
          'Sub-sub-category (10)',
          'Sub-sub-category (10)',
        ],
      },
      {
        subTitle: 'Акссесуары для аудио- и видео-техники',
        subDescription: [
          'Sub-sub-category (10)',
          'Sub-sub-category (10)',
          'Sub-sub-category (10)',
          'Sub-sub-category (10)',
        ],
      },
    ],
  },
  {
    imgPath: accessoriesImg,
    title: 'Акссесуары',
    subTitles: [
      {
        subTitle: 'Акссесуары',
        subDescription: [
          'Sub-sub-category (10)',
          'Sub-sub-category (10)',
          'Sub-sub-category (10)',
          'Sub-sub-category (10)',
        ],
      },
      {
        subTitle: 'Музыкальный центр',
        subDescription: [
          'Sub-sub-category (10)',
          'Sub-sub-category (10)',
          'Sub-sub-category (10)',
          'Sub-sub-category (10)',
        ],
      },
      {
        subTitle: 'Домашний кинотеатр',
        subDescription: [
          'Sub-sub-category (10)',
          'Sub-sub-category (10)',
          'Sub-sub-category (10)',
          'Sub-sub-category (10)',
        ],
      },
      {
        subTitle: 'Комплекты акустики',
        subDescription: [
          'Sub-sub-category (10)',
          'Sub-sub-category (10)',
          'Sub-sub-category (10)',
          'Sub-sub-category (10)',
        ],
      },
      {
        subTitle: 'Акссесуары для аудио- и видео-техники',
        subDescription: [
          'Sub-sub-category (10)',
          'Sub-sub-category (10)',
          'Sub-sub-category (10)',
          'Sub-sub-category (10)',
        ],
      },
    ],
  },
  {
    imgPath: printerImg,
    title: 'Принтеры и МФУ',
    subTitles: [
      {
        subTitle: 'Акссесуары',
        subDescription: [
          'Sub-sub-category (10)',
          'Sub-sub-category (10)',
          'Sub-sub-category (10)',
          'Sub-sub-category (10)',
        ],
      },
      {
        subTitle: 'Музыкальный центр',
        subDescription: [
          'Sub-sub-category (10)',
          'Sub-sub-category (10)',
          'Sub-sub-category (10)',
          'Sub-sub-category (10)',
        ],
      },
      {
        subTitle: 'Домашний кинотеатр',
        subDescription: [
          'Sub-sub-category (10)',
          'Sub-sub-category (10)',
          'Sub-sub-category (10)',
          'Sub-sub-category (10)',
        ],
      },
      {
        subTitle: 'Комплекты акустики',
        subDescription: [
          'Sub-sub-category (10)',
          'Sub-sub-category (10)',
          'Sub-sub-category (10)',
          'Sub-sub-category (10)',
        ],
      },
      {
        subTitle: 'Акссесуары для аудио- и видео-техники',
        subDescription: [
          'Sub-sub-category (10)',
          'Sub-sub-category (10)',
          'Sub-sub-category (10)',
          'Sub-sub-category (10)',
        ],
      },
    ],
  },
  {
    imgPath: toolsImg,
    title: 'Инструменты',
    subTitles: [
      {
        subTitle: 'Инструменты',
        subDescription: [
          'Sub-sub-category (10)',
          'Sub-sub-category (10)',
          'Sub-sub-category (10)',
          'Sub-sub-category (10)',
        ],
      },
      {
        subTitle: 'Музыкальный центр',
        subDescription: [
          'Sub-sub-category (10)',
          'Sub-sub-category (10)',
          'Sub-sub-category (10)',
          'Sub-sub-category (10)',
        ],
      },
      {
        subTitle: 'Домашний кинотеатр',
        subDescription: [
          'Sub-sub-category (10)',
          'Sub-sub-category (10)',
          'Sub-sub-category (10)',
          'Sub-sub-category (10)',
        ],
      },
      {
        subTitle: 'Комплекты акустики',
        subDescription: [
          'Sub-sub-category (10)',
          'Sub-sub-category (10)',
          'Sub-sub-category (10)',
          'Sub-sub-category (10)',
        ],
      },
      {
        subTitle: 'Акссесуары для аудио- и видео-техники',
        subDescription: [
          'Sub-sub-category (10)',
          'Sub-sub-category (10)',
          'Sub-sub-category (10)',
          'Sub-sub-category (10)',
        ],
      },
    ],
  },
  {
    imgPath: cameraImg,
    title: 'Фототехника',
    subTitles: [
      {
        subTitle: 'Фототехника',
        subDescription: [
          'Sub-sub-category (10)',
          'Sub-sub-category (10)',
          'Sub-sub-category (10)',
          'Sub-sub-category (10)',
        ],
      },
      {
        subTitle: 'Музыкальный центр',
        subDescription: [
          'Sub-sub-category (10)',
          'Sub-sub-category (10)',
          'Sub-sub-category (10)',
          'Sub-sub-category (10)',
        ],
      },
      {
        subTitle: 'Домашний кинотеатр',
        subDescription: [
          'Sub-sub-category (10)',
          'Sub-sub-category (10)',
          'Sub-sub-category (10)',
          'Sub-sub-category (10)',
        ],
      },
      {
        subTitle: 'Комплекты акустики',
        subDescription: [
          'Sub-sub-category (10)',
          'Sub-sub-category (10)',
          'Sub-sub-category (10)',
          'Sub-sub-category (10)',
        ],
      },
      {
        subTitle: 'Акссесуары для аудио- и видео-техники',
        subDescription: [
          'Sub-sub-category (10)',
          'Sub-sub-category (10)',
          'Sub-sub-category (10)',
          'Sub-sub-category (10)',
        ],
      },
    ],
  },
  {
    imgPath: homeImg,
    title: 'Товары для дома',
    subTitles: [
      {
        subTitle: 'Товары для дома',
        subDescription: [
          'Sub-sub-category (10)',
          'Sub-sub-category (10)',
          'Sub-sub-category (10)',
          'Sub-sub-category (10)',
        ],
      },
      {
        subTitle: 'Музыкальный центр',
        subDescription: [
          'Sub-sub-category (10)',
          'Sub-sub-category (10)',
          'Sub-sub-category (10)',
          'Sub-sub-category (10)',
        ],
      },
      {
        subTitle: 'Домашний кинотеатр',
        subDescription: [
          'Sub-sub-category (10)',
          'Sub-sub-category (10)',
          'Sub-sub-category (10)',
          'Sub-sub-category (10)',
        ],
      },
      {
        subTitle: 'Комплекты акустики',
        subDescription: [
          'Sub-sub-category (10)',
          'Sub-sub-category (10)',
          'Sub-sub-category (10)',
          'Sub-sub-category (10)',
        ],
      },
      {
        subTitle: 'Акссесуары для аудио- и видео-техники',
        subDescription: [
          'Sub-sub-category (10)',
          'Sub-sub-category (10)',
          'Sub-sub-category (10)',
          'Sub-sub-category (10)',
        ],
      },
    ],
  },
  {
    imgPath: climatImg,
    title: 'Климатическое оборудование',
    subTitles: [
      {
        subTitle: 'Климатическое оборудование',
        subDescription: [
          'Sub-sub-category (10)',
          'Sub-sub-category (10)',
          'Sub-sub-category (10)',
          'Sub-sub-category (10)',
        ],
      },
      {
        subTitle: 'Музыкальный центр',
        subDescription: [
          'Sub-sub-category (10)',
          'Sub-sub-category (10)',
          'Sub-sub-category (10)',
          'Sub-sub-category (10)',
        ],
      },
      {
        subTitle: 'Домашний кинотеатр',
        subDescription: [
          'Sub-sub-category (10)',
          'Sub-sub-category (10)',
          'Sub-sub-category (10)',
          'Sub-sub-category (10)',
        ],
      },
      {
        subTitle: 'Комплекты акустики',
        subDescription: [
          'Sub-sub-category (10)',
          'Sub-sub-category (10)',
          'Sub-sub-category (10)',
          'Sub-sub-category (10)',
        ],
      },
      {
        subTitle: 'Акссесуары для аудио- и видео-техники',
        subDescription: [
          'Sub-sub-category (10)',
          'Sub-sub-category (10)',
          'Sub-sub-category (10)',
          'Sub-sub-category (10)',
        ],
      },
    ],
  },
  {
    imgPath: beautyImg,
    title: 'Красота и здоровье',
    subTitles: [
      {
        subTitle: 'Красота и здоровье',
        subDescription: [
          'Sub-sub-category (10)',
          'Sub-sub-category (10)',
          'Sub-sub-category (10)',
          'Sub-sub-category (10)',
        ],
      },
      {
        subTitle: 'Музыкальный центр',
        subDescription: [
          'Sub-sub-category (10)',
          'Sub-sub-category (10)',
          'Sub-sub-category (10)',
          'Sub-sub-category (10)',
        ],
      },
      {
        subTitle: 'Домашний кинотеатр',
        subDescription: [
          'Sub-sub-category (10)',
          'Sub-sub-category (10)',
          'Sub-sub-category (10)',
          'Sub-sub-category (10)',
        ],
      },
      {
        subTitle: 'Комплекты акустики',
        subDescription: [
          'Sub-sub-category (10)',
          'Sub-sub-category (10)',
          'Sub-sub-category (10)',
          'Sub-sub-category (10)',
        ],
      },
      {
        subTitle: 'Акссесуары для аудио- и видео-техники',
        subDescription: [
          'Sub-sub-category (10)',
          'Sub-sub-category (10)',
          'Sub-sub-category (10)',
          'Sub-sub-category (10)',
        ],
      },
    ],
  },
  {
    imgPath: hobbyImg,
    title: 'Хобби и отдых',
    subTitles: [
      {
        subTitle: 'Хобби и отдых',
        subDescription: [
          'Sub-sub-category (10)',
          'Sub-sub-category (10)',
          'Sub-sub-category (10)',
          'Sub-sub-category (10)',
        ],
      },
      {
        subTitle: 'Музыкальный центр',
        subDescription: [
          'Sub-sub-category (10)',
          'Sub-sub-category (10)',
          'Sub-sub-category (10)',
          'Sub-sub-category (10)',
        ],
      },
      {
        subTitle: 'Домашний кинотеатр',
        subDescription: [
          'Sub-sub-category (10)',
          'Sub-sub-category (10)',
          'Sub-sub-category (10)',
          'Sub-sub-category (10)',
        ],
      },
      {
        subTitle: 'Комплекты акустики',
        subDescription: [
          'Sub-sub-category (10)',
          'Sub-sub-category (10)',
          'Sub-sub-category (10)',
          'Sub-sub-category (10)',
        ],
      },
      {
        subTitle: 'Акссесуары для аудио- и видео-техники',
        subDescription: [
          'Sub-sub-category (10)',
          'Sub-sub-category (10)',
          'Sub-sub-category (10)',
          'Sub-sub-category (10)',
        ],
      },
    ],
  },
  {
    imgPath: carImg,
    title: 'Для автомобиля',
    subTitles: [
      {
        subTitle: 'Для автомобиля',
        subDescription: [
          'Sub-sub-category (10)',
          'Sub-sub-category (10)',
          'Sub-sub-category (10)',
          'Sub-sub-category (10)',
        ],
      },
      {
        subTitle: 'Музыкальный центр',
        subDescription: [
          'Sub-sub-category (10)',
          'Sub-sub-category (10)',
          'Sub-sub-category (10)',
          'Sub-sub-category (10)',
        ],
      },
      {
        subTitle: 'Домашний кинотеатр',
        subDescription: [
          'Sub-sub-category (10)',
          'Sub-sub-category (10)',
          'Sub-sub-category (10)',
          'Sub-sub-category (10)',
        ],
      },
      {
        subTitle: 'Комплекты акустики',
        subDescription: [
          'Sub-sub-category (10)',
          'Sub-sub-category (10)',
          'Sub-sub-category (10)',
          'Sub-sub-category (10)',
        ],
      },
      {
        subTitle: 'Акссесуары для аудио- и видео-техники',
        subDescription: [
          'Sub-sub-category (10)',
          'Sub-sub-category (10)',
          'Sub-sub-category (10)',
          'Sub-sub-category (10)',
        ],
      },
    ],
  },
];
