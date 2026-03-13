import { Search } from "lucide-react";
import React from "react";

type Props = {
  query: string;
  setQuery: React.Dispatch<React.SetStateAction<string>>;
};

const SearchBar = ({ query, setQuery }: Props) => {
  return (
    <div className="w-full flex items-center justify-center my-8">
      <input
        className="relative border border-light-gold py-2 px-4 min-w-[350px] rounded-lg text-sm text-primary focus:outline-none focus:ring-2 focus:ring-light-gold focus:border-transparent"
        type="text"
        placeholder="search by title, author, topic or keyword..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      ></input>
      <Search className="relative right-8 text-primary" />
    </div>
  );
};

export default SearchBar;
