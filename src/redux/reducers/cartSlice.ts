import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type { FullProduct } from '../../../mock-server/data/newProducts';

export interface CartItem extends FullProduct {
  quantity: number;
}

interface CartState {
  items: CartItem[];
  isCartPopupOpen: boolean;
  totalPrice: number;
  totalCount: number;
}

const calculateTotalPrice = (items: CartItem[]) =>
  items.reduce((sum, item) => sum + Number(item.price) * item.quantity, 0);

const calculateTotalCount = (items: CartItem[]) => items.reduce((sum, item) => sum + item.quantity, 0);

const loadCartFromStorage = (): CartState => {
  try {
    const stored = localStorage.getItem('cart');
    if (stored) {
      const parsed = JSON.parse(stored);
      const items = parsed.items ?? [];
      return {
        items,
        isCartPopupOpen: false,
        totalPrice: calculateTotalPrice(items),
        totalCount: calculateTotalCount(items),
      };
    }
  } catch (e) {
    console.error('Failed to load cart from localStorage', e);
  }

  return {
    items: [],
    isCartPopupOpen: false,
    totalPrice: 0,
    totalCount: 0,
  };
};

const saveCartToStorage = (items: CartItem[]) => {
  try {
    localStorage.setItem('cart', JSON.stringify({ items }));
  } catch (e) {
    console.error('Failed to save cart to localStorage', e);
  }
};

const initialState: CartState = loadCartFromStorage();

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<FullProduct>) => {
      const existing = state.items.find(item => item.id === action.payload.id);
      if (existing) {
        existing.quantity += 1;
      } else {
        state.items.push({ ...action.payload, quantity: 1 });
      }
      state.totalPrice = calculateTotalPrice(state.items);
      state.totalCount = calculateTotalCount(state.items);
      saveCartToStorage(state.items);
    },

    removeFromCart: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter(item => item.id !== action.payload);
      state.totalPrice = calculateTotalPrice(state.items);
      state.totalCount = calculateTotalCount(state.items);
      saveCartToStorage(state.items);
    },

    clearCart: state => {
      state.items = [];
      state.totalPrice = 0;
      state.totalCount = 0;
      saveCartToStorage(state.items);
    },

    toggleCartPopup: state => {
      state.isCartPopupOpen = !state.isCartPopupOpen;
    },

    increaseQuantity: (state, action: PayloadAction<number>) => {
      const item = state.items.find(i => i.id === action.payload);
      if (item) {
        item.quantity += 1;
        state.totalPrice = calculateTotalPrice(state.items);
        state.totalCount = calculateTotalCount(state.items);
        saveCartToStorage(state.items);
      }
    },

    decreaseQuantity: (state, action: PayloadAction<number>) => {
      const item = state.items.find(i => i.id === action.payload);
      if (item && item.quantity > 1) {
        item.quantity -= 1;
        state.totalPrice = calculateTotalPrice(state.items);
        state.totalCount = calculateTotalCount(state.items);
        saveCartToStorage(state.items);
      }
    },
  },
});

export const { addToCart, removeFromCart, clearCart, toggleCartPopup, increaseQuantity, decreaseQuantity } =
  cartSlice.actions;
export default cartSlice.reducer;
