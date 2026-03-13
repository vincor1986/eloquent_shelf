import { DiscoverFormData } from "@/types/ai";


const generatePrompt = (formData: DiscoverFormData, existing: string[]): string => {
  const { forName, forMe, forAge, forInterests, categories } = formData;

  return `
        I'm looking for a non-fiction book for ${forMe ? "me" : forName}. The book must be in the non-fiction genre. Please can you recommend 2 or 3 books based on the ${forMe ? "my" : "their"} following preferences and details:

        Age: ${forAge || "Not specified"}
        Interests: ${forInterests.join(", ")}
        Preferred Types: ${categories && categories.length > 0 ? categories.join(", ") : "Not specified"}

        Please provide the recommendations in the JSON format specified in the 'collectIdealBookData' tool description.

        ${existing.length > 0 ? `Please note that the following books have already been recommended and should not be suggested again: \n${existing.join("\n")}.` : ""}

        Thank you so much for your help! You are helping to make ${forMe ? "me" : "them"} a happier reader!
    `;
};

export default generatePrompt;
