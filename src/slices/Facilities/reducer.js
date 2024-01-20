import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  FacilitiesData: [],
  item: {},
};

const FacilitiesSlice = createSlice({
  name: "FacilitiesSlice",
  initialState,
  reducers: {
    setFacilitiesData(state, action) {
      state.FacilitiesData = action.payload;
    },
    setSelectOption(state, action) {
      state.SelectOption = action.payload;
    },
    removeFacilities(state, action) {
      state.FacilitiesData = state.FacilitiesData.filter(
        (Facilities) => Facilities.id !== action.payload
      );
    },
    setEdit(state, action) {
      state.item = action.payload;
    },
  },
});

export const {
  setFacilitiesData,
  // setSelectOption,
  removeFacilities,
  setEdit,
} = FacilitiesSlice.actions;

export default FacilitiesSlice.reducer;
