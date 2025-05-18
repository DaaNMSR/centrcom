interface Menu {
  text: string;
  to: string;
}

export const menu: Menu[] = [
  {
    text: 'Продать',
    to: '/sell',
  },
  {
    text: 'Кредит',
    to: '/credit',
  },
  {
    text: 'Ремонт',
    to: '/repair',
  },
  {
    text: 'Вакансии',
    to: '/jobs',
  },
  {
    text: 'Контакты',
    to: '/contacts',
  },
];
