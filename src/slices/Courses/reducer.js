import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  CoursesData: [],
  item: null,
};
// const LayoutSlice = createSlice({

const CoursesSlice = createSlice({
  name: "CoursesSlice",
  initialState,
  reducers: {
    setdataCourses(state, action) {
      state.CoursesData = action.payload;
    },
    addCourses(state, action) {
      state.CoursesData = [...state.CoursesData, action.payload];
    },
    findCoursesById(state, action) {
      state.item = state.CoursesData.find((item) => item.id === action.payload);
    },
    updateCourses(state, action) {
      const { id, ...newData } = action.payload;
      const CoursesIndex = state.CoursesData.findIndex(
        (category) => category.id === id
      );
      if (CoursesIndex !== -1) {
        state.CoursesData[CoursesIndex] = {
          ...state.CoursesData[CoursesIndex],
          ...newData,
        };
      }
    },
    clearCourses(state) {
      state.item = null;
    },
    removeCourse(state, action) {
      state.CoursesData = state.CoursesData.filter(
        (item) => item.id !== action.payload
      );
    },
  },
});

export const {
  setdataCourses,
  removeCourse,
  addCourses,
  findCoursesById,
  updateCourses,
  clearCourses,
} = CoursesSlice.actions;

export default CoursesSlice.reducer;
