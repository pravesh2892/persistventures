import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

function ArticleDetails() {
  const { id } = useParams();
  const { articles } = useSelector((state) => state.news);

  const article = articles.find(
    (item) => item.title.replace(/\s/g, "-") === id
  );

  if (!article) {
    return <div>No article found</div>;
  }

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const options = {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
      hour12: true,
    };
    return date.toLocaleString(undefined, options);
  };

  return (
    <div className="article-details">
      <h1>{article.title}</h1>
      <img src={article.urlToImage} alt={article.title} />
      <p>{article.content}</p>
      <p>Author: {article.author}</p>
      <p>Published At: {formatDate(article.publishedAt)}</p>
      <p>Source: {article.source.name}</p>
      <a href={article.url} target="_blank" rel="noopener noreferrer">
        Read More
      </a>
    </div>
  );
}

export default ArticleDetails;
