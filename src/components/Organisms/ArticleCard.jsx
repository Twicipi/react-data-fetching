import Text from "../atoms/Text";
import TagList from "../molecules/TagList";

const ArticleCard = ({ title, body, tags, reactions }) => {
  return (
    <div className="my-3 w-full rounded-xl bg-gradient-to-tr from-gray-500 from-20% via-gray-600 via-30% to-gray-700 to-90% p-2 sm:p-4">
      <Text
        size="large"
        additionalClasses="font-bold ml-2 mt-2 sm:ml-7 sm:mt-7"
      >
        {title}
      </Text>
      <TagList tags={tags} />
      <div className="mt-2 ml-2 sm:ml-7 w-full sm:w-40">
        <Text
          size="small"
          additionalClasses="bg-gray-800 text-gray-200 px-2 py-1 rounded-full"
        >
          Likes: {reactions?.likes || 0}
        </Text>
        <Text
          size="small"
          additionalClasses="bg-gradient-to-br from-red-600 via-red-800 to-red-900 text-gray-200 mt-2 px-2 py-1 rounded-full"
        >
          Dislikes: {reactions?.dislikes || 0}
        </Text>
      </div>
      <Text size="medium" additionalClasses="w-full m-2 sm:w-3/4 sm:m-7">
        {body}
      </Text>
    </div>
  );
};

export default ArticleCard;
