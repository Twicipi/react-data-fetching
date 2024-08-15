import { useEffect, useState } from "react";
import ArticleTemplate from "../Templates/ArticleTemplate";

function Article() {
  const [count, setCount] = useState(1);
  const [article, setArticle] = useState({ title: "", body: "", tags: [] });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleClick = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const PrevPage = () => {
    setCount((prevCount) => prevCount - 1);
  };

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);

      try {
        const res = await fetch(`https://dummyjson.com/posts/${count}`);
        if (!res.ok) throw new Error("Network response was not ok");
        const data = await res.json();
        setArticle(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [count]);

  return (
    <ArticleTemplate
      count={count}
      article={article}
      onPrevClick={PrevPage}
      onNextClick={handleClick}
      loading={loading}
      error={error}
    />
  );
}

export default Article;
