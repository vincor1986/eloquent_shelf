"use client";

import { useState } from "react";

import { ArrowBigLeft } from "lucide-react";

import RecipientRadio from "./RecipientRadio";
import RecipientName from "./RecipientName";
import Age from "./Age";
import Interests from "./Interests";
import Categories from "./Categories";
import Progress from "./Prgoress";
import ResultsContainer from "./ResultsContainer";

const DiscoverForm = ({ formData, setFormData, results, setResults }) => {
  const [formIndex, setFormIndex] = useState(0);

  const FORM_STEPS = [
    <RecipientRadio
      key="recipient-radio"
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
    />,
    <ResultsContainer
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
      <div
        onClick={goBack}
        className="flex gap-1 text-primary cursor-pointer mb-4"
      >
        <button disabled={formIndex === 0}>
          <ArrowBigLeft className="text-primary" />
        </button>
        <p>Back</p>
      </div>
      {FORM_STEPS[formIndex]}
      <Progress formIndex={formIndex} />
    </div>
  );
};

export default DiscoverForm;
