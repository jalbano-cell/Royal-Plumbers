import { regions, allAreaSlugs } from "./site-config";

export { regions, allAreaSlugs };

export function getAreaBySlug(slug: string) {
  return allAreaSlugs.find((area) => area.slug === slug);
}
