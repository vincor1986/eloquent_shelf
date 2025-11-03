"use server";

import generatePrompt from "@/lib/discover/generatePrompt";
import gptRequest from "@/lib/discover/gptRequest";
import fetchExtraData from "@/lib/discover/fetchExtraData";

export const fetchBookRecommendations = async (formData, existing) => {
  const prompt = generatePrompt(formData, existing);

  console.log("PROMPT", prompt);

  try {
    const response = await gptRequest(prompt);
    const { books } = response;

    console.log("BOOKS", books);

    for (let index = 0; index < books.length; index++) {
      const isbn = books[index].isbn13.replace(/[-\s]/g, "");
      const { cover_image, rating, ratings_count, page_count } =
        await fetchExtraData(isbn);

      books[index] = {
        ...books[index],
        cover_image,
        rating,
        ratings_count,
        page_count,
      };
    }

    return { success: true, books };
  } catch (error) {
    console.error("Error fetching book recommendations:", error);
    return { success: false, error };
  }
};
