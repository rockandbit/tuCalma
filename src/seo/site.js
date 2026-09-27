export const SITE_URL = "https://tucalmapsicologia.com";
export const SITE_NAME = "tuCalma Psicología";
export const DEFAULT_OG_IMAGE = `${SITE_URL}/og-tucalma.jpg`;

export function absoluteUrl(path) {
  if (!path) return DEFAULT_OG_IMAGE;
  return path.startsWith("http") ? path : `${SITE_URL}${path}`;
}

export function canonicalUrl(path) {
  return `${SITE_URL}${path === "/" ? "/" : path}`;
}
