type Card = { step: string; subTitle?: string; description: string };

interface FormCards {
  mainTitle?: string;
  cards: Card[];
}

export const formCards: FormCards = {
  mainTitle: 'Как мы работаем',
  cards: [
    {
      step: '1',
      subTitle: 'Оставьте заявку',
      description: 'Сфотографируйте предмет, заполните форму и ее нам',
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
