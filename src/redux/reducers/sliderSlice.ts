import { createSlice } from '@reduxjs/toolkit';
import blueBg from '../../pages/MainPage/components/Slider/images/blue-bg.svg';
import pinkBg from '../../pages/MainPage/components/Slider/images/pink-bg.svg';
import yellowBg from '../../pages/MainPage/components/Slider/images/yellow-bg.svg';
import mainBg from '../../pages/MainPage/components/Slider/images/main-bg.svg';
import sellBg from '../../pages/MainPage/components/Slider/images/sell-bg.svg';
import repairBg from '../../pages/MainPage/components/Slider/images/repair-bg.svg';

interface SliderState {
  currentSlide: number;
  backgroundImages: {
    topLeft: string;
    bottomLeft: string;
    bottomRight: string;
  };
  slides: {
    id: number;
    title: string;
    description?: string;
    location?: string;
    address?: string;
    button?: {
      text: string;
      to: string;
    };
    mainBackground: string;
  }[];
}

const initialState: SliderState = {
  currentSlide: 0,
  backgroundImages: {
    topLeft: yellowBg,
    bottomLeft: pinkBg,
    bottomRight: blueBg,
  },
  slides: [
    {
      id: 1,
      title: 'Открыт новый магазин',
      location: 'Белорецк',
      address: 'Ул. Косоротова 11',
      mainBackground: mainBg,
    },
    {
      id: 2,
      title: 'Купим вашу технику',
      description: 'Сфотографируйте вашу технику, заполните форму и мы ее купим!',
      button: {
        text: 'Продать',
        to: '/sell',
      },
      mainBackground: sellBg,
    },
    {
      id: 3,
      title: 'Ремонтируем технику',
      description: 'Решаем мелкие и сложные задачи! От переустановки Windows до сборки ПК',
      button: {
        text: 'Отремонтировать',
        to: '/repair',
      },
      mainBackground: repairBg,
    },
  ],
};

const sliderSlice = createSlice({
  name: 'slider',
  initialState,
  reducers: {
    nextSlide: state => {
      state.currentSlide = (state.currentSlide + 1) % state.slides.length;
    },
  },
});

export const { nextSlide } = sliderSlice.actions;
export default sliderSlice.reducer;
