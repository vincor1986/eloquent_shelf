"use server";

import { cookies } from "next/headers";

export const setCookieConsent = async (preferences) => {
  (await cookies()).set({
    name: "_cookieConsent",
    value: JSON.stringify(preferences),
    maxAge: 60 * 60 * 24 * 180, // 6 months
    path: "/",
  });
};

export const getCookieConsent = async () => {
  const consent = (await cookies()).get("_cookieConsent")?.value;
  return consent ? JSON.parse(consent) : null;
};
