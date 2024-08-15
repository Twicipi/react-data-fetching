import Tag from "../atoms/Tag";

const TagList = ({ tags }) => {
  return (
    <div className="flex flex-wrap gap-1 mx-2 my-2 sm:mx-7 sm:my-3">
      {tags.map((tag, index) => (
        <Tag key={index} tag={tag} />
      ))}
    </div>
  );
};

export default TagList;
