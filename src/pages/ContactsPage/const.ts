export interface Contact {
  adress: string;
  timeWorks: string;
  phoneNumber: string;
  coordinates: [number, number];
}

export const contactsMagnitogorsk: Contact[] = [
  {
    adress: 'Ул. Звенягина, 7а (Цоколь под аптекой)',
    coordinates: [53.377538, 58.977084],
    timeWorks: 'Ежедневно с 10:00 до 20:00',
    phoneNumber: '8 (3519) 51-00-25',
  },
  {
    adress: 'Пр-т Карла Маркса, 222 (вход с ул. Зеленый лог)',
    coordinates: [53.35352, 58.977174],
    timeWorks: 'Ежедневно с 10:00 до 20:00',
    phoneNumber: '8 (3519) 51-00-25',
  },
  {
    adress: 'Ул. имени Газеты Правда, 59 (Подвал, Слева от Красное и белое)',
    coordinates: [53.407002, 58.966745],
    timeWorks: 'Ежедневно с 10:00 до 20:00',
    phoneNumber: '+7 (351) 951-05-55',
  },
];

export const contactsBeloreck: Contact[] = [
  {
    adress: 'Ул. В. Косоротова, 11',
    coordinates: [53.966069, 58.405298],
    timeWorks: 'Пн с 11:00 до 18:00, Вт-Сб с 10:00 до 20:00, Вс – выходной',
    phoneNumber: '+7 (3472) 00-25-85',
  },
];

interface Requisities {
  label: string;
  value: string;
}

export const REQUISITES: Requisities[] = [
  { label: 'Номер счета', value: '40802810638070005362' },
  { label: 'Банк', value: 'ФИЛИАЛ ЕКАТЕРИНБУРГСКИЙ АО «АЛЬФА-БАНК»' },
  { label: 'Валюта', value: 'RUR' },
  { label: 'БИК', value: '046577964' },
  { label: 'Название', value: 'ПИЛИПУШКО НАТАЛЬЯ СЕРГЕЕВНА (ИП)' },
  { label: 'Кор. счет', value: '30101810100000000964' },
  { label: 'ИНН', value: '744610910806' },
  {
    label: 'Юридический адрес компании',
    value: 'Ул. Труда, д. 13, кв./оф. 3, Челябинская область, г. Магнитогорск',
  },
];
