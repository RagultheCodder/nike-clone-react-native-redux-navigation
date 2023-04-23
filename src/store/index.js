import { configureStore } from '@reduxjs/toolkit';
import { productSlice } from './productSlice';
import { cartSlice } from './cartSlice';

export const store = configureStore({
  reducer:{
    data: productSlice.reducer,
    cart: cartSlice.reducer
  }
})