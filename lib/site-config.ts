export const siteConfig = {
  name: "Royal Plumbing",
  shortName: "Royal",
  tagline: "Premium plumbing, for the GTA",
  description:
    "Licensed, insured plumbers serving Toronto and the GTA for over 20 years — 24/7 emergency response, upfront pricing, and a written satisfaction guarantee.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.royalplumbing.ca",
  phone: "416-537-0038",
  phoneHref: "tel:+14165370038",
  emergencyPhone: "416-537-0038",
  address: {
    street: "614 Dufferin Street",
    city: "Toronto",
    region: "ON",
    postalCode: "M6K 2A9",
    country: "CA",
  },
  yearsInBusiness: 20,
  foundedYear: 2006,
  bookOnlineHref: "/contact",
  social: {
    google: undefined as string | undefined,
  },
} as const;

export const regions = [
  {
    name: "Toronto",
    cities: [
      "Central Toronto",
      "East York",
      "Etobicoke",
      "York",
      "North York",
      "Scarborough",
    ],
  },
  {
    name: "Peel Region",
    cities: ["Brampton", "Mississauga", "Caledon"],
  },
  {
    name: "York Region",
    cities: [
      "Vaughan",
      "Richmond Hill",
      "Markham",
      "Aurora",
      "Newmarket",
      "Whitchurch-Stouffville",
      "East Gwillimbury",
      "Georgina",
      "King",
    ],
  },
  {
    name: "Halton Region",
    cities: ["Burlington", "Oakville", "Milton", "Halton Hills"],
  },
  {
    name: "Durham Region",
    cities: [
      "Pickering",
      "Oshawa",
      "Ajax",
      "Whitby",
      "Clarington",
      "Uxbridge",
      "Scugog",
      "Brock",
    ],
  },
] as const;

export const allAreaSlugs = regions.flatMap((region) =>
  region.cities.map((city) => ({
    region: region.name,
    city,
    slug: city.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, ""),
  })),
);
