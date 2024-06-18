import React from "react";

import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function NewsList({ handlePageChange }) {
  const { articles, page, totalResults, isLoading, error } = useSelector(
    (state) => state.news
  );

  const totalPages = Math.ceil(totalResults / 10);

  if (isLoading) {
    return <div className="loading">Loading...</div>;
  }

  if (error) {
    return <div className="error">Error: {error}</div>;
  }

  return (
    <div className="article-list">
      <h1>News Articles</h1>
      {articles.map((article) => (
        <div className="article-item" key={article.url}>
          <Link to={`/article/${article.url}`}>
            <h2>{article.title}</h2>
            <img src={article.urlToImage} alt={article.title} />
            <p>{article.description}</p>
          </Link>
        </div>
      ))}
      <div className="pagination">
        <button
          disabled={page === 1}
          onClick={() => handlePageChange(page - 1)}
        >
          Previous
        </button>
        <span>
          Page {page} of {totalPages}
        </span>
        <button
          disabled={page === totalPages}
          onClick={() => handlePageChange(page + 1)}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default NewsList;
