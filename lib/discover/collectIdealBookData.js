const collectIdealBookData = {
  type: "function",
  strict: true,
  function: {
    name: "collectIdealBookData",
    description:
      "Create a data object for 2 or 3 ideal or well-suited non-fiction books, based around the user's provided preferences and interests. If there is insufficient information to create a meaningful data object, indicate failure. You don't need to match all of the user preferences, just get as close as you can within reason.Please don't recommend the books listed as already recommnded to the user previously.",
    parameters: {
      type: "object",
      properties: {
        success: {
          type: "boolean",
          description:
            "Indicates whether the generation was successful. If you were unable to find relevant books in keeping with the request, please set this to false and leave all other fields empty or as null.",
        },
        books: {
          type: "array",
          description:
            "A list of 4 or 5 ideal non-fiction books tailored to the user's request.",
          items: {
            type: "object",
            properties: {
              title: {
                type: "string",
                description: "The title of the book, including any subtitle.",
              },
              author: {
                type: "string",
                description: "The author of the book.",
              },
              reading_difficulty: {
                type: "string",
                description:
                  "The reading difficulty level of the book. Possible values are 'beginner', 'intermediate', and 'advanced'.",
              },
            },
            required: ["title", "author", "reading_difficulty"],
          },
        },
      },
      required: ["success", "books"],
    },
  },
};

export default collectIdealBookData;
