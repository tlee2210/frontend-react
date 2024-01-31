import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  coursesData: [],
  item: {},
  SemesterGrouped: [],
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
    setSessionsGrouped(state, action) {
      state.SemesterGrouped = action.payload;
    },
  },
});

export const { setcoursesData, SetDetail, setSessionsGrouped } =
  homeSlice.actions;

export default homeSlice.reducer;
