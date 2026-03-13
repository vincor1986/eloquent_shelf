"use server";

import client from "@/lib/cms/client";

import { Blog } from "@/types/blog";

export const fetchBlogPostBySlug = async (slug: string): Promise<{ data?: Blog,  success: boolean, error?: any }> => {
  const query = `*[_type == "blog" && slug == $slug][0]`;
  try {
    const blogPost: Blog = await client.fetch(query, { slug });

    if (!blogPost) {
      return { success: false, error: "Blog post not found" };
    }

    return { success: true, data: blogPost };
  } catch (error: any) {
    console.error("Error fetching blog post:", error);
    return { success: false, error: error.message };
  }
};

export const fetchAllBlogPosts = async (): Promise<{ success: boolean, data?: Blog[], error?: any }> => {
  const query = `*[_type == "blog"] | order(published_at desc)`;
  try {
    const blogPosts: Blog[] = await client.fetch(query);

    return { success: true, data: blogPosts };
  } catch (error: any) {
    console.error("Error fetching blog posts:", error);
    return { success: false, error: error.message };
  }
};
