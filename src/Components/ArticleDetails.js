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

  return (
    <div className="article-details">
      <h1>{article.title}</h1>
      <img src={article.urlToImage} alt={article.title} />
      <p>{article.content}</p>
      <a href={article.url} target="_blank" rel="noopener noreferrer">
        Read More
      </a>
    </div>
  );
}

export default ArticleDetails;
