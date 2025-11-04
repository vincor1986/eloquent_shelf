"use server";

import { cookies } from "next/headers";

export const getUserRegion = async () => {
  const cookieStore = await cookies();
  const region = cookieStore.get("user-region")?.value || "US";
  return region;
};
