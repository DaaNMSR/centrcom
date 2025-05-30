import { configureStore } from '@reduxjs/toolkit';
import sliderReducer from '../redux/reducers/sliderSlice';
import cityPopupReducer from '../redux/reducers/cityPopupSlice';
import modalReducer from '../redux/reducers/modalSlice';
import { productsApi } from './api/productsApi.ts';

export const store = configureStore({
  reducer: {
    slider: sliderReducer,
    cityPopup: cityPopupReducer,
    modal: modalReducer,
    [productsApi.reducerPath]: productsApi.reducer,
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(productsApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
