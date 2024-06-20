import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import logo from "../Assets/logo.png";
import { ReactComponent as Sun } from "../Assets/Sun.svg";
import { ReactComponent as Moon } from "../Assets/Moon.svg";
import { toggleDarkMode } from "../utils/themeSlice";
import { setCategory, setSearchQuery, setPage } from "../utils/newsSlice";

function Navbar({ handleSearchChange, handleSearch, searchInput }) {
  const dispatch = useDispatch();
  const darkMode = useSelector((state) => state.theme.darkMode);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleToggleDarkMode = () => {
    dispatch(toggleDarkMode());
  };

  const handleCategoryClick = (category) => {
    dispatch(setCategory(category));
    dispatch(setPage(1));
    dispatch(setSearchQuery(""));
    setIsMenuOpen(false);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className={`nav-container ${darkMode ? "dark-mode" : ""}`}>
      <div className="logo">
        <img src={logo} alt="logo" />
      </div>
      <div className="hamburger-menu" onClick={toggleMenu}>
        ☰
      </div>
      <div className={`nav-menu ${isMenuOpen ? "active" : ""}`}>
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
          {darkMode ? <Sun className="sun" /> : <Moon className="moon" />}
        </label>
      </div>
    </div>
  );
}

export default Navbar;
