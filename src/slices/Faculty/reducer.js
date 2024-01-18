import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  SelectOption: [],
  FacultyData: [],
  item: {},
};

const FacultySlice = createSlice({
  name: "FacultySlice",
  initialState,
  reducers: {
    setFacultyData(state, action) {
      state.FacultyData = action.payload;
    },
    setSelectOption(state, action) {
      state.SelectOption = action.payload;
    },
    removeFaculty(state, action) {
      state.FacultyData = state.FacultyData.filter(
        (item) => item.id !== action.payload
      );
    },
    setEdit(state, action) {
      state.item = action.payload;
    },
  },
});

export const { setFacultyData, setSelectOption, removeFaculty, setEdit } =
  FacultySlice.actions;

export default FacultySlice.reducer;
