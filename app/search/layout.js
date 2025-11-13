export const metadata = {
  title: "Eloquent Shelf | Search",
  description:
    "Search Eloquent Shelf's extensive collection of curated non-fiction book summaries and recommendations to find your next great read.",
  metadataBase: new URL(`https://www.eloquentshelf.com`),
  alternates: {
    canonical: "/search",
  },
};

const SearchLayout = ({ children }) => {
  return <>{children}</>;
};

export default SearchLayout;
