"use server";

import { cookies } from "next/headers";

export const getUserRegion = async () => {
  const cookieStore = await cookies();
  const region = cookieStore.get("user-region")?.value || "US";
  return region;
};

export const submitContactForm = async (formData) => {
  const CONTACT_FORM_URL = process.env.CONTACT_FORM_URL;

  try {
    const response = await fetch(CONTACT_FORM_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    if (!response.ok) {
      throw new Error("Failed to submit contact form");
    }

    return { success: true };
  } catch (error) {
    console.log("Error submitting contact form:", error);
    return { success: false, error: error.message };
  }
};
