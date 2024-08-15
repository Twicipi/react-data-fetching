import Button from "../atoms/Button";

const ButtonGroup = ({ count, onPrevClick, onNextClick }) => {
  return (
    <div className="flex gap-3">
      <p className="text-xl font-extrabold underline">Page: {count}</p>
      <Button onClick={onPrevClick} disabled={count === 1} additionalClasses={count === 1 ? "opacity-50 cursor-not-allowed" : ""}>
        Prev Page
      </Button>
      <Button onClick={onNextClick}>Next Page</Button>
    </div>
  );
};

export default ButtonGroup;
