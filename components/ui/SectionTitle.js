import FullStop from "./FullStop";

const SectionTitle = ({ title, desc }) => {
  return (
    <div className="w-full pt-16 pb-4">
      <h2 className="relative text-2xl text-primary">
        {title}
        <FullStop />
      </h2>
      <div className="h-1.25 bg-gold w-full" />
      <p className="my-2 text-zinc-500 italic">{desc}</p>
    </div>
  );
};

export default SectionTitle;
