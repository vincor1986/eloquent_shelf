const { default: SectionTitle } = require("../ui/SectionTitle");
const { default: SummaryCard } = require("./SummaryCard");

import { Book } from "@/types/book";

type Props = {
  title: string;
  desc?: string;
  items: Book[];
}


const HorizontalListView = ({ title, desc, items }: Props) => {
  return (
    <>
      <SectionTitle title={title} desc={desc} />
      <div className="flex overflow-x-auto gap-4 py-4 px-2">
        {items.map((item) => (
          <SummaryCard key={item._id} {...item} />
        ))}
      </div>
    </>
  );
};

export default HorizontalListView;
