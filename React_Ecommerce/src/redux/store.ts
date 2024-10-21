// src/store/store.ts
import { configureStore } from '@reduxjs/toolkit';
import cartReducer from '../redux/features/cartSlice';
import searchReducer from './features/searchSlice';
// import productsReducer from '../features/products/productsSlice';

const store = configureStore({
  reducer: {
    cart: cartReducer,
    search:searchReducer
    // products: productsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
