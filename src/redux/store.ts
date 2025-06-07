import { configureStore } from '@reduxjs/toolkit';
import sliderReducer from '../redux/reducers/sliderSlice';
import cityPopupReducer from '../redux/reducers/cityPopupSlice';
import modalReducer from '../redux/reducers/modalSlice';
import { productsApi } from './api/productsApi.ts';
import { categoriesApi } from './api/categoriesApi.ts';
import { vacanciesShortApi } from './api/vacanciesShortApi.ts';
import { vacanciesDetailsApi } from './api/vacanciesDetailsApi.ts';

export const store = configureStore({
  reducer: {
    slider: sliderReducer,
    cityPopup: cityPopupReducer,
    modal: modalReducer,
    [productsApi.reducerPath]: productsApi.reducer,
    [categoriesApi.reducerPath]: categoriesApi.reducer,
    [vacanciesShortApi.reducerPath]: vacanciesShortApi.reducer,
    [vacanciesDetailsApi.reducerPath]: vacanciesDetailsApi.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware()
      .concat(productsApi.middleware)
      .concat(categoriesApi.middleware)
      .concat(vacanciesShortApi.middleware)
      .concat(vacanciesDetailsApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
