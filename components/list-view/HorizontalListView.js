const { default: SectionTitle } = require("../ui/SectionTitle");
const { default: SummaryCard } = require("./SummaryCard");

const HorizontalListView = ({ title, desc, items }) => {
  return (
    <>
      <SectionTitle title={title} desc={desc} />
      <div className="grid grid-rows-1 grid-flow-col overflow-x-auto gap-4 py-4 px-2">
        {items.map((item) => (
          <SummaryCard key={item._id} {...item} />
        ))}
      </div>
    </>
  );
};

export default HorizontalListView;
