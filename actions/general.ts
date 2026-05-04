"use server";

import { cookies } from "next/headers";

export const getUserRegion = async (): Promise<string> => {
  const cookieStore = await cookies();
  const region = cookieStore.get("user-region")?.value || "US";
  return region;
};

type RecaptchaResponse = { success: boolean, score: number, action: string, hostname: string };

export const submitContactForm = async (formData: Record<string, any>, token: string): Promise<{ success: boolean, error?: string }> => {
  const CONTACT_FORM_URL = process.env.CONTACT_FORM_URL;

  try {
    const params = {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: new URLSearchParams({
        secret: process.env.RECAPTCHA_SECRET_KEY as string,
        response: token,
      }),
    };

    const res = await fetch(
      "https://www.google.com/recaptcha/api/siteverify",
      params
    );

    const { success, score, action, hostname } : RecaptchaResponse = await res.json();

    console.log("ReCaptcha Response:", { success, score, action, hostname });

    if (!success) return { success: false, error: "Failed ReCaptcha Validation"};
    
    if (score < 0.5 || action !== "contact_form_submit" || hostname !== "www.eloquentshelf.com") {
      return { success: false, error: "ReCaptcha verification failed" };
    }
    const response = await fetch(CONTACT_FORM_URL as string, {
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
  } catch (error: any) {
    console.log("Error submitting contact form:", error);
    return { success: false, error: error.message };
  }
};
