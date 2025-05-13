import sellBg from './images/sellBg.svg';
import repairBg from './images/repairBg.svg';
import creditBg from './images/creditBg.svg';

interface card {
  title: string;
  description: string;
  linkPath: string;
  backgroundPath: string;
}

export const cards: card[] = [
  {
    title: 'Купим вашу технику',
    description: 'Сфотографируйте вашу технику, заполните форму и отправьте ее нам',
    linkPath: '/sell',
    backgroundPath: sellBg,
  },
  {
    title: 'Ремонт техники',
    description: 'Ремонтируем ноутбуки, телевизоры и телефоны',
    linkPath: '/repair',
    backgroundPath: repairBg,
  },
  {
    title: 'Кредит и рассрочка',
    description: 'Предоставляем хорошие условия по покупке товара в кредит',
    linkPath: '/credit',
    backgroundPath: creditBg,
  },
];
