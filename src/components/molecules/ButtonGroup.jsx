import Button from "../atoms/Button";

const ButtonGroup = ({ count, onPrevClick, onNextClick }) => {
  return (
    <div className="flex flex-col gap-2 w-full px-2 sm:px-0 sm:flex-row sm:gap-3">
      <p className="text-lg sm:text-xl font-extrabold underline text-center sm:text-left">Page: {count}</p>
      <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
        <Button
          onClick={onPrevClick}
          disabled={count === 1}
          additionalClasses={count === 1 ? "opacity-50 cursor-not-allowed" : ""}
        >
          Prev Page
        </Button>
        <Button onClick={onNextClick}>Next Page</Button>
      </div>
    </div>
  );
};

export default ButtonGroup;
