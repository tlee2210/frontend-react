import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  feedbackData: [],
  item: {},
};

const homeSlice = createSlice({
  name: "homeSlice",
  initialState,
  reducers: {
    setData(state, action) {
      state.feedbackData = action.payload;
    },
    setitem(state, action) {
      state.item = action.payload;
    },
    // removehome(state, action) {
    //   state.homeData = state.homeData.filter(
    //     (item) => item.id !== action.payload
    //   );
    // },
    // setEdit(state, action) {
    //   state.item = action.payload;
    // },
  },
});

export const { setData, setitem } = homeSlice.actions;

export default homeSlice.reducer;
