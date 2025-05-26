import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

interface ModalState {
  isOpen: boolean;
  vacancyId: string | null;
  isSuccessOpen: boolean;
}

const initialState: ModalState = {
  isOpen: false,
  vacancyId: null,
  isSuccessOpen: false,
};

const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    openModal(state, action: PayloadAction<string>) {
      state.isOpen = true;
      state.vacancyId = action.payload;
      state.isSuccessOpen = false;
    },
    closeModal(state) {
      state.isOpen = false;
      state.vacancyId = null;
    },
  },
});

export const { openModal, closeModal } = modalSlice.actions;
export default modalSlice.reducer;
