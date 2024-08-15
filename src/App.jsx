import { useEffect, useState } from "react";

function App() {
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
      setError(null); // Reset error state

      try {
        const res = await fetch(`https://dummyjson.com/posts/${count}`);
        if (!res.ok) throw new Error("Network response was not ok");
        const data = await res.json();
        console.log(data);
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
    <main className="text-white flex flex-col items-center bg-gray-900 h-screen">
      <header>
        <h1>Hello Worlds</h1>
      </header>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}

      <div className="my-5 w-1/2 rounded-xl bg-gradient-to-tr from-gray-500 from-20% via-gray-600 via-30% to-gray-700 to-90%">
        <h1 className="text-4xl font-bold ml-7 mt-7">{article.title}</h1>
        <div className="flex flex-wrap gap-2 mx-7 my-3">
          {Array.isArray(article.tags) ? (
            article.tags.map((tag, index) => (
              <span
                key={index}
                className="bg-gray-800 text-gray-200 px-2 py-1 rounded-full"
              >
                {tag}
              </span>
            ))
          ) : (
            <p>No tags available</p>
          )}
        </div>
        <div className="mt-4 ml-7 w-40 ">
          <p className="bg-gray-800 text-gray-200 px-2 py-1 rounded-full">
            Likes: {article.reactions?.likes || 0}
          </p>
          <p className="bg-gradient-to-br from-red-600 via-red-800 to-red-900  text-gray-200 mt-2 px-2 py-1 rounded-full">
            Dislikes: {article.reactions?.dislikes || 0}
          </p>
        </div>
        <p className="w-3/4 m-7 text-2xl">{article.body}</p>
      </div>

      <div className="flex gap-3">
        <p className="text-xl font-extrabold underline">Page: {count}</p>
        <button
          className="rounded-full transition-colors w-40 bg-gray-500 hover:bg-gradient-to-tr from-gray-500 from-20% via-gray-600 via-30% to-gray-700 to-90% hover:border-4"
          onClick={PrevPage}
        >
          Prev Page
        </button>
        <button
          className="rounded-full transition-colors w-40 bg-gray-500 hover:bg-gradient-to-tr from-gray-500 from-20% via-gray-600 via-30% to-gray-700 to-90% hover:border-4"
          onClick={handleClick}
        >
          Next Page
        </button>
      </div>
    </main>
  );
}

export default App;
