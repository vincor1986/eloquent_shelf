import { InitialBookResults } from "@/types/ai";
import collectIdealBookData from "./collectIdealBookData";

const AUTH_TOKEN = `Bearer ${process.env.OPENAI_API_KEY}`;

const gptRequest = async (prompt: string): Promise<InitialBookResults> => {
  try {
    const response = await fetch(`https://api.openai.com/v1/chat/completions`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: AUTH_TOKEN,
      },
      body: JSON.stringify({
        messages: [{ role: "user", content: prompt }],
        model: "gpt-5-mini-2025-08-07",
        tools: [collectIdealBookData],
        tool_choice: {
          type: "function",
          function: { name: "collectIdealBookData" },
        },
      }),
    });

    const data = await response.json();

    const toolCall = data.choices[0]?.message?.tool_calls[0];

    if (toolCall && toolCall.function) {
      const res = JSON.parse(toolCall.function.arguments);

      if (!res.success)
        console.log("GPT-5 reported failure! COULD NOT RECOMMEND BOOKS");

      return res.success ? res : { success: false };
    } else {
      return { success: false };
    }
  } catch (error) {
    console.error("Error in gptRequest:", error);
    throw new Error("Failed to process GPT-5 request");
  }
};

export default gptRequest;
