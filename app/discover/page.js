"use client";

import { useState, useEffect } from "react";
import { Telescope } from "lucide-react";

import DiscoverForm from "@/components/discover/DiscoverForm";
import SectionTitle from "@/components/ui/SectionTitle";

import defaultDiscoverData from "@/data/defaultDIscoverData";

import aiSymbol from "@/public/images/icons/ai.png";
import Image from "next/image";

const DiscoverPage = () => {
  const [formData, setFormData] = useState(defaultDiscoverData);
  const [results, setResults] = useState([]);

  useEffect(() => {
    setResults([]);
  }, [formData]);

  return (
    <section className="px-4">
      <div className="w-min rounded-full mx-auto p-3 flex items-center justify-center -mb-12">
        <Telescope className="relative z-15 w-10 h-10 text-primary fill-white" />
        <div className="relative z-10 -ml-3.75 -top-4 bg-primary w-13 h-13 rounded-full ">
          <Image
            src={aiSymbol}
            alt="Stars in sky"
            className="absolute top-1.5 right-1.5 h-8 w-8"
          />
        </div>
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
