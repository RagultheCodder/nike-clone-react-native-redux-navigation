import { createSlice } from '@reduxjs/toolkit';
import products from '../data/products';

const initialState = {
  products: products,
  selectedProduct: null
};

export const productSlice = createSlice({
  name: 'product_slice',
  initialState,
  reducers:{
    setSelectedProdut: (state, action) => {
      const productId = action.payload
      state.selectedProduct = state.products.find(prd => prd.id === productId);
    }
  }
});