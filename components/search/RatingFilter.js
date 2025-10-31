"use client";

import { useState, setUseState } from "react";
import { Star } from "lucide-react";

const ratings = [5, 4, 3, 2, 1];

const RatingFilter = ({
  ratingCounts,
  ratingFilter,
  setRatingFilter,
  clear,
}) => {
  const [showModal, setShowModal] = useState(true);

  const toggleRating = (rating) => {
    if (ratingFilter === rating) {
      setRatingFilter(0);
    } else {
      setRatingFilter(rating);
    }
  };

  const mutated = ratingFilter > 0;

  return (
    <div
      className={`relative px-3 py-1 bg-primary rounded-full text-xs text-white cursor-pointer ${mutated ? "ring-2 ring-light-gold" : null}`}
      id="button"
      onClick={(e) => e.target.id === "button" && setShowModal((prev) => !prev)}
    >
      Rating
      {showModal ? (
        <div className="absolute top-0 left-0 translate-y-7 mb-2 w-60 bg-white border border-light-gold rounded-md shadow-lg p-4 z-10">
          <div className="flex flex-col gap-2">
            {ratings.map((rating) => {
              return (
                <div
                  className={`grid grid-cols-8 items-center cursor-pointer`}
                  key={rating}
                  onClick={() => toggleRating(rating)}
                >
                  <label className="col-span-6 text-sm text-primary pr-1 select-none flex items-center ">
                    {Array.from({ length: rating }, (_, i) => (
                      <span key={i}>
                        <Star
                          className={`text-gold ${ratingFilter <= rating ? "fill-light-gold" : ""}`}
                        />
                      </span>
                    ))}
                  </label>
                  <p className="col-span-2 text-sm text-primary">
                    {rating} stars{" "}
                    <span className="italic">
                      ({ratingCounts[rating] || 0})
                    </span>
                  </p>
                </div>
              );
            })}
          </div>
          <p
            className="w-full text-left mt-2 text-red-950"
            onClick={() => clear("rating")}
          >
            Clear filters
          </p>
        </div>
      ) : null}
    </div>
  );
};

export default RatingFilter;
