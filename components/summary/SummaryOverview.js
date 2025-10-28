import TitleSection from "@/components/ui/SectionTitle";

const SummaryOverview = ({ title, summary }) => {
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
