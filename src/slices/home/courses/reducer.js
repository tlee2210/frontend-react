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
  },
});

export const { setcoursesData } = homeSlice.actions;

export default homeSlice.reducer;
