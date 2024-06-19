import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeFavorite } from "../utils/favoritesSlice";

function FavoritesList() {
  const dispatch = useDispatch();
  const { favoriteArticles } = useSelector((state) => state.favorites);

  const handleRemoveFavorite = (article) => {
    dispatch(removeFavorite(article.url));
  };

  return (
    <div className="article-list">
      <h2>Favorite Articles</h2>
      {favoriteArticles.length > 0 ? (
        favoriteArticles.map((article) => (
          <div className="article-item" key={article.url}>
            <h3>{article.title}</h3>
            <img src={article.urlToImage} alt={article.title} />
            <p>{article.description}</p>

            <button
              className="remove-btn"
              onClick={() => handleRemoveFavorite(article)}
            >
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
