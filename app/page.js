import Hero from "@/components/homepage-hero/Hero";
import ExploreTopics from "@/components/explore/ExploreTopics";
import Quote from "@/components/homepage-hero/Quote";
import Newsletter from "@/components/newsletter/Newsletter";
import { fetchSummariesWithQuery } from "@/actions/cms";
import HorizontalListView from "@/components/list-view/HorizontalListView";

const Home = async () => {
  const { error, data: summaries } =
    await fetchSummariesWithQuery("*[rating > 4]");

  const summaryData = summaries.filter((item) => item.cover_image);

  return (
    <div className="">
      <Quote />
      <Hero />
      {summaries.length && !error ? (
        <HorizontalListView
          title="Our Top Picks"
          desc="See our summaries on some of the most beloved non-fiction books out there."
          items={summaryData}
        />
      ) : null}
      <ExploreTopics />
      <Newsletter />
    </div>
  );
};

export default Home;
