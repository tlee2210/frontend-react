import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  // SelectOption: [],
  profileData: {},
  SemesterGrouped: [],
};

const profileSlice = createSlice({
  name: "profileSlice",
  initialState,
  reducers: {
    setprofileData(state, action) {
      state.profileData = action.payload;
    },
    setSessionsGrouped(state, action) {
      state.SemesterGrouped = action.payload;
    },
    setEdit(state, action) {
      state.item = action.payload;
    },
  },
});

export const { setprofileData, setEdit, setSessionsGrouped } =
  profileSlice.actions;

export default profileSlice.reducer;
