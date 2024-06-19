import { configureStore } from "@reduxjs/toolkit";
import newsSlice from "./newsSlice";
import favoritesSlice from "./favoritesSlice";
import themeSlice from "./themeSlice";

const store = configureStore({
  reducer: {
    news: newsSlice,
    favorites: favoritesSlice,
    theme: themeSlice,
  },
});

export default store;
