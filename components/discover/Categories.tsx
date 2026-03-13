"use client";

import { useState } from "react";
import ContinueButton from "./ContinueButton";
import Tickbox from "./Tickbox";
import { DiscoverFormData } from "@/types/ai";

type Props = {
  formData: DiscoverFormData;
  setFormData: (data: DiscoverFormData) => void;
  setFormIndex: (index: number) => void;
  resetResults: () => void;
}

type Category = "Classics" | "Modern" | "Lesser Known" | "Must Reads";

const CAT_LIST: Category[]= ["Classics", "Modern", "Lesser Known", "Must Reads"];

const Categories = ({ formData, setFormData, setFormIndex, resetResults }: Props) => {
  const [selectedCategories, setSelectedCategories] = useState<Category[]>(
    formData.categories || []
  );

  const toggleCat = (category: Category) => {
    const exists = selectedCategories.includes(category);
    let updatedCategories: Category[] = [];
    if (exists) {
      updatedCategories = selectedCategories.filter((cat) => cat !== category);
    } else {
      updatedCategories = [...selectedCategories, category];
    }

    setSelectedCategories(updatedCategories);
  };

  const handleContinue = () => {
    setFormData({ ...formData, categories: selectedCategories });
    resetResults();
    setFormIndex(5);
  };

  return (
    <div className="w-full p-4 border border-zinc-200 rounded-md text-primary">
      <h2 className="text-xl font-medium mb-2">
        What type of non-fiction books are you interested in looking at?
      </h2>
      <p className="mb-4 italic">
        These categories will inform which type of books are recommended. Select
        one or more, as many as you like.
      </p>
      <div className="flex flex-wrap gap-4 w-full">
        {CAT_LIST.map((category) => (
          <label key={category} className="flex items-center w-2/5">
            <Tickbox
              checked={selectedCategories.includes(category)}
              onChange={() => toggleCat(category)}
            />
            <p className="ml-4 ">{category}</p>
          </label>
        ))}
      </div>
      <ContinueButton
        onClick={handleContinue}
        disabled={selectedCategories.length === 0}
      />
    </div>
  );
};

export default Categories;
