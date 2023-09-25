import { createSlice, current } from "@reduxjs/toolkit";

const initialState = {
  products: [],
};

export const cartSlice = createSlice({
  name : "cart",
  initialState,
  reducers: {
    addItmCart : (state, action) => { 
      state.products = [...state.products, action.payload];},

    removeCart : (state, action) => 
    { const newProducts = state.products.filter((data) => data.id !== action.payload)
      console.log(newProducts)
      state.products = newProducts
    }
    ,
    addCntCart : (state, action) => {
      const newState = state.products.map((data) => data.id === action.payload? { ...data, count: data.count + 1 }: data)
      state.products = newState;
      console.log(state.products)
    },
    minusCntCart: (state, action) =>{
      const newState = state.products.map((data) => data.id === action.payload? { ...data, count: data.count - 1 }: data)
      state.products = newState;
      console.log(state.products)
    },
    clearCart : (state, _) =>{
      state.products = [];
    }
  }

})

export default cartSlice.reducer;
export const { addItmCart,  removeCart, addCntCart, minusCntCart, clearCart} = cartSlice.actions;