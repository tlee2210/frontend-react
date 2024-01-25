import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  SelectOption: [],
  StudentData: [],
  item: {},
};

const StudentSlice = createSlice({
  name: "StudentSlice",
  initialState,
  reducers: {
    setStudentData(state, action) {
      state.StudentData = action.payload;
    },
    removeStudent(state, action) {
      state.StudentData = state.StudentData.filter(
        (Student) => Student.id !== action.payload
      );
    },
    setEdit(state, action) {
      state.item = action.payload;
    },
    setSelectOption(state, action) {
      state.SelectOption = action.payload;
    },
  },
});

export const {
  setStudentData,
  setSelectOption,
  // removeStudent,
  setEdit,
} = StudentSlice.actions;

export default StudentSlice.reducer;
