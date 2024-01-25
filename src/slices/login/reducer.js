import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  StaffData: [],
  item: {},
};

const StaffSlice = createSlice({
  name: "StaffSlice",
  initialState,
  reducers: {
    setStaffData(state, action) {
      state.StaffData = action.payload;
    },
    removeStaff(state, action) {
      state.StaffData = state.StaffData.filter(
        (Staff) => Staff.id !== action.payload
      );
    },
    setEdit(state, action) {
      state.item = action.payload;
    },
  },
});

export const {
  setStaffData,
  // setSelectOption,
  removeStaff,
  setEdit,
} = StaffSlice.actions;

export default StaffSlice.reducer;
