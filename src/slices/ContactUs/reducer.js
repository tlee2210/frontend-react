import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  ContactUs: [],
};

const ContactUsSlice = createSlice({
  name: "ContactUsSlice",
  initialState,
  reducers: {
    setArticleData(state, action){
      state.ContactUs = action.payload;
    },
  },
});

export const {
  setArticleData,
} = ContactUsSlice.actions;

export default ContactUsSlice.reducer;
