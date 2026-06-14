export const GA_ID = "G-DF00B3N74J";

type GtagEventParams = Record<string, string | number | boolean | undefined>;

declare global {
  interface Window {
    gtag?: (
      command: "config" | "event",
      targetId: string,
      config?: GtagEventParams
    ) => void;
  }
}

export function pageview(url: string) {
  if (typeof window === "undefined" || !window.gtag) return;

  window.gtag("config", GA_ID, {
    page_path: url,
  });
}

export function event(action: string, params: GtagEventParams = {}) {
  if (typeof window === "undefined" || !window.gtag) return;

  window.gtag("event", action, params);
}
