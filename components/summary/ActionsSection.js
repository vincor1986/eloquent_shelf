"use client";

import Link from "next/link";

import { Bookmark, Flag } from "lucide-react";
import useBookmarks from "@/lib/hooks/useBookmarks";

const ActionsSection = ({ slug, id }) => {
  const { bookmarks, toggleBookmark } = useBookmarks();
  const isBookmarked = bookmarks.includes(id);

  return (
    <div className="absolute top-10 right-4 flex gap-2 text-primary">
      <Bookmark
        className={`w-5 h-5 cursor-pointer ${isBookmarked ? "fill-forest" : ""}`}
        title="Add to Bookmarks"
        onClick={() => toggleBookmark(id)}
      />
      <Link href={`/contact?slug=${slug}&subject=inaccuracy`}>
        <Flag className={`w-5 h-5 cursor-pointer`} title="Report Inaccuracy" />
      </Link>
    </div>
  );
};

export default ActionsSection;
