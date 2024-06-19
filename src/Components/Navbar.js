import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import logo from "../Assets/logo.png";
import { ReactComponent as Sun } from "../Assets/Sun.svg";
import { ReactComponent as Moon } from "../Assets/Moon.svg";
import { toggleDarkMode } from "../utils/themeSlice";
import { setCategory, setSearchQuery, setPage } from "../utils/newsSlice";

function Navbar({
  handleCategoryChange,
  handleSearchChange,
  handleSearch,
  searchInput,
}) {
  const dispatch = useDispatch();
  const darkMode = useSelector((state) => state.theme.darkMode);

  const handleToggleDarkMode = () => {
    dispatch(toggleDarkMode());
  };

  const handleCategoryClick = (category) => {
    dispatch(setCategory(category));
    dispatch(setPage(1));
    dispatch(setSearchQuery(""));
  };

  return (
    <div className={`nav-container ${darkMode ? "dark-mode" : ""}`}>
      <div className="logo">
        <img src={logo} alt="logo" />
      </div>
      <div className="nav-menu">
        <ul>
          <li>
            <Link to="/">
              <button onClick={() => handleCategoryClick("general")}>
                General
              </button>
            </Link>
          </li>
          <li>
            <Link to="/">
              <button onClick={() => handleCategoryClick("business")}>
                Business
              </button>
            </Link>
          </li>
          <li>
            <Link to="/">
              <button onClick={() => handleCategoryClick("technology")}>
                Technology
              </button>
            </Link>
          </li>
          <li>
            <Link to="/">
              <button onClick={() => handleCategoryClick("entertainment")}>
                Entertainment
              </button>
            </Link>
          </li>
          <li>
            <Link to="/favorites">Favorites</Link>
          </li>
        </ul>
      </div>
      <div className="nav-searchbar">
        <input
          type="text"
          placeholder="Search..."
          value={searchInput}
          onChange={handleSearchChange}
          className="search-input"
        />
        <button onClick={handleSearch} className="search-btn">
          Search
        </button>
      </div>
      <div className="dark_mode">
        <input
          className="dark_mode_input"
          type="checkbox"
          id="darkmode-toggle"
          checked={darkMode}
          onChange={handleToggleDarkMode}
        />
        <label className="dark_mode_label" htmlFor="darkmode-toggle">
          {darkMode ? <Sun /> : <Moon />}
        </label>
      </div>
    </div>
  );
}

export default Navbar;
