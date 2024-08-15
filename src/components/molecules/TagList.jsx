import Tag from "../Atoms/tag";

const TagList = ({ tags }) => {
  return (
    <div className="flex flex-wrap gap-2 mx-7 my-3">
      {tags.map((tag, index) => (
        <Tag key={index} tag={tag} />
      ))}
    </div>
  );
};

export default TagList;
