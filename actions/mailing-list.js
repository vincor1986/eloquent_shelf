"use server";

import client from "@/lib/db/client";

export const addToMailingList = async (email, token) => {
  try {
    const params = {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: new URLSearchParams({
        secret: process.env.RECAPTCHA_SECRET_KEY,
        response: token,
      }),
    };

    const res = await fetch(
      "https://www.google.com/recaptcha/api/siteverify",
      params
    );

    const { success } = await res.json();

    if (!success) {
      return { success: false, error: "ReCaptcha verification failed" };
    }

    const { error } = await client.from("mailing-list").insert([{ email }]);

    if (error) {
      throw new Error(error.message);
    }

    return { success: true };
  } catch (error) {
    console.error("Error adding to mailing list:", error);
    return { success: false, error: error.message };
  }
};
