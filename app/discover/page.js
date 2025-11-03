"use client";

import { useState } from "react";

import DiscoverForm from "@/components/discover/DiscoverForm";
import SectionTitle from "@/components/ui/SectionTitle";

import defaultDiscoverData from "@/data/defaultDIscoverData";

const DiscoverPage = () => {
  const [formData, setFormData] = useState(defaultDiscoverData);
  const [results, setResults] = useState([]);

  return (
    <section className="px-4">
      <SectionTitle
        title="Discover the Perfect Non-Fiction Read"
        desc="Use our AI-driven recommendations to find your next favorite book - or the perfect thoughtful gift for someone you care about."
      />
      <DiscoverForm
        formData={formData}
        setFormData={setFormData}
        results={results}
        setResults={setResults}
      />
    </section>
  );
};

export default DiscoverPage;
