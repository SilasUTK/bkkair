"use client";

import { useEffect } from "react";
import { event as trackEvent } from "../lib/gtag";

function getPackageFromHref(href: string) {
  try {
    const url = new URL(href, window.location.origin);
    if (url.pathname !== "/order") return "";
    return url.searchParams.get("package") || "";
  } catch {
    return "";
  }
}

export default function GlobalClickTracking() {
  useEffect(() => {
    function handleClick(clickEvent: MouseEvent) {
      const target = clickEvent.target;
      if (!(target instanceof Element)) return;

      const anchor = target.closest("a[href]");
      if (!(anchor instanceof HTMLAnchorElement)) return;

      const href = anchor.href;
      const packageSlug = getPackageFromHref(href);

      if (packageSlug) {
        trackEvent("package_select", {
          package: packageSlug,
          location: window.location.pathname,
        });
      }

      if (href.startsWith("mailto:")) {
        trackEvent("email_click", {
          email: href.replace("mailto:", "").split("?")[0],
          location: window.location.pathname,
        });
      }

      if (href.startsWith("tel:")) {
        trackEvent("phone_click", {
          phone: href.replace("tel:", "").split("?")[0],
          location: window.location.pathname,
        });
      }

      if (href.includes("line.me") || href.includes("lin.ee")) {
        trackEvent("line_click", {
          location: window.location.pathname,
        });
      }
    }

    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);

  return null;
}
