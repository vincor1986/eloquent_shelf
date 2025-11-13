"use server";

import client from "@/lib/cms/client";

export const fetchBlogPostBySlug = async (slug) => {
  const query = `*[_type == "blog" && slug == $slug][0]`;
  try {
    const blogPost = await client.fetch(query, { slug });

    if (!blogPost) {
      return { success: false, error: "Blog post not found" };
    }

    return { success: true, data: blogPost };
  } catch (error) {
    console.error("Error fetching blog post:", error);
    return { success: false, error: error.message };
  }
};

export const fetchAllBlogPosts = async () => {
  const query = `*[_type == "blog"] | order(published_at desc)`;
  try {
    const blogPosts = await client.fetch(query);

    return { success: true, data: blogPosts };
  } catch (error) {
    console.error("Error fetching blog posts:", error);
    return { success: false, error: error.message };
  }
};
