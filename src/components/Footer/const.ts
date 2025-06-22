interface footerLink {
  text: string;
  to: string;
}

export const footerNavigation: footerLink[] = [
  {
    text: 'Каталог',
    to: '/catalog',
  },
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

export const footerContacts: footerLink[] = [
  {
    text: '8 (3519) 51-00-25',
    to: 'tel:83519510025',
  },
  {
    text: '8 (906) 899-99-89',
    to: 'tel:89068999989',
  },
  {
    text: 'Вконтакте',
    to: '/',
  },
  {
    text: 'Авито',
    to: '/',
  },
];
