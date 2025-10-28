const SummaryHeader = ({ title, subtitle, description, author, publisher }) => {
  return (
    <div className="flex flex-col w-full">
      <div className="mb-2">
        <h2 className="inline text-2xl text-primary mb-2">{title}</h2>
        {subtitle ? <h2 className="inline text-2xl font-bold">:</h2> : null}
        {subtitle && (
          <h3 className="ml-2 inline text-2xl text-secondary mb-4">
            {subtitle}
          </h3>
        )}
      </div>
      <p className="text-zinc-700 italic text-sm mb-4">{description}</p>
      <div className="text-zinc-500">
        <p>Author: {author}</p>
        <p>Publisher: {publisher}</p>
      </div>
    </div>
  );
};

export default SummaryHeader;
