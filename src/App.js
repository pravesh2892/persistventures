import React, { useEffect, useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
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

function App() {
  const dispatch = useDispatch();
  const { category, page, searchQuery } = useSelector((state) => state.news);
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
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>

          <li>
            <button onClick={() => handleCategoryChange("general")}>
              General
            </button>
          </li>
          <li>
            <button onClick={() => handleCategoryChange("business")}>
              Business
            </button>
          </li>
          <li>
            <button onClick={() => handleCategoryChange("technology")}>
              Technology
            </button>
          </li>
          <li>
            <button onClick={() => handleCategoryChange("entertainment")}>
              Entertainment
            </button>
          </li>
          <li>
            <input
              type="text"
              placeholder="Search articles..."
              value={searchInput}
              onChange={handleSearchChange}
            />
            <button onClick={handleSearch}>Search</button>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route
          path="/"
          element={<NewsList handlePageChange={handlePageChange} />}
        />
        <Route path="/article/:id" element={<ArticleDetails />} />
      </Routes>
    </div>
  );
}

export default App;
