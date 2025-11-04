"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { Bookmark } from "lucide-react";

import RecommendationCard from "./RecommendationCard";

import { fetchBookRecommendations } from "@/actions/ai";

import readingOwl from "@/public/images/gifs/owl-reading.gif";
import GiftCardAdvert from "./GiftCardAdvert";

const ResultsContainer = ({ formData, results, setResults }) => {
  const [loading, setLoading] = useState(true);

  const fetchRecommendations = async () => {
    setLoading(true);
    const existing = results.map((book) => `${book.title} by ${book.author}`);
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
              <h3 className="w-full bg-primary text-center text-2xl text-white font-medium mb-12 py-3 rounded-xs">
                Recommended for {formData.forMe ? "you" : formData.forName}
                <Bookmark className="inline-block ml-2 mb-1" />
              </h3>
            ) : null}
            {results.map((book, index) => {
              return (
                <div key={`${book.title}-${index}`}>
                  <RecommendationCard key={book.title} {...book} />
                  {index < results.length - 1 ? (
                    <hr className="my-12 border-zinc-300" />
                  ) : null}
                </div>
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
          <div className="mt-8 py-8 flex w-full flex-col items-center justify-center bg-white text-primary">
            <div className="relative w-60 h-60 flex items-center justify-center rounded-full overflow-hidden">
              <Image src={readingOwl} alt="Owl mascot reading" className="" />
              <div className="absolute h-40 w-40 top-1/2 left-1/2 -translate-1/2 border-6 border-primary rounded-full ring-40 ring-white" />
            </div>
            <p>
              We're searching for {results.length > 0 ? "more" : "the"} perfect
              books.
            </p>
            <p>This may take up to a minute...</p>
          </div>
        </>
      ) : null}
      {!formData.forMe ? <GiftCardAdvert /> : null}
    </>
  );
};

export default ResultsContainer;
