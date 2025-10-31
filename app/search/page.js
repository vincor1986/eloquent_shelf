"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";

import SectionTitle from "@/components/ui/SectionTitle";
import { fetchSummariesBySearchTerm } from "@/actions/cms";
import ListGrid from "@/components/list-view/ListGrid";
import SearchBar from "@/components/search/SearchBar";
import SortContainer from "@/components/search/SortContainer";
import CatFilter from "@/components/search/CatFilter";
import RatingFilter from "@/components/search/RatingFilter";

const SearchPage = ({}) => {
  const params = useSearchParams();
  const q = params.get("q") || "";

  const [query, setQuery] = useState(q);
  const [results, setResults] = useState([]);
  const [sortMode, setSortMode] = useState("relevance");
  const [allCats, setAllCats] = useState([]);
  const [catFilters, setCatFilters] = useState([]);
  const [ratingFilter, setRatingFilter] = useState(0);
  const [catCounts, setCatCounts] = useState({});
  const [ratingCounts, setRatingCounts] = useState({});

  const handleSearch = async () => {
    const { error, data: summaries } = await fetchSummariesBySearchTerm(query);
    setResults(summaries);
    setSortMode("relevance");

    const allCatsUnset = summaries.reduce(
      (acc, summary) => [...acc, ...summary.categories],
      []
    );

    const allCategories = Array.from(new Set(allCatsUnset)).sort((a, b) =>
      a.localeCompare(b)
    );

    setAllCats(allCategories);

    const counts = {};
    allCategories.forEach((cat) => {
      counts[cat] = summaries.filter((summary) =>
        summary.categories.includes(cat)
      ).length;
    });

    setCatCounts(counts);

    const ratingsCounts = {};
    [1, 2, 3, 4, 5].forEach((rating) => {
      ratingsCounts[rating] = summaries.filter(
        (summary) => summary.rating >= rating
      ).length;
    });

    setRatingCounts(ratingsCounts);
  };

  useEffect(() => {
    if (query) {
      handleSearch(query);
    }
  }, []);

  useEffect(() => {
    let timer = null;
    if (query) {
      const timer = setTimeout(() => {
        handleSearch(query);
      }, 1000);
    }
    return () => clearTimeout(timer);
  }, [query]);

  const handleSortAZ = () => {
    setResults((prev) => {
      return [...prev].sort((a, b) => a.title.localeCompare(b.title));
    });
    setSortMode("AZ");
  };
  const handleSortZA = () => {
    setResults((prev) => {
      return [...prev].sort((a, b) => b.title.localeCompare(a.title));
    });
    setSortMode("ZA");
  };

  const handleSortRatingAsc = () => {
    setResults((prev) => {
      return [...prev].sort((a, b) => a.rating - b.rating);
    });
    setSortMode("Rating Asc");
  };

  const handleSortRatingDesc = () => {
    setResults((prev) => {
      return [...prev].sort((a, b) => b.rating - a.rating);
    });
    setSortMode("Rating Desc");
  };

  const clearFilters = (type) => {
    if (type === "category") {
      setCatFilters([]);
    } else if (type === "rating") {
      setRatingFilter(0);
    } else if (type === "all") {
      setCatFilters([]);
      setRatingFilter(0);
    }
  };

  const filteredSummaries = results.filter((summary) => {
    const catFilter = catFilters.length > 0;
    const ratingPass = summary.rating >= ratingFilter;
    const catPass = catFilter
      ? catFilters.some((cat) => summary.categories.includes(cat))
      : true;
    return catPass && ratingPass;
  });

  return (
    <section className="p4 -mt-16">
      <SectionTitle
        title="Search our curated works"
        desc="Search functionality coming soon!"
      />
      <SearchBar query={query} setQuery={setQuery} />
      {results.length ? (
        <>
          <p className="text-zinc-800">
            {filteredSummaries.length} results found
          </p>
          <div className="relative w-full mt-12 pt-2">
            <div className="absolute top-0 left-0 -translate-y-full flex items-center gap-2 z-10">
              <CatFilter
                setCatFilters={setCatFilters}
                allCategories={allCats}
                activeCats={catFilters}
                clear={clearFilters}
                catCounts={catCounts}
              />
              <RatingFilter
                ratingCounts={ratingCounts}
                ratingFilter={ratingFilter}
                setRatingFilter={setRatingFilter}
                clear={clearFilters}
              />
              {catFilters.length > 0 || ratingFilter > 0 ? (
                <p
                  className="relative top-1 ml-1 text-red-950 text-xs"
                  onClick={() => clearFilters("all")}
                >
                  Clear filters
                </p>
              ) : null}
            </div>
            <SortContainer
              sortFunctions={{
                handleSortAZ,
                handleSortZA,
                handleSortRatingAsc,
                handleSortRatingDesc,
              }}
              sortMode={sortMode}
            />
            <ListGrid itemsArr={filteredSummaries} />
          </div>
        </>
      ) : (
        <p>No results found</p>
      )}
    </section>
  );
};

export default SearchPage;
