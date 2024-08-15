import Text from "../atoms/text";
import TagList from "../molecules/tagList";

const ArticleCard = ({ title, body, tags, reactions }) => {
  return (
    <div className="my-5 w-1/2 rounded-xl bg-gradient-to-tr from-gray-500 from-20% via-gray-600 via-30% to-gray-700 to-90%">
      <Text size="large" additionalClasses="font-bold ml-7 mt-7">{title}</Text>
      <TagList tags={tags} />
      <div className="mt-4 ml-7 w-40">
        <Text size="small" additionalClasses="bg-gray-800 text-gray-200 px-2 py-1 rounded-full">
          Likes: {reactions?.likes || 0}
        </Text>
        <Text size="small" additionalClasses="bg-gradient-to-br from-red-600 via-red-800 to-red-900 text-gray-200 mt-2 px-2 py-1 rounded-full">
          Dislikes: {reactions?.dislikes || 0}
        </Text>
      </div>
      <Text size="medium" additionalClasses="w-3/4 m-7">{body}</Text>
    </div>
  );
};

export default ArticleCard;
