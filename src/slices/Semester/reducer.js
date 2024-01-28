import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  departmentOptions: [],
  facultyOptions: [],
  semesterOptions: [],
  sessionOptions: [],
  // SemesterData: [],
  item: {},
};

const SemesterSlice = createSlice({
  name: "SemesterSlice",
  initialState,
  reducers: {
    // setSemesterData(state, action) {
    //   state.SemesterData = action.payload;
    // },
    // removeSemester(state, action) {
    //   state.SemesterData = state.SemesterData.filter(
    //     (Semester) => Semester.id !== action.payload
    //   );
    // },
    // setEdit(state, action) {
    //   state.item = action.payload;
    // },
    setSelectOption(state, action) {
      state.departmentOptions = action.payload.departmentOptions;
      state.facultyOptions = action.payload.facultyOptions;
      state.semesterOptions = action.payload.semesterOptions;
      state.sessionOptions = action.payload.sessionOptions;
    },
  },
});

export const {
  // setSemesterData,
  setSelectOption,
  // removeSemester,
  // setEdit,
} = SemesterSlice.actions;

export default SemesterSlice.reducer;
