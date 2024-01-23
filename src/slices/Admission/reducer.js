import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  AdmissionData: [],
  item: {},
};

const AdmissionSlice = createSlice({
  name: "AdmissionSlice",
  initialState,
  reducers: {
    setAdmissionData(state, action) {
      state.AdmissionData = action.payload;
    },
    setEdit(state, action) {
      state.item = action.payload;
    },
  },
});

export const { setAdmissionData, setEdit } = AdmissionSlice.actions;

export default AdmissionSlice.reducer;
