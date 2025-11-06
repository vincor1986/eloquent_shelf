"use client";

import { useState } from "react";
import { Search } from "lucide-react";
import { useRouter } from "next/navigation";

const HomepageSearch = () => {
  const [query, setQuery] = useState("");
  const router = useRouter();

  const q = query.trim();

  const handleSearch = () => {
    if (q) {
      router.push(`/search?q=${encodeURIComponent(q)}`);
    }
  };

  return (
    <div className="mx-auto flex items-center justify-center max-w-9/10 gap-0.75">
      <div className="flex items-center justify-center my-8">
        <input
          className="relative border border-light-gold py-2 px-4 min-w-[250px] lg:min-w-[350px] rounded-l-lg text-sm text-primary focus:outline-none focus:ring-2 focus:ring-light-gold focus:border-transparent"
          type="text"
          placeholder="search by title, author, topic or keyword..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSearch()}
        ></input>
        <button
          className="h-9.5 p-2 pr-3 bg-primary rounded-r-full text-white cursor-pointer hover:bg-secondary transition-colors duration-300"
          onClick={handleSearch}
          disabled={!q}
          aria-label="Search"
        >
          <Search className="text-white" />
        </button>
      </div>
    </div>
  );
};

export default HomepageSearch;
