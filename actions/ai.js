"use server";

import generatePrompt from "@/lib/discover/generatePrompt";
import gptRequest from "@/lib/discover/gptRequest";
import fetchExtraData from "@/lib/discover/fetchExtraData";

export const fetchBookRecommendations = async (formData, existing) => {
  const prompt = generatePrompt(formData, existing);

  try {
    const response = await gptRequest(prompt);
    const { books } = response;

    for (let index = 0; index < books.length; index++) {
      const title = books[index].title;
      const author = books[index].author;
      const {
        cover_image,
        rating,
        ratings_count,
        page_count,
        isbn,
        authorCheckScore,
      } = await fetchExtraData(title, author);

      books[index] = {
        ...books[index],
        cover_image,
        rating,
        ratings_count,
        page_count,
        isbn: authorCheckScore > 0.65 ? isbn : null,
      };
    }

    return {
      success: true,
      books: books.filter((book) => book.isbn !== null),
    };
  } catch (error) {
    console.error("Error fetching book recommendations:", error);
    return { success: false, error };
  }
};
