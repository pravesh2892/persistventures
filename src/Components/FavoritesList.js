// FavoritesList.js
import React from "react";
import { useDispatch } from "react-redux";
import { removeFavorite } from "../utils/favoritesSlice";
import { Link } from "react-router-dom";

function FavoritesList({ favoriteArticles }) {
  const dispatch = useDispatch();

  const handleRemoveFavorite = (article) => {
    dispatch(removeFavorite(article.url));
  };

  const getUrlForArticle = (url) => {
    // Remove the protocol and domain from the URL
    const cleanUrl = url.replace(/^.*?\/\/[^/]*\//, "");
    return cleanUrl.replace(/\//g, "-");
  };

  return (
    <div>
      <h2>Favorite Articles</h2>
      {favoriteArticles.length > 0 ? (
        favoriteArticles.map((article) => (
          <div key={article.url}>
            <Link to={`/article/${getUrlForArticle(article.url)}`}>
              <h3>{article.title}</h3>
              <p>{article.description}</p>
            </Link>
            <button onClick={() => handleRemoveFavorite(article)}>
              Remove from Favorites
            </button>
          </div>
        ))
      ) : (
        <p>No favorite articles found.</p>
      )}
    </div>
  );
}

export default FavoritesList;
