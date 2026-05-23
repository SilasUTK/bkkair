const DEFAULT_API_BASE_URL = "http://localhost:5001";

function trimTrailingSlashes(value: string) {
  return value.replace(/\/+$/, "");
}

function stripTerminalApiSegment(value: string) {
  return value.replace(/\/api$/i, "");
}

export const API_BASE_URL = stripTerminalApiSegment(
  trimTrailingSlashes(process.env.NEXT_PUBLIC_API_URL || DEFAULT_API_BASE_URL)
);

export function apiUrl(path: string) {
  if (/^https?:\/\//i.test(path)) {
    return path;
  }

  const cleanPath = path.startsWith("/") ? path : `/${path}`;
  return `${API_BASE_URL}${cleanPath}`;
}
