import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  coursesData: [],
  item: {},
};

const homeSlice = createSlice({
  name: "homeSlice",
  initialState,
  reducers: {
    setcoursesData(state, action) {
      state.coursesData = action.payload;
    },
    SetDetail(state, action) {
      state.item = action.payload;
    },
  },
});

export const { setcoursesData, SetDetail } = homeSlice.actions;

export default homeSlice.reducer;
