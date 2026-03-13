import { Clock, BookOpenCheck, CircleGauge } from "lucide-react";

import PanelCard from "./PanelCard";

type Props = {
  reading_difficulty: "beginner" | "intermediate" | "advanced";
  page_count: number | "Unknown";
  read_time_minutes?: number | "Unknown";
}

const SummaryPanel = ({
  reading_difficulty,
  page_count,
  read_time_minutes,
}: Props) => {
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
        value={
          typeof read_time_minutes === "string"
            ? "Unknown"
            : "≈ " + read_time_minutes + " mins"
        }
        Icon={Clock}
      />
    </div>
  );
};

export default SummaryPanel;
