import formatList from "@/lib/helpers/formatList";

const SummaryHeader = ({
  title,
  subtitle,
  description,
  author,
  publisher,
  published_date,
}) => {
  return (
    <div className="flex flex-col w-full">
      <div className="mb-2">
        <h2 className="inline wrap-anywhere text-2xl text-primary mb-2">
          {title}
          {subtitle ? ":" : null}
        </h2>
        {subtitle && (
          <h3 className="ml-2 wrap-anywhere inline text-2xl text-secondary mb-4">
            {subtitle}
          </h3>
        )}
      </div>
      <p className="text-zinc-700 italic text-sm mb-4">{description}</p>
      <div className="text-zinc-500">
        <p>Author: {formatList(author)}</p>
        {publisher !== "Unknown" ? <p>Publisher: {publisher}</p> : null}
        <p>
          Published:{" "}
          {new Date(published_date).toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
          })}
        </p>
      </div>
    </div>
  );
};

export default SummaryHeader;
