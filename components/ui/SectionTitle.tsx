import FullStop from "./FullStop";

type Props = {
  title: string;
  desc?: string;
}

const SectionTitle = ({ title, desc }: Props) => {
  return (
    <div className="w-full pt-16 pb-4">
      <h2 className="relative text-2xl text-primary">
        {title}
        <FullStop />
      </h2>
      <div className="h-1.25 bg-gold w-full" />
      {desc ? <p className="my-2 text-zinc-500 italic">{desc}</p> : null}
    </div>
  );
};

export default SectionTitle;
