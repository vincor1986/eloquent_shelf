"use client";

import { useState, useEffect } from "react";
import { LoaderCircle } from "lucide-react";

import SectionTitle from "@/components/ui/SectionTitle";

import { fetchByBookmarks } from "@/actions/cms";
import useBookmarks from "@/lib/hooks/useBookmarks";
import TextLink from "@/components/ui/TextLink";
import ListGrid from "@/components/list-view/ListGrid";

const BookmarksPage = () => {
  const [summaries, setSummaries] = useState([]);
  const [loading, setLoading] = useState(true);

  const { bookmarks } = useBookmarks();

  useEffect(() => {
    (async () => {
      const { success, data } = await fetchByBookmarks(bookmarks);

      if (success && data.length > 0) {
        setSummaries(data);
      }

      setLoading(false);
    })();
  }, [bookmarks]);

  return (
    <section className="p-4">
      <SectionTitle
        title="Your Bookmarks"
        desc="View your saved book summaries."
      />
      {loading ? (
        <div className="mt-20 flex flex-col gap-2 items-center justify-center">
          <div className="loader">Loading...</div>
          <LoaderCircle className="w-6 h-6 animate-spin text-primary ml-2" />
        </div>
      ) : null}
      {!loading && summaries.length === 0 ? (
        <div className="mt-20 text-center text-primary">
          <p>No bookmarks found.</p>
          <p>
            Visit our <TextLink href="/topics">topics page</TextLink> for
            inspiration or use our <TextLink href="/search">search</TextLink>{" "}
            feature to find new books you'll love.
          </p>
        </div>
      ) : null}
      {!loading && summaries.length > 0 ? (
        <div className="mt-20">
          <ListGrid itemsArr={summaries} />
        </div>
      ) : null}
    </section>
  );
};

export default BookmarksPage;
