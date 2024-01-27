import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  // SelectOption: [],
  profileData: {},
};

const profileSlice = createSlice({
  name: "profileSlice",
  initialState,
  reducers: {
    setprofileData(state, action) {
      state.profileData = action.payload;
    },

    setEdit(state, action) {
      state.item = action.payload;
    },
  },
});

export const { setprofileData, setEdit } = profileSlice.actions;

export default profileSlice.reducer;
