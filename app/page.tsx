import Hero from "@/components/homepage-hero/Hero";
import ExploreTopics from "@/components/explore/ExploreTopics";
import Quote from "@/components/homepage-hero/Quote";
import Newsletter from "@/components/newsletter/Newsletter";
import HorizontalListView from "@/components/list-view/HorizontalListView";

import { fetchSummariesWithQuery, fetchHomepageFeatured } from "@/actions/cms";
import HomepageSearch from "@/components/homepage-hero/HomepageSearch";
import { Book } from "@/types/book";

const Home = async () => {

  const [mainData, featuredData] = await Promise.all([
    fetchSummariesWithQuery("*[rating > 4.3]", 12),
    fetchHomepageFeatured(),
  ])

  const { error, data: summaries } = mainData;
  const { data: featuredSummary } = featuredData;

  const emptySummarryArr: Book[] = [];

  const summaryData = summaries && summaries.length ? summaries.filter((item) => item.cover_image) : emptySummarryArr;

  return (
    <div className="">
      <HomepageSearch />
      <Quote />
      <Hero featuredSummary={featuredSummary || null} />
      {summaries && summaries.length && !error ? (
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
