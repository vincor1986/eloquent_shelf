import { fetchAllCategories } from "@/actions/cms";
import ExploreTopics from "@/components/explore/ExploreTopics";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import SectionTitle from "@/components/ui/SectionTitle";

import alphabetArr from "@/lib/helpers/alphabetArr";
import Link from "next/link";

const TopicItem = ({ catName, count }) => {
  const slug = catName.toLowerCase().replace(/\s+/g, "-");

  return (
    <Link href={`/topics/${slug}`}>
      <div
        key={catName}
        className="bg-secondary p-2 rounded-sm text-white hover:bg-primary transition-colors duration-300 cursor-pointer"
      >
        {catName} ({count})
      </div>
    </Link>
  );
};

export const metadata = {
  title: "Eloquent Shelf | Topics",
  description:
    "Explore our curated non-fiction books by category and topic at Eloquent Shelf.",
};

export const revalidate = 3600; // Revalidate every hour

const TopicSelectPage = async () => {
  const { success, data } = await fetchAllCategories();

  const categories = Object.keys(data);
  const sorted = categories.sort((a, b) => a.localeCompare(b));

  const activeLetters = alphabetArr.filter((letter) =>
    sorted.some((cat) => cat.charAt(0).toUpperCase() === letter)
  );

  return (
    <section className="-mt-8">
      <Breadcrumbs items={[{ label: "Topics", href: "/topics" }]} />
      <ExploreTopics />
      <SectionTitle
        title="Browse by Category"
        desc="Explore our curated non-fiction books by category"
      />
      <div className="lg:p-4">
        <div className="flex w-full max-w-[500px] mx-auto flex-wrap gap-2 justify-center">
          {activeLetters.map((letter) => (
            <Link href={`/topics/#${letter}`} key={letter}>
              <div className="border border-zinc-200 rounded-md flex items-center justify-center cursor-pointer px-3 py-1 hover:bg-zinc-200 transition text-secondary">
                <p>{letter}</p>
              </div>
            </Link>
          ))}
        </div>
        {success &&
          activeLetters.map((letter) => (
            <div
              key={letter}
              id={letter}
              className="text-primary flex flex-col gap-1 border border-zinc-100 rounded-sm p-4 mb-6"
            >
              <h2 className="text-2xl font-semibold mb-4">{letter}</h2>
              {sorted
                .filter((cat) => cat.charAt(0).toUpperCase() === letter)
                .map((cat) => (
                  <TopicItem key={cat} catName={cat} count={data[cat]} />
                ))}
            </div>
          ))}
      </div>
    </section>
  );
};

export default TopicSelectPage;
