import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { removeFavorite } from "../utils/favoritesSlice";

function FavoritesList({ favoriteArticles }) {
  const dispatch = useDispatch();

  const handleRemoveFavorite = (article) => {
    dispatch(removeFavorite(article.url));
  };

  return (
    <div className="favorite-list">
      <h1>Favorite Articles</h1>
      {favoriteArticles.map((article) => (
        <div className="favorite-item" key={article.url}>
          <div className="favorite-content">
            <Link to={`/article/${article.url}`}>
              <h2>{article.title}</h2>
              <img src={article.urlToImage} alt={article.title} />
              <p>{article.description}</p>
            </Link>
          </div>
          <button onClick={() => handleRemoveFavorite(article)}>
            Remove from Favorites
          </button>
        </div>
      ))}
    </div>
  );
}

export default FavoritesList;
