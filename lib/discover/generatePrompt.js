const generatePrompt = (formData, existing, region = "UK") => {
  const { forName, forMe, forAge, forInterests, categories } = formData;

  const bookshopRef = region === "UK" ? "uk.bookshop.org" : "bookshop.org";

  return `
        I'm looking for a book for ${forMe ? "me" : forName}. Please can you recommend 2 or 3 books based on the ${forMe ? "my" : "their"} following preferences and details:

        Age: ${forAge || "Not specified"}
        Interests: ${forInterests.join(", ")}
        Preferred Types: ${categories && categories.length > 0 ? categories.join(", ") : "Not specified"}

        Please provide the recommendations in the JSON format specified in the 'collectIdealBookData' tool description.

        It is essential that the "isbn13" field is accurate for each book, and corresponds to the correct book on ${bookshopRef}. Please check this for each book.

        ${existing.length > 0 ? `Please note that the following books have already been recommended and should not be suggested again: ${existing.join(", ")}.` : ""}

        Thank you so much for your help! You are helping to make ${forMe ? "me" : "them"} a happier reader!
    `;
};

export default generatePrompt;
