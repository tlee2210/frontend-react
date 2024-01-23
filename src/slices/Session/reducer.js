import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  SessionData: [],
};

const SessionSlice = createSlice({
  name: "SessionSlice",
  initialState,
  reducers: {
    setSessionData(state, action) {
      state.SessionData = action.payload;
    },
    addCSession(state, action) {
      state.SessionData = [...state.SessionData, action.payload];
    },
  },
});

export const { setSessionData, addCSession } = SessionSlice.actions;

export default SessionSlice.reducer;
