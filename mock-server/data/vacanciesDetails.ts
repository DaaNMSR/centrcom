export interface VacanciesDetails {
  id: number;
  title: string;
  mainTitle: string;
  lists: string[];
  subTitle: string;
  subLists: string[];
  details: {
    [label: string]: string;
  };
  location: string;
  description: string[];
}

export const vacanciesDetails: VacanciesDetails[] = [
  {
    id: 1,
    title: 'Помощник компьютерного мастера',
    mainTitle: 'Требования',
    lists: [
      'Знание ПК выше уровня среднего пользователя',
      'Умение собрать/разобрать системный блок, ноутбук, моноблок',
      'Диагностика, настройка, ремонт компьютерной техники',
      'Знание компьютерных комплектующих, ориентированность цен',
    ],
    subTitle: 'От нас',
    subLists: [
      'Стабильный график 5/2',
      'Официальное трудоустройство',
      'Оплачиваемый отпуск',
      'Стабильная ЗП',
    ],
    details: {
      'Сфера деятельности': 'IT, интернет, телеком',
      'График работы': 'Полный день',
      'Частота выплат': '2 раза в месяц',
      'Опыт работы': 'Не имеет значения',
      'Что получают работники': 'Униформа, зона отдыха, скидки в компании',
    },
    location: 'Челябинская область, Магнитогорск, ул. Завенягина, 7А, р-н Орджоникидзевский',
    description: [
      'Зарплата от 35 000 рублей',
      'Мы с радостью примем помощника компьютерного мастера в свою компанию',
      'Запись на собеседование с руководителем по телефону в объявлении с 9 до 18 в будние дни',
      'Лучшая Сеть комиссионных магазинов ЦентрКОМ и Мегабайк в Магнитогорске. Компания состоит из 4х магазинов ЦентрКОМ (продажа ресейл и новой электроники) а так же 1-го мото-вело салона МегаБАЙК',
    ],
  },
  {
    id: 2,
    title: 'Бухгалтер в сеть магазинов',
    mainTitle: 'Требования',
    lists: [
      'Знание ПК выше уровня среднего пользователя',
      'Умение собрать/разобрать системный блок, ноутбук, моноблок',
      'Диагностика, настройка, ремонт компьютерной техники',
      'Знание компьютерных комплектующих, ориентированность цен',
    ],
    subTitle: 'От нас',
    subLists: [
      'Стабильный график 5/2',
      'Официальное трудоустройство',
      'Оплачиваемый отпуск',
      'Стабильная ЗП',
    ],
    details: {
      'Сфера деятельности': 'Бухгалтерия, интернет',
      'График работы': 'Полный день',
      'Частота выплат': '1 раза в месяц',
      'Опыт работы': 'от 2 лет',
      'Что получают работники': 'Рабочее место, зона отдыха, скидки в компании',
    },
    location: 'Челябинская область, Магнитогорск, ул. Завенягина, 7А, р-н Орджоникидзевский',
    description: [
      'Зарплата от 70 000 рублей',
      'Мы с радостью примем помощника компьютерного мастера в свою компанию',
      'Запись на собеседование с руководителем по телефону в объявлении с 9 до 18 в будние дни',
      'Лучшая Сеть комиссионных магазинов ЦентрКОМ и Мегабайк в Магнитогорске. Компания состоит из 4х магазинов ЦентрКОМ (продажа ресейл и новой электроники) а так же 1-го мото-вело салона МегаБАЙК',
    ],
  },
];
