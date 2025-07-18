import { createSlice } from "@reduxjs/toolkit";

const movieslice = createSlice({
  name: "movies",
  initialState: {
    nowplayingmovies: null,
    currentTrailer: null,
    popularmovies: null,
    trendingmovies: null,
    upcomingmovies: null,
  },
  reducers: {
    addnowplaying: (state, action) => {
      state.nowplayingmovies = action.payload;
    },
    addTrailer: (state, action) => {
      state.currentTrailer = action.payload;
    },
    addpopularmovies: (state, action) => {
      state.popularmovies = action.payload;
    },
    addtrendingmovies: (state, action) => {
      state.trendingmovies = action.payload;
    },
    addupcomingmovies: (state, action) => {
      state.upcomingmovies = action.payload;
    },
  },
});

export const {
  addnowplaying,
  addTrailer,
  addpopularmovies,
  addtrendingmovies,
  addupcomingmovies,
} = movieslice.actions;

export default movieslice.reducer;
