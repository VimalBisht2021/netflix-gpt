import { createSlice } from "@reduxjs/toolkit";

const configslice = createSlice({
  name: "config",
  initialState: {
    lang: "english",
  },
  reducers: {
    changelanguage: (state, action) => {
      state.lang = action.payload;
    },
  },
});

export const { changelanguage } = configslice.actions;
export default configslice.reducer;
