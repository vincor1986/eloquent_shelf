"use client";

import React, { useState } from "react";

import { ArrowBigLeft } from "lucide-react";

import RecipientName from "./RecipientName";
import Age from "./Age";
import Interests from "./Interests";
import Categories from "./Categories";
import Progress from "./Progress";
import ResultsContainer from "./ResultsContainer";
import RecipientSelect from "./RecipientSelect";

import { DiscoverFormData, BookData } from "@/types/ai";

type Props = {
  formData: DiscoverFormData;
  setFormData: React.Dispatch<React.SetStateAction<DiscoverFormData>>;
  results: BookData[];
  setResults: React.Dispatch<React.SetStateAction<BookData[]>>;
}

const DiscoverForm = ({ formData, setFormData, results, setResults }: Props) => {
  const [formIndex, setFormIndex] = useState(0);

  const FORM_STEPS = [
    <RecipientSelect
      key="recipient-select"
      formData={formData}
      setFormData={setFormData}
      setFormIndex={setFormIndex}
    />,
    <RecipientName
      key="recipient-name"
      formData={formData}
      setFormData={setFormData}
      setFormIndex={setFormIndex}
    />,
    <Age
      key="recipient-age"
      formData={formData}
      setFormData={setFormData}
      setFormIndex={setFormIndex}
    />,
    <Interests
      key="recipient-interests"
      formData={formData}
      setFormData={setFormData}
      setFormIndex={setFormIndex}
    />,
    <Categories
      key="recipient-categories"
      formData={formData}
      setFormData={setFormData}
      setFormIndex={setFormIndex}
      resetResults={() => setResults([])}
    />,
    <ResultsContainer
      key="results-container"
      formData={formData}
      results={results}
      setResults={setResults}
    />,
  ];

  const goBack = () => {
    if (formIndex > 0) setFormIndex(formIndex - 1);
  };

  return (
    <div className="p-4">
      {formIndex > 0 ? (
        <div
          onClick={goBack}
          className="flex gap-1 text-primary cursor-pointer mb-4"
        >
          <button disabled={formIndex === 0}>
            <ArrowBigLeft className="text-primary" />
          </button>
          <p>Back</p>
        </div>
      ) : null}
      <div className={`${formIndex === 5 ? "" : "max-w-[600px] mx-auto"}`}>
        {FORM_STEPS[formIndex]}
      </div>
      <Progress formIndex={formIndex} />
    </div>
  );
};

export default DiscoverForm;
