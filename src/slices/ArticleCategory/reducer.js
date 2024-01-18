import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  CategoryData: [],
  notification: false,
  Msg: "",
  item: null,
  errorNotification: false,
  errMsg: "",
};
// const LayoutSlice = createSlice({

const CategorySlice = createSlice({
  name: "CategorySlice",
  initialState,
  reducers: {
    setdataCategory(state, action) {
      state.CategoryData = action.payload;
    },
    addCategory(state, action) {
      state.CategoryData = [...state.CategoryData, action.payload];
    },
    updateCategories(state, action) {
      const { id, ...newData } = action.payload;
      const categoryIndex = state.CategoryData.findIndex(category => category.id === id);
      if (categoryIndex !== -1) {
        state.CategoryData[categoryIndex] = { ...state.CategoryData[categoryIndex], ...newData };
      }
    },
    removeCategories(state, action) {
      state.CategoryData = state.CategoryData.filter(category => category.id !== action.payload);
    },
    setMsg(state, action) {
      state.Msg = action.payload;
      state.notification = true;
    },
    clearNotification(state) {
      state.notification = false;
      state.errorNotification = false;
      state.Msg = "";
      state.errMsg = "";
      state.item = null;
    },
    findCategoryById(state, action) {
      state.item = state.CategoryData.find(category => category.id === action.payload);
    },
    errorMsg(state, action) {
      state.errorNotification = true;
      state.errMsg = action.payload;
    }
  },
});

export const {
  setdataCategory,
  addCategory,
  clearNotification,
  removeCategories,
  updateCategories,
  setMsg,
  errorMsg,
  findCategoryById,
} = CategorySlice.actions;

export default CategorySlice.reducer;
