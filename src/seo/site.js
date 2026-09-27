export const SITE_URL = "https://tucalmapsicologia.com";
export const SITE_NAME = "tuCalma Psicología";
export const DEFAULT_OG_IMAGE = `${SITE_URL}/assets/img/placeholder/1113x510.jpg`;

export function canonicalUrl(path) {
  return `${SITE_URL}${path === "/" ? "/" : path}`;
}
