import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  articalData: [],
  CategoryData: [],
  item: {},
};

const homeSlice = createSlice({
  name: "homeSlice",
  initialState,
  reducers: {
    setarticalData(state, action) {
      state.articalData = action.payload;
    },
    setCategoryData(state, action) {
      state.CategoryData = action.payload;
    },
    setItemData(state, action) {
      state.item = action.payload;
    },
  },
});

export const { setarticalData, setCategoryData, setItemData } =
  homeSlice.actions;

export default homeSlice.reducer;
