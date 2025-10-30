"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";

import SectionTitle from "@/components/ui/SectionTitle";
import { fetchSummariesBySearchTerm } from "@/actions/cms";
import ListGrid from "@/components/list-view/ListGrid";
import SearchBar from "@/components/search/SearchBar";

const SearchPage = ({}) => {
  const params = useSearchParams();
  const q = params.get("q") || "";

  const [query, setQuery] = useState(q);
  const [results, setQueryResults] = useState([]);

  const handleSearch = async () => {
    const { error, data: summaries } = await fetchSummariesBySearchTerm(query);
    setQueryResults(summaries);
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

  return (
    <section className="p4 -mt-16">
      <SectionTitle
        title="Search our curated works"
        desc="Search functionality coming soon!"
      />
      <SearchBar query={query} setQuery={setQuery} />
      {results.length ? (
        <ListGrid itemsArr={results} />
      ) : (
        <p>No results found</p>
      )}
    </section>
  );
};

export default SearchPage;
