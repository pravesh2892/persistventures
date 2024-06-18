import React from "react";
import { Link } from "react-router-dom";
import logo from "../Assets/logo.png";

function Navbar({
  handleCategoryChange,
  handleSearchChange,
  handleSearch,
  searchInput,
}) {
  return (
    <div className="nav-container">
      <div className="logo">
        <img src={logo} alt="logo" />
      </div>
      <div className="nav-menu">
        <ul>
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
        />
        <button onClick={handleSearch}>Search</button>
      </div>
      <div className="dark-mode-toggle">Dark Mode</div>
    </div>
  );
}

export default Navbar;
