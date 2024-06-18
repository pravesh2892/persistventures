import { createSlice } from "@reduxjs/toolkit";

const favoritesSlice = createSlice({
  name: "favorites",
  initialState: {
    favoriteArticles:
      JSON.parse(localStorage.getItem("favoriteArticles")) || [],
  },
  reducers: {
    addFavorite: (state, action) => {
      const article = action.payload;
      const existingArticle = state.favoriteArticles.find(
        (fav) => fav.url === article.url
      );
      if (!existingArticle) {
        state.favoriteArticles.push(article);
        localStorage.setItem(
          "favoriteArticles",
          JSON.stringify(state.favoriteArticles)
        );
      }
    },
    removeFavorite: (state, action) => {
      const articleUrl = action.payload;
      state.favoriteArticles = state.favoriteArticles.filter(
        (article) => article.url !== articleUrl
      );
      localStorage.setItem(
        "favoriteArticles",
        JSON.stringify(state.favoriteArticles)
      );
    },
  },
});

export const { addFavorite, removeFavorite } = favoritesSlice.actions;
export default favoritesSlice.reducer;
