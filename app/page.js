import Hero from "@/components/homepage-hero/Hero";
import ExploreTopics from "@/components/explore/ExploreTopics";
import Quote from "@/components/homepage-hero/Quote";
import Newsletter from "@/components/newsletter/Newsletter";
import HorizontalListView from "@/components/list-view/HorizontalListView";

import { fetchSummariesWithQuery, fetchHomepageFeatured } from "@/actions/cms";
import HomepageSearch from "@/components/homepage-hero/HomepageSearch";

const Home = async () => {
  const { error, data: summaries } =
    await fetchSummariesWithQuery("*[rating > 4.3]");

  const { error: featuredError, data: featuredSummary } =
    await fetchHomepageFeatured();

  const summaryData = summaries.filter((item) => item.cover_image);

  return (
    <div className="">
      <HomepageSearch />
      <Quote />
      <Hero featuredSummary={featuredSummary} />
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
