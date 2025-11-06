"use server";

import client from "@/lib/db/client";

export const addToMailingList = async (email) => {
  try {
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
