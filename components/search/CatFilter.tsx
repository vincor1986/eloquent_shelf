"use client";

import React, { useState } from "react";
import Tickbox from "./Tickbox";
import ModalBackdrop from "../ui/ModalBackdrop";

type Props = {
  allCategories: string[];
  setCatFilters: React.Dispatch<React.SetStateAction<string[]>>;
  activeCats: string[];
  clear: () => void;
  catCounts: Record<string, number>;
}

const CatFilter = ({
  allCategories,
  setCatFilters,
  activeCats,
  clear,
  catCounts,
}: Props) => {
  const [showModal, setShowModal] = useState(false);

  const mutated = activeCats.length > 0;

  const toggleCategory = (cat: string) => {
    const updatedCats = activeCats.includes(cat)
      ? activeCats.filter((c) => c !== cat)
      : [...activeCats, cat];
    setCatFilters(updatedCats);
  };

  return (
    <>
      {showModal ? (
        <ModalBackdrop closeModal={() => setShowModal(false)} />
      ) : null}
      <button
        className={`relative px-3 py-1 bg-primary rounded-full text-xs text-white cursor-pointer ${mutated ? "ring-2 ring-light-gold" : null}`}
        id="button"
        onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
          const target = e.target as HTMLElement;
          target.id === "button" && setShowModal((prev) => !prev)

        }
        }
      >
        Categories
        {showModal ? (
          <>
            <div className="absolute top-0 left-0 translate-y-7 mb-2 w-60 bg-white border border-light-gold rounded-md shadow-lg p-4 z-40">
              <div className="flex flex-col gap-2">
                {allCategories.map((cat) => {
                  return (
                    <Tickbox
                      label={cat}
                      key={cat}
                      checked={activeCats.includes(cat)}
                      onChange={() => toggleCategory(cat)}
                      count={catCounts[cat] || 0}
                    />
                  );
                })}
                <p
                  className="w-full text-right mt-2 text-red-950 cursor-pointer"
                  onClick={clear}
                >
                  Clear filters
                </p>
              </div>
            </div>
          </>
        ) : null}
      </button>
    </>
  );
};

export default CatFilter;
