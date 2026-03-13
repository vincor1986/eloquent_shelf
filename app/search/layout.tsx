import { Metadata } from "@/types/seo";

export const metadata: Metadata = {
  title: "Eloquent Shelf | Search",
  description:
    "Search Eloquent Shelf's extensive collection of curated non-fiction book summaries and recommendations to find your next great read.",
  metadataBase: new URL(`https://www.eloquentshelf.com`),
  alternates: {
    canonical: "https://www.eloquentshelf.com/search",
  },
};

const SearchLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <>{children}</>;
};

export default SearchLayout;
