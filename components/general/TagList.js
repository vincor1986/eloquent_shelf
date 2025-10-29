import Link from "next/link";

const Tag = ({ text }) => {
  const slug = text.toLowerCase().replace(/\s+/g, "-");
  const nonLink = text.substring(text.length - 4) === "more";

  return (
    <Link href={nonLink ? "#" : `/topics/${slug}`} className="h-6">
      <button className="rounded-full px-2 py-0.5 bg-primary text-white text-xs hover:bg-primary/80 transition-colors duration-300">
        {text.toLowerCase()}
      </button>
    </Link>
  );
};

const TagList = ({ tags }) => {
  return (
    <div className="flex flex-wrap gap-1">
      {tags.map((tag) => (
        <Tag key={tag} text={tag} />
      ))}
    </div>
  );
};

export default TagList;
