import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { addFavorite, removeFavorite } from "../utils/favoritesSlice";
import { fetchNews, setPage } from "../utils/newsSlice";
import { FaHeart, FaRegHeart } from "react-icons/fa";

function NewsList({ handlePageChange }) {
  const dispatch = useDispatch();
  const {
    articles,
    page,
    totalResults,
    isLoading,
    error,
    category,
    searchQuery,
  } = useSelector((state) => state.news);
  const { favoriteArticles } = useSelector((state) => state.favorites);

  useEffect(() => {
    dispatch(fetchNews({ category, page, searchQuery }));
  }, [dispatch, category, page, searchQuery]);

  const totalPages = Math.ceil(totalResults / 10);

  const handleFavoriteToggle = (article) => {
    const isAlreadyFavorite = favoriteArticles.some(
      (fav) => fav.url === article.url
    );
    if (isAlreadyFavorite) {
      dispatch(removeFavorite(article.url));
    } else {
      dispatch(addFavorite(article));
    }
  };

  if (isLoading) {
    return <div className="loading"></div>;
  }

  if (error) {
    return <div className="error">Error: {error}</div>;
  }

  return (
    <div className="article-list">
      <h1>News Articles</h1>
      {articles.map((article) => (
        <div className="article-item" key={article.url}>
          <Link to={`/article/${article.title.replace(/\s/g, "-")}`}>
            <h2>{article.title}</h2>
            <img src={article.urlToImage} alt={article.title} />
            <p>{article.description}</p>
          </Link>
          <button
            className="favorite-btn"
            onClick={() => handleFavoriteToggle(article)}
          >
            {favoriteArticles.some((fav) => fav.url === article.url) ? (
              <>
                <FaHeart /> Remove from Favorites
              </>
            ) : (
              <>
                <FaRegHeart /> Add to Favorites
              </>
            )}
          </button>
        </div>
      ))}
      <div className="pagination">
        <button
          disabled={page === 1}
          onClick={() => dispatch(setPage(page - 1))}
        >
          Previous
        </button>
        <span>Page {page}</span>
        <button
          disabled={page === totalPages}
          onClick={() => dispatch(setPage(page + 1))}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default NewsList;
