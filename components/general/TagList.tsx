import Link from "next/link";

const Tag: React.FC<{ text: string }> = ({ text }) => {
  const slug = text.toLowerCase().replace(/\s+/g, "-");
  const nonLink = text.substring(text.length - 4) === "more";

  return (
    <Link
      href={nonLink ? "#" : `/topics/${slug}`}
      className="h-6 rounded-full px-3 py-1 flex items-center bg-primary text-white text-xs hover:bg-primary/80 transition-colors duration-300"
    >
      {text.toLowerCase()}
    </Link>
  );
};

type TagListProps = {
  tags: string[];
}

const TagList = ({ tags }: TagListProps) => {
  return (
    <div className="mt-2 flex flex-wrap gap-2">
      {tags.map((tag) => (
        <Tag key={tag} text={tag} />
      ))}
    </div>
  );
};

export default TagList;
