import type { MetadataRoute } from "next";
import { siteConfig, allAreaSlugs } from "@/lib/site-config";
import { services } from "@/lib/services";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "/about",
    "/services",
    "/areas",
    "/portfolio",
    "/reviews",
    "/guarantee",
    "/faq",
    "/contact",
    "/privacy",
    "/terms",
  ];

  const now = new Date();

  return [
    ...staticRoutes.map((path) => ({
      url: `${siteConfig.url}${path}`,
      lastModified: now,
    })),
    ...services.map((service) => ({
      url: `${siteConfig.url}/services/${service.slug}`,
      lastModified: now,
    })),
    ...allAreaSlugs.map((area) => ({
      url: `${siteConfig.url}/areas/${area.slug}`,
      lastModified: now,
    })),
  ];
}
