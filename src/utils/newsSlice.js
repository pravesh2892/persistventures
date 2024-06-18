import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const API_KEY = "034eb0310cec41c793cdb81c00f10d5b";

export const fetchNews = createAsyncThunk(
  "news/fetchNews",
  async ({ category, page, searchQuery }, { getState }) => {
    const response = await fetch(
      `https://newsapi.org/v2/top-headlines?country=us&category=${category}&q=${searchQuery}&pageSize=10&page=${page}&apiKey=${API_KEY}`
    );
    const data = await response.json();
    console.log("fetch data", data);
    if (!response.ok) {
      throw new Error("Failed to fetch news articles");
    }
    return data.articles;
  }
);

const newsSlice = createSlice({
  name: "news",
  initialState: {
    articles: [],
    category: "general",
    page: 1,
    totalResults: 0,
    isLoading: false,
    error: null,
    searchQuery: "",
  },
  reducers: {
    setCategory: (state, action) => {
      state.category = action.payload;
    },
    setPage: (state, action) => {
      state.page = action.payload;
    },
    setSearchQuery: (state, action) => {
      state.searchQuery = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchNews.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchNews.fulfilled, (state, action) => {
        state.isLoading = false;
        state.articles = action.payload;
      })
      .addCase(fetchNews.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      });
  },
});

export const { setCategory, setPage, setSearchQuery } = newsSlice.actions;
export default newsSlice.reducer;
