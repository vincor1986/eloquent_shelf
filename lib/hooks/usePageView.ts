"use client";

import { usePathname, useSearchParams } from "next/navigation";
import { useEffect } from "react";

export default function usePageView() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    if (!pathname) return;

    const url = `${pathname}${searchParams.toString() ? `?${searchParams}` : ""}`;

    // @ts-expect-error
    window.gtag?.("config", process.env.NEXT_PUBLIC_GA_ID, { page_path: url });
  }, [pathname, searchParams]);
}
