import ArticleCard from "../organisms/ArticleCard";
import ButtonGroup from "../molecules/ButtonGroup";

const ArticleTemplate = ({ count, article, onPrevClick, onNextClick, loading, error }) => {
  return (
    <main className="text-white flex flex-col items-center bg-gray-900 h-screen">
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      <ArticleCard {...article} />
      <ButtonGroup count={count} onPrevClick={onPrevClick} onNextClick={onNextClick} />
    </main>
  );
};

export default ArticleTemplate;
