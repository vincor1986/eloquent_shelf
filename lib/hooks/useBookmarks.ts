"use client";

import { useState, useEffect } from "react";

const useBookmarks = () => {
  const [bookmarks, setBookmarks] = useState<string[]>([]);

  useEffect(() => {
    const storedBookmarks: string[] = JSON.parse(localStorage.getItem("bookmarks") || "[]") || [];
    setBookmarks(storedBookmarks);
  }, []);

  const toggleBookmark = (id: string) => {
    let updatedBookmarks;
    if (bookmarks.includes(id)) {
      updatedBookmarks = bookmarks.filter((bookmarkId) => bookmarkId !== id);
    } else {
      updatedBookmarks = [...bookmarks, id];
    }
    setBookmarks(updatedBookmarks);
    localStorage.setItem("bookmarks", JSON.stringify(updatedBookmarks));
  };

  return { bookmarks, toggleBookmark };
};

export default useBookmarks;
