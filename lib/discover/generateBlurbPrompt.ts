const generateBlurbPrompt = (title: string, author: string, interests: string[], forMe: boolean, forName: string): string => {
  return `Please create a short blurb about the non-fiction book: ${title} by ${author}. Please ensure the blurb is no more than 100 words, designed to entice the reader. End with a sentence describing why this book is a great fit for ${forMe ? "me" : forName} considering that ${forMe ? "I" : "they"} like ${interests.join(", ")}.`;
};

export default generateBlurbPrompt;
