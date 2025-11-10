"use server";

import generatePrompt from "@/lib/discover/generatePrompt";
import gptRequest from "@/lib/discover/gptRequest";
import fetchExtraData from "@/lib/discover/fetchExtraData";
import gptBlurbRequest from "@/lib/discover/gptBlurbRequest";
import generateBlurbPrompt from "@/lib/discover/generateBlurbPrompt";
import estReadTime from "@/lib/discover/estReadTime";

export const fetchBookRecommendations = async (formData, existing) => {
  const { forMe, forName, forInterests } = formData;

  const prompt = generatePrompt(formData, existing);

  try {
    const response = await gptRequest(prompt);
    const { books } = response;

    const blurbPromises = books.map((book) => {
      const blurbPrompt = generateBlurbPrompt(
        book.title,
        book.author,
        forInterests,
        forMe,
        forName
      );
      return gptBlurbRequest(blurbPrompt);
    });

    const blurbs = await Promise.all(blurbPromises);

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
        blurb: blurbs[index],
        read_time_minutes: estReadTime(
          page_count,
          books[index].reading_difficulty
        ),
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
