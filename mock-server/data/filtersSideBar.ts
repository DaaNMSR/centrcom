import { faker } from '@faker-js/faker';

const stores = [
  { value: 'Все', label: 'Все' },
  {
    value: 'Магнитогорск, Ул. Звенягина, 7а (Цоколь под аптекой)',
    label: 'Магнитогорск, Ул. Звенягина, 7а (Цоколь под аптекой)',
  },
  {
    value: 'Магнитогорск, Пр-т Карла Маркса, 222 (вход с ул. Зеленый лог)',
    label: 'Магнитогорск, Пр-т Карла Маркса, 222 (вход с ул. Зеленый лог)',
  },
  {
    value: 'Магнитогорск, Ул. имени Газеты Правда, 59 (Подвал, Слева от Красное и белое)',
    label: 'Магнитогорск, Ул. имени Газеты Правда, 59 (Подвал, Слева от Красное и белое)',
  },
  {
    value: 'Белорецк, Ул. В. Косоротова, 11',
    label: 'Белорецк, Ул. В. Косоротова, 11',
  },
];

const generateFilterValues = (values: string[]) => {
  return values.map(value => ({
    name: value,
    count: faker.number.int({ min: 1, max: 100 }),
  }));
};

export const generateFiltersForCategory = (category: string) => {
  let minPrice = Number(faker.commerce.price({ min: 1000, max: 100000, dec: 0 }));
  let maxPrice = Number(faker.commerce.price({ min: 1000, max: 200000, dec: 0 }));
  if (minPrice > maxPrice) [minPrice, maxPrice] = [maxPrice, minPrice];

  const commonFilters = {
    availability: stores,
  };

  let specificFilters = {};

  switch (category) {
    case 'tv':
      specificFilters = {
        brand: generateFilterValues([
          'Samsung',
          'LG',
          'Sony',
          'Panasonic',
          'Philips',
          'Sharp',
          'TCL',
          'Hisense',
        ]),
        screenSize: generateFilterValues(['24', '32', '40', '43', '50', '55', '65', '75']),
        smartTV: generateFilterValues(['Да', 'Нет']),
        resolution: generateFilterValues(['HD', 'Full HD', '4K UHD', '8K UHD']),
        displayType: generateFilterValues(['LED', 'OLED', 'QLED', 'Mini LED']),
        hdrSupport: generateFilterValues(['HDR10', 'HDR10+', 'Dolby Vision', 'HLG', 'Нет']),
        ports: generateFilterValues(['HDMI x1', 'HDMI x2', 'HDMI x3', 'HDMI x4', 'USB x1', 'USB x2']),
        audioSystem: generateFilterValues(['Dolby Atmos', 'DTS:X', 'Стерео', 'Без встроенной аудиосистемы']),
      };
      break;

    case 'phones':
      specificFilters = {
        brand: generateFilterValues([
          'Apple',
          'Samsung',
          'Xiaomi',
          'Huawei',
          'Realme',
          'OnePlus',
          'Google',
          'Honor',
        ]),
        os: generateFilterValues(['iOS', 'Android', 'HarmonyOS']),
        color: generateFilterValues([
          'Черный',
          'Белый',
          'Синий',
          'Красный',
          'Зеленый',
          'Желтый',
          'Фиолетовый',
          'Серебристый',
        ]),
        memory: generateFilterValues(['32GB', '64GB', '128GB', '256GB', '512GB', '1TB']),
        ram: generateFilterValues(['2GB', '4GB', '6GB', '8GB', '12GB', '16GB']),
        screenSize: generateFilterValues(['5.0"', '5.5"', '6.1"', '6.5"', '6.7"', '7.0"+']),
        battery: generateFilterValues(['до 3000 мАч', '3000–4000 мАч', '4000–5000 мАч', 'более 5000 мАч']),
        supports5G: generateFilterValues(['Да', 'Нет']),
      };
      break;

    case 'laptops':
      specificFilters = {
        brand: generateFilterValues(['Dell', 'HP', 'Apple', 'Lenovo', 'Asus', 'Acer', 'MSI', 'Huawei']),
        processor: generateFilterValues([
          'Intel Core i3',
          'Intel Core i5',
          'Intel Core i7',
          'Intel Core i9',
          'AMD Ryzen 3',
          'AMD Ryzen 5',
          'AMD Ryzen 7',
          'AMD Ryzen 9',
        ]),
        ram: generateFilterValues(['4GB', '8GB', '16GB', '32GB', '64GB']),
        storageType: generateFilterValues(['HDD', 'SSD', 'NVMe SSD', 'eMMC']),
        storageCapacity: generateFilterValues(['128GB', '256GB', '512GB', '1TB', '2TB']),
        screenSize: generateFilterValues(['13.3"', '14"', '15.6"', '16"', '17.3"']),
        graphics: generateFilterValues([
          'Intel UHD Graphics',
          'Intel Iris Xe',
          'NVIDIA GeForce GTX',
          'NVIDIA GeForce RTX',
          'AMD Radeon Vega',
        ]),
        os: generateFilterValues(['Windows 10', 'Windows 11', 'macOS', 'Linux', 'Без ОС']),
      };
      break;

    case 'games':
      specificFilters = {
        platform: generateFilterValues([
          'PlayStation 4',
          'PlayStation 5',
          'Xbox One',
          'Xbox Series X',
          'Nintendo Switch',
          'PC',
        ]),
        genre: generateFilterValues([
          'Экшн',
          'Приключения',
          'Спорт',
          'Стратегии',
          'Гонки',
          'Шутеры',
          'Ролевые игры (RPG)',
          'Симуляторы',
        ]),
        publisher: generateFilterValues([
          'Sony',
          'Microsoft',
          'Nintendo',
          'Ubisoft',
          'Electronic Arts',
          'Rockstar Games',
          'CD Projekt',
        ]),
        ageRating: generateFilterValues(['3+', '6+', '12+', '16+', '18+']),
        multiplayer: generateFilterValues(['Однопользовательская', 'Мультиплеер', 'Кооператив', 'Онлайн']),
        edition: generateFilterValues([
          'Обычное издание',
          'Deluxe Edition',
          'Ultimate Edition',
          'Коллекционное издание',
        ]),
        format: generateFilterValues(['Цифровая версия', 'Диск', 'Картридж']),
        language: generateFilterValues(['Русский', 'Английский', 'Мультиязычный']),
      };
      break;

    case 'accessories':
      specificFilters = {
        type: generateFilterValues([
          'Чехлы',
          'Зарядные устройства',
          'Наушники',
          'Кабели',
          'Док-станции',
          'Пленки и стекла',
          'Держатели',
          'Карты памяти',
        ]),
        compatibility: generateFilterValues([
          'Для смартфонов',
          'Для ноутбуков',
          'Для планшетов',
          'Для фотоаппаратов',
          'Для автомобилей',
          'Универсальные',
        ]),
        brand: generateFilterValues([
          'Baseus',
          'Anker',
          'Apple',
          'Samsung',
          'Xiaomi',
          'Remax',
          'Sony',
          'Hoco',
        ]),
        color: generateFilterValues(['Черный', 'Белый', 'Серый', 'Красный', 'Синий', 'Зеленый', 'Золотой']),
        connectionType: generateFilterValues([
          'Bluetooth',
          '3.5 мм',
          'Lightning',
          'USB-C',
          'Micro USB',
          'MagSafe',
        ]),
        material: generateFilterValues(['Пластик', 'Металл', 'Кожа', 'Силикон', 'Ткань']),
        feature: generateFilterValues([
          'Быстрая зарядка',
          'Шумоподавление',
          'Беспроводная зарядка',
          'Влагозащита',
          'С подсветкой',
        ]),
        warranty: generateFilterValues(['Без гарантии', '6 месяцев', '1 год', '2 года']),
      };
      break;

    case 'printers':
      specificFilters = {
        type: generateFilterValues(['Лазерный', 'Струйный', 'Светодиодный', 'Сублимационный', 'МФУ']),
        colorPrinting: generateFilterValues(['Цветной', 'Черно-белый']),
        brand: generateFilterValues(['HP', 'Canon', 'Epson', 'Brother', 'Xerox', 'Pantum', 'Kyocera']),
        printFormat: generateFilterValues(['A4', 'A3', 'A5', 'Фото (10x15)', 'Письмо (Letter)']),
        connection: generateFilterValues(['USB', 'Wi-Fi', 'Ethernet', 'Bluetooth', 'NFC']),
        duplex: generateFilterValues([
          'Односторонняя печать',
          'Двусторонняя печать (автоматическая)',
          'Двусторонняя печать (ручная)',
        ]),
        functions: generateFilterValues(['Печать', 'Сканирование', 'Копирование', 'Факс']),
        cartridgeType: generateFilterValues([
          'Оригинальный',
          'Совместимый',
          'Перезаправляемый',
          'Непрерывная подача чернил (СНПЧ)',
        ]),
      };
      break;

    case 'tools':
      specificFilters = {
        type: generateFilterValues([
          'Электроинструменты',
          'Ручные инструменты',
          'Измерительные инструменты',
          'Садовая техника',
          'Станки',
          'Расходные материалы',
        ]),
        brand: generateFilterValues([
          'Bosch',
          'Makita',
          'DeWalt',
          'Metabo',
          'Интерскол',
          'Зубр',
          'Denzel',
          'Hammer',
        ]),
        powerSource: generateFilterValues(['Сеть', 'Аккумулятор', 'Пневматика', 'Бензиновый двигатель']),
        voltage: generateFilterValues(['12В', '18В', '20В', '220В', '380В']),
        purpose: generateFilterValues([
          'Сверление',
          'Резка',
          'Шлифовка',
          'Пайка',
          'Гвоздезабивание',
          'Полив',
        ]),
        materialSupport: generateFilterValues(['Дерево', 'Металл', 'Бетон', 'Пластик', 'Керамика']),
        features: generateFilterValues([
          'Подсветка',
          'Регулировка скорости',
          'Антивибрация',
          'Безщеточный двигатель',
          'Автостоп',
        ]),
        weight: generateFilterValues(['до 1 кг', '1–2 кг', '2–3 кг', '3–5 кг', 'более 5 кг']),
      };
      break;

    case 'photo':
      specificFilters = {
        brand: generateFilterValues([
          'Canon',
          'Nikon',
          'Sony',
          'Fujifilm',
          'Panasonic',
          'Olympus',
          'Leica',
          'Pentax',
        ]),
        type: generateFilterValues([
          'Фотоаппараты',
          'Объективы',
          'Аксессуары',
          'Фотовспышки',
          'Студийное оборудование',
          'Штативы',
          'Фильтры',
        ]),
        cameraType: generateFilterValues([
          'Зеркальные',
          'Беззеркальные',
          'Компактные',
          'Плёночные',
          'Мгновенная печать',
          'Экшн-камеры',
        ]),
        resolution: generateFilterValues(['до 12 Мп', '12–20 Мп', '20–30 Мп', 'более 30 Мп']),
        videoSupport: generateFilterValues(['Без видео', 'Full HD', '4K UHD', '8K UHD']),
        lensMount: generateFilterValues([
          'Canon EF',
          'Nikon F',
          'Sony E',
          'Fujifilm X',
          'Micro 4/3',
          'Leica M',
        ]),
        sensorSize: generateFilterValues(['Full Frame', 'APS-C', 'Micro Four Thirds', '1 дюйм']),
        storage: generateFilterValues(['SD', 'SDHC', 'SDXC', 'CFexpress', 'microSD', 'XQD']),
      };

      break;

    case 'home':
      specificFilters = {
        brand: generateFilterValues([
          'IKEA',
          'Bosch',
          'Philips',
          'Samsung',
          'LG',
          'Panasonic',
          'Dyson',
          'Miele',
          'Xiaomi',
          'Tefal',
        ]),
        type: generateFilterValues([
          'Крупная бытовая техника',
          'Мелкая бытовая техника',
          'Мебель',
          'Освещение',
          'Текстиль',
          'Аксессуары для дома',
          'Умный дом',
          'Климатическая техника',
        ]),
        room: generateFilterValues([
          'Кухня',
          'Ванная',
          'Гостиная',
          'Спальня',
          'Прихожая',
          'Балкон',
          'Детская',
          'Офис',
        ]),
        material: generateFilterValues([
          'Дерево',
          'Металл',
          'Пластик',
          'Ткань',
          'Стекло',
          'Керамика',
          'Кожа',
          'Бамбук',
        ]),
        color: generateFilterValues([
          'Белый',
          'Черный',
          'Серый',
          'Бежевый',
          'Синий',
          'Зеленый',
          'Коричневый',
          'Красный',
        ]),
        power: generateFilterValues(['Без питания', 'Батарейки', 'Сеть 220В', 'USB', 'Аккумулятор']),
        ecoFriendly: generateFilterValues(['Да', 'Нет']),
        warranty: generateFilterValues(['Нет', '6 месяцев', '1 год', '2 года']),
        features: generateFilterValues([
          'Энергосберегающий',
          'Управление с телефона',
          'Автоматический режим',
          'Тихий режим',
          'Влагостойкий',
        ]),
      };

      break;

    case 'furniture':
      specificFilters = {
        category: generateFilterValues([
          'Освещение',
          'Текстиль',
          'Кухонные принадлежности',
          'Хранение и организация',
          'Уборка и уход',
          'Ароматы и декор',
          'Инструменты для дома',
        ]),
        brand: generateFilterValues(['IKEA', 'Hoff', 'Zara Home', 'Leifheit', 'Tefal', 'Vileda', 'Philips']),
        color: generateFilterValues([
          'Белый',
          'Черный',
          'Серый',
          'Бежевый',
          'Синий',
          'Зеленый',
          'Разноцветный',
        ]),
        material: generateFilterValues(['Хлопок', 'Пластик', 'Металл', 'Дерево', 'Стекло', 'Бамбук']),
        room: generateFilterValues(['Кухня', 'Ванная', 'Гостиная', 'Спальня', 'Прихожая', 'Балкон']),
        usage: generateFilterValues([
          'Для приготовления пищи',
          'Для сервировки',
          'Для хранения',
          'Для уборки',
          'Для отдыха',
          'Для декора',
        ]),
        power: generateFilterValues(['Без питания', 'Батарейки', 'Сеть 220В', 'USB']),
        ecoFriendly: generateFilterValues(['Да', 'Нет']),
      };
      break;

    case 'climate':
      specificFilters = {
        type: generateFilterValues([
          'Кондиционеры',
          'Обогреватели',
          'Вентиляторы',
          'Увлажнители воздуха',
          'Осушители воздуха',
          'Тепловые завесы',
          'Очистители воздуха',
        ]),
        power: generateFilterValues([
          '0.5 кВт',
          '1 кВт',
          '1.5 кВт',
          '2 кВт',
          '2.5 кВт',
          '3 кВт',
          '3.5 кВт',
          '4 кВт',
        ]),
        brand: generateFilterValues([
          'Ballu',
          'Electrolux',
          'Mitsubishi',
          'Panasonic',
          'Toshiba',
          'LG',
          'Samsung',
        ]),
        energyEfficiency: generateFilterValues(['A', 'A+', 'A++', 'B', 'C']),
        noiseLevel: generateFilterValues(['до 20 дБ', '21-30 дБ', '31-40 дБ', 'более 40 дБ']),
        controlType: generateFilterValues([
          'Пульт дистанционного управления',
          'Механическое управление',
          'Сенсорное управление',
          'Умное управление (Wi-Fi)',
        ]),
        installationType: generateFilterValues(['Настенный', 'Напольный', 'Потолочный', 'Мобильный']),
        features: generateFilterValues([
          'Таймер',
          'Режим сна',
          'Автоматическое отключение',
          'Ионизация воздуха',
          'Антибактериальное покрытие',
        ]),
      };
      break;

    case 'beauty':
      specificFilters = {
        category: generateFilterValues([
          'Уход за кожей',
          'Парфюмерия',
          'Витамины',
          'Уход за волосами',
          'Средства для макияжа',
          'Средства для мужчин',
          'Гигиенические средства',
          'Средства для ухода за телом',
        ]),
        brand: generateFilterValues([
          'L’Oréal',
          'Nivea',
          'Garnier',
          'Clinique',
          'Dove',
          'Vichy',
          'Maybelline',
          'Avene',
        ]),
        skinType: generateFilterValues([
          'Для всех типов кожи',
          'Для сухой кожи',
          'Для жирной кожи',
          'Для комбинированной кожи',
          'Для чувствительной кожи',
        ]),
        scent: generateFilterValues([
          'Цветочный',
          'Свежий',
          'Древесный',
          'Цитрусовый',
          'Ориентальный',
          'Без запаха',
        ]),
        form: generateFilterValues(['Крем', 'Гель', 'Лосьон', 'Сыворотка', 'Маска', 'Тоник', 'Спрей']),
        purpose: generateFilterValues([
          'Увлажнение',
          'Очищение',
          'Питание',
          'Антивозрастной уход',
          'Защита от солнца',
          'Восстановление',
        ]),
        packaging: generateFilterValues(['Флакон', 'Тюбик', 'Банка', 'Аэрозоль', 'Пакетик']),
        volume: generateFilterValues(['до 50 мл', '50-100 мл', '100-200 мл', 'более 200 мл']),
      };
      break;

    case 'hobby':
      specificFilters = {
        type: generateFilterValues([
          'Настольные игры',
          'Спортинвентарь',
          'Товары для туризма',
          'Рыболовные принадлежности',
          'Велосипедное снаряжение',
          'Кемпинговое оборудование',
          'Музыкальные инструменты',
          'Моделизм',
        ]),
        brand: generateFilterValues([
          'Hasbro',
          'Mattel',
          'Nike',
          'Adidas',
          'Salomon',
          'Deuter',
          'Shimano',
          'Fender',
        ]),
        material: generateFilterValues(['Пластик', 'Дерево', 'Металл', 'Текстиль', 'Комбинированные']),
        ageGroup: generateFilterValues(['Дети', 'Подростки', 'Взрослые', 'Все возрасты']),
        difficultyLevel: generateFilterValues(['Для новичков', 'Средний уровень', 'Для экспертов']),
        sportType: generateFilterValues(['Футбол', 'Баскетбол', 'Теннис', 'Йога', 'Плавание', 'Бег']),
        season: generateFilterValues(['Лето', 'Зима', 'Всесезонные']),
        portable: generateFilterValues(['Портативные', 'Стационарные']),
      };

      break;

    case 'car':
      specificFilters = {
        type: generateFilterValues([
          'Масла и жидкости',
          'Аксессуары',
          'Шины и диски',
          'Автоэлектроника',
          'Инструменты и ремонт',
          'Автомобильные коврики',
          'Автохимия',
          'Запчасти',
        ]),
        brand: generateFilterValues([
          'Mobil',
          'Castrol',
          'Michelin',
          'Bosch',
          'Continental',
          'Shell',
          'Yokohama',
          'Bridgestone',
        ]),
        oilType: generateFilterValues(['Минеральное', 'Полусинтетическое', 'Синтетическое']),
        tireSeason: generateFilterValues(['Летние', 'Зимние', 'Всесезонные']),
        tireType: generateFilterValues(['Шипованные', 'Нешипованные', 'Всесезонные']),
        compatibility: generateFilterValues([
          'Легковые автомобили',
          'Грузовые автомобили',
          'Мотоциклы',
          'Внедорожники',
        ]),
        size: generateFilterValues(['13"', '14"', '15"', '16"', '17"', '18"', '19"']),
        features: generateFilterValues([
          'Антиблокировочная система (ABS)',
          'Противоугонная система',
          'Защита от коррозии',
          'Эко-френдли',
        ]),
      };

      break;

    case 'other':
      specificFilters = {
        brand: generateFilterValues([
          'BrandA',
          'BrandB',
          'BrandC',
          'BrandD',
          'BrandE',
          'BrandF',
          'BrandG',
          'BrandH',
        ]),
        type: generateFilterValues(['Тип 1', 'Тип 2', 'Тип 3', 'Тип 4', 'Тип 5', 'Тип 6', 'Тип 7', 'Тип 8']),
        color: generateFilterValues([
          'Красный',
          'Синий',
          'Зеленый',
          'Черный',
          'Белый',
          'Желтый',
          'Оранжевый',
          'Фиолетовый',
        ]),
        size: generateFilterValues(['Малый', 'Средний', 'Большой', 'Очень большой']),
        material: generateFilterValues(['Пластик', 'Металл', 'Дерево', 'Ткань', 'Стекло']),
        priceRange: generateFilterValues(['До 1000', '1000-5000', '5000-10000', 'Более 10000']),
        availability: generateFilterValues(['В наличии', 'Под заказ']),
        rating: generateFilterValues(['1 звезда', '2 звезды', '3 звезды', '4 звезды', '5 звезд']),
      };

      break;
  }

  return {
    ...commonFilters,
    ...specificFilters,
  };
};
