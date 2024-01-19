import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  DepartmentData: [],
  item:{},
};

const DepartmentSlice = createSlice({
  name: "DepartmentSlice",
  initialState,
  reducers: {
    setDepartmentData(state, action){
      state.DepartmentData = action.payload;
    },
    removeDepartment(state, action) {
      state.DepartmentData = state.DepartmentData.filter(Item => Item.id !== action.payload);
    },
    setEdit(state, action){
      state.item = action.payload;
    }
  },
});

export const {
  setDepartmentData,
  removeDepartment,
  setEdit,
} = DepartmentSlice.actions;

export default DepartmentSlice.reducer;
