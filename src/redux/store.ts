import { configureStore } from '@reduxjs/toolkit';
import sliderReducer from '../redux/reducers/sliderSlice';
import cityPopupReducer from '../redux/reducers/cityPopUpSlice';

export const store = configureStore({
  reducer: { slider: sliderReducer, cityPopup: cityPopupReducer },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
