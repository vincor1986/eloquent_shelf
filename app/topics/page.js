import ExploreTopics from "@/components/explore/ExploreTopics";
import Breadcrumbs from "@/components/ui/Breadcrumbs";

const TopicSelectPage = () => {
  return (
    <section className="-mt-8">
      <Breadcrumbs items={[{ label: "Topics", href: "/topics" }]} />
      <ExploreTopics />
    </section>
  );
};

export default TopicSelectPage;
