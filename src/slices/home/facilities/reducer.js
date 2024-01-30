import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  facilitiesData: [],
};

const homeSlice = createSlice({
  name: "homeSlice",
  initialState,
  reducers: {
    setfacilitiesData(state, action) {
      state.facilitiesData = action.payload;
    },
  },
});

export const { setfacilitiesData } = homeSlice.actions;

export default homeSlice.reducer;
