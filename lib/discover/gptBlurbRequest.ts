const AUTH_TOKEN = `Bearer ${process.env.OPENAI_API_KEY}`;

const gptBlurbRequest = async (prompt: string): Promise<string | false | void> => {
  try {
    const response = await fetch(`https://api.openai.com/v1/chat/completions`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: AUTH_TOKEN,
      },
      body: JSON.stringify({
        messages: [{ role: "user", content: prompt }],
        model: "gpt-4o-mini",
      }),
    });

    const data = await response.json();

    const blurb = data.choices[0]?.message?.content;

    return blurb ? blurb.trim() : false;
  } catch (error) {
    console.error("Error in gptBlurbRequest:", error);
    throw new Error("Failed to process GPT-4o-mini request");
  }
};

export default gptBlurbRequest;
