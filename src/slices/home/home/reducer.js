import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  facultyData: [],
  articleData: [],
  SelectOption: [],
  item: {},
};

const homeSlice = createSlice({
  name: "homeSlice",
  initialState,
  reducers: {
    setFacultyData(state, action) {
      state.facultyData = action.payload;
    },
    setArticleData(state, action) {
      state.articleData = action.payload;
    },
    setSelectOption(state, action) {
      state.SelectOption = action.payload;
    },
  },
});

export const { setFacultyData, setArticleData, setSelectOption } =
  homeSlice.actions;

export default homeSlice.reducer;
