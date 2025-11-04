"use server";

import client from "@/lib/cms/client";

export const fetchSummariesWithQuery = async (query) => {
  try {
    const summaries = await client.fetch(query);
    return { success: true, data: summaries };
  } catch (error) {
    console.error("Error fetching summaries:", error);
    return { success: false, error: error };
  }
};

export const fetchSummaryWithSlug = async (slug) => {
  const query = `*[_type == "summary" && slug == $slug][0]`;

  try {
    const summary = await client.fetch(query, { slug });
    return { success: true, data: summary };
  } catch (error) {
    console.error("Error fetching summary by slug:", slug, error);
    return { success: false, error: error };
  }
};

export const fetchSummariesByCategory = async (categorySlug) => {
  try {
    const initialQuery = `*[_type == "summary"]`;
    const allSummaries = await client.fetch(initialQuery);

    const allCategories = Array.from(
      new Set(
        allSummaries.reduce((acc, summary) => {
          return [...acc, ...summary.categories];
        }, [])
      )
    );

    const categoryObj = {};

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
  } catch (error) {
    console.error("Error fetching summary by category:", categorySlug, error);
    return { success: false, error: error };
  }
};

export const fetchSummariesByAuthor = async (author) => {
  const query = `*[_type == "summary" && $author in author]`;

  try {
    const summaries = await client.fetch(query, { author });
    return { success: true, data: summaries };
  } catch (error) {
    console.error("Error fetching summary by author:", author, error);
    return { success: false, error: error };
  }
};

export const fetchHomepageFeatured = async () => {
  const query = `*[_type == "summary" && homepage_featured == true][0]`;

  try {
    const summary = await client.fetch(query);
    return { success: true, data: summary };
  } catch (error) {
    console.error("Error fetching homepage featured summary:", error);
    return { success: false, error: error };
  }
};

export const fetchSummariesBySearchTerm = async (searchTerm) => {
  const query = `*[_type == "summary" && (title match $searchTerm || author[] match $searchTerm || categories[] match $searchTerm || tags[] match $searchTerm)]`;

  try {
    const summaries = await client.fetch(query, {
      searchTerm: `*${searchTerm}*`,
    });

    return { success: true, data: summaries };
  } catch (error) {
    console.error("Error searching summaries by query:", searchTerm, error);
    return { success: false, error: error };
  }
};

export const fetchAllCategories = async () => {
  const query = `*[_type == "summary"]{ categories }`;

  try {
    const categories = await client.fetch(query);
    const allCats = categories.flatMap((obj) => obj.categories);

    const catObj = {};

    allCats.forEach((cat) => {
      if (!catObj[cat]) {
        catObj[cat] = allCats.filter((category) => category === cat).length;
      }
    });

    return { success: true, data: catObj };
  } catch (error) {
    console.error("Error fetching all categories:", error);
    return { success: false, error: error };
  }
};
