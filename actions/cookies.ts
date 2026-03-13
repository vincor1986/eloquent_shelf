"use server";

import { cookies } from "next/headers";

type Preferences = {
  essential: true;
  analytics: boolean;
  marketing: boolean;
  functional: boolean;
}

export const setCookieConsent = async (preferences: Preferences): Promise<void> => {
  (await cookies()).set({
    name: "_cookieConsent",
    value: JSON.stringify(preferences),
    maxAge: 60 * 60 * 24 * 180, // 6 months
    path: "/",
  });
};

export const getCookieConsent = async (): Promise<Preferences | null> => {
  const consent = (await cookies()).get("_cookieConsent")?.value;
  return consent ? JSON.parse(consent) : null;
};
