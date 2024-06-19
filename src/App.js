import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchNews,
  setCategory,
  setPage,
  setSearchQuery,
} from "./utils/newsSlice";
import NewsList from "./Components/NewsList";
import ArticleDetails from "./Components/ArticleDetails";
import "./App.css";
import Navbar from "./Components/Navbar";
import FavoritesList from "./Components/FavoritesList";

function App() {
  const dispatch = useDispatch();
  const { category, page, searchQuery } = useSelector((state) => state.news);
  const darkMode = useSelector((state) => state.theme.darkMode);
  const [searchInput, setSearchInput] = useState("");

  useEffect(() => {
    dispatch(fetchNews({ category, page, searchQuery }));
  }, [dispatch, category, page, searchQuery]);

  const handleCategoryChange = (newCategory) => {
    dispatch(setCategory(newCategory));
  };

  const handlePageChange = (newPage) => {
    dispatch(setPage(newPage));
  };

  const handleSearchChange = (e) => {
    setSearchInput(e.target.value);
  };

  const handleSearch = () => {
    dispatch(setSearchQuery(searchInput));
  };

  return (
    <div className={`app ${darkMode ? "dark-mode" : ""}`}>
      <Navbar
        handleCategoryChange={handleCategoryChange}
        handleSearchChange={handleSearchChange}
        handleSearch={handleSearch}
        searchInput={searchInput}
      />

      <Routes>
        <Route
          path="/"
          element={<NewsList handlePageChange={handlePageChange} />}
        />
        <Route path="/article/:id" element={<ArticleDetails />} />
        <Route path="/favorites" element={<FavoritesList />} />
      </Routes>
    </div>
  );
}

export default App;
