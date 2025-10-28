import { Clock, BookOpenCheck, CircleGauge } from "lucide-react";
import PanelCard from "./PanelCard";

const SummaryPanel = ({
  reading_difficulty,
  page_count,
  read_time_minutes,
}) => {
  return (
    <div className="grid grid-cols-3 gap-2 mt-1">
      <PanelCard
        title="DIFFICULTY"
        value={reading_difficulty}
        Icon={CircleGauge}
      />
      <PanelCard title="PAGES" value={page_count} Icon={BookOpenCheck} />
      <PanelCard
        title="READ TIME"
        value={read_time_minutes + " mins"}
        Icon={Clock}
      />
    </div>
  );
};

export default SummaryPanel;
