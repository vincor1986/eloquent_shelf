import SectionTitle from "../ui/SectionTitle";

import TOPICS from "@/data/topics";
import TopicCard from "./TopicCard";

const ExploreTopics = () => {
  return (
    <section className="w-full">
      <SectionTitle
        title="Explore Your Fascinations"
        desc="Start your journey by exploring curated collections in science, philosophy, AI, and beyond."
      />
      <div className="grid gap-4 grid-cols-2 md:grid-cols-4">
        {TOPICS.map((t) => (
          <TopicCard key={t.topic} {...t} />
        ))}
      </div>
    </section>
  );
};

export default ExploreTopics;
