import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "../../api/axios";

const initialState = {
  products: [],
  isLoading: false,
  error: "",
};

export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async (thunkAPI) => {
    try {
      const reponse = await axios.get();
      console.log(reponse);
      return reponse.data;
    } catch (e) {
      return thunkAPI.rejectWithValue("Error loading products");
    }
  }
);

export const productSlice = createSlice({
  name: "products",
  initialState: initialState,
  reducers: {},
  extraReducers: (bulider) => {
    bulider
      .addCase(fetchProducts.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.products = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.isLoading = false;
        state.products = action.payload;
      });
  },
});

export const productsAction = productSlice.actions;

export default productSlice.reducer;
