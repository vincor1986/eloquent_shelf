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

export const fetchSummariesByCategory = async (category) => {
  const query = `*[_type == "summary" && $category in categories]`;

  try {
    const summaries = await client.fetch(query, { category });
    return { success: true, data: summaries };
  } catch (error) {
    console.error("Error fetching summary by category:", category, error);
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
