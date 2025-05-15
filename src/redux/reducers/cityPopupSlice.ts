import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

interface cityPopupState {
  isOpen: boolean;
  isCorrectCity: boolean;
  currentCity: string;
}

const initialState: cityPopupState = {
  isOpen: false,
  isCorrectCity: true,
  currentCity: 'Магнитогорск',
};

const cityPopupSlice = createSlice({
  name: 'cityPopup',
  initialState,
  reducers: {
    openPopup: state => {
      state.isOpen = true;
    },
    closePopup: state => {
      state.isOpen = false;
    },
    changeCurrentCity: state => {
      state.isCorrectCity = false;
    },
    setCity: (state, action: PayloadAction<string>) => {
      state.currentCity = action.payload;
      state.isCorrectCity = true;
    },
  },
});

export const { openPopup, closePopup, changeCurrentCity, setCity } = cityPopupSlice.actions;
export default cityPopupSlice.reducer;
