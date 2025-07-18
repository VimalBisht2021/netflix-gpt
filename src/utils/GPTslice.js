import { createSlice } from "@reduxjs/toolkit";

const GPTslice = createSlice({
  name: "gpt",
  initialState: {
    showGPTSearch: false,
    moviename: null,
    movieresults: null,
  },
  reducers: {
    toggleGPTSearchView: (state) => {
      state.showGPTSearch = !state.showGPTSearch;
    },
    addgptmovieresult: (state, action) => {
      const { moviename, movieresults } = action.payload;
      state.moviename = moviename;
      state.movieresults = movieresults;
    },
  },
});
export const { toggleGPTSearchView, addgptmovieresult } = GPTslice.actions;

export default GPTslice.reducer;
