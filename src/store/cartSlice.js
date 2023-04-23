import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  item: [],
  deliveryFee: 15,
  freeDeliveryFrom: 20,
};

export const cartSlice = createSlice({
  name: 'cart_slice',
  initialState,
  reducers: {
    addCartItem: (state, action) => {
      const newProduct = action.payload.product;
      const cartItem = state.item.find(item => item.product.id === newProduct.id);
      if(cartItem) {
        cartItem.quantity += 1
      } else{
        state.item.push({
          product: newProduct,
          quantity: 1
        })
      }
    },
    changeQuantity: (state, action) => {
      const productId = action.payload.productId;
      const typeOfChange = action.payload.type;

      const product = state.item.find(item => item.product.id === productId);
      const productIndex = state.item.findIndex(item => item.product.id === productId);
      if(product) {
        if(typeOfChange === 'increment') {
          product.quantity += 1
        }
        if(typeOfChange === 'decrement') {
          product.quantity -= 1
          // if the quantity is 0 remove the product from the cart list
          if(product.quantity === 0) {
            state.item.splice(productIndex, 1)
          }
        }
      }
    }
  }
})