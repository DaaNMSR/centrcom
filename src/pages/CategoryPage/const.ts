import React from 'react';

export const categories = {
  tv: 'Телевизоры и аудиотехника',
  phones: 'Смартфоны и гаджеты',
  laptops: 'Ноутбуки и компьютеры',
  games: 'Игровые приставки и игры',
  accessories: 'Аксессуары',
  printers: 'Принтеры и МФУ',
  tools: 'Инструменты',
  photo: 'Фототехника',
  home: 'Товары для дома',
  furniture: 'Мебель',
  climate: 'Климатическое оборудование',
  beauty: 'Красота и здоровье',
  hobby: 'Хобби и отдых',
  car: 'Для автомобиля',
  other: 'Разное',
};

export const limit = 15;

export const getPaginationEdges = (total: number, edgeCount = 4): (number | '...')[] => {
  const pages: (number | '...')[] = [];

  for (let i = 1; i <= total; i++) {
    if (i <= edgeCount || i > total - edgeCount) {
      pages.push(i);
    } else if (i === edgeCount + 1) {
      pages.push('...');
    }
  }

  return pages;
};

export const getTotalPages = (totalItems: number, limit: number): number => {
  return Math.ceil(totalItems / limit);
};

export const getPageOptions = (totalPages: number): { value: string; label: string }[] => {
  return Array.from({ length: totalPages }, (_, i) => {
    const page = (i + 1).toString();
    return { value: page, label: page };
  });
};

export const removeFilter = (
  setSelectedFilters: React.Dispatch<React.SetStateAction<{ [filterName: string]: string[] }>>,
  filterName: string,
  value: string,
) => {
  setSelectedFilters(prev => {
    const updated = prev[filterName].filter(v => v !== value);
    if (updated.length === 0) {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const { [filterName]: _, ...rest } = prev;
      return rest;
    }
    return { ...prev, [filterName]: updated };
  });
};
