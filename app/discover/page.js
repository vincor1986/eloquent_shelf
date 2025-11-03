"use client";

import { useState, useEffect } from "react";
import { Telescope } from "lucide-react";

import DiscoverForm from "@/components/discover/DiscoverForm";
import SectionTitle from "@/components/ui/SectionTitle";

import defaultDiscoverData from "@/data/defaultDIscoverData";

const DiscoverPage = () => {
  const [formData, setFormData] = useState(defaultDiscoverData);
  const [results, setResults] = useState([]);

  useEffect(() => {
    setResults([]);
  }, [formData]);

  return (
    <section className="px-4">
      <div className="w-min rounded-full mx-auto p-3 bg-primary/10 flex items-center justify-center -mb-12">
        <Telescope className="w-10 h-10 text-primary" />
      </div>
      <SectionTitle
        title="Discover the Perfect Non-Fiction Read"
        desc="Use our AI-driven recommendations to find your next favourite book - or the perfect thoughtful gift for someone you care about."
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
