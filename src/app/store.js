import { configureStore } from "@reduxjs/toolkit";
import postReducer from "../features/Posts/PostsSlice";
import counterReducer from "../features/counters/CountersSlice";

const store = configureStore({
  reducer: {
    counters: counterReducer,
    posts: postReducer,
  },
});

export default store;
