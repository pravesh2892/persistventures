import { configureStore } from "@reduxjs/toolkit";
import newsSlice from "./newsSlice";
import favoritesSlice from "./favoritesSlice";

const store = configureStore({
  reducer: {
    news: newsSlice,
    favorites: favoritesSlice,
  },
});

export default store;
