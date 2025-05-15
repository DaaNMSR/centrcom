import { createSlice } from '@reduxjs/toolkit';

interface cityPopupState {
  isOpen: boolean;
}

const initialState: cityPopupState = {
  isOpen: false,
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
  },
});

export const { openPopup, closePopup } = cityPopupSlice.actions;
export default cityPopupSlice.reducer;
