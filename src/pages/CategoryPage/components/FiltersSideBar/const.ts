import React from 'react';

export const createCheckboxChangeHandler = (
  setPendingFilters: React.Dispatch<React.SetStateAction<{ [key: string]: string[] }>>,
) => {
  return (filterName: string, value: string) => {
    setPendingFilters(prev => {
      const current = new Set(prev[filterName] || []);

      if (current.has(value)) {
        current.delete(value);
      } else {
        current.add(value);
      }

      return { ...prev, [filterName]: Array.from(current) };
    });
  };
};

export const createApplyHandler = (
  setSelectedFilters: React.Dispatch<React.SetStateAction<{ [key: string]: string[] }>>,
  pendingFilters: { [key: string]: string[] },
) => {
  return () => {
    setSelectedFilters(pendingFilters);
  };
};

export const filterNamesMap: Record<string, string> = {
  availability: 'Наличие в магазине',
  brand: 'Бренд',
  screenSize: 'Размер экрана',
  smartTV: 'Smart TV',
  resolution: 'Разрешение',
  displayType: 'Тип дисплея',
  hdrSupport: 'Поддержка HDR',
  ports: 'Порты',
  audioSystem: 'Аудиосистема',
  os: 'Операционная система',
  color: 'Цвет',
  memory: 'Память',
  ram: 'Оперативная память',
  battery: 'Батарея',
  supports5G: 'Поддержка 5G',
  processor: 'Процессор',
  storageType: 'Тип накопителя',
  storageCapacity: 'Объем накопителя',
  graphics: 'Графика',
  platform: 'Платформа',
  genre: 'Жанр',
  publisher: 'Издатель',
  ageRating: 'Возрастной рейтинг',
  multiplayer: 'Мультиплеер',
  edition: 'Издание',
  format: 'Формат',
  language: 'Язык',
  type: 'Тип',
  compatibility: 'Совместимость',
  connectionType: 'Тип подключения',
  material: 'Материал',
  feature: 'Особенность',
  warranty: 'Гарантия',
  printFormat: 'Формат печати',
  connection: 'Подключение',
  duplex: 'Дуплекс',
  functions: 'Функции',
  cartridgeType: 'Тип картриджа',
  powerSource: 'Источник питания',
  voltage: 'Напряжение',
  purpose: 'Назначение',
  materialSupport: 'Материал основания',
  features: 'Особенности',
  weight: 'Вес',
  cameraType: 'Тип камеры',
  videoSupport: 'Поддержка видео',
  lensMount: 'Крепление объектива',
  sensorSize: 'Размер сенсора',
  storage: 'Накопитель',
  room: 'Комната',
  usage: 'Использование',
  power: 'Питание',
  ecoFriendly: 'Экологичность',
  energyEfficiency: 'Энергоэффективность',
  noiseLevel: 'Уровень шума',
  controlType: 'Тип управления',
  installationType: 'Тип установки',
  category: 'Категория',
  scent: 'Аромат',
  form: 'Форма',
  packaging: 'Упаковка',
  volume: 'Объем',
  ageGroup: 'Возрастная группа',
  difficultyLevel: 'Уровень сложности',
  sportType: 'Вид спорта',
  season: 'Сезон',
  portable: 'Портативность',
  oilType: 'Тип масла',
  tireSeason: 'Сезонность шин',
  tireType: 'Тип шин',
  size: 'Размер',
  rating: 'Рейтинг',
};
