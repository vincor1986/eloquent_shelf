"use server";

import client from "@/lib/cms/client";

import { Book } from "@/types/book";

type SummaryResults = Promise<{ success: boolean, data?: Book[], error?: any }>;

export const fetchSummariesWithQuery = async (query: string, limit: boolean | number = false): SummaryResults => {
  try {
    let summaries: Book[] = await client.fetch(query);

    if (typeof limit === "number" && summaries.length > limit) {
      summaries = summaries.sort(() => Math.random() - 0.5).slice(0, limit);
    }

    return { success: true, data: summaries };
  } catch (error: any) {
    console.error("Error fetching summaries:", error);
    return { success: false, error: error };
  }
};

export const fetchSummaryWithSlug = async (slug: string): Promise<{ success: boolean, data?: Book, error?: any }> => {
  const query = `*[_type == "summary" && slug == $slug][0]`;

  try {
    const summary: Book = await client.fetch(query, { slug });
    return { success: true, data: summary };
  } catch (error: any) {
    console.error("Error fetching summary by slug:", slug, error);
    return { success: false, error: error };
  }
};

export const fetchSummariesByCategory = async (categorySlug: string): Promise<{ success: boolean, data?: Book[], catName?: string, error?: any }> => {
  try {
    const initialQuery = `*[_type == "summary"]`;
    const allSummaries: Book[] = await client.fetch(initialQuery);

    const allCategories = Array.from(
      new Set(
        allSummaries.reduce((acc, summary): string[] => {
          return [...acc, ...summary.categories];
        }, [])
      )
    );

    const categoryObj: { [key: string]: string } = {};

    allCategories.forEach((cat) => {
      categoryObj[cat.toLowerCase().replace(/\s+/g, "-")] = cat;
    });

    const summaries = allSummaries.filter((summary) =>
      summary.categories.includes(categoryObj[categorySlug])
    );

    return {
      success: true,
      data: summaries,
      catName: categoryObj[categorySlug],
    };
  } catch (error: any) {
    console.error("Error fetching summary by category:", categorySlug, error);
    return { success: false, error: error };
  }
};

export const fetchSummariesByAuthor = async (author: string): SummaryResults => {
  const query = `*[_type == "summary" && $author in author]`;

  try {
    const summaries: Book[] = await client.fetch(query, { author });
    return { success: true, data: summaries };
  } catch (error: any) {
    console.error("Error fetching summary by author:", author, error);
    return { success: false, error: error };
  }
};

export const fetchHomepageFeatured = async (): Promise<{ success: boolean, data?: Book, error?: any }> => {
  const query = `*[_type == "summary" && homepage_featured == true][0]`;

  try {
    const summary: Book = await client.fetch(query);
    return { success: true, data: summary };
  } catch (error: any) {
    console.error("Error fetching homepage featured summary:", error);
    return { success: false, error: error };
  }
};

export const fetchSummariesBySearchTerm = async (searchTerm: string): SummaryResults => {
  const query = `*[_type == "summary" && (title match $searchTerm || author[] match $searchTerm || categories[] match $searchTerm || tags[] match $searchTerm)]`;

  try {
    const summaries: Book[] = await client.fetch(query, {
      searchTerm: `*${searchTerm}*`,
    });

    return { success: true, data: summaries };
  } catch (error: any) {
    console.error("Error searching summaries by query:", searchTerm, error);
    return { success: false, error: error };
  }
};

export const fetchAllCategories = async (): Promise<{ success: boolean, data?: { [key: string]: number }, error?: any }> => {
  const query = `*[_type == "summary"]{ categories }`;

  try {
    const categories: Book[] = await client.fetch(query);
    const allCats = categories.flatMap((obj) => obj.categories);

    const catObj: { [key: string]: number } = {};

    allCats.forEach((cat) => {
      if (!catObj[cat]) {
        catObj[cat] = allCats.filter((category) => category === cat).length;
      }
    });

    return { success: true, data: catObj };
  } catch (error: any) {
    console.error("Error fetching all categories:", error);
    return { success: false, error: error };
  }
};

export const fetchByBookmarks = async (bookmarkIds: string[]): SummaryResults => {
  const query = `*[_type == "summary" && _id in $bookmarkIds]`;

  if (bookmarkIds.length === 0) {
    return { success: true, data: [] };
  }

  try {
    const summaries: Book[] = await client.fetch(query, { bookmarkIds });
    return { success: true, data: summaries };
  } catch (error: any) {
    console.error("Error fetching summaries by bookmarks:", error);
    return { success: false, error: error };
  }
};
