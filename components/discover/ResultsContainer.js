"use client";

import { useState, useEffect } from "react";
import { LoaderCircle, Bookmark } from "lucide-react";

import RecommendationCard from "./RecommendationCard";

import { fetchBookRecommendations } from "@/actions/ai";

const ResultsContainer = ({ formData, results, setResults }) => {
  const [loading, setLoading] = useState(true);

  const fetchRecommendations = async () => {
    setLoading(true);
    const existing = results.map((book) => book.title);
    const { success, books } = await fetchBookRecommendations(
      formData,
      existing
    );
    if (success) {
      setResults((prev) => [...prev, ...books]);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchRecommendations();
  }, []);

  const generateMore = () => {
    fetchRecommendations();
  };

  return (
    <>
      {results.length ? (
        <>
          <div className="w-full">
            {results.length > 0 ? (
              <h3 className="text-primary w-full text-center text-2xl font-medium mb-12">
                Recommended Books
                <Bookmark className="inline-block ml-2 mb-1" />
              </h3>
            ) : null}
            {results.map((book, index) => {
              return (
                <>
                  <RecommendationCard key={book.title} {...book} />
                  {index < results.length - 1 ? (
                    <hr className="my-12 border-zinc-300" />
                  ) : null}
                </>
              );
            })}
          </div>
          <div className="flex w-full justify-center mt-8">
            <button
              className="bg-primary text-white px-6 py-3 rounded-sm cursor-pointer hover:bg-secondary transition-colors duration-300"
              onClick={generateMore}
              disabled={loading}
            >
              {loading ? "Generating..." : "Generate More Recommendations"}
            </button>
          </div>
        </>
      ) : null}
      {loading ? (
        <>
          <div className="mt-16 py-8 flex w-full flex-col items-center justify-center bg-secondary text-white">
            <p>We're searching for the perfect books.</p>
            <p>Please wait...</p>
            <LoaderCircle className="h-14 w-14 animate-spin text-white mt-4" />
          </div>
        </>
      ) : null}
    </>
  );
};

export default ResultsContainer;
