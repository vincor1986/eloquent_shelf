import Hero from "@/components/homepage-hero/Hero";
import ExploreTopics from "@/components/explore/ExploreTopics";
import Quote from "@/components/homepage-hero/Quote";
import Newsletter from "@/components/newsletter/Newsletter";

const Home = () => {
  return (
    <div className="">
      <Quote />
      <Hero />
      <ExploreTopics />
      <Newsletter />
    </div>
  );
};

export default Home;
