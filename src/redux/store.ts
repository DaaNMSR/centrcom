import { configureStore } from '@reduxjs/toolkit';
import sliderReducer from '../redux/reducers/sliderSlice';
import cityPopupReducer from '../redux/reducers/cityPopupSlice';
import modalReducer from '../redux/reducers/modalSlice';

export const store = configureStore({
  reducer: { slider: sliderReducer, cityPopup: cityPopupReducer, modal: modalReducer },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
