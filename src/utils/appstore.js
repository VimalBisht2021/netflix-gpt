import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userslice";
import movieReducer from "./movieslice";
import GPTReducer from "./GPTslice";
import configReducer from "./configslice";
const appstore = configureStore({
  reducer: {
    user: userReducer,
    movies: movieReducer,
    GPT: GPTReducer,
    config: configReducer,
  },
});
export default appstore;
