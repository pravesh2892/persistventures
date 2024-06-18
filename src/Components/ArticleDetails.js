import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function ArticleDetails() {
  const { id } = useParams();
  const [article, setArticle] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchArticle = async () => {
      try {
        const response = await fetch(
          `https://newsapi.org/v2/everything?domains=${id}&apiKey=YOUR_API_KEY`
        );
        const data = await response.json();
        if (!response.ok) {
          throw new Error("Failed to fetch article details");
        }
        setArticle(data.articles[0]);
        setIsLoading(false);
      } catch (err) {
        setError(err.message);
        setIsLoading(false);
      }
    };

    fetchArticle();
  }, [id]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

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
