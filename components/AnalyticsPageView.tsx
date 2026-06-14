"use client";

import { useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import { pageview } from "../lib/gtag";

export default function AnalyticsPageView() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    const queryString = searchParams.toString();
    pageview(queryString ? `${pathname}?${queryString}` : pathname);
  }, [pathname, searchParams]);

  return null;
}
