import TitleSection from "@/components/ui/SectionTitle";
import { Book } from "@/types/book";

type Props = {
  title: string;
  summary: string;
}

const SummaryOverview = ({ title, summary }: Props) => {
  const summaryTextArr = summary
    .split("\n")
    .filter((para) => para.trim() !== "");

  return (
    <section className="relative px-4 text-primary">
      <TitleSection title={`About ${title}`} />
      {summaryTextArr.map((para, index) => (
        <p className="mb-3" key={index}>
          {para}
        </p>
      ))}
    </section>
  );
};

export default SummaryOverview;
