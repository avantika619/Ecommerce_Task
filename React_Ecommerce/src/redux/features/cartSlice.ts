// src/features/cart/cartSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
}

interface CartState {
  items: CartItem[];
  totalAmount: number;
}

const initialState: CartState = {
  items: [],
  totalAmount: 0,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<CartItem>) => {
      const existingItem = state.items.find(item => item.id === action.payload.id);
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items.push(action.payload);
      }
      state.totalAmount += action.payload.price;
    },
    removeItem: (state, action: PayloadAction<number>) => {
      const itemToRemove = state.items.find(item => item.id === action.payload);
      if (itemToRemove) {
        state.totalAmount -= itemToRemove.price * itemToRemove.quantity; // Deduct the total price for the item
        state.items = state.items.filter(item => item.id !== action.payload); // Remove item from cart
      }
    },
  },
});

export const { addItem, removeItem } = cartSlice.actions;

export default cartSlice.reducer;
