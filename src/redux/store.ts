import { configureStore } from '@reduxjs/toolkit';
import sliderReducer from '../redux/reducers/sliderSlice';
import cityPopupReducer from '../redux/reducers/cityPopupSlice';
import modalReducer from '../redux/reducers/modalSlice';
import { productsApi } from './api/productsApi.ts';
import { popupCategoriesApi } from './api/popupCategoriesApi.ts';
import { vacanciesShortApi } from './api/vacanciesShortApi.ts';
import { vacanciesDetailsApi } from './api/vacanciesDetailsApi.ts';
import { mainCategoriesApi } from './api/mainCategoriesApi.ts';
import { categoryProductsApi } from './api/categoryProductsApi.ts';
import { filtersApi } from './api/filtersApi.ts';

export const store = configureStore({
  reducer: {
    slider: sliderReducer,
    cityPopup: cityPopupReducer,
    modal: modalReducer,
    [productsApi.reducerPath]: productsApi.reducer,
    [popupCategoriesApi.reducerPath]: popupCategoriesApi.reducer,
    [vacanciesShortApi.reducerPath]: vacanciesShortApi.reducer,
    [vacanciesDetailsApi.reducerPath]: vacanciesDetailsApi.reducer,
    [mainCategoriesApi.reducerPath]: mainCategoriesApi.reducer,
    [categoryProductsApi.reducerPath]: categoryProductsApi.reducer,
    [filtersApi.reducerPath]: filtersApi.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware()
      .concat(productsApi.middleware)
      .concat(popupCategoriesApi.middleware)
      .concat(vacanciesShortApi.middleware)
      .concat(vacanciesDetailsApi.middleware)
      .concat(mainCategoriesApi.middleware)
      .concat(categoryProductsApi.middleware)
      .concat(filtersApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
