import Link from "next/link";

const Tag = ({ text }) => {
  const slug = text.toLowerCase().replace(/\s+/g, "-");

  return (
    <Link href={`/topics/${slug}`}>
      <button className="rounded-full px-2.5 py-1 bg-primary/80 text-white text-xs hover:bg-primary/70 transition-colors duration-300 cursor-pointer">
        {text.toLowerCase()}
      </button>
    </Link>
  );
};

const SummaryTagList = ({ tagsArr }) => {
  return (
    <div className="flex flex-wrap gap-1 mt-6 lg:mt-0">
      {tagsArr.map((tag) => (
        <Tag key={tag} text={tag} />
      ))}
    </div>
  );
};

export default SummaryTagList;
