import { createSlice } from "@reduxjs/toolkit";

const initialState = "";

export const CategoriesName = {
  All: "",
  electronics: "electronics",
  jewelery: "jewelery",
  mensClothing: "men's clothing",
  womensClothing: "women's clothing",
};

export const categoriesSlice = createSlice({
  name: "categories",
  initialState: initialState,
  reducers: {
    setCategory: (_, action) => action.payload,
  },
});

export const { setCategory } = categoriesSlice.actions;
export default categoriesSlice.reducer;
