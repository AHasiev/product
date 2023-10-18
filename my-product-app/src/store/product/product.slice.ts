// store/product/product.slice.ts
import { createAction, createSlice, PayloadAction } from '@reduxjs/toolkit';
import ProductStateModel from '../../models/state/product-state.model';
import { ProductModel } from '../../data/product.model';

const initialState: ProductStateModel = {
  products: [],
};

const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    setProductsAction: (state, action: PayloadAction<ProductModel[]>) => {
      console.log(action);
      state.products = action.payload;
    },
    
  },
  extraReducers: (builder) => {
  
  }
});

export const { setProductsAction } = productSlice.actions;

export default productSlice.reducer;
